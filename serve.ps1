param(
    [int]$Port = 8080
)

$rootPath = $PSScriptRoot
if (-not $rootPath) { $rootPath = (Get-Location).Path }

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
$listener.Server.SetSocketOption([System.Net.Sockets.SocketOptionLevel]::Socket, [System.Net.Sockets.SocketOptionName]::ReuseAddress, $true)

try {
    $listener.Start()
} catch {
    Write-Error "Failed to start server on port ${Port}: $($_.Exception.Message)"
    exit 1
}

$localIp = (ipconfig | Select-String "IPv4 Address.*:\s*([0-9\.]+)").Matches.Groups[1].Value
if (-not $localIp) { $localIp = "127.0.0.1" }

Write-Host "=========================================================="
Write-Host " ConfusionCloud Ultra-Fast Server is LIVE"
Write-Host " Localhost: http://localhost:$Port"
Write-Host " LAN IP:    http://${localIp}:$Port"
Write-Host " Serving:   $rootPath"
Write-Host "=========================================================="

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
}

$cache = @{}

# Preload static files into memory for instantaneous response
Get-ChildItem $rootPath -File | ForEach-Object {
    $ext = $_.Extension.ToLower()
    $cType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
    $rawBytes = [System.IO.File]::ReadAllBytes($_.FullName)
    $headerStr = "HTTP/1.1 200 OK`r`n" +
                 "Content-Type: $cType`r`n" +
                 "Content-Length: $($rawBytes.Length)`r`n" +
                 "Access-Control-Allow-Origin: *`r`n" +
                 "Cache-Control: no-cache, no-store, must-revalidate`r`n" +
                 "Connection: close`r`n`r`n"
    $headBytes = [System.Text.Encoding]::ASCII.GetBytes($headerStr)
    $fullBytes = [byte[]]::new($headBytes.Length + $rawBytes.Length)
    [System.Buffer]::BlockCopy($headBytes, 0, $fullBytes, 0, $headBytes.Length)
    [System.Buffer]::BlockCopy($rawBytes, 0, $fullBytes, $headBytes.Length, $rawBytes.Length)

    $cache["/" + $_.Name.ToLower()] = $fullBytes
}
$cache["/"] = $cache["/index.html"]

$notFoundBytes = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 404 Not Found`r`nContent-Length: 0`r`nConnection: close`r`n`r`n")

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $client.NoDelay = $true
        $client.ReceiveTimeout = 2000
        $client.SendTimeout = 2000

        $stream = $client.GetStream()
        $buffer = [byte[]]::new(2048)
        $readCount = $stream.Read($buffer, 0, $buffer.Length)

        if ($readCount -gt 0) {
            $reqText = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $readCount)
            $firstLine = $reqText.Split("`n")[0].Trim()
            $parts = $firstLine.Split(" ")

            if ($parts.Length -ge 2) {
                $reqPath = $parts[1].Split("?")[0].Split("#")[0].ToLower()
                if ($reqPath -eq "" -or $reqPath -eq "/") { $reqPath = "/" }

                if ($cache.ContainsKey($reqPath)) {
                    $resBytes = $cache[$reqPath]
                    $stream.Write($resBytes, 0, $resBytes.Length)
                } else {
                    $stream.Write($notFoundBytes, 0, $notFoundBytes.Length)
                }
            }
        }
        $stream.Flush()
        $client.Client.Shutdown([System.Net.Sockets.SocketShutdown]::Both)
        $client.Close()
    } catch {
        try { $client.Close() } catch {}
    }
}
