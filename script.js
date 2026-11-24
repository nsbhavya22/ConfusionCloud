/**
 * ConfusionCloud – Core Application Engine
 * Single Page Application (SPA), State Management, Educational Modules,
 * Quizzes, Cognitive Games, and LocalStorage Progress Tracking.
 */

(function () {
  'use strict';

  /* ============================================================
     1. EDUCATIONAL CONTENT REPOSITORY (21 LESSONS)
     ============================================================ */
  const CURRICULUM = {
    programming: {
      id: 'programming',
      title: 'Programming',
      tagline: 'Code Fundamentals & Computational Thinking',
      description: 'Master foundational coding concepts from variables and logic to reusable functions and arrays.',
      lessons: [
        {
          id: 'prog-intro',
          title: 'Introduction to Programming',
          readTime: '6 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>At its simplest, <strong>programming</strong> is the art of giving clear, unambiguous instructions to a computer to solve a specific problem. While humans rely on intuition, context, and body language to interpret requests, a computer is a literal-minded calculating machine that requires exact, step-by-step logic.</p>
            <p>Every software application—from mobile messaging apps to flight navigation systems—is built on <strong>algorithms</strong>. An algorithm is simply a well-defined sequence of computational steps that transforms an input into an intended output.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">💡 The Recipe Metaphor</div>
              <div class="metaphor-text">Think of code like an exact baking recipe. If the recipe says "add 2 eggs and whisk for 60 seconds", you get batter. But if you skip step 1 or forget the flour, the recipe fails. Computers follow instructions with zero improvisation.</div>
            </div>
            <p>To communicate with computers, we write in <strong>high-level programming languages</strong> (such as Python or JavaScript). These languages resemble human language and mathematics. A special software tool—called an <strong>interpreter</strong> or <strong>compiler</strong>—then translates our readable code into the binary <code>0</code>s and <code>1</code>s that the computer processor executes directly.</p>
          `,
          example: {
            title: 'script.js — Sequential Execution Flow',
            code: `<span class="syntax-cmt">// 1. Receive input from user or environment</span>
<span class="syntax-kw">const</span> studentName = <span class="syntax-str">"Alex Rivera"</span>;
<span class="syntax-kw">const</span> score = <span class="syntax-num">94</span>;

<span class="syntax-cmt">// 2. Process data using algorithmic logic</span>
<span class="syntax-kw">const</span> hasPassed = score >= <span class="syntax-num">60</span>;

<span class="syntax-cmt">// 3. Emit structured output</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Student: \${studentName} | Status: \${hasPassed ? "PASSED" : "FAILED"}\`</span>);
<span class="syntax-cmt">// Terminal Output: Student: Alex Rivera | Status: PASSED</span>`
          },
          takeaways: [
            'An algorithm is a finite, step-by-step sequence of instructions designed to perform a specific task.',
            'Compilers convert all source code into machine code prior to execution; interpreters read and execute line-by-line.',
            'Computers execute code sequentially from top to bottom unless redirected by control structures.'
          ],
          practice: {
            question: 'Which of the following best defines an algorithm in computer programming?',
            options: [
              'The physical silicon hardware inside a computer processor.',
              'A step-by-step sequence of precise instructions designed to solve a problem.',
              'A collection of colorful graphics and user interface elements.',
              'A permanent error in a computer program that cannot be fixed.'
            ],
            correctIndex: 1,
            explanation: 'An algorithm is a precise, ordered recipe of steps that transforms given inputs into an expected output.'
          }
        },
        {
          id: 'prog-vars',
          title: 'Variables and Data Types',
          readTime: '7 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>When running a program, a computer must temporarily remember numbers, names, user choices, and calculation results in its fast memory (RAM). A <strong>variable</strong> is a named reference pointing to a specific storage location in that memory.</p>
            <p>Every piece of data stored in a variable has a distinct <strong>data type</strong>. The type tells the computer how much memory to allocate and what operations are legally permitted on that value.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">📦 The Labeled Box Metaphor</div>
              <div class="metaphor-text">Imagine a row of storage boxes in a warehouse. Labeling a box "studentAge" and placing the number 18 inside is declaring and assigning a variable. You can change what is inside the box later, but the label stays constant.</div>
            </div>
            <p>The core primitive data types in almost all modern programming languages are:</p>
            <ul>
              <li><strong>Integer:</strong> Whole numbers without decimal fractions (e.g. <code>42</code>, <code>-7</code>).</li>
              <li><strong>Float / Double:</strong> Real numbers with decimal points (e.g. <code>3.1415</code>, <code>98.6</code>).</li>
              <li><strong>String:</strong> Ordered sequences of characters enclosed in quotes (e.g. <code>"ConfusionCloud"</code>).</li>
              <li><strong>Boolean:</strong> A truth value that can only be either <code>true</code> or <code>false</code>.</li>
            </ul>
          `,
          example: {
            title: 'variables.js — Declarations and Types',
            code: `<span class="syntax-cmt">// Integer and Float numeric types</span>
<span class="syntax-kw">let</span> userAge = <span class="syntax-num">20</span>;
<span class="syntax-kw">const</span> gradePointAverage = <span class="syntax-num">3.88</span>;

<span class="syntax-cmt">// String text sequence</span>
<span class="syntax-kw">const</span> platformName = <span class="syntax-str">"ConfusionCloud"</span>;

<span class="syntax-cmt">// Boolean binary state</span>
<span class="syntax-kw">let</span> isVerifiedUser = <span class="syntax-kw">true</span>;

<span class="syntax-cmt">// Inspect types at runtime</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-kw">typeof</span> userAge);             <span class="syntax-cmt">// "number"</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-kw">typeof</span> platformName);        <span class="syntax-cmt">// "string"</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-kw">typeof</span> isVerifiedUser);       <span class="syntax-cmt">// "boolean"</span>`
          },
          takeaways: [
            'Variables allow programs to store, retrieve, and manipulate dynamic data in memory.',
            'Primitives (Number, String, Boolean) are the basic atomic building blocks of all computational data.',
            'In dynamically typed languages, types are bound to values; in statically typed languages, types are bound to variables.'
          ],
          practice: {
            question: 'What data type should you choose to store whether a student has submitted their homework?',
            options: [
              'Integer',
              'Float',
              'Boolean',
              'Array'
            ],
            correctIndex: 2,
            explanation: 'A Boolean is the ideal type because homework submission is a binary truth state: either true (submitted) or false (not submitted).'
          }
        },
        {
          id: 'prog-conditionals',
          title: 'Conditional Statements',
          readTime: '8 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>Real-world decisions are rarely one-size-fits-all. A self-driving car must stop <em>if</em> a traffic light is red, proceed <em>if</em> green, and slow down <em>if</em> amber. In computer programming, <strong>conditional statements</strong> allow programs to make decisions and take different execution branches based on truth conditions.</p>
            <p>Conditionals evaluate an expression to a Boolean (<code>true</code> or <code>false</code>). If the condition holds true, the associated block of code is executed; otherwise, the computer skips to the next alternative branch.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🔀 The Railroad Switch Metaphor</div>
              <div class="metaphor-text">A train moving along tracks arrives at a railroad switch. If the lever is set to 'North', the train diverts to Track A. Otherwise, it continues along Track B. The train never travels down both tracks simultaneously.</div>
            </div>
            <p>You can combine conditions using logical operators:</p>
            <ul>
              <li><strong>AND (<code>&&</code>):</strong> True only if <em>both</em> conditions are true.</li>
              <li><strong>OR (<code>||</code>):</strong> True if <em>at least one</em> condition is true.</li>
              <li><strong>NOT (<code>!</code>):</strong> Reverses the truth value of a condition.</li>
            </ul>
          `,
          example: {
            title: 'grading.js — Multi-branch Control Flow',
            code: `<span class="syntax-kw">function</span> <span class="syntax-fn">assignLetterGrade</span>(score) {
  <span class="syntax-kw">if</span> (score >= <span class="syntax-num">90</span>) {
    <span class="syntax-kw">return</span> <span class="syntax-str">"A - Outstanding"</span>;
  } <span class="syntax-kw">else if</span> (score >= <span class="syntax-num">80</span>) {
    <span class="syntax-kw">return</span> <span class="syntax-str">"B - Very Good"</span>;
  } <span class="syntax-kw">else if</span> (score >= <span class="syntax-num">70</span>) {
    <span class="syntax-kw">return</span> <span class="syntax-str">"C - Satisfactory"</span>;
  } <span class="syntax-kw">else</span> {
    <span class="syntax-kw">return</span> <span class="syntax-str">"Needs Review"</span>;
  }
}

<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-fn">assignLetterGrade</span>(<span class="syntax-num">85</span>)); <span class="syntax-cmt">// "B - Very Good"</span>`
          },
          takeaways: [
            'Conditionals (if, else if, else) introduce branching logic into what would otherwise be linear code.',
            'Comparison operators include ==, === (strict equality), !=, !==, >, <, >=, and <=.',
            'Short-circuit evaluation stops evaluating an expression as soon as the outcome is mathematically determined.'
          ],
          practice: {
            question: 'What is the evaluated result of the logical expression: (true && false) || (true && !false)?',
            options: [
              'false',
              'true',
              'undefined',
              'NaN'
            ],
            correctIndex: 1,
            explanation: '(true && false) evaluates to false. (true && !false) evaluates to (true && true) which is true. Finally, false || true results in true.'
          }
        },
        {
          id: 'prog-loops',
          title: 'Loops',
          readTime: '7 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>One of the chief reasons computers were invented was to eliminate human drudgery by executing repetitive tasks with relentless accuracy. A <strong>loop</strong> is a programming construct that repeats a block of instructions as long as a specified condition remains true.</p>
            <p>Without loops, printing the numbers 1 through 10,000 would require typing 10,000 separate lines of code. With a loop, it requires only three lines.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🔄 The Track Lap Metaphor</div>
              <div class="metaphor-text">A track coach tells a runner: "Run laps around the field while lapCount < 5." Each time around, lapCount increases by 1. When lapCount hits 5, the runner stops. This is the essence of loop condition and termination.</div>
            </div>
            <p>The two most common loop structures are:</p>
            <ul>
              <li><strong><code>for</code> loop:</strong> Ideal when you know beforehand exactly how many times the loop should run (e.g., iterate 10 times).</li>
              <li><strong><code>while</code> loop:</strong> Ideal when repetition depends on an external condition that may change unpredictably (e.g., keep reading until the file ends).</li>
            </ul>
          `,
          example: {
            title: 'loops.js — Counting and Accumulation',
            code: `<span class="syntax-cmt">// Calculate the sum of numbers from 1 to 5</span>
<span class="syntax-kw">let</span> totalSum = <span class="syntax-num">0</span>;

<span class="syntax-kw">for</span> (<span class="syntax-kw">let</span> i = <span class="syntax-num">1</span>; i <= <span class="syntax-num">5</span>; i++) {
  totalSum += i;
  <span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Step \${i}: running total = \${totalSum}\`</span>);
}

<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Final Sum = \${totalSum}\`</span>); <span class="syntax-cmt">// 15</span>`
          },
          takeaways: [
            'Loops must include a mechanism that progresses toward the termination condition to prevent infinite loops.',
            'A for loop consists of initialization, condition check, and an increment/decrement step.',
            'Off-by-one errors occur when a loop executes one time too many or one time too few.'
          ],
          practice: {
            question: 'How many times will a loop with the header "for (let i = 0; i < 4; i++)" execute its body?',
            options: [
              '3 times',
              '4 times',
              '5 times',
              'Infinite times'
            ],
            correctIndex: 1,
            explanation: 'The loop executes for i = 0, 1, 2, and 3. That is exactly 4 iterations before i becomes 4 and the condition (4 < 4) evaluates to false.'
          }
        },
        {
          id: 'prog-functions',
          title: 'Functions',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>As programs grow in size, writing hundreds of disorganized lines becomes impossible to maintain. A <strong>function</strong> is a self-contained, reusable block of code designed to perform a single, well-defined task.</p>
            <p>Functions act as the fundamental building blocks of clean software engineering. They enable the <strong>DRY principle (Don't Repeat Yourself)</strong>: write logic once, test it thoroughly, and call it from anywhere in your codebase.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🥤 The Smoothie Blender Metaphor</div>
              <div class="metaphor-text">A blender is a function. You supply inputs (fruit, milk, ice—the parameters), press the blend button (execute the internal logic), and out pours a smoothie (the return value). The person drinking doesn't need to know how the blender's motor gears operate internally.</div>
            </div>
            <p>Key function terminology:</p>
            <ul>
              <li><strong>Parameters:</strong> Variables listed in the function definition representing expected inputs.</li>
              <li><strong>Arguments:</strong> The concrete values passed into the function when invoking it.</li>
              <li><strong>Return Value:</strong> The data output that the function hands back to the caller.</li>
              <li><strong>Scope:</strong> Variables created inside a function are local to it and cannot be accessed from outside.</li>
            </ul>
          `,
          example: {
            title: 'functions.js — Reusable Calculation Engine',
            code: `<span class="syntax-cmt">// Define function with parameters</span>
<span class="syntax-kw">function</span> <span class="syntax-fn">calculateCircleArea</span>(radius) {
  <span class="syntax-kw">const</span> PI = <span class="syntax-num">3.14159</span>;
  <span class="syntax-kw">const</span> area = PI * (radius * radius);
  <span class="syntax-kw">return</span> area; <span class="syntax-cmt">// Hand result back to caller</span>
}

<span class="syntax-cmt">// Invoke function with arguments</span>
<span class="syntax-kw">const</span> smallPlate = <span class="syntax-fn">calculateCircleArea</span>(<span class="syntax-num">5</span>);
<span class="syntax-kw">const</span> largePlatter = <span class="syntax-fn">calculateCircleArea</span>(<span class="syntax-num">12</span>);

<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(smallPlate);   <span class="syntax-cmt">// ~78.54</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(largePlatter); <span class="syntax-cmt">// ~452.39</span>`
          },
          takeaways: [
            'Functions encapsulate logic, making code modular, readable, and easier to debug.',
            'A return statement immediately terminates function execution and passes back a value.',
            'Local variables declared inside a function are garbage collected after the function finishes execution.'
          ],
          practice: {
            question: 'What is the primary purpose of the "return" keyword inside a function?',
            options: [
              'To repeat the function from the beginning.',
              'To pass an output value back to the caller and terminate the function.',
              'To print the variable to the user screen.',
              'To permanently shut down the computer.'
            ],
            correctIndex: 1,
            explanation: 'The return statement immediately halts the function and delivers the computed result back to whatever code invoked it.'
          }
        },
        {
          id: 'prog-arrays',
          title: 'Arrays',
          readTime: '7 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>Imagine having to track the names of 200 students. Creating 200 individual variables like <code>student1</code>, <code>student2</code>, ..., <code>student200</code> would be clumsy and impossible to manage. An <strong>array</strong> is an ordered, indexed collection that allows you to store multiple items under a single variable name.</p>
            <p>In memory, an array holds elements in sequential order. Each element is assigned a numerical position called an <strong>index</strong>. Almost all modern programming languages use <strong>zero-based indexing</strong>, meaning the very first item is located at index <code>0</code>, not index <code>1</code>.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🏢 The Apartment Mailbox Metaphor</div>
              <div class="metaphor-text">Picture a residential building with mailboxes labeled 0 through 9. The mailboxes are all lined up together. To retrieve the letter for slot 3, you go directly to box #3 without opening all preceding boxes.</div>
            </div>
            <p>Essential array capabilities:</p>
            <ul>
              <li><strong>Direct Access:</strong> Fast retrieval using bracket notation (e.g. <code>items[0]</code>).</li>
              <li><strong>Length:</strong> Checking how many elements are currently stored (e.g. <code>items.length</code>).</li>
              <li><strong>Dynamic Sizing:</strong> Adding new elements (<code>push</code>) or removing elements (<code>pop</code>).</li>
            </ul>
          `,
          example: {
            title: 'arrays.js — Collection Manipulation',
            code: `<span class="syntax-cmt">// Declare array of string subjects</span>
<span class="syntax-kw">const</span> subjects = [<span class="syntax-str">"Programming"</span>, <span class="syntax-str">"CS"</span>, <span class="syntax-str">"Math"</span>, <span class="syntax-str">"Technology"</span>];

<span class="syntax-cmt">// Access elements using zero-based indices</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(subjects[<span class="syntax-num">0</span>]); <span class="syntax-cmt">// "Programming" (first item)</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(subjects[<span class="syntax-num">2</span>]); <span class="syntax-cmt">// "Math"</span>

<span class="syntax-cmt">// Append a new element to the end</span>
subjects.<span class="syntax-fn">push</span>(<span class="syntax-str">"Cybersecurity"</span>);

<span class="syntax-cmt">// Iterate through elements</span>
subjects.<span class="syntax-fn">forEach</span>((sub, idx) => {
  <span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Index \${idx}: \${sub}\`</span>);
});`
          },
          takeaways: [
            'Arrays use zero-based indexing: the first item is at [0] and the last item is at [length - 1].',
            'Accessing an index that does not exist results in "undefined" or an "IndexOutOfBounds" error.',
            'Arrays can be iterated through using loops or built-in functional methods like map and filter.'
          ],
          practice: {
            question: 'Given const colors = ["Red", "Green", "Blue", "Gold"], what value is returned by colors[2]?',
            options: [
              '"Red"',
              '"Green"',
              '"Blue"',
              '"Gold"'
            ],
            correctIndex: 2,
            explanation: 'Index 0 is "Red", index 1 is "Green", and index 2 is "Blue". Remember that indices start counting at 0!'
          }
        }
      ],
      quiz: [
        {
          prompt: 'What happens when a programming language interpreter encounters a syntax error?',
          options: [
            'It guesses what the programmer meant and repairs the code automatically.',
            'It halts execution and displays an error message specifying the offending line.',
            'It deletes the source file from your hard drive permanently.',
            'It converts the file into an executable binary anyway.'
          ],
          correct: 1,
          explanation: 'Computers cannot guess intent; when syntax rules are broken, the interpreter or compiler must halt and throw an error.'
        },
        {
          prompt: 'Which data type is most appropriate for storing a monetary balance like $49.95?',
          options: [
            'Boolean',
            'Float / Double',
            'String',
            'Integer'
          ],
          correct: 1,
          explanation: 'Floating-point numbers represent values with decimal points such as currency, percentages, or measurements.'
        },
        {
          prompt: 'What condition causes a while loop to become an "infinite loop"?',
          options: [
            'When the loop contains more than three lines of code.',
            'When the loop termination condition never evaluates to false.',
            'When you use an array inside the loop body.',
            'When the code is executed on a mobile device.'
          ],
          correct: 1,
          explanation: 'If a while loop condition remains permanently true because no code inside updates the tested variable, the loop runs endlessly.'
        },
        {
          prompt: 'Why are functions considered essential for writing maintainable code?',
          options: [
            'They allow reusing logic and avoid copying and pasting identical code blocks.',
            'They speed up internet download speeds.',
            'They force the computer to turn off its cooling fans.',
            'They automatically write your documentation for you.'
          ],
          correct: 0,
          explanation: 'Functions encapsulate reusable logic, embodying the DRY (Don\'t Repeat Yourself) principle.'
        },
        {
          prompt: 'If an array has a length of 5, what is the index of its final element?',
          options: [
            '5',
            '4',
            '0',
            '-1'
          ],
          correct: 1,
          explanation: 'Because array indexing starts at 0, an array with 5 elements occupies indices 0, 1, 2, 3, and 4. The last index is always length - 1.'
        }
      ]
    },

    'computer-science': {
      id: 'computer-science',
      title: 'Computer Science',
      tagline: 'Systems, Architecture & Computational Theory',
      description: 'Explore the theoretical foundations, operating systems, relational data architecture, algorithms, and global networking.',
      lessons: [
        {
          id: 'cs-fundamentals',
          title: 'Computer Fundamentals',
          readTime: '7 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>At the physical core of every computer is the <strong>Von Neumann Architecture</strong>, formulated in 1945. It dictates that computers consist of three foundational components connected by digital communication pathways called <strong>buses</strong>:</p>
            <ul>
              <li><strong>Central Processing Unit (CPU):</strong> The brain of the computer. It houses the <strong>Arithmetic Logic Unit (ALU)</strong> for mathematical calculations, the <strong>Control Unit (CU)</strong> for orchestrating instructions, and fast miniature memory slots called <strong>Registers</strong>.</li>
              <li><strong>Primary Memory (RAM):</strong> Fast, volatile electronic storage where currently running programs and data reside. Volatile means all data is lost when power is turned off.</li>
              <li><strong>Input/Output & Secondary Storage:</strong> Non-volatile persistent media like Solid State Drives (SSDs) and peripheral devices.</li>
            </ul>
            <div class="metaphor-box">
              <div class="metaphor-title">🏢 The Office Desk Metaphor</div>
              <div class="metaphor-text">The CPU is a worker sitting at a desk. RAM is the surface of the desk: everything within arm's reach can be worked on instantly. Secondary storage (SSD) is a file cabinet down the hall: vast capacity, but slower to access.</div>
            </div>
            <p>The CPU continuously runs a microscopic cycle billions of times every second called the <strong>Fetch-Decode-Execute Cycle</strong>:</p>
            <ol>
              <li><strong>Fetch:</strong> Retrieve the next instruction from RAM via the Program Counter register.</li>
              <li><strong>Decode:</strong> The Control Unit translates the binary bytecode into specific electrical signals.</li>
              <li><strong>Execute:</strong> The ALU or registers perform the operation (e.g. add two numbers).</li>
            </ol>
          `,
          example: {
            title: 'System Architecture — The Fetch-Decode-Execute Pipeline',
            code: `[ RAM Memory ]
      |  (Instruction Bus)
      v
[ CPU Control Unit ] ----> [ Registers (PC, MAR, MDR) ]
      | (Decode Opcode)
      v
[ Arithmetic Logic Unit (ALU) ] ----> [ Accumulator Result ]`
          },
          takeaways: [
            'Von Neumann architecture stores both program instructions and user data in the same shared memory space.',
            'RAM is volatile and fast; SSD/HDD storage is non-volatile, persistent, and slower.',
            'CPU performance is governed by clock frequency (GHz), IPC (instructions per cycle), and cache hierarchy.'
          ],
          practice: {
            question: 'What is the primary role of the CPU Arithmetic Logic Unit (ALU)?',
            options: [
              'To store long-term files like movies and music.',
              'To perform mathematical computations and logical comparisons.',
              'To connect the computer to wireless Wi-Fi networks.',
              'To supply electrical power from the wall outlet.'
            ],
            correctIndex: 1,
            explanation: 'The ALU is the mathematical core of the CPU that calculates sums, products, and compares values (e.g., A > B).'
          }
        },
        {
          id: 'cs-os',
          title: 'Operating Systems',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>An <strong>Operating System (OS)</strong> is system software that acts as the intermediary between raw hardware and user applications. Without an OS, software developers would have to manually write code to spin motor spindles, manage electrical transistor voltages, and draw individual pixels on screen.</p>
            <p>The core of an operating system is the <strong>Kernel</strong>, which runs in privileged hardware supervisor mode. Major duties of an OS include:</p>
            <ul>
              <li><strong>Process Management & Scheduling:</strong> The CPU can only execute one thread of instructions per core at any given nanosecond. The OS rapidly swaps tasks via <strong>preemptive scheduling</strong> and <strong>context switching</strong>, creating the illusion that dozens of programs are running simultaneously.</li>
              <li><strong>Memory Virtualization:</strong> Each process is given an isolated virtual address space. This prevents buggy or malicious applications from reading or corrupting the private memory of other programs.</li>
              <li><strong>File System Abstraction:</strong> Translating raw magnetic or flash storage sectors into organized files and directories.</li>
            </ul>
          `,
          example: {
            title: 'Process Lifecycle State Machine',
            code: `[ NEW Process ] ---> [ READY Queue ] <==== (Context Switch) ====> [ RUNNING on CPU ]
                           ^                                                 |
                           |-------- [ WAITING for I/O / Disk ] <------------|
                                                                             v
                                                                   [ TERMINATED ]`
          },
          takeaways: [
            'The Kernel is the central core of an OS with unrestricted access to physical hardware.',
            'Context switching allows single/multi-core CPUs to time-slice between multiple active processes.',
            'Virtual memory allows programs to access more memory than is physically installed using page files.'
          ],
          practice: {
            question: 'What happens during an OS "context switch"?',
            options: [
              'The computer completely wipes its operating system and reinstalls.',
              'The CPU saves the state of the current process and loads the state of another ready process.',
              'The monitor changes its screen resolution and brightness.',
              'The hard drive stops spinning to save electricity.'
            ],
            correctIndex: 1,
            explanation: 'A context switch saves CPU registers and memory pointers of one process so another can execute, allowing multitasking.'
          }
        },
        {
          id: 'cs-dbms',
          title: 'Database Management Systems',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>A <strong>Database Management System (DBMS)</strong> is specialized software engineered to store, retrieve, index, and manage structured data efficiently, reliably, and securely. While text files or spreadsheets collapse when thousands of users write to them at once, a DBMS handles concurrent transactions effortlessly.</p>
            <p>Databases generally fall into two broad architectures:</p>
            <ul>
              <li><strong>Relational (SQL):</strong> Data is stored in strict tables with columns and rows. Tables are linked using <strong>Primary Keys</strong> (unique row identifiers) and <strong>Foreign Keys</strong> (references to rows in other tables).</li>
              <li><strong>Non-Relational (NoSQL):</strong> Data is stored as flexible JSON documents, key-value pairs, or graphs, suitable for rapidly changing data structures.</li>
            </ul>
            <div class="metaphor-box">
              <div class="metaphor-title">🏦 The Bank Transfer Rule (ACID)</div>
              <div class="metaphor-text">If you transfer $100 to a friend, the bank must deduct $100 from your account and add $100 to theirs. If the system crashes midway, the transaction must roll back entirely. Your money cannot vanish into thin air. This is Atomicity.</div>
            </div>
            <p>Relational databases guarantee reliability through <strong>ACID Properties</strong>:</p>
            <ul>
              <li><strong>Atomicity:</strong> All operations in a transaction succeed, or the entire transaction is rolled back.</li>
              <li><strong>Consistency:</strong> Data must always adhere to predefined validation constraints.</li>
              <li><strong>Isolation:</strong> Concurrent transactions execute independently without interfering with each other.</li>
              <li><strong>Durability:</strong> Once committed, data changes survive system crashes and power failures.</li>
            </ul>
          `,
          example: {
            title: 'queries.sql — Relational JOIN and Constraint',
            code: `<span class="syntax-cmt">-- Query students and their registered courses</span>
<span class="syntax-kw">SELECT</span> 
  students.name, 
  courses.course_title, 
  enrollments.final_grade
<span class="syntax-kw">FROM</span> enrollments
<span class="syntax-kw">JOIN</span> students <span class="syntax-kw">ON</span> enrollments.student_id = students.id
<span class="syntax-kw">JOIN</span> courses <span class="syntax-kw">ON</span> enrollments.course_id = courses.id
<span class="syntax-kw">WHERE</span> enrollments.status = <span class="syntax-str">'Active'</span>;`
          },
          takeaways: [
            'A Primary Key uniquely identifies every individual record in a database table.',
            'ACID properties guarantee transaction reliability in financial and mission-critical databases.',
            'Indexes (often implemented using B-Trees) accelerate query lookups from O(n) table scans to O(log n).'
          ],
          practice: {
            question: 'Which ACID property ensures that a transaction completes entirely or leaves data unchanged if it fails?',
            options: [
              'Durability',
              'Isolation',
              'Consistency',
              'Atomicity'
            ],
            correctIndex: 3,
            explanation: 'Atomicity treats a transaction as an indivisible "atomic" unit: all changes happen, or nothing changes at all.'
          }
        },
        {
          id: 'cs-ds',
          title: 'Data Structures',
          readTime: '9 min read',
          difficulty: 'Advanced',
          explanation: `
            <p>A <strong>data structure</strong> is a specialized format for organizing, storing, and accessing data in memory so that specific operations can be performed with maximum efficiency. Choosing the right data structure can make a software application thousands of times faster.</p>
            <p>Software engineers evaluate algorithms and data structures using <strong>Big-O Notation</strong>, which measures how computation time or memory usage grows as input size (<code>n</code>) scales:</p>
            <ul>
              <li><strong><code>O(1)</code> Constant Time:</strong> Operation takes the exact same time regardless of whether you have 10 items or 10 billion items (e.g. array index lookup).</li>
              <li><strong><code>O(log n)</code> Logarithmic Time:</strong> Divides the search space in half with every step (e.g. binary search).</li>
              <li><strong><code>O(n)</code> Linear Time:</strong> Time scales directly in proportion to the number of items.</li>
            </ul>
            <p>Foundational Data Structures:</p>
            <ul>
              <li><strong>Stack (LIFO):</strong> Last-In, First-Out. Like a stack of cafeteria trays. Used in browser history back buttons and function call stacks.</li>
              <li><strong>Queue (FIFO):</strong> First-In, First-Out. Like a line at a ticket counter. Used in printer buffers and message brokers.</li>
              <li><strong>Hash Map (Key-Value):</strong> Uses a hashing algorithm to provide average <code>O(1)</code> lookup and storage.</li>
              <li><strong>Binary Tree:</strong> Hierarchical nodes where each node has at most two children.</li>
            </ul>
          `,
          example: {
            title: 'Stack vs Queue Operations',
            code: `<span class="syntax-cmt">// Stack (LIFO: Last In, First Out)</span>
<span class="syntax-kw">const</span> callStack = [];
callStack.<span class="syntax-fn">push</span>(<span class="syntax-str">"page1"</span>);     <span class="syntax-cmt">// ["page1"]</span>
callStack.<span class="syntax-fn">push</span>(<span class="syntax-str">"page2"</span>);     <span class="syntax-cmt">// ["page1", "page2"]</span>
<span class="syntax-kw">const</span> last = callStack.<span class="syntax-fn">pop</span>(); <span class="syntax-cmt">// returns "page2"</span>

<span class="syntax-cmt">// Queue (FIFO: First In, First Out)</span>
<span class="syntax-kw">const</span> printQueue = [];
printQueue.<span class="syntax-fn">push</span>(<span class="syntax-str">"docA"</span>);      <span class="syntax-cmt">// Enqueue</span>
printQueue.<span class="syntax-fn">push</span>(<span class="syntax-str">"docB"</span>);      <span class="syntax-cmt">// Enqueue</span>
<span class="syntax-kw">const</span> first = printQueue.<span class="syntax-fn">shift</span>(); <span class="syntax-cmt">// Dequeue: returns "docA"</span>`
          },
          takeaways: [
            'Stacks follow Last-In, First-Out (LIFO); Queues follow First-In, First-Out (FIFO).',
            'Hash Tables achieve average O(1) time complexity by converting keys into bucket array indices using hash functions.',
            'Big-O notation describes the upper bound limiting growth rate of runtime or memory as input size increases.'
          ],
          practice: {
            question: 'Which data structure is fundamentally used to implement an "Undo" feature in a text editor?',
            options: [
              'Queue (FIFO)',
              'Stack (LIFO)',
              'Binary Search Tree',
              'Graph'
            ],
            correctIndex: 1,
            explanation: 'A Stack is ideal for Undo operations because the most recent action taken is the very first one that must be reverted (Last-In, First-Out).'
          }
        },
        {
          id: 'cs-networks',
          title: 'Computer Networks',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>A <strong>computer network</strong> is a collection of interconnected computing nodes capable of sharing resources, exchanging packets of digital data, and communicating over shared physical and wireless links. The global Internet is a vast "network of networks".</p>
            <p>Network communication is structured through layered models, notably the <strong>OSI 7-Layer Model</strong> and the pragmatic <strong>TCP/IP Model</strong>. Layering ensures modularity: a web developer doesn't need to reprogram fiber optic cables to send an email.</p>
            <p>Two dominant protocols rule internet transport:</p>
            <ul>
              <li><strong>TCP (Transmission Control Protocol):</strong> Connection-oriented and reliable. Before transmitting, it performs a <strong>Three-Way Handshake</strong> (SYN, SYN-ACK, ACK). If a packet gets dropped, TCP detects the loss and retransmits it. Used for web pages, emails, and file downloads.</li>
              <li><strong>UDP (User Datagram Protocol):</strong> Connectionless and blazing fast. It sends packets ("datagrams") without verifying arrival. Perfect for live streaming and online multiplayer gaming where speed matters more than occasional lost frames.</li>
            </ul>
          `,
          example: {
            title: 'TCP 3-Way Handshake Sequence',
            code: `[ Client Browser ]                              [ Web Server ]
       |                                              |
       | ------------ 1. SYN (Synchronize) ---------> |
       |                                              |
       | <----------- 2. SYN-ACK (Acknowledge) ------ |
       |                                              |
       | ------------ 3. ACK (Established) ---------> |
       |                                              |
       == Connection Established: HTTP Data Transfer Begins ==`
          },
          takeaways: [
            'TCP guarantees packet ordering and reliable delivery via handshakes and acknowledgments.',
            'UDP sacrifices guaranteed delivery in exchange for minimal latency and lower overhead.',
            'DNS (Domain Name System) translates human-readable domain names (e.g., google.com) into machine IP addresses.'
          ],
          practice: {
            question: 'Why is UDP preferred over TCP for live video calls and competitive gaming?',
            options: [
              'Because UDP encrypts all traffic with unbreakable military ciphers.',
              'Because UDP retransmits lost packets five times faster than TCP.',
              'Because UDP avoids connection handshakes and packet retransmission delays.',
              'Because UDP only works on fiber optic cables.'
            ],
            correctIndex: 2,
            explanation: 'UDP minimizes latency by sending packets immediately without waiting for delivery confirmations or retransmitting dropped data.'
          }
        }
      ],
      quiz: [
        {
          prompt: 'What is the primary operational difference between volatile RAM and non-volatile SSD storage?',
          options: [
            'RAM stores data permanently even when powered off.',
            'RAM loses all stored data when electricity is disconnected, whereas SSDs retain data.',
            'SSDs are thousands of times faster than RAM cache.',
            'SSDs can only store code, not photos or text.'
          ],
          correct: 1,
          explanation: 'RAM is volatile memory designed for temporary high-speed scratch space; non-volatile SSDs preserve data persistently.'
        },
        {
          prompt: 'In relational database theory, what is the role of a Foreign Key?',
          options: [
            'It translates SQL syntax into foreign languages.',
            'It establishes a referential relationship linking a record to a primary key in another table.',
            'It creates a backup copy of the database on an external USB drive.',
            'It locks the database so no other users can view it.'
          ],
          correct: 1,
          explanation: 'A Foreign Key refers to a Primary Key in another table, establishing relational integrity between connected datasets.'
        },
        {
          prompt: 'Which Big-O notation represents an algorithm whose execution time does not change as the dataset size grows?',
          options: [
            'O(n)',
            'O(n^2)',
            'O(1)',
            'O(log n)'
          ],
          correct: 2,
          explanation: 'O(1) represents Constant Time complexity, meaning operations take the same amount of time regardless of input size.'
        },
        {
          prompt: 'What is the function of the Domain Name System (DNS)?',
          options: [
            'It translates domain names (e.g. example.com) into numerical IP addresses.',
            'It protects computers from physical overheating.',
            'It speeds up the computer processor clock speed.',
            'It generates random passwords for email accounts.'
          ],
          correct: 0,
          explanation: 'DNS serves as the internet\'s phonebook, mapping human-friendly names to IP addresses (like 142.250.190.46).'
        },
        {
          prompt: 'A Queue data structure operates on which fundamental scheduling principle?',
          options: [
            'LIFO (Last-In, First-Out)',
            'Random Access Retrieval',
            'FIFO (First-In, First-Out)',
            'Alphabetical Ordering'
          ],
          correct: 2,
          explanation: 'Queues enforce First-In, First-Out (FIFO) ordering: the first element added is the first element removed.'
        }
      ]
    },

    mathematics: {
      id: 'mathematics',
      title: 'Mathematics',
      tagline: 'Equations, Probability, Statistics & Matrix Systems',
      description: 'Bridge abstract mathematics with computation: symbolic algebra, functional relations, probability theory, statistics, and linear matrix algebra.',
      lessons: [
        {
          id: 'math-algebra',
          title: 'Algebra',
          readTime: '7 min read',
          difficulty: 'Beginner',
          explanation: `
            <p><strong>Algebra</strong> is the branch of mathematics that substitutes symbols and letters (like <code>x, y, z</code>) for unknown quantities. It allows us to express universal patterns, construct formulas, and solve for hidden values by balancing equations.</p>
            <p>The cardinal rule of algebra is the <strong>Principle of Balance</strong>: whatever mathematical operation (addition, subtraction, multiplication, or division) you perform on one side of an equals sign (<code>=</code>), you must perform on the other side to preserve equality.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">⚖️ The Balance Scale Metaphor</div>
              <div class="metaphor-text">Picture a traditional balance scale with equal weights on both sides. If you remove 5 pounds from the left pan, the scale tips. To restore perfect equilibrium, you must remove 5 pounds from the right pan as well.</div>
            </div>
            <p>Key algebraic equations include:</p>
            <ul>
              <li><strong>Linear Equations (<code>ax + b = c</code>):</strong> Graph as a straight line with constant slope.</li>
              <li><strong>Quadratic Equations (<code>ax² + bx + c = 0</code>):</strong> Graph as a parabola. Solved using factoring, completing the square, or the quadratic formula.</li>
            </ul>
          `,
          example: {
            title: 'Quadratic Equation Solution Formulation',
            code: `<span class="syntax-cmt">// Solve: 2x² - 4x - 6 = 0</span>
<span class="syntax-kw">const</span> a = <span class="syntax-num">2</span>, b = <span class="syntax-num">-4</span>, c = <span class="syntax-num">-6</span>;

<span class="syntax-cmt">// Discriminant: D = b² - 4ac</span>
<span class="syntax-kw">const</span> D = (b * b) - (<span class="syntax-num">4</span> * a * c); <span class="syntax-cmt">// (-4)² - 4(2)(-6) = 16 + 48 = 64</span>

<span class="syntax-cmt">// Quadratic Formula: x = (-b ± √D) / (2a)</span>
<span class="syntax-kw">const</span> x1 = (-b + <span class="syntax-fn">Math</span>.<span class="syntax-fn">sqrt</span>(D)) / (<span class="syntax-num">2</span> * a); <span class="syntax-cmt">// (4 + 8) / 4 = 3</span>
<span class="syntax-kw">const</span> x2 = (-b - <span class="syntax-fn">Math</span>.<span class="syntax-fn">sqrt</span>(D)) / (<span class="syntax-num">2</span> * a); <span class="syntax-cmt">// (4 - 8) / 4 = -1</span>

<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Roots: x = \${x1}, x = \${x2}\`</span>); <span class="syntax-cmt">// Roots: x = 3, x = -1</span>`
          },
          takeaways: [
            'An equation represents an equivalence relation: operations must be applied symmetrically to both sides.',
            'The discriminant D = b² - 4ac reveals root nature: D > 0 (two real roots), D = 0 (one real root), D < 0 (complex roots).',
            'Variables represent unknown quantities, while constants have fixed numerical values.'
          ],
          practice: {
            question: 'If 3x + 9 = 24, what is the value of x?',
            options: [
              'x = 3',
              'x = 5',
              'x = 7',
              'x = 15'
            ],
            correctIndex: 1,
            explanation: 'Subtract 9 from both sides: 3x = 15. Then divide both sides by 3: x = 5.'
          }
        },
        {
          id: 'math-functions',
          title: 'Functions',
          readTime: '7 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>In mathematics, a <strong>function</strong> is a relation that associates each element in an input set (called the <strong>Domain</strong>) with exactly one unique element in an output set (called the <strong>Range</strong> or Codomain). We denote this mapping as <code>f(x) = y</code>.</p>
            <p>The defining rule of a mathematical function is <strong>deterministic mapping</strong>: for any specific input <code>x</code>, the function cannot produce two different outputs simultaneously. Graphically, this is tested using the <strong>Vertical Line Test</strong>: if any vertical line intersects a graph more than once, that graph is not a function.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🎟️ The Vending Machine Metaphor</div>
              <div class="metaphor-text">Pressing button 'B4' on a snack vending machine must always dispense pretzels. If pressing 'B4' sometimes gives you pretzels and sometimes gives you orange juice, the machine is broken. A function must produce one predictable output per input.</div>
            </div>
            <p>Common function properties:</p>
            <ul>
              <li><strong>Composite Functions (<code>g(f(x))</code>):</strong> Piping the output of function <code>f</code> directly as the input to function <code>g</code>.</li>
              <li><strong>Inverse Functions (<code>f⁻¹(y) = x</code>):</strong> Reversing the mapping back to original input values.</li>
            </ul>
          `,
          example: {
            title: 'Mathematical Function Mapping in Code',
            code: `<span class="syntax-cmt">// Linear Function: f(x) = 3x - 5</span>
<span class="syntax-kw">function</span> <span class="syntax-fn">f</span>(x) {
  <span class="syntax-kw">return</span> (<span class="syntax-num">3</span> * x) - <span class="syntax-num">5</span>;
}

<span class="syntax-cmt">// Quadratic Function: g(x) = x² + 2</span>
<span class="syntax-kw">function</span> <span class="syntax-fn">g</span>(x) {
  <span class="syntax-kw">return</span> (x * x) + <span class="syntax-num">2</span>;
}

<span class="syntax-cmt">// Composition: g(f(4))</span>
<span class="syntax-kw">const</span> step1 = <span class="syntax-fn">f</span>(<span class="syntax-num">4</span>);       <span class="syntax-cmt">// 3(4) - 5 = 7</span>
<span class="syntax-kw">const</span> composite = <span class="syntax-fn">g</span>(step1); <span class="syntax-cmt">// (7)² + 2 = 51</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(composite);     <span class="syntax-cmt">// 51</span>`
          },
          takeaways: [
            'Every input in a function\'s domain must map to exactly one output in its range.',
            'The Vertical Line Test determines whether a graph represents a legitimate function.',
            'Function composition applies one function to the result of another: (g ∘ f)(x) = g(f(x)).'
          ],
          practice: {
            question: 'Given the function f(x) = 2x² - 3, what is the value of f(3)?',
            options: [
              '9',
              '15',
              '33',
              '18'
            ],
            correctIndex: 1,
            explanation: 'Calculate 3 squared: 3² = 9. Multiply by 2: 2 * 9 = 18. Subtract 3: 18 - 3 = 15.'
          }
        },
        {
          id: 'math-prob',
          title: 'Probability',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p><strong>Probability</strong> is the mathematical discipline dedicated to measuring and analyzing uncertainty, randomness, and chance. Whether predicting weather patterns, assessing insurance risk, or training machine learning classifiers, probability provides the theoretical framework.</p>
            <p>The probability of an event <code>E</code>, denoted as <code>P(E)</code>, is a real number strictly bounded between <code>0</code> and <code>1</code> inclusive (<code>0 ≤ P(E) ≤ 1</code>):</p>
            <ul>
              <li><code>P(E) = 0</code>: The event is mathematically impossible.</li>
              <li><code>P(E) = 1</code>: The event is absolute certainty.</li>
            </ul>
            <div class="math-concept-box">
              <div class="math-formula">P(E) = (Number of favorable outcomes) / (Total outcomes in sample space S)</div>
            </div>
            <p>Core probability principles:</p>
            <ul>
              <li><strong>Independent Events:</strong> The outcome of event A does not alter the probability of event B. Their joint probability is <code>P(A ∩ B) = P(A) × P(B)</code>.</li>
              <li><strong>Mutually Exclusive Events:</strong> Events that cannot happen at the same time. <code>P(A ∪ B) = P(A) + P(B)</code>.</li>
              <li><strong>Complementary Rule:</strong> The probability of an event NOT happening is <code>P(E') = 1 − P(E)</code>.</li>
            </ul>
          `,
          example: {
            title: 'Dice Probability Simulation',
            code: `<span class="syntax-cmt">// Rolling a standard fair 6-sided die</span>
<span class="syntax-kw">const</span> sampleSpace = [<span class="syntax-num">1</span>, <span class="syntax-num">2</span>, <span class="syntax-num">3</span>, <span class="syntax-num">4</span>, <span class="syntax-num">5</span>, <span class="syntax-num">6</span>];

<span class="syntax-cmt">// Event A: Rolling an even number (2, 4, 6)</span>
<span class="syntax-kw">const</span> evenOutcomes = sampleSpace.<span class="syntax-fn">filter</span>(n => n % <span class="syntax-num">2</span> === <span class="syntax-num">0</span>);
<span class="syntax-kw">const</span> pEven = evenOutcomes.length / sampleSpace.length; <span class="syntax-cmt">// 3/6 = 0.5 (50%)</span>

<span class="syntax-cmt">// Joint Probability: Rolling two consecutive 6s on two dice</span>
<span class="syntax-kw">const</span> pDoubleSix = (<span class="syntax-num">1</span> / <span class="syntax-num">6</span>) * (<span class="syntax-num">1</span> / <span class="syntax-num">6</span>); <span class="syntax-cmt">// 1/36 ≈ 0.0277 (2.78%)</span>`
          },
          takeaways: [
            'All probabilities lie strictly on the closed interval [0, 1].',
            'The sum of probabilities of all mutually exclusive events in a sample space equals 1.',
            'For independent events, joint probability is the product of their individual probabilities.'
          ],
          practice: {
            question: 'What is the probability of rolling a number greater than 4 on a single roll of a fair six-sided die?',
            options: [
              '1/6',
              '2/6 (or 1/3)',
              '3/6 (or 1/2)',
              '4/6 (or 2/3)'
            ],
            correctIndex: 1,
            explanation: 'The numbers greater than 4 are 5 and 6 (2 favorable outcomes). Out of 6 total possibilities, the probability is 2/6 = 1/3.'
          }
        },
        {
          id: 'math-stats',
          title: 'Statistics',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>While probability calculates the chance of future events based on known rules, <strong>statistics</strong> works in reverse: it takes observed real-world empirical data and extracts meaningful summaries, patterns, and inferences.</p>
            <p>Data analysis relies on two pillars of descriptive metrics:</p>
            <ul>
              <li><strong>Measures of Central Tendency (Center):</strong>
                <ul>
                  <li><strong>Mean (<code>μ</code> or <code>x̄</code>):</strong> The arithmetic average (sum of all values divided by count). Highly sensitive to extreme outliers.</li>
                  <li><strong>Median:</strong> The middle value when data is sorted in ascending order. Highly robust against outliers.</li>
                  <li><strong>Mode:</strong> The value that appears with highest frequency.</li>
                </ul>
              </li>
              <li><strong>Measures of Dispersion (Spread):</strong>
                <ul>
                  <li><strong>Variance (<code>σ²</code>):</strong> The average of squared deviations from the mean.</li>
                  <li><strong>Standard Deviation (<code>σ</code>):</strong> The square root of variance, measuring how spread out numbers are around the mean in the original units.</li>
                </ul>
              </li>
            </ul>
          `,
          example: {
            title: 'Descriptive Statistics Computation',
            code: `<span class="syntax-kw">const</span> scores = [<span class="syntax-num">70</span>, <span class="syntax-num">80</span>, <span class="syntax-num">85</span>, <span class="syntax-num">90</span>, <span class="syntax-num">95</span>, <span class="syntax-num">300</span>]; <span class="syntax-cmt">// 300 is an extreme outlier!</span>

<span class="syntax-cmt">// Arithmetic Mean</span>
<span class="syntax-kw">const</span> sum = scores.<span class="syntax-fn">reduce</span>((a, b) => a + b, <span class="syntax-num">0</span>);
<span class="syntax-kw">const</span> mean = sum / scores.length; <span class="syntax-cmt">// 720 / 6 = 120 (skewed heavily by 300)</span>

<span class="syntax-cmt">// Median (middle value of sorted list)</span>
<span class="syntax-kw">const</span> sorted = [...scores].<span class="syntax-fn">sort</span>((a, b) => a - b);
<span class="syntax-kw">const</span> median = (sorted[<span class="syntax-num">2</span>] + sorted[<span class="syntax-num">3</span>]) / <span class="syntax-num">2</span>; <span class="syntax-cmt">// (85 + 90) / 2 = 87.5</span>

<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Mean: \${mean} vs Median: \${median}\`</span>);`
          },
          takeaways: [
            'The Mean is sensitive to outliers, while the Median provides a more robust representation of skewed data.',
            'Standard Deviation quantifies how tightly data clusters around the central average.',
            'In a bell-shaped Normal Distribution, approximately 68% of data falls within 1 standard deviation of the mean.'
          ],
          practice: {
            question: 'Which measure of central tendency is least affected when a dramatic extreme outlier is added to a dataset?',
            options: [
              'Mean',
              'Median',
              'Variance',
              'Range'
            ],
            correctIndex: 1,
            explanation: 'The Median is resistant to outliers because it only depends on positional ordering in the middle, not numerical magnitudes at the extremes.'
          }
        },
        {
          id: 'math-matrices',
          title: 'Matrices',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p>A <strong>matrix</strong> is a rectangular array or grid of numbers, symbols, or expressions arranged in horizontal <strong>rows</strong> and vertical <strong>columns</strong>. An <code>m × n</code> matrix contains <code>m</code> rows and <code>n</code> columns.</p>
            <p>Matrices are the bedrock of modern computing: they power 3D computer graphics transformations (rotating and scaling video game models), physics engines, deep neural network weights, and search ranking algorithms like Google PageRank.</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🎮 The Video Game Camera Metaphor</div>
              <div class="metaphor-text">When you rotate the camera in a 3D game, the game engine multiplies thousands of vertex coordinate vectors (x, y, z) by a 3×3 rotation matrix to calculate their new positions on your flat 2D screen.</div>
            </div>
            <p>Key matrix operations:</p>
            <ul>
              <li><strong>Matrix Addition:</strong> Elements are added pairwise (matrices must have identical dimensions).</li>
              <li><strong>Scalar Multiplication:</strong> Every element is multiplied by a single real number.</li>
              <li><strong>Matrix Multiplication (<code>A × B</code>):</strong> The number of columns in <code>A</code> must equal the number of rows in <code>B</code>. Note that matrix multiplication is <strong>non-commutative</strong> (<code>A × B ≠ B × A</code>).</li>
            </ul>
          `,
          example: {
            title: 'Matrix 2x2 Multiplication Demonstration',
            code: `<span class="syntax-cmt">// Matrix A (2x2) and Matrix B (2x2)</span>
<span class="syntax-cmt">// [ a b ]   [ e f ]   [ (ae + bg)  (af + bh) ]</span>
<span class="syntax-cmt">// [ c d ] * [ g h ] = [ (ce + dg)  (cf + dh) ]</span>

<span class="syntax-kw">const</span> A = [[<span class="syntax-num">1</span>, <span class="syntax-num">2</span>], [<span class="syntax-num">3</span>, <span class="syntax-num">4</span>]];
<span class="syntax-kw">const</span> B = [[<span class="syntax-num">5</span>, <span class="syntax-num">6</span>], [<span class="syntax-num">7</span>, <span class="syntax-num">8</span>]];

<span class="syntax-kw">const</span> result = [
  [(A[<span class="syntax-num">0</span>][<span class="syntax-num">0</span>]*B[<span class="syntax-num">0</span>][<span class="syntax-num">0</span>] + A[<span class="syntax-num">0</span>][<span class="syntax-num">1</span>]*B[<span class="syntax-num">1</span>][<span class="syntax-num">0</span>]), (A[<span class="syntax-num">0</span>][<span class="syntax-num">0</span>]*B[<span class="syntax-num">0</span>][<span class="syntax-num">1</span>] + A[<span class="syntax-num">0</span>][<span class="syntax-num">1</span>]*B[<span class="syntax-num">1</span>][<span class="syntax-num">1</span>])],
  [(A[<span class="syntax-num">1</span>][<span class="syntax-num">0</span>]*B[<span class="syntax-num">0</span>][<span class="syntax-num">0</span>] + A[<span class="syntax-num">1</span>][<span class="syntax-num">1</span>]*B[<span class="syntax-num">1</span>][<span class="syntax-num">0</span>]), (A[<span class="syntax-num">1</span>][<span class="syntax-num">0</span>]*B[<span class="syntax-num">0</span>][<span class="syntax-num">1</span>] + A[<span class="syntax-num">1</span>][<span class="syntax-num">1</span>]*B[<span class="syntax-num">1</span>][<span class="syntax-num">1</span>])]
];
<span class="syntax-cmt">// result = [[19, 22], [43, 50]]</span>`
          },
          takeaways: [
            'Matrix multiplication AB is valid only when the column count of A matches the row count of B.',
            'Matrix multiplication is associative and distributive, but strictly non-commutative (AB ≠ BA in general).',
            'The Identity Matrix I acts like the number 1 in matrix algebra: AI = IA = A.'
          ],
          practice: {
            question: 'Can a matrix of size 3x2 be multiplied by a matrix of size 2x4?',
            options: [
              'Yes, and the resulting matrix will have dimensions 3x4.',
              'No, because their sizes are not completely identical.',
              'Yes, but the resulting matrix will have dimensions 2x2.',
              'No, you cannot multiply matrices with different dimensions.'
            ],
            correctIndex: 0,
            explanation: 'Yes! The inner dimensions match (both are 2). The resulting product matrix takes the outer dimensions: 3 rows by 4 columns.'
          }
        }
      ],
      quiz: [
        {
          prompt: 'What is the solution for x in the linear algebraic equation: 5x - 15 = 0?',
          options: [
            'x = -3',
            'x = 0',
            'x = 3',
            'x = 5'
          ],
          correct: 2,
          explanation: 'Add 15 to both sides (5x = 15), then divide by 5 to obtain x = 3.'
        },
        {
          prompt: 'If a coin is flipped three times, what is the probability of obtaining three consecutive Heads (H-H-H)?',
          options: [
            '1/2',
            '1/4',
            '1/6',
            '1/8'
          ],
          correct: 3,
          explanation: 'Each flip has a 1/2 chance. Joint probability: (1/2) * (1/2) * (1/2) = 1/8.'
        },
        {
          prompt: 'Why is the median frequently preferred over the mean when reporting household income or home prices?',
          options: [
            'Because the median is easier to calculate on paper.',
            'Because the median is not distorted by ultra-wealthy outliers or billionaire fortunes.',
            'Because the mean cannot be calculated for numbers greater than one million.',
            'Because government regulations forbid using the mean.'
          ],
          correct: 1,
          explanation: 'The median reflects the true middle of the population and isn\'t skewed by extreme high-income outliers.'
        },
        {
          prompt: 'What is the determinant of a 2x2 matrix [[a, b], [c, d]]?',
          options: [
            'ad + bc',
            'ab - cd',
            'ad - bc',
            '(a + d) / (b + c)'
          ],
          correct: 2,
          explanation: 'The determinant of a 2x2 matrix is computed by multiplying the main diagonal minus the off-diagonal: ad - bc.'
        },
        {
          prompt: 'In algebra and calculus, what does the Vertical Line Test verify?',
          options: [
            'Whether a line has a positive or negative slope.',
            'Whether a geometric curve represents a valid mathematical function.',
            'Whether a matrix has an inverse.',
            'Whether a statistical sample is normally distributed.'
          ],
          correct: 1,
          explanation: 'If any vertical line crosses a relation graph more than once, that relation fails the definition of a single-output function.'
        }
      ]
    },

    technology: {
      id: 'technology',
      title: 'Technology',
      tagline: 'AI, Cloud, Cyber, IoT & Modern Breakthroughs',
      description: 'Understand transformative industry breakthroughs: Artificial Intelligence, Elastic Cloud Computing, Cybersecurity, IoT ecosystems, and Machine Learning.',
      lessons: [
        {
          id: 'tech-ai',
          title: 'Artificial Intelligence',
          readTime: '8 min read',
          difficulty: 'Beginner',
          explanation: `
            <p><strong>Artificial Intelligence (AI)</strong> is a broad interdisciplinary domain of computer science dedicated to creating software systems capable of performing tasks that traditionally require human intelligence. These tasks include visual perception, speech recognition, autonomous decision-making, and natural language synthesis.</p>
            <p>AI is generally classified into two developmental categories:</p>
            <ul>
              <li><strong>Artificial Narrow AI (ANI):</strong> Specialized systems engineered to excel at a single, well-defined task (e.g. chess engines, voice assistants, spam filtering). <em>All existing AI today is Narrow AI.</em></li>
              <li><strong>Artificial General Intelligence (AGI):</strong> Hypothetical future systems with human-level cognitive flexibility across all intellectual domains, capable of transferring knowledge between unrelated tasks.</li>
            </ul>
            <div class="metaphor-box">
              <div class="metaphor-title">🧭 The GPS Navigator Metaphor</div>
              <div class="metaphor-text">A GPS navigation app uses AI pathfinding algorithms to find the fastest route through heavy traffic among billions of possibilities. It excels at this specific task, but it cannot write a poem or diagnose a medical condition. It is classic Narrow AI.</div>
            </div>
            <p>Modern AI has shifted from early symbolic rule-based expert systems (handcrafted "if-then" rules) to empirical data-driven probabilistic learning models that learn from millions of training examples.</p>
          `,
          example: {
            title: 'Rule-Based vs Learned Intelligence Paradigm',
            code: `<span class="syntax-cmt">// Traditional Programming: Hand-crafted rules</span>
<span class="syntax-kw">function</span> <span class="syntax-fn">isSpamRuleBased</span>(text) {
  <span class="syntax-kw">return</span> text.<span class="syntax-fn">includes</span>(<span class="syntax-str">"CLAIM $1,000,000"</span>) || text.<span class="syntax-fn">includes</span>(<span class="syntax-str">"WINNER"</span>);
}

<span class="syntax-cmt">// Modern AI / Machine Learning: Probability inference</span>
<span class="syntax-cmt">// Model learns weights W from 10,000,000 emails automatically</span>
<span class="syntax-kw">const</span> spamProbability = <span class="syntax-fn">aiSpamClassifier</span>.<span class="syntax-fn">predictProbability</span>(emailTokenVector);
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Spam Confidence: \${(spamProbability * 100).toFixed(1)}%\`</span>);`
          },
          takeaways: [
            'All commercial AI systems in existence today are Artificial Narrow AI (ANI).',
            'Modern AI relies on statistical pattern recognition over massive datasets rather than hardcoded rules.',
            'The Turing Test is a historical benchmark evaluating whether an AI\'s conversational behavior is indistinguishable from a human.'
          ],
          practice: {
            question: 'Which of the following is the best example of Artificial Narrow Intelligence (ANI)?',
            options: [
              'A medical AI that diagnoses skin cancer from photos with high accuracy.',
              'A sentient robot that writes novels, cooks dinner, and experiences human emotions.',
              'A standard mechanical bicycle.',
              'An electric toaster.'
            ],
            correctIndex: 0,
            explanation: 'A medical diagnostic AI is a quintessential example of Narrow AI: superhuman performance at one specific specialized domain.'
          }
        },
        {
          id: 'tech-cloud',
          title: 'Cloud Computing',
          readTime: '8 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>In the early days of the internet, running a website required buying physical rack-mounted server hardware, installing air conditioners, paying for backup diesel generators, and wiring routers in a physical data center. <strong>Cloud Computing</strong> revolutionized this by delivering on-demand computing power, storage, and databases over the internet with flexible pay-as-you-go pricing.</p>
            <p>Cloud architecture is organized into three major service layers (the "Cloud Pyramid"):</p>
            <ul>
              <li><strong>IaaS (Infrastructure as a Service):</strong> You rent raw virtual machines, storage blocks, and networks (e.g. AWS EC2, Google Compute Engine). You manage the OS and software.</li>
              <li><strong>PaaS (Platform as a Service):</strong> You provide application code; the cloud provider manages servers, runtime environments, and OS patches (e.g. Heroku, Firebase).</li>
              <li><strong>SaaS (Software as a Service):</strong> Fully managed end-user web applications (e.g. Gmail, Google Drive, Microsoft 365). You simply log in and use it.</li>
            </ul>
            <div class="metaphor-box">
              <div class="metaphor-title">🍕 The Pizza Analogy</div>
              <div class="metaphor-text">Traditional On-Premise is making pizza at home from scratch (you buy the flour, oven, gas, and wash dishes). IaaS is buying a frozen pizza to bake in your oven. PaaS is ordering pizza delivered to your door. SaaS is dining at a pizza restaurant where everything is managed for you.</div>
            </div>
          `,
          example: {
            title: 'Cloud Scalability vs Physical Infrastructure',
            code: `<span class="syntax-cmt">// Traditional: Fixed physical capacity</span>
<span class="syntax-kw">const</span> fixedServers = <span class="syntax-num">4</span>; <span class="syntax-cmt">// Black Friday traffic crashes the site!</span>

<span class="syntax-cmt">// Cloud Auto-Scaling Policy:</span>
<span class="syntax-kw">if</span> (incomingRequestRate > <span class="syntax-num">10000</span>) {
  <span class="syntax-fn">cloudProvider</span>.<span class="syntax-fn">spawnInstances</span>({ count: <span class="syntax-num">12</span>, region: <span class="syntax-str">"us-east-1"</span> });
} <span class="syntax-kw">else if</span> (incomingRequestRate < <span class="syntax-num">1000</span>) {
  <span class="syntax-fn">cloudProvider</span>.<span class="syntax-fn">terminateIdleInstances</span>(); <span class="syntax-cmt">// Save costs automatically</span>
}`
          },
          takeaways: [
            'Cloud computing converts massive upfront capital expenses (CapEx) into elastic operational expenses (OpEx).',
            'IaaS gives maximum control; SaaS gives maximum convenience and zero maintenance.',
            'Elasticity allows applications to dynamically scale compute resources up or down in response to real-time traffic spikes.'
          ],
          practice: {
            question: 'Under which cloud service tier does Google Docs or Microsoft 365 fall?',
            options: [
              'Infrastructure as a Service (IaaS)',
              'Platform as a Service (PaaS)',
              'Software as a Service (SaaS)',
              'Hardware as a Service (HaaS)'
            ],
            correctIndex: 2,
            explanation: 'Google Docs is Software as a Service (SaaS) because users access a complete application through their browser without managing servers or runtimes.'
          }
        },
        {
          id: 'tech-cybersecurity',
          title: 'Cybersecurity',
          readTime: '8 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p><strong>Cybersecurity</strong> is the practice of protecting digital systems, networks, servers, devices, and sensitive user data from malicious digital attacks, unauthorized access, identity theft, and sabotage.</p>
            <p>All information security policies are anchored by the foundational <strong>CIA Triad</strong>:</p>
            <ul>
              <li><strong>Confidentiality:</strong> Ensuring private information is accessible only to authorized personnel (enforced via encryption and access controls).</li>
              <li><strong>Integrity:</strong> Guaranteeing that data has not been modified, tampered with, or corrupted by unauthorized actors (enforced via cryptographic hashing).</li>
              <li><strong>Availability:</strong> Ensuring services and information remain reliably reachable by legitimate users when needed (defended via redundancy and DDoS mitigation).</li>
            </ul>
            <p>Pivotal defense concepts include <strong>Multi-Factor Authentication (MFA)</strong>—requiring something you know (password) plus something you have (phone authenticator app)—and <strong>Zero Trust Architecture</strong>, which operates on the principle: <em>"Never trust, always verify."</em></p>
          `,
          example: {
            title: 'Cryptographic Hashing for Password Security',
            code: `<span class="syntax-cmt">// NEVER store plaintext passwords in a database!</span>
<span class="syntax-kw">const</span> rawPassword = <span class="syntax-str">"StudentSecret123!"</span>;

<span class="syntax-cmt">// Generate cryptographic salt + hash (SHA-256 / bcrypt)</span>
<span class="syntax-kw">const</span> salt = <span class="syntax-fn">crypto</span>.<span class="syntax-fn">randomBytes</span>(<span class="syntax-num">16</span>).<span class="syntax-fn">toString</span>(<span class="syntax-str">'hex'</span>);
<span class="syntax-kw">const</span> secureHash = <span class="syntax-fn">crypto</span>.<span class="syntax-fn">createHmac</span>(<span class="syntax-str">'sha256'</span>, salt).<span class="syntax-fn">update</span>(rawPassword).<span class="syntax-fn">digest</span>(<span class="syntax-str">'hex'</span>);

<span class="syntax-cmt">// Store salt and secureHash: Even if database is leaked, raw password is safe!</span>
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Stored Hash: \${secureHash.substring(0, 16)}...\`</span>);`
          },
          takeaways: [
            'The CIA Triad stands for Confidentiality, Integrity, and Availability.',
            'Symmetric encryption uses one shared key; asymmetric encryption uses a Public Key to encrypt and a Private Key to decrypt.',
            'Password hashing is a one-way mathematical function: hashes cannot be reversed back into the original password.'
          ],
          practice: {
            question: 'If a cyber attacker successfully modifies grades in a university database without authorization, which CIA triad pillar is broken?',
            options: [
              'Availability',
              'Integrity',
              'Confidentiality',
              'Non-repudiation'
            ],
            correctIndex: 1,
            explanation: 'Integrity guarantees that data remains authentic, accurate, and protected from unauthorized modification or tampering.'
          }
        },
        {
          id: 'tech-iot',
          title: 'Internet of Things',
          readTime: '7 min read',
          difficulty: 'Beginner',
          explanation: `
            <p>The <strong>Internet of Things (IoT)</strong> describes the rapidly expanding network of physical objects ("things") embedded with sensors, microcontrollers, actuators, and network connectivity that collect and exchange data with other devices and central systems over the internet.</p>
            <p>IoT spans smart consumer homes (smart thermostats, connected doorbells, smart watches) to industrial applications (industrial automation, aerospace turbine telemetry, smart agricultural soil monitors, and smart traffic grids).</p>
            <div class="metaphor-box">
              <div class="metaphor-title">🌾 The Smart Farm Metaphor</div>
              <div class="metaphor-text">A farmer places 50 battery-powered sensors in a 100-acre cornfield. When a sector's soil moisture drops below 25%, the sensor transmits a tiny packet to a gateway, which activates automated drip irrigation. Water is conserved and crop yield maximizes without manual inspection.</div>
            </div>
            <p>Because IoT devices often run on miniature batteries and low-power processors, they typically communicate using lightweight protocols such as <strong>MQTT (Message Queuing Telemetry Transport)</strong> rather than heavy HTTP web protocols.</p>
          `,
          example: {
            title: 'IoT Sensor Telemetry Loop (Microcontroller Firmware)',
            code: `<span class="syntax-cmt">// Simulated Microcontroller Loop (e.g. ESP32 / Raspberry Pi)</span>
<span class="syntax-kw">function</span> <span class="syntax-fn">telemetryCycle</span>() {
  <span class="syntax-kw">const</span> soilMoisture = <span class="syntax-fn">readAnalogSensor</span>(PIN_A0);
  <span class="syntax-kw">const</span> ambientTemp = <span class="syntax-fn">readDigitalTemp</span>(PIN_D4);

  <span class="syntax-cmt">// Publish compact payload over MQTT broker</span>
  <span class="syntax-kw">const</span> payload = { moisture: soilMoisture, temp: ambientTemp, batt: <span class="syntax-num">98</span> };
  <span class="syntax-fn">mqttClient</span>.<span class="syntax-fn">publish</span>(<span class="syntax-str">"sensors/field1/node4"</span>, <span class="syntax-fn">JSON</span>.<span class="syntax-fn">stringify</span>(payload));

  <span class="syntax-cmt">// Deep sleep for 10 minutes to preserve battery</span>
  <span class="syntax-fn">enterLowPowerSleep</span>(<span class="syntax-num">600000</span>);
}`
          },
          takeaways: [
            'IoT connects physical objects to digital networks via embedded sensors, controllers, and connectivity.',
            'Lightweight pub/sub protocols like MQTT minimize bandwidth consumption and battery drain.',
            'Edge Computing processes critical sensor data locally on the device rather than streaming all raw data to the cloud.'
          ],
          practice: {
            question: 'Why is the MQTT protocol widely adopted for low-power IoT microcontrollers instead of standard HTTP?',
            options: [
              'Because HTTP is illegal for electronic sensors.',
              'Because MQTT has much lower message overhead, smaller packet sizes, and conserves battery life.',
              'Because MQTT only works over Bluetooth cables.',
              'Because HTTP cannot transmit numerical measurements.'
            ],
            correctIndex: 1,
            explanation: 'MQTT is a lightweight publish-subscribe protocol engineered specifically for constrained devices with limited bandwidth and battery constraints.'
          }
        },
        {
          id: 'tech-ml',
          title: 'Machine Learning',
          readTime: '9 min read',
          difficulty: 'Intermediate',
          explanation: `
            <p><strong>Machine Learning (ML)</strong> is the core engine powering the modern AI revolution. Rather than writing explicit handcrafted code for every scenario, machine learning algorithms analyze historical training data, detect underlying statistical relationships, and learn mathematical models that make predictions on unseen data.</p>
            <p>The three dominant paradigms of Machine Learning are:</p>
            <ul>
              <li><strong>Supervised Learning:</strong> The algorithm trains on labeled input-output pairs (<code>X → Y</code>). Examples: predicting house prices based on square footage (Regression) or detecting email spam (Classification).</li>
              <li><strong>Unsupervised Learning:</strong> The algorithm is provided unlabeled data and must discover hidden clusters or patterns independently (<code>X → ?</code>). Examples: customer market segmentation and anomaly detection.</li>
              <li><strong>Reinforcement Learning:</strong> An agent learns optimal behaviors through trial and error in an environment, receiving scalar <strong>rewards</strong> for beneficial moves and <strong>penalties</strong> for mistakes (e.g. self-driving cars, AlphaGo).</li>
            </ul>
          `,
          example: {
            title: 'Supervised Learning Classification Concept',
            code: `<span class="syntax-cmt">// Training Data: [House Size (sqft), Bedrooms] -> Sale Price ($)</span>
<span class="syntax-kw">const</span> trainingSet = [
  { features: [<span class="syntax-num">1200</span>, <span class="syntax-num">2</span>], label: <span class="syntax-num">240000</span> },
  { features: [<span class="syntax-num">1800</span>, <span class="syntax-num">3</span>], label: <span class="syntax-num">350000</span> },
  { features: [<span class="syntax-num">2400</span>, <span class="syntax-num">4</span>], label: <span class="syntax-num">480000</span> }
];

<span class="syntax-cmt">// Algorithm finds weights: Price ≈ (Size * w1) + (Beds * w2) + bias</span>
<span class="syntax-kw">const</span> model = <span class="syntax-fn">trainLinearRegression</span>(trainingSet);

<span class="syntax-cmt">// Inference on new unseen house:</span>
<span class="syntax-kw">const</span> estimatedPrice = model.<span class="syntax-fn">predict</span>([<span class="syntax-num">2000</span>, <span class="syntax-num">3</span>]);
<span class="syntax-fn">console</span>.<span class="syntax-fn">log</span>(<span class="syntax-str">\`Predicted Value: $\${estimatedPrice.toLocaleString()}\`</span>);`
          },
          takeaways: [
            'Supervised learning trains on labeled data; Unsupervised learning finds patterns in unlabeled data.',
            'Overfitting occurs when a model memorizes training noise and fails to generalize to new, real-world data.',
            'Neural networks loosely model biological brain synapses with interconnected layers of weighted nodes.'
          ],
          practice: {
            question: 'What type of machine learning trains an agent through a feedback loop of rewards and penalties?',
            options: [
              'Supervised Learning',
              'Unsupervised Learning',
              'Reinforcement Learning',
              'Linear Regression'
            ],
            correctIndex: 2,
            explanation: 'Reinforcement Learning trains an agent to discover optimal policies by maximizing cumulative positive rewards in an environment.'
          }
        }
      ],
      quiz: [
        {
          prompt: 'Which best summarizes the key difference between Artificial Narrow AI (ANI) and Artificial General Intelligence (AGI)?',
          options: [
            'ANI is slow, while AGI is fast.',
            'ANI is engineered for a single specialized task, whereas AGI would possess adaptable human-like cognitive flexibility across all domains.',
            'ANI operates on quantum computers, whereas AGI runs on smartphones.',
            'There is no difference between ANI and AGI.'
          ],
          correct: 1,
          explanation: 'Narrow AI excels at specific tasks (like chess or speech recognition); AGI refers to hypothetical general intelligence.'
        },
        {
          prompt: 'What major financial and operational advantage does Cloud Computing provide over traditional on-premise hardware?',
          options: [
            'It eliminates the need for software developers.',
            'It replaces massive upfront physical hardware capital investments with flexible pay-as-you-go elastic resources.',
            'It guarantees that software will never have bugs.',
            'It completely removes the need for internet connectivity.'
          ],
          correct: 1,
          explanation: 'The cloud transforms large capital expenses into variable operational costs while providing elastic auto-scaling.'
        },
        {
          prompt: 'In cybersecurity, why is Multi-Factor Authentication (MFA) significantly more secure than a password alone?',
          options: [
            'Because it requires proof from at least two distinct authentication categories (e.g. password + physical device token).',
            'Because it makes your password shorter and easier to type.',
            'Because it disables all virus attacks on your computer.',
            'Because it stops other people from seeing your computer monitor.'
          ],
          correct: 0,
          explanation: 'MFA requires multiple authentication factors, meaning a stolen password alone is insufficient for an attacker to gain entry.'
        },
        {
          prompt: 'Which machine learning paradigm is used when training an algorithm to group customers into clusters without any pre-existing labels?',
          options: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Reinforcement Learning',
            'Manual Programming'
          ],
          correct: 1,
          explanation: 'Unsupervised Learning analyzes unlabeled datasets to discover intrinsic clusters, patterns, and groupings on its own.'
        },
        {
          prompt: 'What is the role of an IoT "Sensor"?',
          options: [
            'To convert physical real-world phenomena (like heat, light, or pressure) into digital data signals.',
            'To supply AC power to the entire house.',
            'To format and clean hard drives.',
            'To display 3D video game graphics.'
          ],
          correct: 0,
          explanation: 'Sensors detect physical environmental variables and convert them into electrical data that microcontrollers can process.'
        }
      ]
    }
  };

  /* ============================================================
     2. LEARNING GAMES DATA REPOSITORY
     ============================================================ */
  const GAMES_DATA = {
    codeDetective: [
      {
        id: 1,
        title: 'Case #101: The Endless Loop Trap',
        topic: 'Loops & Conditionals',
        brief: 'The student wrote a loop to print countdown numbers from 5 to 1. But when run, the program never halts and freezes the browser tab. Spot the bug!',
        lines: [
          'function countdown() {',
          '  let count = 5;',
          '  while (count > 0) {',
          '    console.log("T-minus " + count);',
          '    count + 1; // Suspect line',
          '  }',
          '  console.log("Blastoff!");',
          '}'
        ],
        suspectLine: 5,
        options: [
          'Line 2: Variables inside functions must use "const" instead of "let".',
          'Line 5: "count + 1" calculates 6 but never updates count; it should be "count--" or "count -= 1".',
          'Line 3: The while loop condition should be "count < 0".',
          'Line 4: console.log cannot concatenate strings with numbers.'
        ],
        correctIndex: 1,
        fixCode: `function countdown() {
  let count = 5;
  while (count > 0) {
    console.log("T-minus " + count);
    count--; // FIXED: count now decrements towards 0 termination!
  }
  console.log("Blastoff!");
}`,
        explanation: 'Line 5 wrote "count + 1", which neither decremented the counter nor reassigned it to "count". As a result, count remained 5 forever, causing an infinite loop. The remedy is "count--".'
      },
      {
        id: 2,
        title: 'Case #102: The Accidental Assignment',
        topic: 'Conditionals & Operators',
        brief: 'A student wrote a role-checking function, but every user is granted administrator privileges, even regular guests! Investigate the condition check.',
        lines: [
          'function verifyAccess(userRole) {',
          '  if (userRole = "admin") { // Suspect line',
          '    return "Access Granted: Administrator Panel";',
          '  } else {',
          '    return "Access Denied: Standard User";',
          '  }',
          '}'
        ],
        suspectLine: 2,
        options: [
          'Line 2: A single "=" assigns the value "admin" rather than comparing; it must be "===" or "==".',
          'Line 1: Function parameters cannot be named "userRole".',
          'Line 3: Return statements cannot return strings.',
          'Line 4: An if statement cannot be followed by an else block.'
        ],
        correctIndex: 0,
        fixCode: `function verifyAccess(userRole) {
  if (userRole === "admin") { // FIXED: Strict equality comparison
    return "Access Granted: Administrator Panel";
  } else {
    return "Access Denied: Standard User";
  }
}`,
        explanation: 'In JavaScript and most languages, a single "=" is the assignment operator. "userRole = \'admin\'" sets userRole to "admin", which evaluates as a truthy string! Strict comparison requires "===".'
      },
      {
        id: 3,
        title: 'Case #103: The Off-By-One Index Crash',
        topic: 'Arrays & Indexing',
        brief: 'This function attempts to print every item in an array of subject names, but prints "undefined" at the end. Why does this happen?',
        lines: [
          'const subjects = ["Math", "CS", "Tech"];',
          'for (let i = 0; i <= subjects.length; i++) { // Suspect line',
          '  console.log(subjects[i]);',
          '}'
        ],
        suspectLine: 2,
        options: [
          'Line 1: Array items must be enclosed in curly braces.',
          'Line 2: The loop uses "<=" instead of "<"; because of zero-indexing, subjects[3] is undefined.',
          'Line 3: Arrays cannot be logged to the console inside loops.',
          'Line 2: Loop counters cannot be named "i".'
        ],
        correctIndex: 1,
        fixCode: `const subjects = ["Math", "CS", "Tech"];
for (let i = 0; i < subjects.length; i++) { // FIXED: i < subjects.length
  console.log(subjects[i]);
}`,
        explanation: 'The array has 3 elements at indices 0, 1, and 2. With "<= subjects.length", the loop reaches index 3, which does not exist and yields "undefined". Use "i < subjects.length".'
      },
      {
        id: 4,
        title: 'Case #104: The Missing Return in Calculation',
        topic: 'Functions & Scope',
        brief: 'The function calculates tax on a purchase, but calling it always prints "undefined" instead of the calculated number. What went wrong?',
        lines: [
          'function calculateTax(amount, rate) {',
          '  const tax = amount * rate;',
          '  // Suspect line: No return statement!',
          '}',
          'const bill = calculateTax(100, 0.08);',
          'console.log("Tax is: " + bill); // Outputs: "Tax is: undefined"'
        ],
        suspectLine: 3,
        options: [
          'Line 1: Functions cannot take two arguments.',
          'Line 2: Multiplication must use the "x" symbol, not "*".',
          'Line 3: The function calculates the tax into a local variable but never returns it to the caller.',
          'Line 5: Numbers cannot be passed into functions.'
        ],
        correctIndex: 2,
        fixCode: `function calculateTax(amount, rate) {
  const tax = amount * rate;
  return tax; // FIXED: Explicitly return the computed value!
}`,
        explanation: 'In JavaScript, functions that finish execution without an explicit "return" statement automatically return undefined. Adding "return tax;" hands the computed value back to the caller.'
      }
    ],

    conceptMatchDecks: {
      programming: [
        { term: 'Algorithm', def: 'A step-by-step procedure designed to solve a problem.' },
        { term: 'Variable', def: 'A named memory location that stores dynamic values.' },
        { term: 'Boolean', def: 'A binary primitive type that can only be true or false.' },
        { term: 'Function', def: 'A reusable, encapsulated block of code that takes inputs and returns an output.' },
        { term: 'Array', def: 'An ordered, zero-indexed collection of items.' },
        { term: 'Infinite Loop', def: 'A loop whose termination condition never becomes false.' }
      ],
      'computer-science': [
        { term: 'ALU', def: 'The CPU component that performs arithmetic and logic calculations.' },
        { term: 'Kernel', def: 'The central core of an operating system with complete hardware control.' },
        { term: 'Primary Key', def: 'A unique identifier for each row in a database table.' },
        { term: 'Stack', def: 'A Last-In, First-Out (LIFO) data structure.' },
        { term: 'TCP', def: 'A reliable connection-oriented transport protocol with handshakes.' },
        { term: 'Context Switch', def: 'Saving CPU state of one process to run another process.' }
      ],
      mathematics: [
        { term: 'Discriminant', def: 'The term b² - 4ac determining the nature of quadratic roots.' },
        { term: 'Domain', def: 'The complete set of all valid inputs for a function.' },
        { term: 'Median', def: 'The middle value in a sorted dataset, resistant to outliers.' },
        { term: 'Standard Deviation', def: 'A metric measuring the spread of data around the mean.' },
        { term: 'Identity Matrix', def: 'A square matrix with 1s on the diagonal and 0s elsewhere.' },
        { term: 'Sample Space', def: 'The set of all possible outcomes of a probability experiment.' }
      ],
      technology: [
        { term: 'Narrow AI', def: 'Artificial intelligence specialized in a single dedicated task.' },
        { term: 'IaaS', def: 'Cloud model providing raw virtual machines and networking.' },
        { term: 'CIA Triad', def: 'Core security framework: Confidentiality, Integrity, and Availability.' },
        { term: 'MQTT', def: 'A lightweight publish-subscribe protocol tailored for IoT devices.' },
        { term: 'Supervised Learning', def: 'Machine learning trained on labeled input-output pairs.' },
        { term: 'Overfitting', def: 'When an ML model memorizes training noise and fails to generalize.' }
      ]
    },

    logicQuest: [
      {
        id: 1,
        title: 'Quest 1: The River Crossing Puzzle',
        difficulty: 'Easy',
        scenario: 'A farmer must transport a Fox, a Goose, and a Bag of Grain across a river in a small rowboat. The boat can only hold the farmer and ONE other item. If left unattended together, the Fox will eat the Goose, and the Goose will eat the Grain. The Fox does not eat grain.',
        question: 'Which item MUST the farmer transport across the river first to prevent any catastrophe?',
        hint: 'Think about which single item conflicts with BOTH of the other two items if left alone.',
        options: [
          'Take the Fox first.',
          'Take the Goose first.',
          'Take the Grain first.',
          'It is mathematically impossible to solve.'
        ],
        correctIndex: 1,
        explanation: 'Correct! Taking the Goose first leaves the Fox alone with the Grain (which the Fox will not eat). Then the farmer can return for the other items without incident!'
      },
      {
        id: 2,
        title: 'Quest 2: The Two Temple Guardians',
        difficulty: 'Medium',
        scenario: 'You stand before two doors: one leads to Freedom, the other to a trap. Guarding the doors are two sentinels. Sentinel A ALWAYS speaks the truth. Sentinel B ALWAYS lies. You do not know which sentinel is which. You are allowed to ask only ONE single question to ONE sentinel to find the door to Freedom.',
        question: 'What single question should you ask either guard?',
        hint: 'Invert the truth table: a liar telling the truth about a lie and a truth-teller reporting a liar will both point to the same door.',
        options: [
          '"Is the sun shining outside?"',
          '"Which door would the OTHER sentinel tell me leads to Freedom?"',
          '"Are you a liar or a truth-teller?"',
          '"Can you open the door on my left?"'
        ],
        correctIndex: 1,
        explanation: 'Brilliant! If you ask "Which door would the other sentinel say?", both guards will point to the TRAP door! (The truth-teller truthfully reports the liar\'s lie; the liar lies about the truth-teller\'s honesty). You simply walk through the opposite door!'
      },
      {
        id: 3,
        title: 'Quest 3: The Secret Number Binary Search',
        difficulty: 'Medium',
        scenario: 'A friend picks a secret integer between 1 and 100 inclusive. After each guess, your friend only answers "Higher", "Lower", or "Correct!". Using an optimal binary search strategy, what is the MAXIMUM number of guesses you will ever need to guarantee finding the secret number?',
        hint: 'Each guess divides the remaining candidates in half. What power of 2 is greater than or equal to 100?',
        options: [
          '50 guesses',
          '7 guesses',
          '10 guesses',
          '100 guesses'
        ],
        correctIndex: 1,
        explanation: 'Correct! 2^6 = 64 and 2^7 = 128. Since 128 > 100, at most 7 binary guesses are needed to isolate any number between 1 and 100!'
      },
      {
        id: 4,
        title: 'Quest 4: The Logic Gate Circuit',
        difficulty: 'Hard',
        scenario: 'You are analyzing a digital logic circuit. Input A is TRUE (1), and Input B is FALSE (0). The signals pass through: Circuit 1: (A AND B) -> Output X. Circuit 2: (NOT B) -> Output Y. Finally, X and Y enter an OR gate: (X OR Y) -> Final Output Z.',
        question: 'What is the final state of Output Z?',
        hint: 'Evaluate X first: 1 AND 0 = ? Then evaluate Y: NOT 0 = ? Finally, evaluate X OR Y.',
        options: [
          'TRUE (1)',
          'FALSE (0)',
          'Floating / Undefined',
          'Alternating Oscillating Signal'
        ],
        correctIndex: 0,
        explanation: 'Correct! X = (1 AND 0) = 0. Y = (NOT 0) = 1. Output Z = (0 OR 1) = 1 (TRUE)!'
      }
    ]
  };

  /* ============================================================
     3. STATE MANAGEMENT & LOCAL STORAGE ENGINE
     ============================================================ */
  const STORAGE_KEY = 'confusioncloud_progress_v2';

  const State = {
    currentView: 'homepage', // 'homepage' | 'subject' | 'games' | 'concept-map' | 'find-mistake' | 'gap-detector' | 'detective-bureau'
    activeSubject: null,
    activeLessonIndex: 0,
    activeSubjectTab: 'lessons', // 'lessons' | 'quiz'
    activeGame: 'code-detective',
    
    // Progress Data (Persisted in LocalStorage)
    progress: {
      completedLessons: [], // Array of lesson IDs: ['prog-intro', ...]
      quizHighScores: {},   // { programming: 5, ... }
      gamesStats: {
        codeDetective: { score: 0, streak: 0, currentCaseIndex: 0, solvedIds: [] },
        conceptMatch: { matchesWon: 0, bestTimeSec: 0 },
        logicQuest: { solvedIds: [], score: 0 }
      },
      // Extended Features Persistence
      mistakeStats: {
        solvedIds: [], // ['mistake-prog-c-bounds', ...]
        score: 0
      },
      detectiveStats: {
        attemptedIds: [], // ['case-prog-broken-code', ...]
        solvedIds: [],    // ['case-prog-broken-code', ...]
        score: 0,
        totalDecisions: 0,
        correctDecisions: 0,
        incorrectDecisions: 0,
        activeCases: {}   // caseId -> { examinedClues: [], investigatedLeads: [], d1Solved: false, d2Solved: false, caseDecisions: 0, caseCorrect: 0 }
      },
      assessmentLog: [], // [{ topicId, subjectId, isCorrect, source: 'quiz'|'checkpoint'|'mistake'|'diagnostic'|'detective', timestamp, prompt }]
      remediatedGaps: [], // Array of topic IDs where gap has been resolved
      conceptMapVisited: [], // Nodes explored in concept map
      badges: []
    },

    // Transient Quiz State
    quizState: {
      subjectId: null,
      currentIndex: 0,
      score: 0,
      answers: [],
      isAnswered: false
    },

    // Transient Concept Match State
    matchState: {
      deckKey: 'programming',
      selectedTerm: null,
      selectedDef: null,
      matchedPairsCount: 0,
      moves: 0,
      timerSeconds: 0,
      timerInterval: null,
      isLocked: false
    },

    // Transient Concept Connection Map State
    conceptMapState: {
      activeSubject: 'all',
      selectedNodeId: 'prog-vars',
      zoomScale: 1,
      panX: 0,
      panY: 0,
      isPanning: false,
      startClientX: 0,
      startClientY: 0,
      startPanX: 0,
      startPanY: 0
    },

    // Transient Find the Mistake State
    mistakeState: {
      activeFilterSubject: 'all',
      activeFilterDiff: 'all',
      currentIndex: 0,
      selectedLineOrStep: null,
      selectedOptionIndex: null,
      isSubmitted: false
    },

    // Transient Detective Bureau State
    detectiveState: {
      activeCaseId: null, // null = Bureau Landing, string = Active Case Workbench
      statusFilter: 'all', // 'all' | 'active' | 'solved'
      subjectFilter: 'all',
      difficultyFilter: 'all'
    },

    // Transient Diagnostic & Retake Modal State
    diagnosticState: {
      mode: 'diagnostic', // 'diagnostic' | 'retake'
      activeTopicId: null,
      currentIndex: 0,
      questions: [],
      score: 0,
      isAnswered: false
    }
  };

  function loadProgressFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        State.progress = Object.assign(State.progress, parsed);

        // Ensure newly introduced data structures are properly initialized without losing existing data
        if (!State.progress.gamesStats) {
          State.progress.gamesStats = {
            codeDetective: { score: 0, streak: 0, currentCaseIndex: 0, solvedIds: [] },
            conceptMatch: { matchesWon: 0, bestTimeSec: 0 },
            logicQuest: { solvedIds: [], score: 0 }
          };
        }
        if (!State.progress.gamesStats.codeDetective) {
          State.progress.gamesStats.codeDetective = { score: 0, streak: 0, currentCaseIndex: 0, solvedIds: [] };
        }
        if (!Array.isArray(State.progress.gamesStats.codeDetective.solvedIds)) {
          State.progress.gamesStats.codeDetective.solvedIds = [];
        }
        if (!State.progress.mistakeStats) {
          State.progress.mistakeStats = { solvedIds: [], score: 0 };
        }
        if (!State.progress.detectiveStats) {
          State.progress.detectiveStats = {
            attemptedIds: [],
            solvedIds: [],
            score: 0,
            totalDecisions: 0,
            correctDecisions: 0,
            incorrectDecisions: 0,
            activeCases: {}
          };
        } else {
          if (!Array.isArray(State.progress.detectiveStats.attemptedIds)) State.progress.detectiveStats.attemptedIds = [];
          if (!Array.isArray(State.progress.detectiveStats.solvedIds)) State.progress.detectiveStats.solvedIds = [];
          if (typeof State.progress.detectiveStats.score !== 'number') State.progress.detectiveStats.score = 0;
          if (typeof State.progress.detectiveStats.totalDecisions !== 'number') State.progress.detectiveStats.totalDecisions = 0;
          if (typeof State.progress.detectiveStats.correctDecisions !== 'number') State.progress.detectiveStats.correctDecisions = 0;
          if (typeof State.progress.detectiveStats.incorrectDecisions !== 'number') State.progress.detectiveStats.incorrectDecisions = 0;
          if (!State.progress.detectiveStats.activeCases || typeof State.progress.detectiveStats.activeCases !== 'object') {
            State.progress.detectiveStats.activeCases = {};
          }
        }
        if (!Array.isArray(State.progress.assessmentLog)) {
          State.progress.assessmentLog = [];
        }
        if (!Array.isArray(State.progress.remediatedGaps)) {
          State.progress.remediatedGaps = [];
        }
        if (!Array.isArray(State.progress.conceptMapVisited)) {
          State.progress.conceptMapVisited = [];
        }
        if (!Array.isArray(State.progress.badges)) {
          State.progress.badges = [];
        }
      }
    } catch (err) {
      console.warn('Could not read from localStorage', err);
    }
    evaluateBadges();
  }

  function saveProgressToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(State.progress));
      updateGlobalProgressPills();
      updateHomepageSubjectCards();
    } catch (err) {
      console.warn('Could not save to localStorage', err);
    }
  }

  function logAssessment(topicId, subjectId, isCorrect, source, promptText) {
    if (!State.progress.assessmentLog) {
      State.progress.assessmentLog = [];
    }

    const entry = {
      topicId: topicId,
      subjectId: subjectId,
      isCorrect: Boolean(isCorrect),
      source: source || 'assessment',
      timestamp: Date.now(),
      prompt: String(promptText || '')
    };

    State.progress.assessmentLog.push(entry);

    // Keep log bounded to most recent 200 events to preserve performance
    if (State.progress.assessmentLog.length > 200) {
      State.progress.assessmentLog = State.progress.assessmentLog.slice(-200);
    }

    // Update remediation state accurately based on latest outcome
    if (!isCorrect) {
      const remIdx = State.progress.remediatedGaps.indexOf(topicId);
      if (remIdx !== -1) {
        State.progress.remediatedGaps.splice(remIdx, 1);
      }
    } else if (isCorrect && !State.progress.remediatedGaps.includes(topicId)) {
      State.progress.remediatedGaps.push(topicId);
    }

    saveProgressToStorage();
    evaluateBadges();
  }

  function resetAllProgress() {
    if (confirm('Are you sure you want to reset all your lesson progress, quiz scores, detective investigations, diagnostic gaps, and game achievements? This cannot be undone.')) {
      State.progress = {
        completedLessons: [],
        quizHighScores: {},
        gamesStats: {
          codeDetective: { score: 0, streak: 0, currentCaseIndex: 0, solvedIds: [] },
          conceptMatch: { matchesWon: 0, bestTimeSec: 0 },
          logicQuest: { solvedIds: [], score: 0 }
        },
        mistakeStats: {
          solvedIds: [],
          score: 0
        },
        detectiveStats: {
          attemptedIds: [],
          solvedIds: [],
          score: 0,
          totalDecisions: 0,
          correctDecisions: 0,
          incorrectDecisions: 0,
          activeCases: {}
        },
        assessmentLog: [],
        remediatedGaps: [],
        conceptMapVisited: [],
        badges: []
      };
      saveProgressToStorage();
      renderDashboardModal();
      showToast('All learning progress and diagnostics have been reset.');
      
      // If inside subject, refresh
      if (State.activeSubject) {
        renderSubjectSidebar();
        renderActiveLesson();
      }
      if (State.currentView === 'find-mistake') {
        renderMistakeStepperRibbon();
        renderMistakeChallenge();
      }
      if (State.currentView === 'gap-detector') {
        renderKnowledgeGapDetector();
      }
      if (State.currentView === 'detective-bureau') {
        initDetectiveBureau();
      }
    }
  }

  function getTotalLessonsCount() {
    let total = 0;
    for (const key in CURRICULUM) {
      total += CURRICULUM[key].lessons.length;
    }
    return total; // 21
  }

  function getOverallCompletionPercentage() {
    const total = getTotalLessonsCount();
    const completed = State.progress.completedLessons.length;
    return Math.min(100, Math.round((completed / total) * 100));
  }

  function getDetectiveRank(solvedCount) {
    if (solvedCount >= 12) return 'Chief STEM Inspector';
    if (solvedCount >= 8) return 'Senior Investigator';
    if (solvedCount >= 4) return 'Lead Analyst';
    if (solvedCount >= 1) return 'Junior Detective';
    return 'Field Cadet';
  }

  function evaluateBadges() {
    const completed = State.progress.completedLessons.length;
    const badges = State.progress.badges || [];

    function grant(id) {
      if (!badges.includes(id)) {
        badges.push(id);
      }
    }

    if (completed >= 1) grant('first_step');
    if (completed >= 6) grant('code_initiate');
    if (completed >= 15) grant('stem_scholar');
    if (completed >= 21) grant('curriculum_master');

    // Quiz mastery badges
    let perfectQuizzes = 0;
    for (const subId in State.progress.quizHighScores) {
      if (State.progress.quizHighScores[subId] >= 5) perfectQuizzes++;
    }
    if (perfectQuizzes >= 1) grant('quiz_ace');
    if (perfectQuizzes >= 4) grant('grandmaster');

    // Games badges
    if (State.progress.gamesStats.codeDetective.score >= 30 || (State.progress.gamesStats.codeDetective.solvedIds && State.progress.gamesStats.codeDetective.solvedIds.length >= 3)) grant('bug_hunter');
    if (State.progress.gamesStats.conceptMatch.matchesWon >= 2) grant('vocab_virtuoso');
    if (State.progress.gamesStats.logicQuest.solvedIds.length >= 3) grant('logic_titan');

    // Smart Tools Badges
    if (State.progress.mistakeStats && State.progress.mistakeStats.solvedIds.length >= 3) {
      grant('bug_diagnostician');
    }
    if (State.progress.mistakeStats && State.progress.mistakeStats.solvedIds.length >= 8) {
      grant('master_debugger');
    }
    if (State.progress.remediatedGaps && State.progress.remediatedGaps.length >= 1) {
      grant('gap_closer');
    }
    if (State.progress.conceptMapVisited && State.progress.conceptMapVisited.length >= 5) {
      grant('concept_explorer');
    }

    // Detective Bureau Badges
    if (State.progress.detectiveStats && State.progress.detectiveStats.solvedIds.length >= 1) {
      grant('junior_detective');
    }
    if (State.progress.detectiveStats && State.progress.detectiveStats.solvedIds.length >= 6) {
      grant('senior_investigator');
    }
    if (State.progress.detectiveStats && State.progress.detectiveStats.solvedIds.length >= 12) {
      grant('chief_inspector');
    }

    State.progress.badges = badges;
  }

  /* ============================================================
     4. UI TOAST & SOUND EFFECTS (WEB AUDIO API)
     ============================================================ */
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function playSoftChime(isPositive = true) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isPositive) {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.12); // E5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else {
        osc.frequency.setValueAtTime(329.63, ctx.currentTime); // E4
        osc.frequency.exponentialRampToValueAtTime(261.63, ctx.currentTime + 0.15); // C4
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
      }
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* ============================================================
     5. SPA VIEW ROUTING & NAVIGATION
     ============================================================ */
  function navigateTo(viewName, params = {}) {
    // Stop Concept Match timer if leaving games view
    if (viewName !== 'games' && State.matchState.timerInterval) {
      clearInterval(State.matchState.timerInterval);
      State.matchState.timerInterval = null;
    }

    // Hide all main page views completely
    const allViews = document.querySelectorAll('.page-view');
    allViews.forEach(v => v.classList.remove('active'));

    const header = document.getElementById('site-header');

    if (viewName === 'homepage') {
      State.currentView = 'homepage';
      State.activeSubject = null;
      document.getElementById('homepage-view').classList.add('active');
      if (header) header.style.display = 'block';
      window.scrollTo(0, 0);
      updateHomepageSubjectCards();
    } else if (viewName === 'subject') {
      State.currentView = 'subject';
      State.activeSubject = params.subjectId || 'programming';
      State.activeLessonIndex = params.lessonIndex !== undefined ? params.lessonIndex : 0;
      State.activeSubjectTab = params.tab || 'lessons';

      // Hide site header during dedicated subject interface to ensure a distraction-free SPA learning experience
      if (header) header.style.display = 'none';

      document.getElementById('subject-view').classList.add('active');
      renderSubjectView();
      window.scrollTo(0, 0);
    } else if (viewName === 'games') {
      State.currentView = 'games';
      if (header) header.style.display = 'none';
      document.getElementById('games-view').classList.add('active');
      if (params.gameTarget) {
        switchGameTab(params.gameTarget);
      } else {
        switchGameTab(State.activeGame);
      }
      window.scrollTo(0, 0);
    } else if (viewName === 'concept-map') {
      State.currentView = 'concept-map';
      if (header) header.style.display = 'none';
      document.getElementById('concept-map-view').classList.add('active');
      initConceptMap(params.subject || 'all', params.nodeId);
      window.scrollTo(0, 0);
    } else if (viewName === 'find-mistake') {
      State.currentView = 'find-mistake';
      if (header) header.style.display = 'none';
      document.getElementById('find-mistake-view').classList.add('active');
      initFindMistake(params.challengeIndex !== undefined ? params.challengeIndex : 0, params.subject);
      window.scrollTo(0, 0);
    } else if (viewName === 'gap-detector') {
      State.currentView = 'gap-detector';
      if (header) header.style.display = 'none';
      document.getElementById('gap-detector-view').classList.add('active');
      renderKnowledgeGapDetector();
      window.scrollTo(0, 0);
    } else if (viewName === 'detective-bureau') {
      State.currentView = 'detective-bureau';
      if (header) header.style.display = 'none';
      document.getElementById('detective-bureau-view').classList.add('active');
      initDetectiveBureau(params);
      window.scrollTo(0, 0);
    }

    updateGlobalProgressPills();
  }

  function updateGlobalProgressPills() {
    const pct = getOverallCompletionPercentage();
    const navPill = document.getElementById('nav-progress-pct');
    const mobilePill = document.getElementById('mobile-nav-progress-pct');
    if (navPill) navPill.textContent = `${pct}%`;
    if (mobilePill) mobilePill.textContent = `${pct}%`;
  }

  function updateHomepageSubjectCards() {
    for (const subId in CURRICULUM) {
      const sub = CURRICULUM[subId];
      const completedCount = sub.lessons.filter(l => State.progress.completedLessons.includes(l.id)).length;
      const totalCount = sub.lessons.length;
      const pct = Math.round((completedCount / totalCount) * 100);

      const fill = document.getElementById(`card-progress-${subId}`);
      const label = document.getElementById(`card-label-${subId}`);
      if (fill) fill.style.width = `${pct}%`;
      if (label) label.textContent = `${completedCount}/${totalCount} Done`;
    }

    // Update Homepage Detective Bureau live dossier summary
    const det = State.progress.detectiveStats || { attemptedIds: [], solvedIds: [], score: 0, totalDecisions: 0, correctDecisions: 0 };
    const solvedCount = det.solvedIds ? det.solvedIds.length : 0;
    const activeCount = (det.attemptedIds ? det.attemptedIds.filter(id => !det.solvedIds.includes(id)).length : 0);
    const acc = det.totalDecisions > 0 ? Math.round((det.correctDecisions / det.totalDecisions) * 100) : 0;

    const rankEl = document.getElementById('home-detective-rank');
    const scoreEl = document.getElementById('home-detective-score');
    const solvedEl = document.getElementById('home-detective-solved');
    const activeEl = document.getElementById('home-detective-active');
    const accEl = document.getElementById('home-detective-accuracy');

    if (rankEl) rankEl.textContent = getDetectiveRank(solvedCount);
    if (scoreEl) scoreEl.textContent = String(det.score || 0);
    if (solvedEl) solvedEl.textContent = `${solvedCount} / 12`;
    if (activeEl) activeEl.textContent = String(activeCount);
    if (accEl) accEl.textContent = `${acc}%`;
  }

  /* ============================================================
     6. DEDICATED SUBJECT VIEW CONTROLLER
     ============================================================ */
  function renderSubjectView() {
    const subjectData = CURRICULUM[State.activeSubject];
    if (!subjectData) return;

    // Header updates
    const titleEl = document.getElementById('subject-header-title');
    const badgeEl = document.getElementById('subject-header-badge');
    const lessonsCounter = document.getElementById('subject-lessons-counter');
    const quizPill = document.getElementById('subject-quiz-status-pill');

    if (titleEl) titleEl.textContent = subjectData.title;
    if (badgeEl) badgeEl.textContent = subjectData.title;

    const completedInSub = subjectData.lessons.filter(l => State.progress.completedLessons.includes(l.id)).length;
    if (lessonsCounter) lessonsCounter.textContent = `${completedInSub}/${subjectData.lessons.length}`;

    const quizScore = State.progress.quizHighScores[State.activeSubject];
    if (quizPill) {
      if (quizScore !== undefined) {
        quizPill.textContent = `Score: ${quizScore}/5`;
      } else {
        quizPill.textContent = 'Untested';
      }
    }

    // Switch between Lessons panel and Quiz panel
    setSubjectTab(State.activeSubjectTab);

    renderSubjectSidebar();
    renderActiveLesson();
  }

  function setSubjectTab(tab) {
    State.activeSubjectTab = tab;
    const tabLessons = document.getElementById('tab-lessons');
    const tabQuiz = document.getElementById('tab-quiz');
    const panelLessons = document.getElementById('subject-lessons-panel');
    const panelQuiz = document.getElementById('subject-quiz-panel');

    if (tab === 'lessons') {
      if (tabLessons) tabLessons.classList.add('active');
      if (tabQuiz) tabQuiz.classList.remove('active');
      if (panelLessons) panelLessons.classList.add('active');
      if (panelQuiz) panelQuiz.classList.remove('active');
    } else {
      if (tabLessons) tabLessons.classList.remove('active');
      if (tabQuiz) tabQuiz.classList.add('active');
      if (panelLessons) panelLessons.classList.remove('active');
      if (panelQuiz) panelQuiz.classList.add('active');
      startSubjectQuiz(State.activeSubject);
    }
  }

  function renderSubjectSidebar() {
    const subjectData = CURRICULUM[State.activeSubject];
    const listEl = document.getElementById('lesson-nav-list');
    if (!listEl || !subjectData) return;

    listEl.innerHTML = '';
    subjectData.lessons.forEach((lesson, index) => {
      const isCompleted = State.progress.completedLessons.includes(lesson.id);
      const isActive = index === State.activeLessonIndex;

      const li = document.createElement('li');
      li.className = `lesson-nav-item ${isActive ? 'active' : ''}`;
      li.setAttribute('role', 'tab');
      li.setAttribute('aria-selected', isActive ? 'true' : 'false');
      li.setAttribute('tabindex', '0');

      li.innerHTML = `
        <div class="lesson-item-left">
          <span class="lesson-num-badge">${String(index + 1).padStart(2, '0')}</span>
          <span class="lesson-title-text">${escapeHtml(lesson.title)}</span>
        </div>
        <div class="lesson-status-icon ${isCompleted ? 'completed' : ''}" title="${isCompleted ? 'Completed' : 'Incomplete'}">
          ${isCompleted ? '✓' : '○'}
        </div>
      `;

      li.addEventListener('click', () => {
        State.activeLessonIndex = index;
        setSubjectTab('lessons');
        renderSubjectSidebar();
        renderActiveLesson();
        window.scrollTo(0, 0);

        // Close mobile drawer if open
        const sidebar = document.getElementById('subject-sidebar');
        if (sidebar) sidebar.classList.remove('open');
      });

      listEl.appendChild(li);
    });
  }

  function renderActiveLesson() {
    const subjectData = CURRICULUM[State.activeSubject];
    if (!subjectData) return;
    const lesson = subjectData.lessons[State.activeLessonIndex];
    if (!lesson) return;

    const wrapper = document.getElementById('lesson-card-wrapper');
    if (!wrapper) return;

    const isCompleted = State.progress.completedLessons.includes(lesson.id);

    wrapper.innerHTML = `
      <div class="lesson-meta-bar">
        <div class="lesson-crumb">
          <span class="lesson-crumb-subject">${escapeHtml(subjectData.title)}</span> &bull; 
          <span>Lesson ${State.activeLessonIndex + 1} of ${subjectData.lessons.length}</span>
        </div>
        <div class="lesson-status-pill ${isCompleted ? 'completed' : 'uncompleted'}">
          ${isCompleted ? '✓ Completed' : '● In Progress'}
        </div>
      </div>

      <h1 class="lesson-heading">${escapeHtml(lesson.title)}</h1>

      <!-- Section 1: Simple Explanation -->
      <section class="lesson-section-block">
        <h2 class="lesson-block-title">
          <span class="block-title-icon">📖</span>
          <span>1. Conceptual Understanding</span>
        </h2>
        <div class="lesson-prose">
          ${lesson.explanation}
        </div>
      </section>

      <!-- Section 2: Relevant Example -->
      <section class="lesson-section-block">
        <h2 class="lesson-block-title">
          <span class="block-title-icon">💻</span>
          <span>2. Practical Example</span>
        </h2>
        <div class="code-window">
          <div class="code-window-header">
            <div class="code-window-dots">
              <span class="code-dot dot-red"></span>
              <span class="code-dot dot-yellow"></span>
              <span class="code-dot dot-green"></span>
            </div>
            <span class="code-window-title">${escapeHtml(lesson.example.title)}</span>
            <button class="code-copy-btn" id="btn-copy-code">Copy Code</button>
          </div>
          <div class="code-content">
            <pre><code>${lesson.example.code}</code></pre>
          </div>
        </div>
      </section>

      <!-- Section 3: Important Concepts / Takeaways -->
      <section class="lesson-section-block">
        <h2 class="lesson-block-title">
          <span class="block-title-icon">🎯</span>
          <span>3. Core Takeaways</span>
        </h2>
        <div class="key-takeaways-card">
          <div class="takeaways-title">Key Rules to Remember</div>
          <ul class="takeaways-list">
            ${lesson.takeaways.map(t => `<li class="takeaways-item">${escapeHtml(t)}</li>`).join('')}
          </ul>
        </div>
      </section>

      <!-- Section 4: Interactive Practice Checkpoint -->
      <section class="practice-card">
        <div class="practice-header">
          <span class="practice-kicker">Practice Checkpoint</span>
          <span class="badge-tag">Knowledge Retention</span>
        </div>
        <h3 class="practice-question-text">${escapeHtml(lesson.practice.question)}</h3>
        <div class="practice-options" id="practice-options-group">
          ${lesson.practice.options.map((opt, i) => `
            <button class="practice-opt-btn" data-index="${i}">
              <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
              <span>${escapeHtml(opt)}</span>
            </button>
          `).join('')}
        </div>
        <div class="practice-feedback" id="practice-feedback-box"></div>
      </section>

      <!-- Connected Tools & Detective Investigation Bridge -->
      <div class="lesson-tools-bridge">
        <div style="font-size: 0.85rem; color: var(--text-secondary);">
          <strong>Deepen Your Intuition:</strong> Explore how <em>${escapeHtml(lesson.title)}</em> connects across STEM or investigate a related case file.
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" id="btn-lesson-to-map" style="padding: 0.45rem 0.85rem; font-size: 0.8125rem;">
            <span>View in Concept Map</span>
          </button>
          <button class="btn btn-outline" id="btn-lesson-to-detective" style="padding: 0.45rem 0.85rem; font-size: 0.8125rem;">
            <span>Investigate Subject Cases</span>
          </button>
        </div>
      </div>
    `;

    // Hook up lesson tool bridges
    const mapBridgeBtn = document.getElementById('btn-lesson-to-map');
    if (mapBridgeBtn) {
      mapBridgeBtn.addEventListener('click', () => {
        const matchingNode = CONCEPT_MAP_DATA.nodes.find(n => n.lessonId === lesson.id);
        navigateTo('concept-map', { subject: 'all', nodeId: matchingNode ? matchingNode.id : 'prog-vars' });
      });
    }

    const detBridgeBtn = document.getElementById('btn-lesson-to-detective');
    if (detBridgeBtn) {
      detBridgeBtn.addEventListener('click', () => {
        navigateTo('detective-bureau', { subject: State.activeSubject });
      });
    }

    // Hook up copy code button
    const copyBtn = document.getElementById('btn-copy-code');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const rawCode = lesson.example.code.replace(/<[^>]*>?/gm, '');
        navigator.clipboard.writeText(rawCode).then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => (copyBtn.textContent = 'Copy Code'), 2000);
        });
      });
    }

    // Hook up Practice Checkpoint options
    const optButtons = wrapper.querySelectorAll('.practice-opt-btn');
    const feedbackBox = document.getElementById('practice-feedback-box');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = parseInt(btn.getAttribute('data-index'), 10);
        const correct = lesson.practice.correctIndex;

        optButtons.forEach(b => {
          b.disabled = true;
          const idx = parseInt(b.getAttribute('data-index'), 10);
          if (idx === correct) b.classList.add('correct');
        });

        if (chosen === correct) {
          btn.classList.add('correct');
          feedbackBox.className = 'practice-feedback visible success';
          feedbackBox.innerHTML = `<strong>Correct!</strong> ${escapeHtml(lesson.practice.explanation)}`;
          playSoftChime(true);
          markLessonCompleted(lesson.id, false);
          logAssessment(lesson.id, State.activeSubject, true, 'checkpoint', lesson.practice.question);
        } else {
          btn.classList.add('incorrect');
          feedbackBox.className = 'practice-feedback visible error';
          feedbackBox.innerHTML = `<strong>Not quite.</strong> ${escapeHtml(lesson.practice.explanation)}`;
          playSoftChime(false);
          logAssessment(lesson.id, State.activeSubject, false, 'checkpoint', lesson.practice.question);
        }
      });
    });

    // Update Bottom Nav Buttons
    const prevBtn = document.getElementById('btn-prev-lesson');
    const nextBtn = document.getElementById('btn-complete-and-next');
    const nextLabel = document.getElementById('label-next-lesson');

    if (prevBtn) {
      prevBtn.disabled = State.activeLessonIndex === 0;
      prevBtn.style.opacity = State.activeLessonIndex === 0 ? '0.4' : '1';
    }

    const isLastLesson = State.activeLessonIndex === subjectData.lessons.length - 1;
    if (nextLabel) {
      nextLabel.textContent = isLastLesson ? 'Finish & Take Quiz' : 'Mark Complete & Next';
    }
  }

  function markLessonCompleted(lessonId, showNotification = true) {
    if (!State.progress.completedLessons.includes(lessonId)) {
      State.progress.completedLessons.push(lessonId);
      evaluateBadges();
      saveProgressToStorage();

      if (showNotification) {
        showToast('Lesson marked as completed! 🎉');
      }

      // Update sidebar icons
      renderSubjectSidebar();

      // Update header counter
      const subjectData = CURRICULUM[State.activeSubject];
      const completedInSub = subjectData.lessons.filter(l => State.progress.completedLessons.includes(l.id)).length;
      const counter = document.getElementById('subject-lessons-counter');
      if (counter) counter.textContent = `${completedInSub}/${subjectData.lessons.length}`;
    }
  }

  function handleNextLesson() {
    const subjectData = CURRICULUM[State.activeSubject];
    if (!subjectData) return;
    const currentLesson = subjectData.lessons[State.activeLessonIndex];
    markLessonCompleted(currentLesson.id, false);

    if (State.activeLessonIndex < subjectData.lessons.length - 1) {
      State.activeLessonIndex++;
      renderSubjectSidebar();
      renderActiveLesson();
      window.scrollTo(0, 0);
    } else {
      // Transition to Quiz!
      showToast('All lessons completed! Starting Subject Quiz...');
      setSubjectTab('quiz');
      window.scrollTo(0, 0);
    }
  }

  function handlePrevLesson() {
    if (State.activeLessonIndex > 0) {
      State.activeLessonIndex--;
      renderSubjectSidebar();
      renderActiveLesson();
      window.scrollTo(0, 0);
    }
  }

  /* ============================================================
     7. INTERACTIVE SUBJECT QUIZ ENGINE
     ============================================================ */
  function startSubjectQuiz(subjectId) {
    const subjectData = CURRICULUM[subjectId];
    if (!subjectData || !subjectData.quiz) return;

    State.quizState = {
      subjectId: subjectId,
      currentIndex: 0,
      score: 0,
      answers: [],
      isAnswered: false
    };

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const subjectData = CURRICULUM[State.quizState.subjectId];
    const quiz = subjectData.quiz;
    const current = quiz[State.quizState.currentIndex];
    const container = document.getElementById('quiz-container-card');
    if (!container || !current) return;

    const progressPct = Math.round(((State.quizState.currentIndex) / quiz.length) * 100);

    container.innerHTML = `
      <div class="quiz-header-status">
        <div class="quiz-prog-info">
          <span class="quiz-step-label">${escapeHtml(subjectData.title)} Mastery Quiz</span>
          <div class="quiz-progress-bar-track">
            <div class="quiz-progress-bar-fill" style="width: ${progressPct}%;"></div>
          </div>
        </div>
        <div class="quiz-score-ticker">
          Question ${State.quizState.currentIndex + 1} of ${quiz.length}
        </div>
      </div>

      <div class="quiz-question-box">
        <h3 class="quiz-question-prompt">${escapeHtml(current.prompt)}</h3>
        <div class="quiz-options-list" id="quiz-options-list">
          ${current.options.map((opt, i) => `
            <div class="quiz-option-card" data-index="${i}" tabindex="0" role="button">
              <span class="quiz-opt-marker">${String.fromCharCode(65 + i)}</span>
              <span class="quiz-opt-text">${escapeHtml(opt)}</span>
            </div>
          `).join('')}
        </div>
        <div class="quiz-explanation-box" id="quiz-explanation-box"></div>
      </div>

      <div class="quiz-actions-row">
        <button class="btn btn-primary" id="btn-next-quiz-question" style="display: none;">
          <span>${State.quizState.currentIndex === quiz.length - 1 ? 'View Final Results' : 'Next Question'}</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    `;

    const optionCards = container.querySelectorAll('.quiz-option-card');
    const explanationBox = document.getElementById('quiz-explanation-box');
    const nextBtn = document.getElementById('btn-next-quiz-question');

    optionCards.forEach(card => {
      card.addEventListener('click', () => {
        if (State.quizState.isAnswered) return;
        State.quizState.isAnswered = true;

        const chosenIndex = parseInt(card.getAttribute('data-index'), 10);
        const isCorrect = chosenIndex === current.correct;

        if (isCorrect) {
          State.quizState.score++;
          playSoftChime(true);
        } else {
          playSoftChime(false);
        }

        State.quizState.answers.push({
          questionIndex: State.quizState.currentIndex,
          chosen: chosenIndex,
          correct: current.correct,
          isCorrect: isCorrect
        });

        // Log assessment for Knowledge Gap Detector
        const quizTopicMap = {
          programming: ['prog-intro', 'prog-vars', 'prog-loops', 'prog-functions', 'prog-arrays'],
          'computer-science': ['cs-fundamentals', 'cs-dbms', 'cs-ds', 'cs-networks', 'cs-os'],
          mathematics: ['math-algebra', 'math-prob', 'math-stats', 'math-matrices', 'math-functions'],
          technology: ['tech-ai', 'tech-cloud', 'tech-cybersecurity', 'tech-ml', 'tech-iot']
        };
        const qTopicId = (quizTopicMap[State.quizState.subjectId] && quizTopicMap[State.quizState.subjectId][State.quizState.currentIndex]) || State.quizState.subjectId;
        logAssessment(qTopicId, State.quizState.subjectId, isCorrect, 'quiz', current.prompt);

        // Visual lock and color updates
        optionCards.forEach(c => {
          c.classList.add('locked');
          const idx = parseInt(c.getAttribute('data-index'), 10);
          if (idx === current.correct) {
            c.classList.add('correct');
          } else if (idx === chosenIndex && !isCorrect) {
            c.classList.add('incorrect');
          }
        });

        explanationBox.className = `quiz-explanation-box visible ${isCorrect ? 'correct' : 'incorrect'}`;
        explanationBox.innerHTML = `
          <strong>${isCorrect ? '✓ Correct Answer!' : '✕ Incorrect.'}</strong>
          <p>${escapeHtml(current.explanation)}</p>
        `;

        nextBtn.style.display = 'inline-flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      if (State.quizState.currentIndex < quiz.length - 1) {
        State.quizState.currentIndex++;
        State.quizState.isAnswered = false;
        renderQuizQuestion();
      } else {
        renderQuizResults();
      }
    });
  }

  function renderQuizResults() {
    const subjectData = CURRICULUM[State.quizState.subjectId];
    const total = subjectData.quiz.length;
    const score = State.quizState.score;
    const percentage = Math.round((score / total) * 100);

    // Save high score
    const prevBest = State.progress.quizHighScores[State.quizState.subjectId] || 0;
    if (score > prevBest) {
      State.progress.quizHighScores[State.quizState.subjectId] = score;
    } else if (State.progress.quizHighScores[State.quizState.subjectId] === undefined) {
      State.progress.quizHighScores[State.quizState.subjectId] = score;
    }
    evaluateBadges();
    saveProgressToStorage();

    const container = document.getElementById('quiz-container-card');
    if (!container) return;

    let tier = 'Needs Review';
    let trophyIcon = '🌱';
    if (percentage >= 80) {
      tier = 'Mastery Achieved!';
      trophyIcon = '🏆';
    } else if (percentage >= 60) {
      tier = 'Proficient Scholar';
      trophyIcon = '⭐';
    }

    container.innerHTML = `
      <div class="quiz-result-view">
        <div class="result-trophy">${trophyIcon}</div>
        <h2 class="result-title">${tier}</h2>
        <div class="result-score-callout">${score} / ${total}</div>
        <p class="result-score-sub">${percentage}% Final Score in ${escapeHtml(subjectData.title)}</p>
        
        <div class="result-actions">
          <button class="btn btn-outline" id="btn-retake-quiz">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
            </svg>
            <span>Retake Quiz</span>
          </button>
          <button class="btn btn-primary" id="btn-back-to-lessons">
            <span>Review Lessons</span>
          </button>
          <button class="btn btn-secondary" id="btn-quiz-home">
            <span>Back to Subjects</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-retake-quiz').addEventListener('click', () => {
      startSubjectQuiz(State.quizState.subjectId);
    });

    document.getElementById('btn-back-to-lessons').addEventListener('click', () => {
      setSubjectTab('lessons');
      renderSubjectSidebar();
      renderActiveLesson();
    });

    document.getElementById('btn-quiz-home').addEventListener('click', () => {
      navigateTo('homepage');
    });

    // Update pill badge in header
    const quizPill = document.getElementById('subject-quiz-status-pill');
    if (quizPill) quizPill.textContent = `Score: ${score}/${total}`;
  }

  /* ============================================================
     8. COGNITIVE LEARNING GAMES ENGINE
     ============================================================ */
  function switchGameTab(gameKey) {
    if (gameKey !== 'concept-match' && State.matchState.timerInterval) {
      clearInterval(State.matchState.timerInterval);
      State.matchState.timerInterval = null;
    }

    State.activeGame = gameKey;

    // Tab buttons
    const tabs = document.querySelectorAll('.game-selector-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-game') === gameKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Panels
    const panels = document.querySelectorAll('.game-panel');
    panels.forEach(p => p.classList.remove('active'));

    const targetPanel = document.getElementById(`game-panel-${gameKey}`);
    if (targetPanel) targetPanel.classList.add('active');

    if (gameKey === 'code-detective') {
      renderCodeDetective();
    } else if (gameKey === 'concept-match') {
      renderConceptMatch();
    } else if (gameKey === 'logic-quest') {
      renderLogicQuest();
    }
  }

  /* --- Game 1: Code Detective --- */
  function renderCodeDetective(showCompletionSummary = false) {
    const arena = document.getElementById('code-detective-arena');
    if (!arena) return;

    const cases = GAMES_DATA.codeDetective;
    if (!Array.isArray(State.progress.gamesStats.codeDetective.solvedIds)) {
      State.progress.gamesStats.codeDetective.solvedIds = [];
    }
    const solvedIds = State.progress.gamesStats.codeDetective.solvedIds;
    const score = State.progress.gamesStats.codeDetective.score;
    const streak = State.progress.gamesStats.codeDetective.streak;

    if (showCompletionSummary) {
      arena.innerHTML = `
        <div class="quiz-result-view">
          <div class="result-trophy">🔍</div>
          <h2 class="result-title">All Code Detective Rounds Completed!</h2>
          <div class="result-score-callout">${solvedIds.length} / ${cases.length}</div>
          <p class="result-score-sub">Total Debugging Score: ${score} pts &bull; Current Streak: 🔥 ${streak}</p>
          <div class="result-actions">
            <button class="btn btn-primary" id="btn-replay-code-detective">Play Rounds Again</button>
            <button class="btn btn-secondary" id="btn-cd-open-bureau">Explore The Detective Bureau &rarr;</button>
          </div>
        </div>
      `;
      document.getElementById('btn-replay-code-detective').addEventListener('click', () => {
        State.progress.gamesStats.codeDetective.currentCaseIndex = 0;
        saveProgressToStorage();
        renderCodeDetective(false);
      });
      document.getElementById('btn-cd-open-bureau').addEventListener('click', () => {
        navigateTo('detective-bureau');
      });
      return;
    }

    const curIdx = State.progress.gamesStats.codeDetective.currentCaseIndex % cases.length;
    const currentCase = cases[curIdx];
    const isCaseSolved = solvedIds.includes(currentCase.id);

    arena.innerHTML = `
      <div class="detective-case-bar">
        <div>
          <span class="case-id-badge">${escapeHtml(currentCase.title)}</span>
          <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; margin-left: 0.5rem;">Topic: ${escapeHtml(currentCase.topic)}</span>
        </div>
        <div class="case-score-strip">
          <span>Solved: <strong>${solvedIds.length}/${cases.length}</strong></span>
          <span>Score: <strong>${score}</strong></span>
          <span>Streak: <strong>🔥 ${streak}</strong></span>
        </div>
      </div>

      <div class="game-round-stepper">
        ${cases.map((c, idx) => `
          <button class="stepper-btn ${idx === curIdx ? 'active' : ''} ${solvedIds.includes(c.id) ? 'solved' : ''}" data-cd-idx="${idx}" title="${escapeHtml(c.title)}">
            ${idx + 1}
          </button>
        `).join('')}
        <span style="font-size: 0.8125rem; color: var(--text-muted); margin-left: 0.5rem;">
          Inspect the highlighted suspect line and select the exact root cause &amp; remedy.
        </span>
      </div>

      <h3 class="detective-briefing">${escapeHtml(currentCase.brief)}</h3>

      <div class="bug-code-panel">
        ${currentCase.lines.map((line, i) => `
          <div class="bug-code-line ${i + 1 === currentCase.suspectLine ? 'suspect' : ''}">
            <span class="line-no">${i + 1}</span>
            <span class="line-content">${escapeHtml(line)}</span>
          </div>
        `).join('')}
      </div>

      <div class="suspect-options-grid" id="suspect-options-grid">
        ${currentCase.options.map((opt, i) => `
          <button class="suspect-btn" data-index="${i}">
            <span>${escapeHtml(opt)}</span>
          </button>
        `).join('')}
      </div>

      <div class="detective-feedback-box" id="detective-feedback-box"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 1rem;">
        <span style="font-size: 0.8rem; color: var(--text-muted);">${isCaseSolved ? '✓ You have previously solved this round.' : ''}</span>
        <button class="btn btn-primary" id="btn-next-detective-case" style="display: none;">
          ${curIdx === cases.length - 1 ? 'View Completion Summary &rarr;' : 'Next Mystery Case &rarr;'}
        </button>
      </div>
    `;

    // Round stepper click
    arena.querySelectorAll('[data-cd-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        State.progress.gamesStats.codeDetective.currentCaseIndex = parseInt(btn.getAttribute('data-cd-idx'), 10);
        saveProgressToStorage();
        renderCodeDetective(false);
      });
    });

    const btns = arena.querySelectorAll('.suspect-btn');
    const feedback = document.getElementById('detective-feedback-box');
    const nextBtn = document.getElementById('btn-next-detective-case');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => (b.disabled = true));
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const isCorrect = idx === currentCase.correctIndex;

        if (isCorrect) {
          btn.classList.add('correct');
          if (!solvedIds.includes(currentCase.id)) {
            solvedIds.push(currentCase.id);
            State.progress.gamesStats.codeDetective.score += 10;
          }
          State.progress.gamesStats.codeDetective.streak += 1;
          playSoftChime(true);
          feedback.innerHTML = `
            <strong>Case Solved! Outstanding deduction.</strong>
            <p>${escapeHtml(currentCase.explanation)}</p>
            <div class="detective-diff"><pre>${escapeHtml(currentCase.fixCode)}</pre></div>
          `;
        } else {
          btn.classList.add('incorrect');
          btns[currentCase.correctIndex].classList.add('correct');
          State.progress.gamesStats.codeDetective.streak = 0;
          playSoftChime(false);
          feedback.innerHTML = `
            <strong>Case Cold: Incorrect diagnosis.</strong>
            <p>${escapeHtml(currentCase.explanation)}</p>
            <div class="detective-diff"><pre>${escapeHtml(currentCase.fixCode)}</pre></div>
          `;
        }

        evaluateBadges();
        saveProgressToStorage();
        feedback.className = 'detective-feedback-box visible';
        nextBtn.style.display = 'inline-flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      if (curIdx === cases.length - 1) {
        renderCodeDetective(true);
      } else {
        State.progress.gamesStats.codeDetective.currentCaseIndex = curIdx + 1;
        saveProgressToStorage();
        renderCodeDetective(false);
      }
    });
  }

  /* --- Game 2: Concept Match --- */
  function renderConceptMatch() {
    const arena = document.getElementById('concept-match-arena');
    if (!arena) return;

    const deckKey = State.matchState.deckKey;
    const rawPairs = GAMES_DATA.conceptMatchDecks[deckKey] || GAMES_DATA.conceptMatchDecks.programming;

    // Reset local state
    if (State.matchState.timerInterval) clearInterval(State.matchState.timerInterval);
    State.matchState.selectedTerm = null;
    State.matchState.selectedDef = null;
    State.matchState.matchedPairsCount = 0;
    State.matchState.moves = 0;
    State.matchState.timerSeconds = 0;
    State.matchState.isLocked = false;

    const bestSec = State.progress.gamesStats.conceptMatch.bestTimeSec || 0;
    const bestLabel = bestSec > 0 ? `${bestSec}s` : '—';

    // Shuffled terms and definitions
    const terms = rawPairs.map((p, i) => ({ id: i, text: p.term })).sort(() => Math.random() - 0.5);
    const defs = rawPairs.map((p, i) => ({ id: i, text: p.def })).sort(() => Math.random() - 0.5);

    arena.innerHTML = `
      <div class="match-arena-header">
        <div class="deck-select-group">
          <span style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); margin-right: 0.35rem;">DECK:</span>
          <button class="deck-btn ${deckKey === 'programming' ? 'active' : ''}" data-deck="programming">Programming</button>
          <button class="deck-btn ${deckKey === 'computer-science' ? 'active' : ''}" data-deck="computer-science">CS</button>
          <button class="deck-btn ${deckKey === 'mathematics' ? 'active' : ''}" data-deck="mathematics">Math</button>
          <button class="deck-btn ${deckKey === 'technology' ? 'active' : ''}" data-deck="technology">Technology</button>
        </div>
        <div class="match-stats-strip">
          <span>Time: <strong id="match-timer-display">00:00</strong></span>
          <span>Best: <strong>${bestLabel}</strong></span>
          <span>Moves: <strong id="match-moves-display">0</strong></span>
          <span>Matches: <strong id="match-count-display">0/${rawPairs.length}</strong></span>
        </div>
      </div>

      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        <strong>Instructions:</strong> Select one <em>Technical Term</em> on the left and its matching <em>Definition</em> on the right to clear all ${rawPairs.length} pairs.
      </p>

      <div class="match-grid-container" id="match-grid-container">
        <div>
          <div class="match-col-header">Technical Terms</div>
          <div class="match-list" id="match-terms-list">
            ${terms.map(t => `<div class="match-card term-card" data-id="${t.id}" tabindex="0" role="button">${escapeHtml(t.text)}</div>`).join('')}
          </div>
        </div>

        <div>
          <div class="match-col-header">Definitions & Meanings</div>
          <div class="match-list" id="match-defs-list">
            ${defs.map(d => `<div class="match-card def-card" data-id="${d.id}" tabindex="0" role="button">${escapeHtml(d.text)}</div>`).join('')}
          </div>
        </div>
      </div>

      <div id="match-win-banner" style="display: none; text-align: center; padding: 2rem;">
        <div class="result-trophy">⚡</div>
        <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--color-forest-deep); margin-bottom: 0.5rem;">Deck Cleared!</h3>
        <p id="match-win-summary" style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 1.5rem;"></p>
        <div class="result-actions">
          <button class="btn btn-primary" id="btn-replay-match">Play Deck Again</button>
          <button class="btn btn-secondary" id="btn-next-deck-match">Switch to Next Subject Deck</button>
        </div>
      </div>
    `;

    // Start timer
    State.matchState.timerInterval = setInterval(() => {
      State.matchState.timerSeconds++;
      const m = String(Math.floor(State.matchState.timerSeconds / 60)).padStart(2, '0');
      const s = String(State.matchState.timerSeconds % 60).padStart(2, '0');
      const timerEl = document.getElementById('match-timer-display');
      if (timerEl) timerEl.textContent = `${m}:${s}`;
    }, 1000);

    // Deck switcher
    arena.querySelectorAll('.deck-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        State.matchState.deckKey = btn.getAttribute('data-deck');
        renderConceptMatch();
      });
    });

    // Term cards click handler
    const termCards = arena.querySelectorAll('.term-card');
    const defCards = arena.querySelectorAll('.def-card');

    termCards.forEach(card => {
      card.addEventListener('click', () => {
        if (State.matchState.isLocked || card.classList.contains('matched')) return;
        termCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        State.matchState.selectedTerm = card;
        checkPairMatch();
      });
    });

    defCards.forEach(card => {
      card.addEventListener('click', () => {
        if (State.matchState.isLocked || card.classList.contains('matched')) return;
        defCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        State.matchState.selectedDef = card;
        checkPairMatch();
      });
    });

    function checkPairMatch() {
      const termCard = State.matchState.selectedTerm;
      const defCard = State.matchState.selectedDef;
      if (termCard && defCard) {
        State.matchState.moves++;
        const movesEl = document.getElementById('match-moves-display');
        if (movesEl) movesEl.textContent = State.matchState.moves;

        const termId = termCard.getAttribute('data-id');
        const defId = defCard.getAttribute('data-id');

        if (termId === defId) {
          // Success match
          termCard.classList.remove('selected');
          defCard.classList.remove('selected');
          termCard.classList.add('matched');
          defCard.classList.add('matched');
          State.matchState.matchedPairsCount++;

          const countEl = document.getElementById('match-count-display');
          if (countEl) countEl.textContent = `${State.matchState.matchedPairsCount}/${rawPairs.length}`;

          playSoftChime(true);
          State.matchState.selectedTerm = null;
          State.matchState.selectedDef = null;

          if (State.matchState.matchedPairsCount === rawPairs.length) {
            // Completed!
            clearInterval(State.matchState.timerInterval);
            State.matchState.timerInterval = null;
            State.progress.gamesStats.conceptMatch.matchesWon++;
            const prevBest = State.progress.gamesStats.conceptMatch.bestTimeSec || 0;
            if (prevBest === 0 || State.matchState.timerSeconds < prevBest) {
              State.progress.gamesStats.conceptMatch.bestTimeSec = State.matchState.timerSeconds;
            }
            evaluateBadges();
            saveProgressToStorage();

            const grid = document.getElementById('match-grid-container');
            const winBanner = document.getElementById('match-win-banner');
            const summary = document.getElementById('match-win-summary');
            if (grid) grid.style.display = 'none';
            if (winBanner) winBanner.style.display = 'block';
            if (summary) {
              summary.textContent = `You matched all ${rawPairs.length} concepts in ${State.matchState.timerSeconds} seconds across ${State.matchState.moves} moves!`;
            }
          }
        } else {
          // Mismatch
          State.matchState.isLocked = true;
          playSoftChime(false);
          termCard.classList.add('mismatch');
          defCard.classList.add('mismatch');
          setTimeout(() => {
            termCard.classList.remove('mismatch', 'selected');
            defCard.classList.remove('mismatch', 'selected');
            State.matchState.selectedTerm = null;
            State.matchState.selectedDef = null;
            State.matchState.isLocked = false;
          }, 420);
        }
      }
    }

    const replayBtn = document.getElementById('btn-replay-match');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        renderConceptMatch();
      });
    }

    const nextDeckBtn = document.getElementById('btn-next-deck-match');
    if (nextDeckBtn) {
      nextDeckBtn.addEventListener('click', () => {
        const order = ['programming', 'computer-science', 'mathematics', 'technology'];
        const nextIdx = (order.indexOf(deckKey) + 1) % order.length;
        State.matchState.deckKey = order[nextIdx];
        renderConceptMatch();
      });
    }
  }

  /* --- Game 3: Logic Quest --- */
  let currentLogicIndex = 0;

  function renderLogicQuest(showCompletionSummary = false) {
    const arena = document.getElementById('logic-quest-arena');
    if (!arena) return;

    const quests = GAMES_DATA.logicQuest;
    const solvedIds = State.progress.gamesStats.logicQuest.solvedIds;

    if (showCompletionSummary) {
      arena.innerHTML = `
        <div class="quiz-result-view">
          <div class="result-trophy">🧩</div>
          <h2 class="result-title">Logic Quest Series Completed!</h2>
          <div class="result-score-callout">${solvedIds.length} / ${quests.length}</div>
          <p class="result-score-sub">Logic Score: ${State.progress.gamesStats.logicQuest.score} pts</p>
          <div class="result-actions">
            <button class="btn btn-primary" id="btn-replay-logic-quest">Review Quests From Start</button>
            <button class="btn btn-secondary" id="btn-lq-open-bureau">Investigate Cases in Detective Bureau &rarr;</button>
          </div>
        </div>
      `;
      document.getElementById('btn-replay-logic-quest').addEventListener('click', () => {
        currentLogicIndex = 0;
        renderLogicQuest(false);
      });
      document.getElementById('btn-lq-open-bureau').addEventListener('click', () => {
        navigateTo('detective-bureau');
      });
      return;
    }

    const curIdx = currentLogicIndex % quests.length;
    const quest = quests[curIdx];
    const isSolved = solvedIds.includes(quest.id);

    arena.innerHTML = `
      <div class="logic-header">
        <div>
          <span class="case-id-badge">${escapeHtml(quest.title)}</span>
          <span style="font-size: 0.8125rem; font-weight: 700; color: var(--text-muted); margin-left: 0.75rem;">Difficulty: ${quest.difficulty}</span>
        </div>
        <div style="font-size: 0.875rem; font-weight: 700;">
          Solved: <strong>${solvedIds.length}/${quests.length}</strong> &bull; Score: <strong>${State.progress.gamesStats.logicQuest.score}</strong>
        </div>
      </div>

      <div class="game-round-stepper">
        ${quests.map((q, idx) => `
          <button class="stepper-btn ${idx === curIdx ? 'active' : ''} ${solvedIds.includes(q.id) ? 'solved' : ''}" data-lq-idx="${idx}" title="${escapeHtml(q.title)}">
            ${idx + 1}
          </button>
        `).join('')}
        <span style="font-size: 0.8125rem; color: var(--text-muted); margin-left: 0.5rem;">
          Analyze the logical constraints carefully before choosing your deduction.
        </span>
      </div>

      <div class="logic-scenario-box">
        <p><strong>Scenario:</strong> ${escapeHtml(quest.scenario)}</p>
      </div>

      <h3 class="logic-prompt">${escapeHtml(quest.question)}</h3>

      <div style="margin-bottom: 1.25rem;">
        <button class="btn btn-outline" id="btn-toggle-hint" style="padding: 0.4rem 0.8rem; font-size: 0.8125rem;">💡 Reveal Strategic Clue</button>
        <p id="logic-hint-text" style="display: none; font-size: 0.875rem; color: var(--color-gold); font-style: italic; margin-top: 0.5rem; background: var(--color-gold-light); padding: 0.6rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid rgba(197, 155, 39, 0.2);">
          ${escapeHtml(quest.hint)}
        </p>
      </div>

      <div class="logic-options-grid" id="logic-options-grid">
        ${quest.options.map((opt, i) => `
          <button class="logic-opt-btn" data-index="${i}">
            <span class="quiz-opt-marker">${String.fromCharCode(65 + i)}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `).join('')}
      </div>

      <div class="logic-feedback-box" id="logic-feedback-box"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;">
        <span style="font-size: 0.8rem; color: var(--text-muted);">${isSolved ? '✓ You have already solved this quest.' : ''}</span>
        <button class="btn btn-primary" id="btn-next-logic-quest" style="display: none;">
          ${curIdx === quests.length - 1 ? 'View Completion Summary &rarr;' : 'Next Logic Challenge &rarr;'}
        </button>
      </div>
    `;

    arena.querySelectorAll('[data-lq-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLogicIndex = parseInt(btn.getAttribute('data-lq-idx'), 10);
        renderLogicQuest(false);
      });
    });

    const hintBtn = document.getElementById('btn-toggle-hint');
    const hintText = document.getElementById('logic-hint-text');
    if (hintBtn && hintText) {
      hintBtn.addEventListener('click', () => {
        hintText.style.display = hintText.style.display === 'none' ? 'block' : 'none';
      });
    }

    const btns = arena.querySelectorAll('.logic-opt-btn');
    const feedback = document.getElementById('logic-feedback-box');
    const nextBtn = document.getElementById('btn-next-logic-quest');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => (b.disabled = true));
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const isCorrect = idx === quest.correctIndex;

        if (isCorrect) {
          btn.classList.add('correct');
          playSoftChime(true);
          if (!State.progress.gamesStats.logicQuest.solvedIds.includes(quest.id)) {
            State.progress.gamesStats.logicQuest.solvedIds.push(quest.id);
            State.progress.gamesStats.logicQuest.score += 25;
            evaluateBadges();
            saveProgressToStorage();
          }
          feedback.innerHTML = `<strong>Deduction Validated!</strong><p>${escapeHtml(quest.explanation)}</p>`;
        } else {
          btn.classList.add('incorrect');
          btns[quest.correctIndex].classList.add('correct');
          playSoftChime(false);
          feedback.innerHTML = `<strong>Logical Paradox:</strong><p>${escapeHtml(quest.explanation)}</p>`;
        }

        feedback.className = 'logic-feedback-box visible';
        nextBtn.style.display = 'inline-flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      if (curIdx === quests.length - 1) {
        renderLogicQuest(true);
      } else {
        currentLogicIndex = curIdx + 1;
        renderLogicQuest(false);
      }
    });
  }

  /* ============================================================
     8B. CONCEPT CONNECTION MAP ENGINE
     ============================================================ */
  const SUBJECT_SHORT_CODE = {
    programming: 'prog',
    'computer-science': 'cs',
    mathematics: 'math',
    technology: 'tech',
    cross: 'cross'
  };

  const CONCEPT_MAP_DATA = {
    nodes: [
      // --- Programming (Top-Left Quadrant in All View) ---
      { id: 'prog-vars', title: 'Variables & Data Types', shortTitle: 'Variables & Types', subject: 'programming', category: 'State & Memory', difficulty: 'Beginner', lessonId: 'prog-vars', x: 120, y: 110, subX: 240, subY: 160, summary: 'Named memory cells storing typed values (integers, strings, booleans) that programs inspect and mutate during runtime execution.' },
      { id: 'prog-conditionals', title: 'Conditionals & Logic', shortTitle: 'Conditionals', subject: 'programming', category: 'Control Flow', difficulty: 'Beginner', lessonId: 'prog-conditionals', x: 300, y: 110, subX: 600, subY: 160, summary: 'Branching logic using boolean conditions (if/else) allowing programs to dynamically make decisions based on runtime states.' },
      { id: 'prog-loops', title: 'Loops & Iteration', shortTitle: 'Loops & Iteration', subject: 'programming', category: 'Repetition', difficulty: 'Beginner', lessonId: 'prog-loops', x: 480, y: 110, subX: 960, subY: 160, summary: 'Control structures (for, while) executing repeated blocks until a termination predicate is met, preventing infinite cycles.' },
      { id: 'prog-functions', title: 'Functions & Modularity', shortTitle: 'Functions', subject: 'programming', category: 'Abstraction', difficulty: 'Intermediate', lessonId: 'prog-functions', x: 195, y: 225, subX: 360, subY: 390, summary: 'Self-contained reusable procedures accepting parameters and returning values, enforcing the DRY (Don\'t Repeat Yourself) principle.' },
      { id: 'prog-arrays', title: 'Arrays & Collections', shortTitle: 'Arrays & Lists', subject: 'programming', category: 'Data Structures', difficulty: 'Beginner', lessonId: 'prog-arrays', x: 410, y: 225, subX: 840, subY: 390, summary: 'Contiguous zero-indexed collections of elements offering O(1) random index access and structured data traversal.' },
      { id: 'prog-algorithms', title: 'Algorithms & Complexity', shortTitle: 'Algorithms', subject: 'programming', category: 'Computation', difficulty: 'Advanced', lessonId: 'prog-intro', x: 300, y: 315, subX: 600, subY: 600, summary: 'Step-by-step computational recipes analyzed via Big-O notation for time and spatial efficiency under scaling inputs.' },

      // --- Computer Science (Bottom-Left Quadrant in All View) ---
      { id: 'cs-logic', title: 'Boolean Logic & Gates', shortTitle: 'Logic Gates', subject: 'computer-science', category: 'Hardware Foundations', difficulty: 'Beginner', lessonId: 'cs-fundamentals', x: 120, y: 475, subX: 250, subY: 200, summary: 'Truth tables and physical transistor gates (AND, OR, NOT) forming arithmetic logic units and CPU registers.' },
      { id: 'cs-os', title: 'Operating Systems & Kernel', shortTitle: 'Operating Systems', subject: 'computer-science', category: 'System Software', difficulty: 'Intermediate', lessonId: 'cs-os', x: 300, y: 475, subX: 600, subY: 200, summary: 'Master supervisory software coordinating CPU scheduling, process isolation, virtual memory mapping, and device I/O.' },
      { id: 'cs-ds', title: 'Data Structures & Trees', shortTitle: 'Data Structures', subject: 'computer-science', category: 'Memory Architecture', difficulty: 'Intermediate', lessonId: 'cs-ds', x: 480, y: 475, subX: 950, subY: 200, summary: 'Organized data memory layouts (Stacks, Queues, Linked Lists, Trees) balancing insertion, deletion, and search costs.' },
      { id: 'cs-networks', title: 'Computer Networks & TCP/IP', shortTitle: 'Networks & TCP/IP', subject: 'computer-science', category: 'Communication', difficulty: 'Intermediate', lessonId: 'cs-networks', x: 195, y: 650, subX: 400, subY: 540, summary: 'Layered communication protocols enabling packet-switched routing, reliable transport, and global internet connectivity.' },
      { id: 'cs-dbms', title: 'Relational DBMS & SQL', shortTitle: 'Relational DBMS', subject: 'computer-science', category: 'Data Persistence', difficulty: 'Intermediate', lessonId: 'cs-dbms', x: 410, y: 650, subX: 800, subY: 540, summary: 'Structured storage systems enforcing relational integrity schemas and ACID guarantees under concurrent access.' },

      // --- Mathematics (Top-Right Quadrant in All View) ---
      { id: 'math-algebra', title: 'Symbolic Algebra & Equations', shortTitle: 'Symbolic Algebra', subject: 'mathematics', category: 'Foundations', difficulty: 'Beginner', lessonId: 'math-algebra', x: 720, y: 110, subX: 250, subY: 200, summary: 'Manipulating symbolic expressions and maintaining invariant balance across equations to isolate unknown variables.' },
      { id: 'math-functions', title: 'Functions & Transformations', shortTitle: 'Math Functions', subject: 'mathematics', category: 'Calculus & Mapping', difficulty: 'Beginner', lessonId: 'math-functions', x: 900, y: 110, subX: 600, subY: 200, summary: 'Mathematical mappings assigning exactly one output in the codomain for each input in the domain (passing the vertical line test).' },
      { id: 'math-matrices', title: 'Matrices & Linear Algebra', shortTitle: 'Matrices', subject: 'mathematics', category: 'Vector Spaces', difficulty: 'Intermediate', lessonId: 'math-matrices', x: 1080, y: 110, subX: 950, subY: 200, summary: 'Rectangular arrays of numbers representing linear coordinate transformations, vector dot products, and systems of equations.' },
      { id: 'math-prob', title: 'Probability Theory', shortTitle: 'Probability', subject: 'mathematics', category: 'Uncertainty', difficulty: 'Intermediate', lessonId: 'math-prob', x: 795, y: 265, subX: 400, subY: 540, summary: 'Mathematical framework quantifying randomness, sample spaces, independent events, and conditional Bayes likelihood.' },
      { id: 'math-stats', title: 'Statistics & Modeling', shortTitle: 'Statistics', subject: 'mathematics', category: 'Inference', difficulty: 'Intermediate', lessonId: 'math-stats', x: 1005, y: 265, subX: 800, subY: 540, summary: 'Summarizing empirical distributions through central tendency (mean, median), variance, and hypothesis testing.' },

      // --- Technology (Bottom-Right Quadrant in All View) ---
      { id: 'tech-ai', title: 'Artificial Intelligence', shortTitle: 'Artificial Intelligence', subject: 'technology', category: 'Intelligent Systems', difficulty: 'Intermediate', lessonId: 'tech-ai', x: 720, y: 475, subX: 250, subY: 200, summary: 'Broad discipline of engineering machines capable of tasks requiring human cognitive reasoning, planning, or deduction.' },
      { id: 'tech-ml', title: 'Machine Learning', shortTitle: 'Machine Learning', subject: 'technology', category: 'Statistical Learning', difficulty: 'Intermediate', lessonId: 'tech-ml', x: 900, y: 475, subX: 600, subY: 200, summary: 'Algorithms that iteratively optimize mathematical objective functions to learn patterns directly from observational data.' },
      { id: 'tech-neural', title: 'Neural Networks & Deep Learning', shortTitle: 'Neural Networks', subject: 'technology', category: 'Representation Learning', difficulty: 'Advanced', lessonId: 'tech-ml', x: 1080, y: 475, subX: 950, subY: 200, summary: 'Multi-layered architectures with non-linear activation functions learning hierarchical feature representations.' },
      { id: 'tech-cloud', title: 'Cloud Computing & Services', shortTitle: 'Cloud Computing', subject: 'technology', category: 'Distributed Infrastructure', difficulty: 'Intermediate', lessonId: 'tech-cloud', x: 720, y: 650, subX: 250, subY: 540, summary: 'On-demand elastic compute, storage, and networking pools delivered over the internet with zero local hardware management.' },
      { id: 'tech-cybersecurity', title: 'Cybersecurity & Cryptography', shortTitle: 'Cybersecurity', subject: 'technology', category: 'Security & Trust', difficulty: 'Intermediate', lessonId: 'tech-cybersecurity', x: 900, y: 650, subX: 600, subY: 540, summary: 'Protecting digital assets through the CIA triad (Confidentiality, Integrity, Availability), one-way hashing, and zero trust.' },
      { id: 'tech-iot', title: 'Internet of Things & Edge Sensors', shortTitle: 'Internet of Things', subject: 'technology', category: 'Pervasive Computing', difficulty: 'Beginner', lessonId: 'tech-iot', x: 1080, y: 650, subX: 950, subY: 540, summary: 'Network of physical devices instrumented with sensors and actuators streaming real-time telemetry to centralized gateways.' }
    ],
    edges: [
      // Programming Internal
      { from: 'prog-vars', to: 'prog-conditionals', label: 'evaluates', subject: 'programming', explanation: 'Conditionals compare and inspect variable states to choose execution branches.' },
      { from: 'prog-conditionals', to: 'prog-loops', label: 'governs', subject: 'programming', explanation: 'Loops evaluate boolean conditions on each iteration to decide whether to continue.' },
      { from: 'prog-vars', to: 'prog-functions', label: 'passes into', subject: 'programming', explanation: 'Variables supply input arguments to functions and store returned outputs.' },
      { from: 'prog-loops', to: 'prog-arrays', label: 'traverses', subject: 'programming', explanation: 'Loops index through arrays sequentially to inspect or transform elements.' },
      { from: 'prog-functions', to: 'prog-algorithms', label: 'implements', subject: 'programming', explanation: 'Algorithms are decomposed into modular, reusable functions.' },
      { from: 'prog-arrays', to: 'prog-algorithms', label: 'structures', subject: 'programming', explanation: 'Algorithms operate on array collections to search, sort, and reorder data.' },

      // Computer Science Internal
      { from: 'cs-logic', to: 'cs-os', label: 'underpins', subject: 'computer-science', explanation: 'Hardware logic gates and registers provide the physical execution substrate for the OS kernel.' },
      { from: 'cs-os', to: 'cs-ds', label: 'manages', subject: 'computer-science', explanation: 'Operating systems manage heap memory allocation and kernel data structures like runqueues.' },
      { from: 'cs-ds', to: 'cs-dbms', label: 'indexes', subject: 'computer-science', explanation: 'Relational databases use B-Trees and hash maps to provide fast O(log N) record indexing.' },
      { from: 'cs-os', to: 'cs-networks', label: 'interfaces', subject: 'computer-science', explanation: 'The OS kernel implements the networking TCP/IP stack and exposes socket APIs.' },

      // Mathematics Internal
      { from: 'math-algebra', to: 'math-functions', label: 'defines', subject: 'mathematics', explanation: 'Algebraic equations formalize the mathematical mapping rules of functions.' },
      { from: 'math-functions', to: 'math-matrices', label: 'transforms', subject: 'mathematics', explanation: 'Matrices represent linear functional transformations between vector coordinate spaces.' },
      { from: 'math-prob', to: 'math-stats', label: 'models', subject: 'mathematics', explanation: 'Probability theory supplies the theoretical distributions used in statistical inference.' },
      { from: 'math-algebra', to: 'math-prob', label: 'quantifies', subject: 'mathematics', explanation: 'Algebraic combinatorics and equations express sample space ratios and probability laws.' },

      // Technology Internal
      { from: 'tech-ai', to: 'tech-ml', label: 'specializes into', subject: 'technology', explanation: 'Machine Learning is the modern statistical, data-driven subfield of Artificial Intelligence.' },
      { from: 'tech-ml', to: 'tech-neural', label: 'deepens into', subject: 'technology', explanation: 'Neural Networks and Deep Learning represent multi-layered representation learning in ML.' },
      { from: 'tech-cloud', to: 'tech-iot', label: 'aggregates', subject: 'technology', explanation: 'Cloud platforms provide the elastic storage and analytics backends for millions of IoT edge sensors.' },
      { from: 'tech-cybersecurity', to: 'tech-cloud', label: 'secures', subject: 'technology', explanation: 'Zero trust and cryptographic authentication protect multi-tenant cloud workloads.' },

      // Cross-Disciplinary Bridges
      { from: 'prog-conditionals', to: 'cs-logic', label: 'mirrors', subject: 'cross', explanation: 'Software if/else branching maps directly to hardware binary logic gates.' },
      { from: 'prog-functions', to: 'math-functions', label: 'formalizes', subject: 'cross', explanation: 'Programming functions mirror mathematical functions: mapping inputs to outputs.' },
      { from: 'prog-algorithms', to: 'cs-ds', label: 'executes on', subject: 'cross', explanation: 'Algorithms cannot exist without appropriate data structures to hold their state in memory.' },
      { from: 'math-matrices', to: 'tech-neural', label: 'computes', subject: 'cross', explanation: 'Matrix dot products and linear transformations calculate forward passes in deep neural networks.' },
      { from: 'math-prob', to: 'tech-ml', label: 'optimizes', subject: 'cross', explanation: 'Bayesian probability and loss likelihood functions govern ML parameter optimization.' },
      { from: 'cs-networks', to: 'tech-cybersecurity', label: 'encrypts', subject: 'cross', explanation: 'Cryptographic TLS/IPSec protocols secure raw socket network transmissions from eavesdropping.' },
      { from: 'cs-dbms', to: 'tech-cloud', label: 'distributes', subject: 'cross', explanation: 'Cloud platforms host horizontally partitioned, distributed database clusters with ACID replication.' }
    ]
  };

  let conceptMapControlsBound = false;

  function applyConceptMapViewBox() {
    const svgEl = document.getElementById('concept-map-svg');
    if (!svgEl) return;
    const s = State.conceptMapState.zoomScale || 1;
    const w = 1200 / s;
    const h = 760 / s;
    const baseX = (1200 - w) / 2;
    const baseY = (760 - h) / 2;
    const x = Math.max(-200, Math.min(1200 - w + 200, baseX + (State.conceptMapState.panX || 0)));
    const y = Math.max(-150, Math.min(760 - h + 150, baseY + (State.conceptMapState.panY || 0)));
    svgEl.setAttribute('viewBox', `${x.toFixed(1)} ${y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`);
  }

  function initConceptMap(subjectFilter = 'all', targetNodeId = null) {
    State.conceptMapState.activeSubject = subjectFilter;
    State.conceptMapState.zoomScale = 1;
    State.conceptMapState.panX = 0;
    State.conceptMapState.panY = 0;

    if (targetNodeId) {
      State.conceptMapState.selectedNodeId = targetNodeId;
    } else if (subjectFilter !== 'all') {
      const firstInSub = CONCEPT_MAP_DATA.nodes.find(n => n.subject === subjectFilter);
      State.conceptMapState.selectedNodeId = firstInSub ? firstInSub.id : 'prog-vars';
    } else if (!State.conceptMapState.selectedNodeId) {
      State.conceptMapState.selectedNodeId = 'prog-vars';
    }

    if (!State.progress.conceptMapVisited.includes(State.conceptMapState.selectedNodeId)) {
      State.progress.conceptMapVisited.push(State.conceptMapState.selectedNodeId);
      saveProgressToStorage();
      evaluateBadges();
    }

    applyConceptMapViewBox();
    renderConceptMap();
    bindConceptMapControls();
  }

  function getNodeCoords(node, filter) {
    if (filter !== 'all' && node.subject === filter && node.subX !== undefined) {
      return { x: node.subX, y: node.subY };
    }
    return { x: node.x, y: node.y };
  }

  function renderConceptMap() {
    const filter = State.conceptMapState.activeSubject;
    const selectedId = State.conceptMapState.selectedNodeId;
    const svgQuadrants = document.getElementById('map-quadrants-group');
    const svgEdges = document.getElementById('map-edges-group');
    const svgNodes = document.getElementById('map-nodes-group');
    if (!svgEdges || !svgNodes) return;

    // Filter tabs highlight
    const tabs = document.querySelectorAll('.map-filter-tab');
    tabs.forEach(tab => {
      const sub = tab.getAttribute('data-map-subject');
      tab.classList.toggle('active', sub === filter);
      tab.setAttribute('aria-selected', sub === filter ? 'true' : 'false');
    });

    // Render Domain Quadrant Frames
    if (svgQuadrants) {
      if (filter === 'all') {
        svgQuadrants.innerHTML = `
          <rect x="20" y="20" width="555" height="345" rx="14" fill="rgba(45, 106, 79, 0.03)" stroke="rgba(45, 106, 79, 0.16)" stroke-dasharray="6,4" />
          <text x="40" y="46" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#2D6A4F" letter-spacing="1.2">PROGRAMMING</text>

          <rect x="625" y="20" width="555" height="345" rx="14" fill="rgba(185, 74, 62, 0.03)" stroke="rgba(185, 74, 62, 0.16)" stroke-dasharray="6,4" />
          <text x="645" y="46" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#B94A3E" letter-spacing="1.2">MATHEMATICS</text>

          <rect x="20" y="395" width="555" height="345" rx="14" fill="rgba(43, 92, 143, 0.03)" stroke="rgba(43, 92, 143, 0.16)" stroke-dasharray="6,4" />
          <text x="40" y="421" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#2B5C8F" letter-spacing="1.2">COMPUTER SCIENCE</text>

          <rect x="625" y="395" width="555" height="345" rx="14" fill="rgba(197, 155, 39, 0.04)" stroke="rgba(197, 155, 39, 0.22)" stroke-dasharray="6,4" />
          <text x="645" y="421" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="800" fill="#9A7416" letter-spacing="1.2">TECHNOLOGY</text>
        `;
      } else {
        const subTitle = CURRICULUM[filter] ? CURRICULUM[filter].title.toUpperCase() : filter.toUpperCase();
        svgQuadrants.innerHTML = `
          <rect x="40" y="30" width="1120" height="700" rx="16" fill="rgba(45, 106, 79, 0.025)" stroke="rgba(45, 106, 79, 0.18)" stroke-dasharray="6,4" />
          <text x="70" y="64" font-family="Plus Jakarta Sans, sans-serif" font-size="13" font-weight="800" fill="#133024" letter-spacing="1.4">${escapeHtml(subTitle)} CONCEPT ARCHITECTURE</text>
        `;
      }
    }

    // Determine visible nodes & edges based on filter
    const visibleNodes = filter === 'all'
      ? CONCEPT_MAP_DATA.nodes
      : CONCEPT_MAP_DATA.nodes.filter(n => n.subject === filter);

    const visibleNodeIds = new Set(visibleNodes.map(n => n.id));

    const visibleEdges = CONCEPT_MAP_DATA.edges.filter(e => {
      return visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to);
    });

    // Render Edges with exact node circumference clipping
    let edgesHtml = '';
    visibleEdges.forEach(edge => {
      const fromNode = CONCEPT_MAP_DATA.nodes.find(n => n.id === edge.from);
      const toNode = CONCEPT_MAP_DATA.nodes.find(n => n.id === edge.to);
      if (!fromNode || !toNode) return;

      const p1 = getNodeCoords(fromNode, filter);
      const p2 = getNodeCoords(toNode, filter);

      const isConnectedToSelected = (edge.from === selectedId || edge.to === selectedId);
      const isDimmed = Boolean(selectedId && !isConnectedToSelected);
      const shortSub = SUBJECT_SHORT_CODE[edge.subject] || 'prog';
      const markerId = `arrow-${shortSub}`;

      // Calculate control point for smooth arc
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const dist = Math.hypot(dx, dy) || 1;
      const nx = -dy / dist;
      const ny = dx / dist;
      const curveOffset = edge.subject === 'cross' ? 22 : (Math.abs(dy) < 20 ? -18 : 14);
      const cx = (p1.x + p2.x) / 2 + nx * curveOffset;
      const cy = (p1.y + p2.y) / 2 + ny * curveOffset;

      // Trim start and end points to node circle boundaries (radius = 28px)
      const d1x = cx - p1.x;
      const d1y = cy - p1.y;
      const len1 = Math.hypot(d1x, d1y) || 1;
      const sx = p1.x + (d1x / len1) * 28;
      const sy = p1.y + (d1y / len1) * 28;

      const d2x = p2.x - cx;
      const d2y = p2.y - cy;
      const len2 = Math.hypot(d2x, d2y) || 1;
      const ex = p2.x - (d2x / len2) * 30;
      const ey = p2.y - (d2y / len2) * 30;

      // Midpoint on quadratic Bezier curve (t = 0.5)
      const bx = 0.25 * sx + 0.5 * cx + 0.25 * ex;
      const by = 0.25 * sy + 0.5 * cy + 0.25 * ey;
      const pillW = Math.max(58, edge.label.length * 6.4 + 16);
      const showLabel = (filter !== 'all') || isConnectedToSelected;

      edgesHtml += `
        <g class="edge-group ${isConnectedToSelected ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}">
          <path d="M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}" 
                class="map-edge edge-${shortSub} ${isConnectedToSelected ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}" 
                marker-end="url(#${markerId})" />
          ${showLabel ? `
            <g class="edge-label-group ${isDimmed ? 'dimmed' : ''}" transform="translate(${bx.toFixed(1)}, ${by.toFixed(1)})">
              <rect x="${(-pillW / 2).toFixed(1)}" y="-10" width="${pillW.toFixed(1)}" height="19" class="edge-label-bg" />
              <text x="0" y="3.5" text-anchor="middle">${escapeHtml(edge.label)}</text>
            </g>
          ` : ''}
        </g>
      `;
    });
    svgEdges.innerHTML = edgesHtml;

    // Render Nodes (only visibleNodes so single-subject view is clean and spacious)
    let nodesHtml = '';
    visibleNodes.forEach(node => {
      const coords = getNodeCoords(node, filter);
      const isSelected = node.id === selectedId;
      const isConnected = selectedId && visibleEdges.some(e =>
        (e.from === selectedId && e.to === node.id) ||
        (e.to === selectedId && e.from === node.id)
      );
      const isDimmed = Boolean(selectedId && !isSelected && !isConnected);
      const isVisited = State.progress.conceptMapVisited && State.progress.conceptMapVisited.includes(node.id);

      const shortSub = SUBJECT_SHORT_CODE[node.subject] || 'prog';
      const displayLabel = filter === 'all' ? (node.shortTitle || node.title) : node.title;
      const labelW = Math.max(84, displayLabel.length * 6.7 + 16);
      const nodeRadius = filter === 'all' ? 25 : 30;

      nodesHtml += `
        <g class="map-node ${shortSub} ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}" 
           data-node-id="${node.id}" 
           transform="translate(${coords.x}, ${coords.y})" 
           tabindex="0" role="button" aria-label="Concept node: ${escapeHtml(node.title)}">
          <circle cx="0" cy="0" r="${nodeRadius}" class="node-core" />
          ${isSelected ? `<circle cx="0" cy="0" r="${nodeRadius + 6}" fill="none" stroke="#0D2218" stroke-width="2" stroke-dasharray="4,3" />` : ''}
          <text x="0" y="4" font-size="11.5" font-weight="800" text-anchor="middle" fill="#122119">
            ${node.subject === 'programming' ? 'PR' : node.subject === 'computer-science' ? 'CS' : node.subject === 'mathematics' ? 'MA' : 'TE'}
          </text>
          ${isVisited ? `
            <circle cx="${nodeRadius - 6}" cy="${-nodeRadius + 6}" r="7" fill="#256B3A" stroke="#FFFFFF" stroke-width="1.5" />
            <text x="${nodeRadius - 6}" y="${-nodeRadius + 9.5}" font-size="8.5" font-weight="800" text-anchor="middle" fill="#FFFFFF">✓</text>
          ` : ''}
          <rect x="${(-labelW / 2).toFixed(1)}" y="${nodeRadius + 6}" width="${labelW.toFixed(1)}" height="20" class="node-label-bg" />
          <text x="0" y="${nodeRadius + 20}" class="node-label">${escapeHtml(displayLabel)}</text>
        </g>
      `;
    });
    svgNodes.innerHTML = nodesHtml;

    // Attach click listeners to SVG nodes
    const nodeEls = svgNodes.querySelectorAll('.map-node');
    nodeEls.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-node-id');
        selectConceptNode(id);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = el.getAttribute('data-node-id');
          selectConceptNode(id);
        }
      });
    });

    // Render Inspector
    renderConceptInspector(selectedId);
  }

  function selectConceptNode(nodeId) {
    const node = CONCEPT_MAP_DATA.nodes.find(n => n.id === nodeId);
    if (node && State.conceptMapState.activeSubject !== 'all' && State.conceptMapState.activeSubject !== node.subject) {
      // If user clicked a cross-disciplinary connected concept from the inspector while filtered, switch to 'all' so it is visible
      State.conceptMapState.activeSubject = 'all';
    }
    State.conceptMapState.selectedNodeId = nodeId;

    if (!State.progress.conceptMapVisited) {
      State.progress.conceptMapVisited = [];
    }
    if (!State.progress.conceptMapVisited.includes(nodeId)) {
      State.progress.conceptMapVisited.push(nodeId);
      saveProgressToStorage();
      evaluateBadges();
    }

    renderConceptMap();
  }

  function renderConceptInspector(nodeId) {
    const pane = document.getElementById('concept-inspector-pane');
    if (!pane) return;

    const node = CONCEPT_MAP_DATA.nodes.find(n => n.id === nodeId);
    if (!node) {
      pane.innerHTML = `
        <div class="inspector-empty">
          <svg class="inspector-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h3>Select a Concept</h3>
          <p>Click any node on the interactive graph to view its explanation and connected principles.</p>
        </div>
      `;
      return;
    }

    // Find incoming foundations (prerequisites) & outgoing applications (leads into)
    const incoming = CONCEPT_MAP_DATA.edges.filter(e => e.to === node.id).map(e => ({
      edge: e,
      otherNode: CONCEPT_MAP_DATA.nodes.find(n => n.id === e.from)
    })).filter(item => Boolean(item.otherNode));

    const outgoing = CONCEPT_MAP_DATA.edges.filter(e => e.from === node.id).map(e => ({
      edge: e,
      otherNode: CONCEPT_MAP_DATA.nodes.find(n => n.id === e.to)
    })).filter(item => Boolean(item.otherNode));

    const subPillClass = node.subject === 'computer-science' ? 'pill-cs' : `pill-${node.subject.slice(0, 4)}`;

    pane.innerHTML = `
      <div class="inspector-card-header">
        <div class="inspector-badge-row">
          <span class="inspector-subject-pill ${subPillClass}">${escapeHtml(node.subject.replace('-', ' '))}</span>
          <span class="inspector-diff-badge">${escapeHtml(node.difficulty)} • ${escapeHtml(node.category)}</span>
        </div>
        <h3 class="inspector-title">${escapeHtml(node.title)}</h3>
      </div>

      <div class="inspector-section-label">Core Intuition</div>
      <p class="inspector-explanation">${escapeHtml(node.summary)}</p>

      <div class="inspector-connections-wrap">
        <div class="inspector-section-label">Connected STEM Concepts (${incoming.length + outgoing.length})</div>
        
        ${incoming.length > 0 ? `
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin: 0.6rem 0 0.35rem;">BUILDS UPON (FOUNDATIONS):</div>
          ${incoming.map(inc => `
            <div class="connected-concept-card" data-jump-node="${inc.otherNode.id}" tabindex="0" role="button">
              <div class="connected-card-top">
                <span class="connected-name">← ${escapeHtml(inc.otherNode.title)}</span>
                <span class="connected-rel-tag">${escapeHtml(inc.edge.label)}</span>
              </div>
              <p class="connected-desc">${escapeHtml(inc.edge.explanation)}</p>
            </div>
          `).join('')}
        ` : ''}

        ${outgoing.length > 0 ? `
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin: 0.6rem 0 0.35rem;">LEADS TO / POWERS:</div>
          ${outgoing.map(out => `
            <div class="connected-concept-card" data-jump-node="${out.otherNode.id}" tabindex="0" role="button">
              <div class="connected-card-top">
                <span class="connected-name">→ ${escapeHtml(out.otherNode.title)}</span>
                <span class="connected-rel-tag">${escapeHtml(out.edge.label)}</span>
              </div>
              <p class="connected-desc">${escapeHtml(out.edge.explanation)}</p>
            </div>
          `).join('')}
        ` : ''}
      </div>

      ${node.lessonId ? `
        <button class="btn btn-primary inspector-lesson-cta" id="btn-jump-to-curriculum-lesson">
          <span>Study Lesson: ${escapeHtml(node.title)}</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      ` : ''}
    `;

    // Hook up jump-to-node chips
    const jumpChips = pane.querySelectorAll('[data-jump-node]');
    jumpChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const targetId = chip.getAttribute('data-jump-node');
        selectConceptNode(targetId);
      });
    });

    // Hook up direct curriculum lesson CTA
    const lessonBtn = document.getElementById('btn-jump-to-curriculum-lesson');
    if (lessonBtn && node.lessonId) {
      lessonBtn.addEventListener('click', () => {
        const subData = CURRICULUM[node.subject];
        let lessonIdx = 0;
        if (subData && subData.lessons) {
          const foundIdx = subData.lessons.findIndex(l => l.id === node.lessonId);
          if (foundIdx !== -1) lessonIdx = foundIdx;
        }
        navigateTo('subject', { subjectId: node.subject, lessonIndex: lessonIdx, tab: 'lessons' });
      });
    }
  }

  function bindConceptMapControls() {
    // Subject filter tabs
    const filterTabs = document.querySelectorAll('.map-filter-tab');
    filterTabs.forEach(tab => {
      tab.onclick = () => {
        const sub = tab.getAttribute('data-map-subject');
        State.conceptMapState.activeSubject = sub;
        State.conceptMapState.zoomScale = 1;
        State.conceptMapState.panX = 0;
        State.conceptMapState.panY = 0;
        if (sub !== 'all') {
          const curNode = CONCEPT_MAP_DATA.nodes.find(n => n.id === State.conceptMapState.selectedNodeId);
          if (!curNode || curNode.subject !== sub) {
            const firstSubNode = CONCEPT_MAP_DATA.nodes.find(n => n.subject === sub);
            if (firstSubNode) State.conceptMapState.selectedNodeId = firstSubNode.id;
          }
        }
        applyConceptMapViewBox();
        renderConceptMap();
      };
    });

    // Zoom Controls
    const zoomIn = document.getElementById('btn-map-zoom-in');
    const zoomOut = document.getElementById('btn-map-zoom-out');
    const zoomReset = document.getElementById('btn-map-reset');

    if (zoomIn) {
      zoomIn.onclick = () => {
        State.conceptMapState.zoomScale = Math.min(2.2, State.conceptMapState.zoomScale + 0.2);
        applyConceptMapViewBox();
      };
    }
    if (zoomOut) {
      zoomOut.onclick = () => {
        State.conceptMapState.zoomScale = Math.max(0.7, State.conceptMapState.zoomScale - 0.2);
        applyConceptMapViewBox();
      };
    }
    if (zoomReset) {
      zoomReset.onclick = () => {
        State.conceptMapState.zoomScale = 1;
        State.conceptMapState.panX = 0;
        State.conceptMapState.panY = 0;
        applyConceptMapViewBox();
      };
    }

    // Bind Mouse & Touch Panning once
    if (conceptMapControlsBound) return;
    conceptMapControlsBound = true;

    const wrap = document.getElementById('concept-map-canvas-wrap');
    const svgEl = document.getElementById('concept-map-svg');
    if (!wrap || !svgEl) return;

    wrap.addEventListener('mousedown', (e) => {
      if (e.target.closest('.map-node')) return;
      State.conceptMapState.isPanning = true;
      State.conceptMapState.startClientX = e.clientX;
      State.conceptMapState.startClientY = e.clientY;
      State.conceptMapState.startPanX = State.conceptMapState.panX || 0;
      State.conceptMapState.startPanY = State.conceptMapState.panY || 0;
      wrap.classList.add('panning');
    });

    window.addEventListener('mousemove', (e) => {
      if (!State.conceptMapState.isPanning) return;
      const rect = svgEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const s = State.conceptMapState.zoomScale || 1;
      const ratioX = (1200 / s) / rect.width;
      const ratioY = (760 / s) / rect.height;
      const dx = (e.clientX - State.conceptMapState.startClientX) * ratioX;
      const dy = (e.clientY - State.conceptMapState.startClientY) * ratioY;
      State.conceptMapState.panX = State.conceptMapState.startPanX - dx;
      State.conceptMapState.panY = State.conceptMapState.startPanY - dy;
      applyConceptMapViewBox();
    });

    window.addEventListener('mouseup', () => {
      if (State.conceptMapState.isPanning) {
        State.conceptMapState.isPanning = false;
        wrap.classList.remove('panning');
      }
    });

    // Touch support for mobile panning
    wrap.addEventListener('touchstart', (e) => {
      if (e.target.closest('.map-node') || e.touches.length !== 1) return;
      const touch = e.touches[0];
      State.conceptMapState.isPanning = true;
      State.conceptMapState.startClientX = touch.clientX;
      State.conceptMapState.startClientY = touch.clientY;
      State.conceptMapState.startPanX = State.conceptMapState.panX || 0;
      State.conceptMapState.startPanY = State.conceptMapState.panY || 0;
    }, { passive: true });

    wrap.addEventListener('touchmove', (e) => {
      if (!State.conceptMapState.isPanning || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const rect = svgEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const s = State.conceptMapState.zoomScale || 1;
      const ratioX = (1200 / s) / rect.width;
      const ratioY = (760 / s) / rect.height;
      const dx = (touch.clientX - State.conceptMapState.startClientX) * ratioX;
      const dy = (touch.clientY - State.conceptMapState.startClientY) * ratioY;
      State.conceptMapState.panX = State.conceptMapState.startPanX - dx;
      State.conceptMapState.panY = State.conceptMapState.startPanY - dy;
      applyConceptMapViewBox();
    }, { passive: true });

    wrap.addEventListener('touchend', () => {
      State.conceptMapState.isPanning = false;
    });
  }

  /* ============================================================
     8C. FIND THE MISTAKE CHALLENGES ENGINE
     ============================================================ */
  const MISTAKE_CHALLENGES = [
    // --- PROGRAMMING (4 Challenges) ---
    {
      id: 'mistake-prog-c-bounds',
      subject: 'programming',
      topicId: 'prog-arrays',
      difficulty: 'Beginner',
      title: 'Off-by-One Array Boundary Overrun in C',
      type: 'code_line_select',
      prompt: 'Examine this C program calculating the average score. Click the line containing the memory bug, then diagnose what rule was violated.',
      lines: [
        '#include <stdio.h>',
        'int main() {',
        '    int scores[5] = {88, 92, 79, 95, 84};',
        '    int sum = 0;',
        '    for (int i = 0; i <= 5; i++) {',
        '        sum += scores[i];',
        '    }',
        '    printf("Average: %d\\n", sum / 5);',
        '    return 0;',
        '}'
      ],
      correctLineOrStep: 5,
      diagnosticPrompt: 'What specific violation occurs on Line 5?',
      options: [
        'The loop variable i must be initialized to 1 instead of 0 in C.',
        'The loop condition i <= 5 iterates 6 times, attempting to access scores[5] outside the 5-element array boundary.',
        'Arrays in C cannot store integers greater than 90 without allocating dynamic heap memory.',
        'The sum variable cannot be incremented using the += operator inside a for loop.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'In C, an array declared as int scores[5] allocates exactly 5 memory slots indexed 0, 1, 2, 3, and 4. Using i <= 5 causes the final iteration to access scores[5], which reads unallocated stack memory past the array end (Undefined Behavior).',
      cognitiveTrap: 'Learners frequently think "5 elements means stop at 5", forgetting that zero-based indexing means the final valid element is at index N-1.',
      correctApproach: 'for (int i = 0; i < 5; i++) {\n    sum += scores[i];\n}'
    },
    {
      id: 'mistake-prog-py-default',
      subject: 'programming',
      topicId: 'prog-functions',
      difficulty: 'Intermediate',
      title: 'Mutable Default Argument Trap in Python',
      type: 'code_line_select',
      prompt: 'Inspect this Python user registration procedure. Click the flawed line that causes state to leak across independent callers.',
      lines: [
        'def register_course(student_name, enrolled_list=[]):',
        '    enrolled_list.append(student_name)',
        '    return enrolled_list',
        '',
        'alice = register_course("Alice")',
        'bob = register_course("Bob")',
        'print(bob) # Unexpectedly outputs: ["Alice", "Bob"]!'
      ],
      correctLineOrStep: 1,
      diagnosticPrompt: 'Why does defining enrolled_list=[] on Line 1 introduce a severe bug?',
      options: [
        'Python does not support default arguments in function definitions.',
        'The default list object is evaluated once when the function is defined; subsequent calls mutate the exact same list instance in memory.',
        'Strings like "Alice" cannot be appended to lists without casting them to tuples.',
        'The function return statement must return a copy of the list using list.copy().'
      ],
      correctOptionIndex: 1,
      whyMistake: 'In Python, default arguments are evaluated once at function definition time, not on every invocation. When you mutate enrolled_list via .append(), all future calls that omit that parameter share that exact mutated list instance in memory.',
      cognitiveTrap: 'Assuming default parameters are freshly re-instantiated every time a function is called.',
      correctApproach: 'def register_course(student_name, enrolled_list=None):\n    if enrolled_list is None:\n        enrolled_list = []\n    enrolled_list.append(student_name)\n    return enrolled_list'
    },
    {
      id: 'mistake-prog-c-dangling',
      subject: 'programming',
      topicId: 'prog-vars',
      difficulty: 'Advanced',
      title: 'Returning Address of Local Stack Variable in C',
      type: 'code_line_select',
      prompt: 'Click the line that generates a dangerous dangling pointer when the function returns.',
      lines: [
        '#include <stdio.h>',
        'int* calculate_multiplier() {',
        '    int factor = 42;',
        '    return &factor;',
        '}',
        'int main() {',
        '    int* ptr = calculate_multiplier();',
        '    printf("Factor is: %d\\n", *ptr);',
        '    return 0;',
        '}'
      ],
      correctLineOrStep: 4,
      diagnosticPrompt: 'Why is returning &factor on Line 4 a critical memory flaw?',
      options: [
        'Pointers in C cannot point to integer variables.',
        'The local variable factor exists on calculate_multiplier\'s stack frame, which is deallocated when the function exits.',
        'Pointers must always be declared as const in return types.',
        'The printf function cannot dereference pointers with the * operator.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Local variables allocated inside a function live only for the duration of that function\'s stack frame. When the function returns, its stack frame is popped. Returning the memory address &factor creates a dangling pointer pointing to reclaimed memory that will be overwritten.',
      cognitiveTrap: 'Assuming memory addresses remain permanently valid once assigned.',
      correctApproach: '// Allocate dynamically on the heap or pass buffer pointer from caller:\nint* calculate_multiplier() {\n    int* factor = malloc(sizeof(int));\n    *factor = 42;\n    return factor;\n}'
    },
    {
      id: 'mistake-prog-js-splice',
      subject: 'programming',
      topicId: 'prog-loops',
      difficulty: 'Intermediate',
      title: 'Mutating Array During forEach Iteration in JavaScript',
      type: 'code_line_select',
      prompt: 'Identify the line that mutates the collection during traversal and causes elements to be skipped.',
      lines: [
        'const numbers = [1, 2, 3, 4, 5, 6];',
        'numbers.forEach((num, index) => {',
        '  if (num % 2 === 0) {',
        '    numbers.splice(index, 1);',
        '  }',
        '});',
        'console.log(numbers); // Expected [1, 3, 5], but outputs [1, 3, 4, 5]!'
      ],
      correctLineOrStep: 4,
      diagnosticPrompt: 'What causes the forEach loop to skip the number 4 after removing 2?',
      options: [
        'The modulo operator % only works on odd numbers.',
        'Splicing in-place shifts remaining elements left; when index 1 is removed, 3 shifts to index 1 and 4 shifts to index 2, so the next iteration visits index 2 (skipping 3).',
        'forEach cannot accept arrow functions with two arguments.',
        'Arrays in JavaScript are immutable and cannot be spliced.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'When numbers.splice(index, 1) removes an element, all subsequent elements shift left by 1 index. But the iterator counter continues to advance sequentially (index 0 -> index 1 -> index 2), causing the shifted element to be completely skipped.',
      cognitiveTrap: 'Assuming iterators automatically adjust their internal tracking cursor when elements are deleted.',
      correctApproach: '// Use non-mutating declarative filter:\nconst oddNumbers = numbers.filter(num => num % 2 !== 0);'
    },

    // --- MATHEMATICS (4 Challenges) ---
    {
      id: 'mistake-math-div-zero',
      subject: 'mathematics',
      topicId: 'math-algebra',
      difficulty: 'Beginner',
      title: 'The "2 = 1" Fallacy (Hidden Division by Zero)',
      type: 'math_step_select',
      prompt: 'Click the invalid algebraic step that violates fundamental arithmetic axioms to reach the absurd conclusion 2 = 1.',
      steps: [
        'Step 1: Let a = b',
        'Step 2: Multiply both sides by a: a² = ab',
        'Step 3: Subtract b² from both sides: a² - b² = ab - b²',
        'Step 4: Factor both sides: (a + b)(a - b) = b(a - b)',
        'Step 5: Divide both sides by (a - b): a + b = b',
        'Step 6: Since a = b, substitute: b + b = b => 2b = b => 2 = 1'
      ],
      correctLineOrStep: 5,
      diagnosticPrompt: 'What makes Step 5 mathematically illegal?',
      options: [
        'You cannot subtract b² from both sides in Step 3.',
        'Because a = b was established in Step 1, (a - b) = 0. Dividing both sides by (a - b) is an illegal division by zero.',
        'Quadratic equations cannot be factored with binomial difference of squares.',
        'Variables cannot be substituted for numbers in Step 6.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Division by zero is undefined in mathematics. Because Step 1 specifies a = b, the term (a - b) equals exactly 0. Dividing both sides by (a - b) in Step 5 attempts to calculate 0 / 0, which invalidates all subsequent deduction.',
      cognitiveTrap: 'Canceling identical algebraic terms algebraically without verifying if their numerical value evaluates to zero.',
      correctApproach: 'At Step 4: (a + b)(0) = b(0) => 0 = 0. Both sides equal zero; you cannot divide by zero to cancel the term.'
    },
    {
      id: 'mistake-math-neg-distrib',
      subject: 'mathematics',
      topicId: 'math-algebra',
      difficulty: 'Beginner',
      title: 'Negative Sign Distribution Error',
      type: 'math_step_select',
      prompt: 'Identify which simplification step contains an arithmetic sign error.',
      steps: [
        'Step 1: Simplify the expression: 7x - (4x - 9)',
        'Step 2: Distribute the negative sign across parentheses: 7x - 4x - 9',
        'Step 3: Combine like terms: 3x - 9'
      ],
      correctLineOrStep: 2,
      diagnosticPrompt: 'What sign error was committed in Step 2?',
      options: [
        '7x minus 4x should equal 11x.',
        'Distributing the minus sign across -(4x - 9) must flip the sign of -9 to +9, yielding 7x - 4x + 9.',
        'Parentheses cannot be eliminated without multiplying by x.',
        'Constants cannot be grouped with variable coefficients.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'The negative sign outside parentheses is equivalent to multiplying every term inside by -1: -(4x - 9) = (-1)(4x) + (-1)(-9) = -4x + 9. Leaving -9 unchanged produces an incorrect offset.',
      cognitiveTrap: 'Distributing the minus sign to the first term (4x) and forgetting to flip the second term (-9).',
      correctApproach: '7x - (4x - 9) = 7x - 4x + 9 = 3x + 9'
    },
    {
      id: 'mistake-math-singular-inv',
      subject: 'mathematics',
      topicId: 'math-matrices',
      difficulty: 'Intermediate',
      title: 'Inverting a Singular Matrix with Zero Determinant',
      type: 'math_step_select',
      prompt: 'Click the step that makes an invalid assumption regarding matrix invertibility.',
      steps: [
        'Step 1: Given matrix M = [[2, 4], [3, 6]]',
        'Step 2: Compute determinant det(M) = (2)(6) - (4)(3) = 12 - 12 = 0',
        'Step 3: Apply 2x2 inverse formula: M⁻¹ = (1 / det(M)) * [[6, -4], [-3, 2]]',
        'Step 4: Conclude that M⁻¹ = [[∞, -∞], [-∞, ∞]] and exists in ℝ²ˣ²'
      ],
      correctLineOrStep: 4,
      diagnosticPrompt: 'Why is Step 4 mathematically false?',
      options: [
        'Matrix multiplication is commutative for 2x2 matrices.',
        'A square matrix with determinant zero is singular (non-invertible); its inverse does not exist.',
        'The determinant formula for 2x2 matrices requires adding products instead of subtracting.',
        'Diagonal elements in matrix inverses must always be positive.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'The determinant measures the scaling factor of the transformation. A determinant of 0 indicates that the matrix collapses 2D space onto a 1D line (area = 0), irreversibly destroying dimensional information. Therefore, no inverse matrix exists.',
      cognitiveTrap: 'Assuming any formula with fractions can simply yield infinity rather than acknowledging the inverse does not exist.',
      correctApproach: 'Since det(M) = 0, matrix M is singular and has no multiplicative inverse (M⁻¹ is undefined).'
    },
    {
      id: 'mistake-math-prob-cards',
      subject: 'mathematics',
      topicId: 'math-prob',
      difficulty: 'Intermediate',
      title: 'Assuming Independent Probability Without Replacement',
      type: 'math_step_select',
      prompt: 'Click the flawed calculation step that incorrectly treats dependent events as independent.',
      steps: [
        'Step 1: A standard deck has 52 cards, including 4 Aces.',
        'Step 2: Two cards are drawn consecutively WITHOUT replacement.',
        'Step 3: Probability of first card being an Ace: P(A₁) = 4 / 52',
        'Step 4: Probability of second card being an Ace: P(A₂) = 4 / 52',
        'Step 5: Conclude P(Both Aces) = (4/52) * (4/52) = 16 / 2704 ≈ 0.0059'
      ],
      correctLineOrStep: 4,
      diagnosticPrompt: 'Why is Step 4 incorrect for draws without replacement?',
      options: [
        'Standard decks have only 2 Aces instead of 4.',
        'Without replacement, the sample space decreases to 51 cards and remaining Aces decrease to 3, so P(A₂ | A₁) = 3 / 51.',
        'Probabilities of consecutive draws must be added, not multiplied.',
        'Card values are independent of deck size.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'When drawing without replacement, the outcome of the first draw alters the sample space and favorable outcomes for the second draw. If the first card was an Ace, only 3 Aces remain among 51 total cards.',
      cognitiveTrap: 'Applying the independent multiplication rule P(A ∩ B) = P(A) * P(B) to conditionally dependent events.',
      correctApproach: 'P(A₁ ∩ A₂) = P(A₁) * P(A₂ | A₁) = (4/52) * (3/51) = 12 / 2652 ≈ 0.0045'
    },

    // --- COMPUTER SCIENCE (4 Challenges) ---
    {
      id: 'mistake-cs-deadlock',
      subject: 'computer-science',
      topicId: 'cs-os',
      difficulty: 'Intermediate',
      title: 'Deadlock Necessary Conditions & Recovery Fallacy',
      type: 'claim_select',
      prompt: 'Select the statement below that contains a fundamental misconception regarding operating system deadlock management.',
      claims: [
        { id: 'A', text: 'Deadlock occurs when multiple processes are permanently blocked waiting for resources held by one another.' },
        { id: 'B', text: 'Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait are all four necessary conditions for deadlock.' },
        { id: 'C', text: 'Preempting resources from a waiting process is fundamentally impossible in modern operating systems and cannot be used for deadlock recovery.' },
        { id: 'D', text: 'Breaking any single one of Coffman\'s four conditions is mathematically sufficient to prevent deadlocks.' }
      ],
      correctLineOrStep: 2, // Claim C (0-indexed 2)
      diagnosticPrompt: 'Why is Statement C an incorrect operating system claim?',
      options: [
        'Statement C is correct; operating systems never reclaim memory or CPU cycles.',
        'Resource preemption is a standard recovery technique where the OS suspends a process, saves its state, and reclaims locks or memory.',
        'Deadlocks can only occur in single-threaded Python scripts.',
        'Operating systems do not know which processes hold which resources.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Statement C is false because resource preemption is widely used: kernels preempt CPU time slices, page out virtual memory, and database engines rollback transactions to release conflicting locks.',
      cognitiveTrap: 'Confusing "preemption is difficult/costly" with "preemption is fundamentally impossible".',
      correctApproach: 'Deadlock recovery algorithms routinely preempt resources by rolling back selected victim processes to a saved checkpoint.'
    },
    {
      id: 'mistake-cs-read-committed',
      subject: 'computer-science',
      topicId: 'cs-dbms',
      difficulty: 'Advanced',
      title: 'The "Read Committed" Isolation Fallacy in DBMS',
      type: 'claim_select',
      prompt: 'Identify the flawed database concurrency assertion regarding SQL transaction isolation levels.',
      claims: [
        { id: 'A', text: 'ACID transactions guarantee Atomicity, Consistency, Isolation, and Durability.' },
        { id: 'B', text: 'The "Read Committed" isolation level guarantees that transactions never read uncommitted dirty writes from concurrent transactions.' },
        { id: 'C', text: 'Setting isolation to "Read Committed" guarantees that reading the exact same row twice within Transaction 1 will always return identical values.' },
        { id: 'D', text: 'To prevent Non-Repeatable Reads, the isolation level must be elevated to "Repeatable Read" or "Serializable".' }
      ],
      correctLineOrStep: 2, // Claim C
      diagnosticPrompt: 'What concurrency anomaly can occur under "Read Committed" that makes Claim C false?',
      options: [
        'Read Committed prevents all concurrent transactions from writing to the database.',
        'Non-Repeatable Reads: Transaction 2 can modify and commit changes to the row between Transaction 1\'s first and second read.',
        'Foreign keys are disabled under Read Committed isolation.',
        'Database indexes are deleted whenever transactions roll back.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'In Read Committed, read locks are released immediately after the SELECT statement executes. If Transaction 2 commits an update to that row before Transaction 1 reads it a second time, Transaction 1 will see different values (a Non-Repeatable Read).',
      cognitiveTrap: 'Assuming "Read Committed" guarantees repeatable snapshot isolation throughout an entire transaction.',
      correctApproach: 'Claim C requires REPEATABLE READ or SERIALIZABLE isolation to hold read locks or use MVCC snapshots throughout the transaction.'
    },
    {
      id: 'mistake-cs-binary-search',
      subject: 'computer-science',
      topicId: 'cs-ds',
      difficulty: 'Beginner',
      title: 'Binary Search Precondition Violation',
      type: 'code_line_select',
      prompt: 'Click the line that passes invalid input violating Binary Search\'s core algorithmic prerequisite.',
      lines: [
        'function binarySearch(arr, target) {',
        '  let low = 0, high = arr.length - 1;',
        '  while (low <= high) {',
        '    let mid = Math.floor((low + high) / 2);',
        '    if (arr[mid] === target) return mid;',
        '    if (arr[mid] < target) low = mid + 1;',
        '    else high = mid - 1;',
        '  }',
        '  return -1;',
        '}',
        'const data = [19, 4, 33, 12, 88, 2, 7];',
        'const result = binarySearch(data, 12);'
      ],
      correctLineOrStep: 11, // data = [19, 4, 33, 12, 88, 2, 7]
      diagnosticPrompt: 'Why does passing data on Line 11 cause binary search to fail?',
      options: [
        'The array contains more than 5 numbers.',
        'Binary search requires the input array to be strictly sorted; searching an unsorted array discards valid halves and yields false negatives.',
        'Target 12 is an even number, which is incompatible with integer division.',
        'JavaScript arrays must be converted to linked lists before searching.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Binary search halves the search space based on the invariant that elements to the left are smaller and elements to the right are larger. If the array is unsorted, the target may lie in the discarded half, causing the search to return -1 even when the target exists.',
      cognitiveTrap: 'Focusing on algorithmic syntax while forgetting data structure invariants and preconditions.',
      correctApproach: '// Sort array first before executing binary search:\nconst sortedData = [...data].sort((a, b) => a - b);\nconst result = binarySearch(sortedData, 12);'
    },
    {
      id: 'mistake-cs-udp-ordering',
      subject: 'computer-science',
      topicId: 'cs-networks',
      difficulty: 'Intermediate',
      title: 'UDP Packet Ordering & Reliability Misconception',
      type: 'claim_select',
      prompt: 'Select the statement that contains an inaccurate claim regarding transport layer network protocols.',
      claims: [
        { id: 'A', text: 'TCP provides reliable, ordered byte streams via sequence numbers and acknowledgments.' },
        { id: 'B', text: 'UDP is connectionless, introduces negligible header overhead (8 bytes), and avoids 3-way handshakes.' },
        { id: 'C', text: 'UDP inherently guarantees that packets arrive at the receiver in the exact sequential order they were transmitted.' },
        { id: 'D', text: 'Real-time multiplayer gaming and DNS queries prefer UDP because retransmission latency spikes degrade user experience.' }
      ],
      correctLineOrStep: 2, // Claim C
      diagnosticPrompt: 'Why is Claim C factually wrong?',
      options: [
        'UDP provides higher security than TCP.',
        'UDP packets are independent datagrams; because different packets take different internet routes, they can arrive out-of-order or not at all.',
        'UDP cannot transmit data across Wi-Fi networks.',
        'TCP headers do not contain port numbers.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'UDP provides zero ordering, flow control, or delivery guarantees. Datagrams traverse independent network routes; earlier packets may be delayed while later packets arrive first. If ordering is required, the application layer must implement sequencing or use TCP.',
      cognitiveTrap: 'Assuming network layers automatically buffer and reorder packets regardless of transport protocol.',
      correctApproach: 'TCP guarantees ordered packet reassembly; UDP leaves sequence reordering entirely up to the application.'
    },

    // --- TECHNOLOGY (4 Challenges) ---
    {
      id: 'mistake-tech-symmetric-pwd',
      subject: 'technology',
      topicId: 'tech-cybersecurity',
      difficulty: 'Intermediate',
      title: 'Symmetric Encryption for Password Storage Flaw',
      type: 'claim_select',
      prompt: 'Identify the dangerous security misconception in this proposed cloud architecture design.',
      claims: [
        { id: 'A', text: 'Passwords should never be stored in plaintext in any database.' },
        { id: 'B', text: 'Encrypting passwords using reversible AES-256 with a secret server key is the industry gold standard for password protection.' },
        { id: 'C', text: 'Passwords must be stored using a salted, computationally slow one-way cryptographic hash function like Argon2id or bcrypt.' },
        { id: 'D', text: 'Salting passwords with unique random values defends against precomputed Rainbow Table lookup attacks.' }
      ],
      correctLineOrStep: 1, // Claim B
      diagnosticPrompt: 'Why is using two-way encryption (AES-256) for passwords in Claim B dangerous?',
      options: [
        'AES-256 encryption is too slow for modern computers.',
        'Symmetric encryption is reversible: if an attacker compromises the server decryption key, ALL user passwords can be decrypted back to plaintext.',
        'One-way hashes allow attackers to read passwords directly without cracking them.',
        'Rainbow tables only work against salted hashes.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Encryption is designed for two-way recovery. If a server key leaks (via git commit, memory dump, or config file leak), every password in the database is compromised. Passwords must be hashed using a one-way key derivation function (Argon2id/bcrypt) so even the server cannot reverse them.',
      cognitiveTrap: 'Confusing encryption (two-way secrecy for data retrieval) with cryptographic hashing (one-way verification).',
      correctApproach: 'Store passwords as one-way salted hashes using Argon2id or bcrypt with appropriate cost factors.'
    },
    {
      id: 'mistake-tech-overfitting',
      subject: 'technology',
      topicId: 'tech-ml',
      difficulty: 'Intermediate',
      title: 'Interpreting 100% Training Accuracy as Flawless Generalization',
      type: 'claim_select',
      prompt: 'Select the statement containing a foundational flaw regarding machine learning model evaluation.',
      claims: [
        { id: 'A', text: 'Supervised learning trains models on labeled input-output pairs.' },
        { id: 'B', text: 'A deep learning model reaching 100% training accuracy proves the model has achieved optimal real-world generalization and has zero errors.' },
        { id: 'C', text: 'Overfitting occurs when a high-capacity model memorizes training noise instead of discovering true underlying patterns.' },
        { id: 'D', text: 'Regularization techniques such as dropout, weight decay, and early stopping prevent models from overfitting.' }
      ],
      correctLineOrStep: 1, // Claim B
      diagnosticPrompt: 'Why is 100% training accuracy in Claim B a warning sign rather than proof of perfection?',
      options: [
        'Neural networks are legally forbidden from reaching 100% accuracy.',
        'High training accuracy with unverified test accuracy usually indicates severe Overfitting (memorization of training noise) and catastrophic generalization failure.',
        'Training accuracy is always lower than validation accuracy.',
        'Machine learning models only predict random outcomes.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'The objective of machine learning is generalization to unseen data, not rote memorization of training examples. A model with 100% training accuracy has likely overfit noise, leading to high test error (the bias-variance tradeoff).',
      cognitiveTrap: 'Equating performance on familiar training data with performance on unseen real-world data.',
      correctApproach: 'Evaluate models on held-out validation and test sets; penalize complexity with regularization.'
    },
    {
      id: 'mistake-tech-stateful-scale',
      subject: 'technology',
      topicId: 'tech-cloud',
      difficulty: 'Advanced',
      title: 'Horizontal Cloud Autoscaling with In-Memory Sessions',
      type: 'claim_select',
      prompt: 'Identify the architectural flaw in this cloud autoscaling strategy.',
      claims: [
        { id: 'A', text: 'Horizontal scaling adds more VM/container instances rather than increasing CPU on a single machine.' },
        { id: 'B', text: 'To handle sudden traffic spikes, 20 web servers are deployed behind a round-robin load balancer with user session state stored in each process\'s local RAM.' },
        { id: 'C', text: 'Stateless cloud application architectures externalize session data to centralized distributed caches like Redis.' },
        { id: 'D', text: 'Cloud auto-scaling groups use health checks to replace unresponsive instances automatically.' }
      ],
      correctLineOrStep: 1, // Claim B
      diagnosticPrompt: 'Why will the architecture in Claim B fail under horizontal round-robin scaling?',
      options: [
        'Cloud load balancers can only handle up to 3 instances.',
        'If Request 1 routes to Server A (storing session in RAM), Request 2 routed to Server B will treat the user as unauthenticated (Session Loss).',
        'Redis is incompatible with cloud virtual machines.',
        'Autoscaling requires purchasing physical server racks.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Horizontal autoscaling requires web tiers to be stateless. If user authentication sessions or cart items are saved in Server A\'s local RAM, subsequent requests routed by the load balancer to Server B or C will fail to find the session, logging the user out.',
      cognitiveTrap: 'Assuming round-robin load balancers automatically synchronize process memory across distributed nodes.',
      correctApproach: 'Make application instances stateless: externalize session state to a shared Redis cluster or use signed client JWTs.'
    },
    {
      id: 'mistake-tech-linear-stack',
      subject: 'technology',
      topicId: 'tech-ai',
      difficulty: 'Advanced',
      title: 'Stacking Linear Layers Without Non-Linear Activation Functions',
      type: 'claim_select',
      prompt: 'Find the mathematical and architectural flaw in this deep learning assertion.',
      claims: [
        { id: 'A', text: 'Deep neural networks stack multiple layers of parameterized matrix transformations.' },
        { id: 'B', text: 'Stacking 10 dense linear layers without activation functions (y = W₁₀(W₉(...W₁x))) enables learning complex curved decision boundaries.' },
        { id: 'C', text: 'Non-linear activation functions like ReLU and GELU allow neural networks to act as universal function approximators.' },
        { id: 'D', text: 'Gradient descent calculates the partial derivative of the loss function with respect to each weight via backpropagation.' }
      ],
      correctLineOrStep: 1, // Claim B
      diagnosticPrompt: 'What happens mathematically when linear layers are stacked without non-linear activations in Claim B?',
      options: [
        'The loss function will divide by zero immediately.',
        'The composition of any number of linear transformations is mathematically identical to a single linear transformation (W_eff * x), collapsing the deep network into a simple linear regression model.',
        'Matrix multiplication cannot be performed across more than 3 layers.',
        'Backpropagation only works when weights are zero.'
      ],
      correctOptionIndex: 1,
      whyMistake: 'Linear transformations are closed under composition: W₂ * (W₁ * x) = (W₂ * W₁) * x = W_combined * x. Without non-linear activations (like ReLU), a 100-layer network has no more representational capacity than a single linear layer, unable to solve non-linear problems like XOR.',
      cognitiveTrap: 'Assuming adding more layers automatically increases model expressiveness, ignoring linear algebra composition laws.',
      correctApproach: 'Insert non-linear activation functions (e.g., ReLU: f(x) = max(0, x)) after every linear transformation layer.'
    }
  ];

  function initFindMistake(challengeIndex = 0, subjectFilter = null) {
    if (subjectFilter) {
      State.mistakeState.activeFilterSubject = subjectFilter;
    }
    State.mistakeState.currentIndex = challengeIndex;
    State.mistakeState.selectedLineOrStep = null;
    State.mistakeState.selectedOptionIndex = null;
    State.mistakeState.isSubmitted = false;

    renderMistakeStepperRibbon();
    renderMistakeChallenge();
  }

  function getFilteredChallenges() {
    const sub = State.mistakeState.activeFilterSubject;
    const diff = State.mistakeState.activeFilterDiff;

    return MISTAKE_CHALLENGES.filter(c => {
      const matchSub = (sub === 'all' || c.subject === sub);
      const matchDiff = (diff === 'all' || c.difficulty === diff);
      return matchSub && matchDiff;
    });
  }

  function renderMistakeStepperRibbon() {
    const ribbon = document.getElementById('mistake-stepper-ribbon');
    if (!ribbon) return;

    const filtered = getFilteredChallenges();
    const solvedIds = State.progress.mistakeStats ? State.progress.mistakeStats.solvedIds : [];

    // Ensure valid index within filtered list
    if (State.mistakeState.currentIndex >= filtered.length) {
      State.mistakeState.currentIndex = 0;
    }

    ribbon.innerHTML = filtered.map((c, idx) => {
      const isSolved = solvedIds.includes(c.id);
      const isActive = idx === State.mistakeState.currentIndex;
      return `
        <button class="stepper-btn ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}" 
                data-idx="${idx}" 
                title="${escapeHtml(c.title)}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    const stepperBtns = ribbon.querySelectorAll('.stepper-btn');
    stepperBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        State.mistakeState.currentIndex = idx;
        State.mistakeState.selectedLineOrStep = null;
        State.mistakeState.selectedOptionIndex = null;
        State.mistakeState.isSubmitted = false;
        renderMistakeStepperRibbon();
        renderMistakeChallenge();
      });
    });

    // Update Counter in header
    const counter = document.getElementById('mistake-solved-counter');
    if (counter) {
      counter.textContent = `${solvedIds.length} / ${MISTAKE_CHALLENGES.length}`;
    }

    // Filter Pills Sync
    document.querySelectorAll('#mistake-subject-filters .filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter-subject') === State.mistakeState.activeFilterSubject);
    });
    document.querySelectorAll('#mistake-difficulty-filters .filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter-diff') === State.mistakeState.activeFilterDiff);
    });
  }

  function renderMistakeChallenge() {
    const container = document.getElementById('mistake-arena-card');
    if (!container) return;

    const filtered = getFilteredChallenges();
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <p style="font-size: 1.1rem; color: var(--text-secondary);">No challenges match the selected filters.</p>
          <button class="btn btn-primary" id="btn-reset-mistake-filters" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-mistake-filters');
      if (resetBtn) {
        resetBtn.onclick = () => {
          State.mistakeState.activeFilterSubject = 'all';
          State.mistakeState.activeFilterDiff = 'all';
          renderMistakeStepperRibbon();
          renderMistakeChallenge();
        };
      }
      return;
    }

    const current = filtered[State.mistakeState.currentIndex];
    const solvedIds = State.progress.mistakeStats ? State.progress.mistakeStats.solvedIds : [];
    const isAlreadySolved = solvedIds.includes(current.id);

    let interactiveHtml = '';

    if (current.type === 'code_line_select') {
      const codeFileMap = {
        'mistake-prog-c-bounds': 'scores.c',
        'mistake-prog-py-default': 'enrollment.py',
        'mistake-prog-c-dangling': 'pointer.c',
        'mistake-prog-js-splice': 'filter.js',
        'mistake-cs-binary-search': 'binary_search.js'
      };
      const fileLabel = codeFileMap[current.id] || 'source.code';
      interactiveHtml = `
        <div class="mistake-code-box">
          <div class="mistake-code-header">
            <span>${escapeHtml(fileLabel)} — Click suspect line to flag</span>
            <span>Target: Error Line</span>
          </div>
          <div class="code-lines-container">
            ${current.lines.map((line, i) => {
              const lineNum = i + 1;
              const isSelected = State.mistakeState.selectedLineOrStep === lineNum;
              return `
                <div class="code-line-row ${isSelected ? 'selected' : ''}" data-line="${lineNum}">
                  <span class="line-num">${lineNum}</span>
                  <span class="line-code">${escapeHtml(line)}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } else if (current.type === 'math_step_select') {
      interactiveHtml = `
        <div class="mistake-math-box">
          <div style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.75rem;">
            Step-by-step Derivation — Click the step where the mathematical violation occurs
          </div>
          ${current.steps.map((step, i) => {
            const stepNum = i + 1;
            const isSelected = State.mistakeState.selectedLineOrStep === stepNum;
            return `
              <div class="math-step-row ${isSelected ? 'selected' : ''}" data-step="${stepNum}">
                <span class="step-badge-indicator">Step ${stepNum}</span>
                <span class="math-step-content">${escapeHtml(step)}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (current.type === 'claim_select') {
      interactiveHtml = `
        <div class="claims-list">
          <div style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
            Technical Architectural Claims — Click the statement that contains a fatal flaw
          </div>
          ${current.claims.map((claim, i) => {
            const isSelected = State.mistakeState.selectedLineOrStep === i;
            return `
              <div class="claim-row ${isSelected ? 'selected' : ''}" data-claim-idx="${i}">
                <span class="claim-marker">${escapeHtml(claim.id)}</span>
                <span class="claim-text">${escapeHtml(claim.text)}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="mistake-meta-row">
        <span class="subject-pill-tag">${escapeHtml(current.subject)}</span>
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">• ${escapeHtml(current.difficulty)} Difficulty</span>
        ${isAlreadySolved ? '<span style="font-size: 0.75rem; font-weight: 700; color: var(--color-success); margin-left: auto;">✓ Mastered</span>' : ''}
      </div>

      <h2 class="mistake-title">${escapeHtml(current.title)}</h2>
      <p class="mistake-instruction">${escapeHtml(current.prompt)}</p>

      ${interactiveHtml}

      <div class="diagnostic-question-wrap">
        <h4 class="diagnostic-prompt">${escapeHtml(current.diagnosticPrompt)}</h4>
        <div class="diagnostic-options-list">
          ${current.options.map((opt, idx) => {
            const isSelected = State.mistakeState.selectedOptionIndex === idx;
            return `
              <div class="diagnostic-option-card ${isSelected ? 'selected' : ''}" data-opt-idx="${idx}" tabindex="0" role="button">
                <div class="opt-radio-bullet"></div>
                <span class="opt-text">${escapeHtml(opt)}</span>
              </div>
            `;
          }).join('')}
        </div>

        <button class="btn btn-primary" id="btn-submit-mistake">
          <span>Verify Diagnosis & Fix</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>

      <!-- Post-Mortem Feedback Card -->
      <div class="mistake-postmortem" id="mistake-postmortem-card"></div>
    `;

    // Hook up interactive line/step/claim selectors
    if (current.type === 'code_line_select') {
      const lineRows = container.querySelectorAll('.code-line-row');
      lineRows.forEach(row => {
        row.addEventListener('click', () => {
          lineRows.forEach(r => r.classList.remove('selected'));
          row.classList.add('selected');
          State.mistakeState.selectedLineOrStep = parseInt(row.getAttribute('data-line'), 10);
        });
      });
    } else if (current.type === 'math_step_select') {
      const stepRows = container.querySelectorAll('.math-step-row');
      stepRows.forEach(row => {
        row.addEventListener('click', () => {
          stepRows.forEach(r => r.classList.remove('selected'));
          row.classList.add('selected');
          State.mistakeState.selectedLineOrStep = parseInt(row.getAttribute('data-step'), 10);
        });
      });
    } else if (current.type === 'claim_select') {
      const claimRows = container.querySelectorAll('.claim-row');
      claimRows.forEach(row => {
        row.addEventListener('click', () => {
          claimRows.forEach(r => r.classList.remove('selected'));
          row.classList.add('selected');
          State.mistakeState.selectedLineOrStep = parseInt(row.getAttribute('data-claim-idx'), 10);
        });
      });
    }

    // Hook up diagnostic option selection
    const optCards = container.querySelectorAll('.diagnostic-option-card');
    optCards.forEach(card => {
      card.addEventListener('click', () => {
        optCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        State.mistakeState.selectedOptionIndex = parseInt(card.getAttribute('data-opt-idx'), 10);
      });
    });

    // Hook up Submit Button
    const submitBtn = document.getElementById('btn-submit-mistake');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        submitMistakeAnswer(current);
      });
    }
  }

  function submitMistakeAnswer(current) {
    if (State.mistakeState.selectedLineOrStep === null) {
      showToast('Please click the suspect line, step, or claim first.');
      return;
    }
    if (State.mistakeState.selectedOptionIndex === null) {
      showToast('Please select what specifically makes this incorrect.');
      return;
    }

    const postmortem = document.getElementById('mistake-postmortem-card');
    if (!postmortem) return;

    const isTargetCorrect = (State.mistakeState.selectedLineOrStep === current.correctLineOrStep);
    const isDiagnosisCorrect = (State.mistakeState.selectedOptionIndex === current.correctOptionIndex);
    const isSuccess = isTargetCorrect && isDiagnosisCorrect;

    // Visually highlight the actual flawed line/step/claim
    const container = document.getElementById('mistake-arena-card');
    if (container) {
      if (current.type === 'code_line_select') {
        const correctRow = container.querySelector(`.code-line-row[data-line="${current.correctLineOrStep}"]`);
        if (correctRow) correctRow.classList.add('revealed-error');
      } else if (current.type === 'math_step_select') {
        const correctStep = container.querySelector(`.math-step-row[data-step="${current.correctLineOrStep}"]`);
        if (correctStep) correctStep.classList.add('selected');
      } else if (current.type === 'claim_select') {
        const correctClaim = container.querySelector(`.claim-row[data-claim-idx="${current.correctLineOrStep}"]`);
        if (correctClaim) correctClaim.classList.add('selected');
      }
    }

    // Log assessment for Knowledge Gap Detector integration
    logAssessment(current.topicId, current.subject, isSuccess, 'mistake', current.title);

    if (isSuccess) {
      playSoftChime(true);

      if (!State.progress.mistakeStats) {
        State.progress.mistakeStats = { solvedIds: [], score: 0 };
      }
      if (!State.progress.mistakeStats.solvedIds.includes(current.id)) {
        State.progress.mistakeStats.solvedIds.push(current.id);
        const pts = current.difficulty === 'Advanced' ? 30 : current.difficulty === 'Intermediate' ? 20 : 10;
        State.progress.mistakeStats.score += pts;
        saveProgressToStorage();
        evaluateBadges();
      }

      postmortem.className = 'mistake-postmortem visible success';
      postmortem.innerHTML = `
        <h3 class="postmortem-status-title">✓ Flaw Correctly Diagnosed!</h3>
        
        <div class="postmortem-block">
          <div class="postmortem-block-title">Root-Cause Analysis</div>
          <p class="postmortem-text">${escapeHtml(current.whyMistake)}</p>
        </div>

        <div class="postmortem-block">
          <div class="postmortem-block-title">The Cognitive Trap (Why Students Miss This)</div>
          <p class="postmortem-text">${escapeHtml(current.cognitiveTrap)}</p>
        </div>

        <div class="postmortem-block">
          <div class="postmortem-block-title">Verified Solution / Correct Approach</div>
          <div class="postmortem-correct-code">${escapeHtml(current.correctApproach)}</div>
        </div>

        <div class="postmortem-actions">
          <button class="btn btn-primary" id="btn-next-mistake">Next Challenge &rarr;</button>
          <button class="btn btn-secondary" id="btn-mistake-review-lesson">Review Related Lesson</button>
        </div>
      `;
    } else {
      playSoftChime(false);

      postmortem.className = 'mistake-postmortem visible error';
      postmortem.innerHTML = `
        <h3 class="postmortem-status-title">✕ Flaw Misidentified</h3>
        
        <div class="postmortem-block">
          <div class="postmortem-block-title">Correct Target & Root Cause</div>
          <p class="postmortem-text">${escapeHtml(current.whyMistake)}</p>
        </div>

        <div class="postmortem-block">
          <div class="postmortem-block-title">The Cognitive Trap</div>
          <p class="postmortem-text">${escapeHtml(current.cognitiveTrap)}</p>
        </div>

        <div class="postmortem-block">
          <div class="postmortem-block-title">The Correct Approach</div>
          <div class="postmortem-correct-code">${escapeHtml(current.correctApproach)}</div>
        </div>

        <div class="postmortem-actions">
          <button class="btn btn-outline" id="btn-retry-mistake">Retry Challenge</button>
          <button class="btn btn-secondary" id="btn-mistake-review-lesson">Study Topic Lesson</button>
        </div>
      `;

      const retryBtn = document.getElementById('btn-retry-mistake');
      if (retryBtn) {
        retryBtn.onclick = () => {
          postmortem.classList.remove('visible');
          State.mistakeState.selectedLineOrStep = null;
          State.mistakeState.selectedOptionIndex = null;
          renderMistakeChallenge();
        };
      }
    }

    renderMistakeStepperRibbon();

    // Hook Next Challenge Button
    const nextBtn = document.getElementById('btn-next-mistake');
    if (nextBtn) {
      nextBtn.onclick = () => {
        const filtered = getFilteredChallenges();
        State.mistakeState.currentIndex = (State.mistakeState.currentIndex + 1) % filtered.length;
        State.mistakeState.selectedLineOrStep = null;
        State.mistakeState.selectedOptionIndex = null;
        renderMistakeStepperRibbon();
        renderMistakeChallenge();
      };
    }

    // Hook Review Related Lesson Button
    const lessonBtn = document.getElementById('btn-mistake-review-lesson');
    if (lessonBtn && current.topicId) {
      lessonBtn.onclick = () => {
        const subData = CURRICULUM[current.subject];
        let lIdx = 0;
        if (subData && subData.lessons) {
          const found = subData.lessons.findIndex(l => l.id === current.topicId);
          if (found !== -1) lIdx = found;
        }
        navigateTo('subject', { subjectId: current.subject, lessonIndex: lIdx, tab: 'lessons' });
      };
    }
  }

  /* ============================================================
     8D. KNOWLEDGE GAP DETECTOR & DIAGNOSTIC ENGINE
     ============================================================ */
  const DIAGNOSTIC_BANK = {
    rapidStemCheck: [
      {
        subject: 'programming',
        topicId: 'prog-loops',
        prompt: 'What condition causes a programming loop to become an "infinite loop"?',
        options: [
          'When the loop contains more than 10 lines of code.',
          'When the loop termination condition never evaluates to false.',
          'When an array is iterated in reverse order.',
          'When a function is called inside the loop body.'
        ],
        correctIndex: 1,
        explanation: 'If a while/for loop condition permanently evaluates to true without internal counter updates, the CPU executes it endlessly.'
      },
      {
        subject: 'computer-science',
        topicId: 'cs-os',
        prompt: 'Why does an Operating System perform a "Context Switch"?',
        options: [
          'To permanently shut down the hard drive during power loss.',
          'To save the CPU register state of a running process and restore the state of another ready process.',
          'To format the primary solid-state drive.',
          'To translate Python code directly into JavaScript.'
        ],
        correctIndex: 1,
        explanation: 'Context switching preserves the execution state (program counter, registers) of one thread/process so another process can share the CPU.'
      },
      {
        subject: 'mathematics',
        topicId: 'math-algebra',
        prompt: 'What is the correct solution for x in the equation: 4(x - 3) = 2x + 6?',
        options: [
          'x = 3',
          'x = 6',
          'x = 9',
          'x = -9'
        ],
        correctIndex: 2,
        explanation: '4x - 12 = 2x + 6 => 2x = 18 => x = 9.'
      },
      {
        subject: 'technology',
        topicId: 'tech-cybersecurity',
        prompt: 'Why should passwords be stored using a cryptographic slow hash (like Argon2/bcrypt) rather than symmetric encryption (like AES)?',
        options: [
          'Hashes make passwords easily readable by administrators.',
          'Symmetric encryption is reversible: if the server key leaks, all passwords can be decrypted back to plaintext.',
          'Encryption cannot store uppercase letters.',
          'Hashes take up zero database storage space.'
        ],
        correctIndex: 1,
        explanation: 'One-way slow hashing cannot be inverted even if the database is leaked, ensuring user credentials remain protected.'
      }
    ],
    remediationQuestions: {
      'prog-intro': {
        prompt: 'What is the fundamental difference between an interpreter and a compiler?',
        options: [
          'Interpreters run code line-by-line; compilers translate the entire program into machine code before execution.',
          'Compilers are only used for mobile phones.',
          'Interpreters delete syntax errors automatically.',
          'There is no difference between them.'
        ],
        correctIndex: 0,
        explanation: 'Compilers perform upfront translation into executable binaries, whereas interpreters evaluate source statements sequentially.'
      },
      'prog-vars': {
        prompt: 'Which data type is most appropriate for a variable storing whether dark mode is enabled (true/false)?',
        options: ['Integer', 'Float', 'Boolean', 'String'],
        correctIndex: 2,
        explanation: 'Boolean is the atomic binary type for true/false truth values.'
      },
      'prog-conditionals': {
        prompt: 'In boolean logic, what is the output of the expression: (false || true) && !false?',
        options: ['false', 'true', 'undefined', 'NaN'],
        correctIndex: 1,
        explanation: '(false || true) evaluates to true. !false evaluates to true. (true && true) evaluates to true.'
      },
      'prog-loops': {
        prompt: 'In a standard for loop `for(let i=0; i<10; i++)`, how many total times does the body execute?',
        options: ['9 times', '10 times', '11 times', 'Infinite times'],
        correctIndex: 1,
        explanation: 'The loop runs for i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, which is exactly 10 iterations.'
      },
      'prog-functions': {
        prompt: 'What does a function\'s `return` statement do?',
        options: [
          'Terminates function execution and passes a result back to the caller.',
          'Restarts the computer.',
          'Clears all global variables.',
          'Re-executes the function from the beginning.'
        ],
        correctIndex: 0,
        explanation: 'The return statement exits the subroutine and provides an output value to the invoking expression.'
      },
      'prog-arrays': {
        prompt: 'If array `arr = [10, 20, 30]`, what is the value of `arr[1]`?',
        options: ['10', '20', '30', 'undefined'],
        correctIndex: 1,
        explanation: 'Arrays use 0-based indexing: index 0 is 10, index 1 is 20.'
      },
      'cs-fundamentals': {
        prompt: 'What happens to data stored in volatile RAM when electricity is disconnected?',
        options: [
          'Data is permanently lost.',
          'Data is automatically backed up to Google Drive.',
          'Data remains frozen intact forever.',
          'Data turns into read-only firmware.'
        ],
        correctIndex: 0,
        explanation: 'Volatile memory requires continuous electrical current to retain charge; when powered off, RAM loses all stored data.'
      },
      'cs-os': {
        prompt: 'What is a "Deadlock" in an operating system?',
        options: [
          'A physical cable disconnect.',
          'A state where two or more processes are permanently blocked waiting for resources held by each other.',
          'A monitor that will not turn on.',
          'A computer with zero remaining RAM.'
        ],
        correctIndex: 1,
        explanation: 'Deadlock is a circular wait condition where processes hold mutually needed non-preemptible resources.'
      },
      'cs-dbms': {
        prompt: 'In database systems, what does the ACID property "Atomicity" guarantee?',
        options: [
          'Transactions execute in less than 1 nanosecond.',
          'A transaction is all-or-nothing: if any part fails, the entire transaction is rolled back.',
          'Data is stored inside atomic nuclei.',
          'Passwords are encrypted with AES.'
        ],
        correctIndex: 1,
        explanation: 'Atomicity ensures that multi-step transactions either fully commit or leave the database completely unaltered.'
      },
      'cs-ds': {
        prompt: 'Which data structure follows the First-In, First-Out (FIFO) access order?',
        options: ['Stack', 'Queue', 'Binary Search Tree', 'Hash Map'],
        correctIndex: 1,
        explanation: 'A Queue serves elements in the exact order of their arrival (FIFO), just like a real-world checkout line.'
      },
      'cs-networks': {
        prompt: 'What is the role of the Domain Name System (DNS)?',
        options: [
          'Translates human-readable domain names (e.g. google.com) into numerical IP addresses.',
          'Encrypts hard drives against malware.',
          'Compresses video files for YouTube.',
          'Stores local browser cookies.'
        ],
        correctIndex: 0,
        explanation: 'DNS acts as the internet\'s phonebook, mapping hostnames to routable IPv4/IPv6 addresses.'
      },
      'math-algebra': {
        prompt: 'Solve for x: 3x + 15 = 0.',
        options: ['x = 5', 'x = -5', 'x = 0', 'x = 15'],
        correctIndex: 1,
        explanation: '3x = -15 => x = -15 / 3 = -5.'
      },
      'math-functions': {
        prompt: 'What does the "Vertical Line Test" verify for a plotted curve on a Cartesian coordinate plane?',
        options: [
          'Whether the curve represents a valid single-valued function.',
          'The exact area under the curve.',
          'Whether the curve is drawn in red or blue.',
          'The speed of a falling object.'
        ],
        correctIndex: 0,
        explanation: 'If any vertical line intersects a graph in more than one point, multiple y-outputs exist for a single x-input, disqualifying it as a function.'
      },
      'math-prob': {
        prompt: 'What is the probability of rolling an even number on a fair six-sided die?',
        options: ['1/6', '2/6', '3/6 (1/2)', '5/6'],
        correctIndex: 2,
        explanation: 'The even numbers are {2, 4, 6}, which is 3 favorable outcomes out of 6 total = 1/2.'
      },
      'math-stats': {
        prompt: 'Why is the median preferred over the mean when analyzing household incomes with extreme high outliers?',
        options: [
          'The median is easier to spell.',
          'The median is resistant to extreme skew and high outliers, representing the typical middle observation.',
          'The mean is always equal to zero.',
          'Computers cannot compute the mean.'
        ],
        correctIndex: 1,
        explanation: 'A single billionaire skews the arithmetic mean sharply upward, while the median accurately reflects the 50th percentile.'
      },
      'math-matrices': {
        prompt: 'What is the determinant of matrix [[1, 2], [3, 4]]?',
        options: ['-2', '2', '10', '0'],
        correctIndex: 0,
        explanation: 'det = (1*4) - (2*3) = 4 - 6 = -2.'
      },
      'tech-ai': {
        prompt: 'What characterizes Artificial Narrow Intelligence (ANI)?',
        options: [
          'Systems specialized to excel at a single focused task (e.g. chess, speech recognition).',
          'A sentient robot that writes poetry and feels human emotions.',
          'A computer that only operates in small rooms.',
          'Software that does not use algorithms.'
        ],
        correctIndex: 0,
        explanation: 'All current production AI systems (from LLMs to self-driving vision) are Narrow AI engineered for specific domains.'
      },
      'tech-cloud': {
        prompt: 'What does "Elasticity" mean in cloud computing?',
        options: [
          'Servers made of rubber.',
          'The ability to dynamically scale compute resources up or down automatically in response to demand.',
          'Running code without an internet connection.',
          'Buying physical server racks upfront.'
        ],
        correctIndex: 1,
        explanation: 'Elasticity allows cloud platforms to allocate resources during traffic peaks and decommission them during troughs.'
      },
      'tech-cybersecurity': {
        prompt: 'Why is Multi-Factor Authentication (MFA) significantly safer than a password alone?',
        options: [
          'It requires two separate authentication factors (e.g. something you know + something you have), defeating stolen password attacks.',
          'It allows you to bypass all login screens.',
          'It deletes all your passwords every 24 hours.',
          'It only works during daytime.'
        ],
        correctIndex: 0,
        explanation: 'Even if an attacker steals a password, they cannot authenticate without the second factor (e.g., authenticator app TOTP code).'
      },
      'tech-iot': {
        prompt: 'What is the primary function of an IoT "Sensor"?',
        options: [
          'Converts physical phenomena (temperature, motion, light) into digital electrical signals.',
          'Acts as a physical door hinge.',
          'Generates high-speed electricity.',
          'Deletes cloud databases.'
        ],
        correctIndex: 0,
        explanation: 'Sensors measure analog physical environments and convert measurements into digital telemetry.'
      },
      'tech-ml': {
        prompt: 'What is the goal of "Supervised Learning" in machine learning?',
        options: [
          'Learning a mapping function from labeled training examples to predict outputs for new inputs.',
          'Allowing humans to write every if/else statement by hand.',
          'Grouping unlabeled data with zero human feedback.',
          'Running algorithms without any data.'
        ],
        correctIndex: 0,
        explanation: 'Supervised learning optimizes model weights using known feature-label pairs (X -> Y).'
      }
    }
  };

  function analyzeKnowledgeGaps() {
    const log = State.progress.assessmentLog || [];
    const remediated = State.progress.remediatedGaps || [];
    
    // Group assessments by topicId
    const topicStats = {};

    // Initialize all 21 curriculum topics
    for (const subId in CURRICULUM) {
      CURRICULUM[subId].lessons.forEach(lesson => {
        topicStats[lesson.id] = {
          topicId: lesson.id,
          topicTitle: lesson.title,
          subjectId: subId,
          attempts: 0,
          correct: 0,
          accuracy: 0,
          latestIsCorrect: null,
          recentMissPrompt: '',
          isRemediated: remediated.includes(lesson.id)
        };
      });
    }

    // Process logged assessment events
    log.forEach(entry => {
      if (topicStats[entry.topicId]) {
        topicStats[entry.topicId].attempts++;
        if (entry.isCorrect) {
          topicStats[entry.topicId].correct++;
        }
        topicStats[entry.topicId].latestIsCorrect = entry.isCorrect;
        if (!entry.isCorrect) {
          topicStats[entry.topicId].recentMissPrompt = entry.prompt;
        }
      }
    });

    const gaps = [];
    const strong = [];
    const developing = [];
    const unassessed = [];

    const bySubject = {
      programming: { total: 0, mastered: 0, gaps: 0 },
      'computer-science': { total: 0, mastered: 0, gaps: 0 },
      mathematics: { total: 0, mastered: 0, gaps: 0 },
      technology: { total: 0, mastered: 0, gaps: 0 }
    };

    for (const topicId in topicStats) {
      const item = topicStats[topicId];
      if (bySubject[item.subjectId]) {
        bySubject[item.subjectId].total++;
      }

      if (item.attempts === 0) {
        item.status = 'unassessed';
        unassessed.push(item);
      } else {
        item.accuracy = Math.round((item.correct / item.attempts) * 100);

        // Gap Criteria: Latest attempt missed OR low accuracy (<60%) not yet remediated
        if (item.latestIsCorrect === false || (item.accuracy < 60 && !item.isRemediated)) {
          item.status = 'gap';
          gaps.push(item);
          if (bySubject[item.subjectId]) bySubject[item.subjectId].gaps++;
        } else if (item.isRemediated || item.accuracy >= 75) {
          item.status = 'mastered';
          strong.push(item);
          if (bySubject[item.subjectId]) bySubject[item.subjectId].mastered++;
        } else {
          item.status = 'developing';
          developing.push(item);
        }
      }
    }

    // Overall accuracy across all assessments
    let totalAttempts = log.length;
    let totalCorrect = log.filter(e => e.isCorrect).length;
    let overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    return {
      gaps,
      strong,
      developing,
      unassessed,
      totalAttempts,
      overallAccuracy,
      bySubject
    };
  }

  function renderKnowledgeGapDetector() {
    const analysis = analyzeKnowledgeGaps();

    // 1. Metric Cards
    const statTotal = document.getElementById('gap-stat-total');
    const statAcc = document.getElementById('gap-stat-accuracy');
    const statGaps = document.getElementById('gap-stat-gaps');
    const statMastered = document.getElementById('gap-stat-mastered');

    if (statTotal) statTotal.textContent = analysis.totalAttempts;
    if (statAcc) statAcc.textContent = `${analysis.overallAccuracy}%`;
    if (statGaps) statGaps.textContent = analysis.gaps.length;
    if (statMastered) statMastered.textContent = analysis.strong.length;

    // 2. Subject Mastery Spectrum Bars
    const subjectGrid = document.getElementById('detector-subjects-grid');
    if (subjectGrid) {
      subjectGrid.innerHTML = Object.keys(analysis.bySubject).map(subId => {
        const data = analysis.bySubject[subId];
        const pct = data.total > 0 ? Math.round((data.mastered / data.total) * 100) : 0;
        const subTitle = CURRICULUM[subId] ? CURRICULUM[subId].title : subId;
        return `
          <div class="detector-sub-item">
            <div class="sub-item-header">
              <span class="sub-item-name">${escapeHtml(subTitle)}</span>
              <span class="sub-item-pct">${pct}%</span>
            </div>
            <div class="detector-sub-bar-bg">
              <div class="detector-sub-bar-fill" style="width: ${pct}%;"></div>
            </div>
            <div class="sub-item-counts">
              <span>${data.mastered} Mastered</span>
              <span style="color: ${data.gaps > 0 ? 'var(--color-terracotta)' : 'var(--text-muted)'}; font-weight: ${data.gaps > 0 ? '700' : '400'};">
                ${data.gaps} Gap${data.gaps === 1 ? '' : 's'}
              </span>
            </div>
          </div>
        `;
      }).join('');
    }

    // 3. Priority Gaps Container
    const gapCardsContainer = document.getElementById('gap-cards-container');
    if (gapCardsContainer) {
      if (analysis.totalAttempts === 0) {
        // Initial Empty State
        gapCardsContainer.innerHTML = `
          <div class="gap-empty-card">
            <div class="gap-empty-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
                <circle cx="12" cy="12" r="9"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 9v6"></path>
                <path d="M9 12h6"></path>
              </svg>
            </div>
            <h3 class="gap-empty-title">No Knowledge Gaps Detected Yet!</h3>
            <p class="gap-empty-desc">
              Your diagnostic record is clean. Take our fast 4-topic STEM diagnostic check or complete any subject quiz to assess your intuition and detect any conceptual blind spots.
            </p>
            <div class="gap-empty-actions">
              <button class="btn btn-primary" id="btn-empty-start-diag">
                <span>Start Rapid 4-Topic STEM Diagnostic</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
              <button class="btn btn-outline" id="btn-empty-try-quiz">
                <span>Take Programming Quiz</span>
              </button>
            </div>
          </div>
        `;

        const startDiag = document.getElementById('btn-empty-start-diag');
        if (startDiag) startDiag.onclick = startStemDiagnostic;

        const tryQuiz = document.getElementById('btn-empty-try-quiz');
        if (tryQuiz) {
          tryQuiz.onclick = () => {
            navigateTo('subject', { subjectId: 'programming', tab: 'quiz' });
          };
        }
      } else if (analysis.gaps.length === 0) {
        // Clean Record / Mastered State
        gapCardsContainer.innerHTML = `
          <div class="gap-empty-card" style="border-color: #A2D5AB; background-color: var(--color-success-light);">
            <div class="gap-empty-icon" style="background-color: #A2D5AB; color: var(--color-success);">✓</div>
            <h3 class="gap-empty-title" style="color: var(--color-success);">All Assessed Topics Mastered!</h3>
            <p class="gap-empty-desc">
              Outstanding work! You currently have zero active knowledge gaps across all assessed questions. Keep practicing with Subject Quizzes or Find the Mistake challenges to test advanced topics.
            </p>
            <button class="btn btn-primary" id="btn-gap-take-another-quiz">Test Another Subject Quiz</button>
          </div>
        `;
        const testBtn = document.getElementById('btn-gap-take-another-quiz');
        if (testBtn) {
          testBtn.onclick = () => navigateTo('subject', { subjectId: 'computer-science', tab: 'quiz' });
        }
      } else {
        // Render Active Knowledge Gap Cards
        gapCardsContainer.innerHTML = analysis.gaps.map(gap => {
          const isHighPriority = gap.accuracy < 50 || gap.attempts === 1;
          const subTitle = CURRICULUM[gap.subjectId] ? CURRICULUM[gap.subjectId].title : gap.subjectId;
          const missContext = gap.recentMissPrompt
            ? `Missed on: "${gap.recentMissPrompt.slice(0, 75)}..."`
            : `${gap.attempts - gap.correct} incorrect responses recorded.`;

          return `
            <div class="gap-card">
              <div class="gap-card-header">
                <span class="gap-priority-pill ${isHighPriority ? 'gap-priority-high' : 'gap-priority-mod'}">
                  ${isHighPriority ? 'High Priority Gap' : 'Moderate Gap'} (${gap.accuracy}% Accuracy)
                </span>
                <span class="subject-pill-tag" style="font-size: 0.68rem;">${escapeHtml(subTitle)}</span>
              </div>
              
              <h4 class="gap-topic-title">${escapeHtml(gap.topicTitle)}</h4>
              <p class="gap-analysis-text">
                <strong>Detected Weakness:</strong> ${escapeHtml(missContext)} We recommend reviewing the foundational explanation to solidify your conceptual understanding.
              </p>

              <div class="gap-actions-row">
                <button class="btn btn-primary btn-gap-review" data-topic-review="${gap.topicId}" data-subject="${gap.subjectId}">
                  <span>Review Lesson</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
                <button class="btn btn-secondary btn-gap-retake" data-topic-retake="${gap.topicId}">
                  <span>Retake Question</span>
                </button>
              </div>
            </div>
          `;
        }).join('');

        // Hook up Review Lesson buttons
        gapCardsContainer.querySelectorAll('[data-topic-review]').forEach(btn => {
          btn.addEventListener('click', () => {
            const topicId = btn.getAttribute('data-topic-review');
            const subId = btn.getAttribute('data-subject');
            const subData = CURRICULUM[subId];
            let lIdx = 0;
            if (subData && subData.lessons) {
              const idx = subData.lessons.findIndex(l => l.id === topicId);
              if (idx !== -1) lIdx = idx;
            }
            navigateTo('subject', { subjectId: subId, lessonIndex: lIdx, tab: 'lessons' });
          });
        });

        // Hook up Retake Question buttons
        gapCardsContainer.querySelectorAll('[data-topic-retake]').forEach(btn => {
          btn.addEventListener('click', () => {
            const topicId = btn.getAttribute('data-topic-retake');
            openTargetedRetakeModal(topicId);
          });
        });
      }
    }

    // 4. Strong Areas Section
    const strongGrid = document.getElementById('strong-cards-grid');
    if (strongGrid) {
      if (analysis.strong.length === 0) {
        strongGrid.innerHTML = `
          <div style="grid-column: 1 / -1; color: var(--text-muted); font-size: 0.875rem;">
            No strong areas verified yet. Answer questions correctly in quizzes and checkpoints to build your verified strengths.
          </div>
        `;
      } else {
        strongGrid.innerHTML = analysis.strong.map(s => `
          <div class="strong-card">
            <div class="strong-check-icon">✓</div>
            <div class="strong-card-meta">
              <span class="strong-card-title">${escapeHtml(s.topicTitle)}</span>
              <span class="strong-card-sub">${escapeHtml(s.subjectId)} • ${s.accuracy}% Accuracy</span>
            </div>
          </div>
        `).join('');
      }
    }
  }

  function startStemDiagnostic() {
    State.diagnosticState = {
      mode: 'diagnostic',
      activeTopicId: null,
      currentIndex: 0,
      questions: DIAGNOSTIC_BANK.rapidStemCheck,
      score: 0,
      isAnswered: false
    };

    openDiagnosticModal();
    renderDiagnosticQuestion();
  }

  function openTargetedRetakeModal(topicId) {
    const qData = DIAGNOSTIC_BANK.remediationQuestions[topicId];
    if (!qData) {
      showToast('Retake question unavailable for this topic.');
      return;
    }

    State.diagnosticState = {
      mode: 'retake',
      activeTopicId: topicId,
      currentIndex: 0,
      questions: [{
        subject: topicId.split('-')[0] === 'prog' ? 'programming' : topicId.split('-')[0] === 'cs' ? 'computer-science' : topicId.split('-')[0] === 'math' ? 'mathematics' : 'technology',
        topicId: topicId,
        prompt: qData.prompt,
        options: qData.options,
        correctIndex: qData.correctIndex,
        explanation: qData.explanation
      }],
      score: 0,
      isAnswered: false
    };

    openDiagnosticModal();
    renderDiagnosticQuestion();
  }

  function openDiagnosticModal() {
    const modal = document.getElementById('diagnostic-modal');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeDiagnosticModal() {
    const modal = document.getElementById('diagnostic-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function renderDiagnosticQuestion() {
    const body = document.getElementById('modal-diagnostic-body');
    const kicker = document.getElementById('modal-diagnostic-kicker');
    const title = document.getElementById('modal-diagnostic-title');
    if (!body) return;

    const current = State.diagnosticState.questions[State.diagnosticState.currentIndex];
    const totalQ = State.diagnosticState.questions.length;
    const isRetake = State.diagnosticState.mode === 'retake';

    if (kicker) {
      kicker.textContent = isRetake ? 'Targeted Retake Evaluation' : `STEM Rapid Diagnostic (${State.diagnosticState.currentIndex + 1} of ${totalQ})`;
    }
    if (title) {
      title.textContent = isRetake ? 'Knowledge Gap Verification' : 'Testing Cross-Disciplinary Intuition';
    }

    body.innerHTML = `
      <div class="diag-question-prompt">${escapeHtml(current.prompt)}</div>
      <div class="diag-options-group">
        ${current.options.map((opt, i) => `
          <button class="diag-opt-btn" data-diag-idx="${i}">
            <span style="font-weight: 800; width: 22px;">${String.fromCharCode(65 + i)}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `).join('')}
      </div>
      <div class="diag-feedback-box" id="diag-feedback-box"></div>
      <div style="margin-top: 1.25rem; display: flex; justify-content: flex-end;">
        <button class="btn btn-primary" id="btn-diag-next" style="display: none;">
          <span>${State.diagnosticState.currentIndex === totalQ - 1 ? 'Finish & View Gaps' : 'Next Question'}</span>
        </button>
      </div>
    `;

    const optButtons = body.querySelectorAll('.diag-opt-btn');
    const feedbackBox = document.getElementById('diag-feedback-box');
    const nextBtn = document.getElementById('btn-diag-next');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (State.diagnosticState.isAnswered) return;
        State.diagnosticState.isAnswered = true;

        const chosen = parseInt(btn.getAttribute('data-diag-idx'), 10);
        const isCorrect = chosen === current.correctIndex;

        // Log assessment
        logAssessment(current.topicId, current.subject, isCorrect, isRetake ? 'retake' : 'diagnostic', current.prompt);

        optButtons.forEach(b => {
          b.disabled = true;
          const idx = parseInt(b.getAttribute('data-diag-idx'), 10);
          if (idx === current.correctIndex) b.classList.add('correct');
          else if (idx === chosen && !isCorrect) b.classList.add('incorrect');
        });

        if (isCorrect) {
          State.diagnosticState.score++;
          playSoftChime(true);
          feedbackBox.className = 'diag-feedback-box visible success';
          feedbackBox.innerHTML = `<strong>✓ Correct!</strong> ${escapeHtml(current.explanation)}`;

          if (isRetake) {
            if (!State.progress.remediatedGaps.includes(current.topicId)) {
              State.progress.remediatedGaps.push(current.topicId);
              saveProgressToStorage();
              evaluateBadges();
            }
          }
        } else {
          playSoftChime(false);
          feedbackBox.className = 'diag-feedback-box visible error';
          feedbackBox.innerHTML = `<strong>✕ Incorrect.</strong> ${escapeHtml(current.explanation)}`;
        }

        nextBtn.style.display = 'inline-flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      if (State.diagnosticState.currentIndex < totalQ - 1) {
        State.diagnosticState.currentIndex++;
        State.diagnosticState.isAnswered = false;
        renderDiagnosticQuestion();
      } else {
        closeDiagnosticModal();
        if (isRetake) {
          showToast('Retake finished! Knowledge Gap status updated.');
        } else {
          showToast(`Diagnostic complete! Scored ${State.diagnosticState.score}/${totalQ}.`);
        }
        renderKnowledgeGapDetector();
      }
    });
  }

  /* ============================================================
     8E. THE DETECTIVE BUREAU ENGINE (12 INVESTIGATIVE CASES)
     ============================================================ */
  const DETECTIVE_CASES = [
    // --- PROGRAMMING (3 Cases) ---
    {
      id: 'case-prog-broken-code',
      caseCode: 'CASE #P-01',
      title: 'The Case of the Broken Code',
      subject: 'programming',
      topicId: 'prog-conditionals',
      difficulty: 'Beginner',
      points: 50,
      summary: 'A university shuttle reservation module grants VIP Priority Boarding to every single student—even standard ticket holders. Investigate the gatekeeper logic.',
      introduction: 'The Campus Transit Authority deployed an automated boarding script this morning. Within minutes, the priority lane overflowed: 100% of scanned student IDs were routed to the VIP Express Shuttle, regardless of their actual pass tier.',
      artifactTitle: 'shuttle_gatekeeper.js — Deployed Access Controller',
      artifactCode: `function assignBoardingZone(studentId, passTier) {
  let assignedZone = "Zone B - Standard";
  if (passTier = "VIP") {
    assignedZone = "Zone A - Priority Express";
  }
  return { studentId, passTier, assignedZone };
}`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Gate Scanner Log',
          title: 'Input vs Output Discrepancy',
          detail: 'Student #4092 scanned a badge where passTier was initially "STANDARD". However, the returned object logged: { studentId: 4092, passTier: "VIP", assignedZone: "Zone A - Priority Express" }.'
        },
        {
          id: 'c2',
          tag: 'Clue B • Operator Analysis',
          title: 'Single Equals (=) vs Triple Equals (===)',
          detail: 'On Line 3, the condition is written as if (passTier = "VIP"). In JavaScript, a single equals sign is the assignment operator, not a comparison operator.'
        },
        {
          id: 'c3',
          tag: 'Clue C • Boolean Truthiness Report',
          title: 'Expression Evaluation Value',
          detail: 'An assignment expression (passTier = "VIP") evaluates to the newly assigned value ("VIP"). In JavaScript conditionals, any non-empty string is evaluated as truthy (true).'
        },
        {
          id: 'c4',
          tag: 'Clue D • Memory State Mutation',
          title: 'Parameter Overwrite',
          detail: 'Because passTier is overwritten with "VIP" inside the if header, the original "STANDARD" argument is destroyed before the function even reaches the return statement.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Run Test Vector: assignBoardingZone(101, "STANDARD")',
          finding: 'CONFIRMED ANOMALY: The parameter passTier mutates from "STANDARD" to "VIP" on Line 3, and the if-branch executes unconditionally.'
        },
        {
          id: 'l2',
          action: 'Inspect JavaScript Engine Syntax Tree for Line 3',
          finding: 'SMOKING GUN: The AST node inside the IfStatement test is an AssignmentExpression (=) rather than a BinaryExpression (===).'
        },
        {
          id: 'l3',
          action: 'Check Hardware Barcode Scanner Firmware',
          finding: 'RULED OUT: The physical optical scanner transmits accurate string payloads ("STANDARD", "ECONOMY", "VIP") over serial USB.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Based on the collected clues and diagnostic leads, what is causing every student to receive VIP Priority Boarding?',
        options: [
          'The return statement on Line 6 returns an object literal instead of a primitive string.',
          'Line 3 uses the assignment operator (=) instead of strict equality (===), overwriting passTier with "VIP" and evaluating to truthy every time.',
          'The variable assignedZone was declared with "let" instead of "const" on Line 2.',
          'The optical barcode scanner hardware is corrupting string characters during transmission.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Re-examine Clue B and Lead 2: the scanner hardware and return object are functioning properly. Look closely at the operator inside `if (passTier = "VIP")` on Line 3.',
        confirmFeedback: 'Exact match! `passTier = "VIP"` assigns the string `"VIP"` to `passTier`, which evaluates as truthy on every call.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): Which code modification will permanently resolve the boarding bug?',
        options: [
          'Change Line 3 to: if (passTier === "VIP") { ... } to perform a strict, non-mutating equality comparison.',
          'Remove the if statement completely and always return "Zone B - Standard".',
          'Change Line 3 to: if (passTier != "VIP") { ... }.',
          'Wrap the function inside a while(true) loop.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'To grant Zone A only when passTier is genuinely "VIP" without mutating the variable, we need the strict equality operator `===`.',
        confirmFeedback: 'Case Solved! Replacing `=` with `===` compares `passTier` against `"VIP"` without mutating state.'
      },
      resolution: 'The bug was caused by an accidental assignment inside a conditional header (`if (passTier = "VIP")`). Instead of testing whether `passTier` equaled `"VIP"`, the code overwrote `passTier` with `"VIP"` and evaluated the resulting non-empty string as `true`. Replacing `=` with strict equality `===` restores accurate branching.',
      fixedCode: `function assignBoardingZone(studentId, passTier) {
  let assignedZone = "Zone B - Standard";
  if (passTier === "VIP") { // FIXED: Strict equality comparison
    assignedZone = "Zone A - Priority Express";
  }
  return { studentId, passTier, assignedZone };
}`,
      learningOutcome: 'In programming languages derived from C (JavaScript, C, C++, Java), `=` assigns a value to a variable, whereas `==` and `===` test for equality. Placing an assignment inside an `if` condition both corrupts the variable and forces the condition to evaluate based on the assigned value\'s truthiness.'
    },
    {
      id: 'case-prog-missing-output',
      caseCode: 'CASE #P-02',
      title: 'The Missing Output',
      subject: 'programming',
      topicId: 'prog-functions',
      difficulty: 'Intermediate',
      points: 75,
      summary: 'An environmental lab dashboard displays "NaN" and "undefined" when computing daily average temperatures, even though the sensor array is full of valid readings.',
      introduction: 'The Atmospheric Science Department connected 8 roof sensors to their central dashboard. Although the console inside the calculation function prints the correct sum, the main dashboard widget receives `undefined` and crashes when formatting the number.',
      artifactTitle: 'telemetry_aggregator.js — Sensor Processing Module',
      artifactCode: `function computeDailyAverage(readings) {
  let sum = 0;
  for (let i = 0; i < readings.length; i++) {
    sum += readings[i];
  }
  const average = sum / readings.length;
  console.log("Computed Average:", average);
}

const todayAvg = computeDailyAverage([21.5, 22.0, 23.4, 21.1]);
 renderWidget(todayAvg.toFixed(1)); // TypeError: Cannot read properties of undefined`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Stack Trace',
          title: 'Uncaught TypeError on Line 11',
          detail: 'Line 11 throws "TypeError: Cannot read properties of undefined (reading \'toFixed\')". This proves that the variable todayAvg holds the value undefined.'
        },
        {
          id: 'c2',
          tag: 'Clue B • Terminal Log',
          title: 'Console Output vs Caller Value',
          detail: 'Line 7 successfully prints "Computed Average: 22" to the developer console, proving the loop and division math inside computeDailyAverage are accurate.'
        },
        {
          id: 'c3',
          tag: 'Clue C • Subroutine Exit Behavior',
          title: 'Implicit Return Value in JavaScript',
          detail: 'When a JavaScript function reaches its closing curly brace `}` without executing an explicit `return` statement, it automatically returns `undefined` to the caller.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Variable Scope Inspection',
          title: 'Local Constant Lifetime',
          detail: 'The constant `average` is local to `computeDailyAverage`. Once the function finishes on Line 8, `average` is garbage-collected unless handed back via `return`.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Inspect typeof todayAvg immediately after Line 10',
          finding: 'SMOKING GUN: `typeof todayAvg` evaluates to `"undefined"`, even though `average` inside the function was `22`.'
        },
        {
          id: 'l2',
          action: 'Compare console.log() vs return keyword',
          finding: 'KEY INSIGHT: `console.log(average)` only prints text to the developer terminal; it does NOT pass data back to the variable `todayAvg`.'
        },
        {
          id: 'l3',
          action: 'Test Array Input for Null or Corrupt Floats',
          finding: 'RULED OUT: All four elements `[21.5, 22.0, 23.4, 21.1]` are valid IEEE-754 floating-point numbers summing to `88.0`.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why is `todayAvg` equal to `undefined` on Line 10 despite the function printing the right average on Line 7?',
        options: [
          'The for loop stops one element too early because it uses `i < readings.length`.',
          'The function logs `average` to the console with `console.log()` but never executes a `return average;` statement, causing it to return `undefined`.',
          'JavaScript arrays cannot hold decimal numbers alongside integers.',
          'The `const` keyword prevents `average` from being divided by `readings.length`.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Check Clue B and Lead 2: the loop and division calculate `22` accurately, and `console.log` prints it. Why doesn\'t `todayAvg` receive that `22`?',
        confirmFeedback: 'Spot on! Printing a value with `console.log()` is only a visual side-effect; without `return average;`, the caller receives `undefined`.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): What change will fix the crash and supply the computed average to `todayAvg`?',
        options: [
          'Add `return average;` at the end of `computeDailyAverage(readings)` so the function hands the numeric result back to the caller.',
          'Replace `const todayAvg` with `var todayAvg`.',
          'Delete `console.log("Computed Average:", average)` without adding anything else.',
          'Change `sum = 0` to `sum = 1`.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'The caller `const todayAvg = computeDailyAverage(...)` needs the function to explicitly emit its output value using the `return` keyword.',
        confirmFeedback: 'Case Solved! Adding `return average;` passes `22` to `todayAvg`, allowing `todayAvg.toFixed(1)` to render `"22.0"` cleanly.'
      },
      resolution: 'The developer confused logging to the console (`console.log`) with returning a value from a function (`return`). Because `computeDailyAverage` had no `return` statement, it implicitly returned `undefined`, causing `todayAvg.toFixed(1)` to throw a TypeError.',
      fixedCode: `function computeDailyAverage(readings) {
  let sum = 0;
  for (let i = 0; i < readings.length; i++) {
    sum += readings[i];
  }
  const average = sum / readings.length;
  return average; // FIXED: Explicitly return the computed value to caller
}`,
      learningOutcome: 'Functions communicate their results back to the calling code exclusively through the `return` statement. `console.log()` is merely a diagnostic output stream for humans reading the terminal and never transfers data between program variables.'
    },
    {
      id: 'case-prog-infinite-loop',
      caseCode: 'CASE #P-03',
      title: 'The Infinite Loop Mystery',
      subject: 'programming',
      topicId: 'prog-loops',
      difficulty: 'Advanced',
      points: 100,
      summary: 'An automated warehouse inventory scanner freezes at 100% CPU utilization whenever it searches for a package ID that is not in the manifest.',
      introduction: 'Warehouse Pod #7 uses a custom binary search routine to locate package barcodes in a sorted manifest array. When a package exists, lookup takes less than 1 millisecond. When a worker scans a barcode that is NOT in the manifest, the terminal freezes indefinitely.',
      artifactTitle: 'warehouse_search.js — Manifest Lookup Engine',
      artifactCode: `function findPackageSlot(sortedIds, targetId) {
  let low = 0;
  let high = sortedIds.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (sortedIds[mid] === targetId) return mid;
    if (sortedIds[mid] < targetId) {
      low = mid; // <-- Inspect pointer update
    } else {
      high = mid; // <-- Inspect pointer update
    }
  }
  return -1;
}`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • CPU Profiler Trace',
          title: 'Stuck State at low = 4, high = 5',
          detail: 'When searching sortedIds = [10, 20, 30, 40, 50, 60] for targetId = 55, the loop reaches low = 4, high = 5. On every subsequent cycle, mid is calculated as Math.floor((4 + 5) / 2) = 4.'
        },
        {
          id: 'c2',
          tag: 'Clue B • Boundary Progression Check',
          title: 'Zero Pointer Advancement',
          detail: 'At mid = 4, sortedIds[4] is 50, which is less than targetId (55). The branch executes `low = mid`, setting `low = 4` again! Neither `low` nor `high` changes.'
        },
        {
          id: 'c3',
          tag: 'Clue C • Binary Search Invariant',
          title: 'Excluding the Tested Midpoint',
          detail: 'Because `sortedIds[mid] === targetId` was already checked and proven false on Line 6, index `mid` cannot be the target and must be excluded from the next search interval.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Termination Condition',
          title: 'Why low <= high Never Ends',
          detail: 'For `while (low <= high)` to terminate when an item is absent, the search space `[low, high]` must strictly shrink on every iteration until `low > high`.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Step-trace findPackageSlot([10, 20], 15) in Debugger',
          finding: 'SMOKING GUN: Iteration 1: low=0, high=1 -> mid=0. sortedIds[0] (10) < 15, so low = mid = 0. Iteration 2: low=0, high=1 -> mid=0. Identical state repeats forever!'
        },
        {
          id: 'l2',
          action: 'Test with low = mid + 1 and high = mid - 1',
          finding: 'VERIFIED: Updating `low = mid + 1` and `high = mid - 1` causes `low` to advance past `high`, returning `-1` in 3 steps.'
        },
        {
          id: 'l3',
          action: 'Check if sortedIds array is unsorted',
          finding: 'RULED OUT: The manifest array is strictly sorted in ascending numerical order.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why does `findPackageSlot` enter an infinite loop when searching for a missing `targetId`?',
        options: [
          'The `Math.floor()` function rounds up instead of down for odd numbers.',
          'Setting `low = mid` and `high = mid` fails to exclude the already-tested `mid` index, so when `low` and `high` are adjacent (`low = 4, high = 5`), `mid` evaluates to `low` repeatedly and the interval never shrinks.',
          'The `while` loop condition should be `while (low > high)`.',
          'Functions in JavaScript cannot have two `return` statements.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Look at Clue A and Lead 1: when `low = 0` and `high = 1`, `Math.floor((0 + 1) / 2)` is `0`. What happens when `low = mid` sets `low = 0` again?',
        confirmFeedback: 'Precisely! Because `mid` is not excluded (`mid + 1` / `mid - 1`), the search interval `[low, high]` stops shrinking when `high - low === 1`.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How should Lines 8 and 10 be updated to guarantee loop termination?',
        options: [
          'Update Line 8 to `low = mid + 1;` and Line 10 to `high = mid - 1;` so the tested midpoint is excluded on every iteration.',
          'Change Line 5 to `let mid = low + high;`.',
          'Replace `while (low <= high)` with `for (let i = 0; i >= 0; i++)`.',
          'Remove the `return -1;` statement on Line 13.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'Since `sortedIds[mid]` was already checked on Line 6, we must narrow the search window past `mid`: `low = mid + 1` or `high = mid - 1`.',
        confirmFeedback: 'Case Solved! With `low = mid + 1` and `high = mid - 1`, the search space strictly decreases on every step, guaranteeing O(log n) termination.'
      },
      resolution: 'The infinite loop occurred because the binary search pointers were updated to `low = mid` and `high = mid` instead of `low = mid + 1` and `high = mid - 1`. Whenever `low` and `high` were 1 index apart, integer division `Math.floor((low + high) / 2)` rounded down to `low`, causing `low = mid` to leave the variables unchanged forever.',
      fixedCode: `function findPackageSlot(sortedIds, targetId) {
  let low = 0;
  let high = sortedIds.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (sortedIds[mid] === targetId) return mid;
    if (sortedIds[mid] < targetId) {
      low = mid + 1; // FIXED: Exclude mid and advance lower bound
    } else {
      high = mid - 1; // FIXED: Exclude mid and shrink upper bound
    }
  }
  return -1;
}`,
      learningOutcome: 'Every loop requires a strict progress invariant (a quantity that moves monotonically toward the termination boundary on every single iteration). In Binary Search, excluding `mid` via `mid + 1` and `mid - 1` guarantees the search interval shrinks each step.'
    },

    // --- COMPUTER SCIENCE (3 Cases) ---
    {
      id: 'case-cs-missing-bit',
      caseCode: 'CASE #CS-01',
      title: 'The Missing Bit',
      subject: 'computer-science',
      topicId: 'cs-fundamentals',
      difficulty: 'Beginner',
      points: 50,
      summary: 'A weather balloon telemetry receiver corrupts altitude readings and reports an altitude of 4 meters just moments after the balloon climbed past 255 meters.',
      introduction: 'A student aerospace team launched a high-altitude weather balloon. The onboard barometer tracked altitude accurately from 0m up to 255m. The instant the balloon reached 260m, the ground station display suddenly dropped to 4m!',
      artifactTitle: 'telemetry_packet.bin — 8-Bit Register Dump',
      artifactCode: `Altitude 254m -> Binary: 11111110 (8-bit unsigned) -> Display: 254m
Altitude 255m -> Binary: 11111111 (8-bit unsigned) -> Display: 255m
Altitude 260m -> Binary: [1] 00000100 (9th bit dropped!) -> Display: 4m`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Register Width Spec',
          title: '8-Bit Unsigned Integer Allocation',
          detail: 'The telemetry packet stores altitude in a single 1-byte (8-bit) unsigned integer register (`uint8_t`).'
        },
        {
          id: 'c2',
          tag: 'Clue B • Maximum Representable Value',
          title: 'Binary Capacity of 8 Bits',
          detail: 'With 8 binary bits all set to 1 (`11111111`), the maximum value is 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255 (which is 2⁸ − 1).'
        },
        {
          id: 'c3',
          tag: 'Clue C • Binary Conversion of 260',
          title: '9-Bit Representation',
          detail: 'In binary, the number 260 is `100000100` (256 + 4), which requires 9 bits. When stored in an 8-bit register, the most significant 9th bit (`256`) overflows and is truncated, leaving `00000100` = 4!'
        },
        {
          id: 'c4',
          tag: 'Clue D • Sensor Hardware Check',
          title: 'Barometer Pressure Transducer',
          detail: 'The raw analog barometer measured atmospheric pressure accurately at 260m; the truncation occurred when packing the integer into the 8-bit register.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Inspect CPU Carry/Overflow Flag in ALU Status Register',
          finding: 'SMOKING GUN: The ALU Carry Out (CY) bit was triggered at altitude = 256m as the 9th bit spilled outside the 8-bit register.'
        },
        {
          id: 'l2',
          action: 'Calculate 260 modulo 256',
          finding: 'MATHEMATICAL MATCH: 260 mod 256 = 4. Every value above 255 wraps around modulo 2⁸ (256).'
        },
        {
          id: 'l3',
          action: 'Simulate 16-Bit Unsigned Integer (uint16_t) Register',
          finding: 'VERIFIED: A 16-bit register holds values from 0 to 65,535 (2¹⁶ − 1), representing 260m as `00000001 00000100` without overflow.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why did the ground station display 4 meters when the balloon was actually at 260 meters?',
        options: [
          'The radio antenna lost signal above 250 meters.',
          'An 8-bit unsigned integer can only hold values from 0 to 255; at 260 (binary 100000100), the 9th bit (worth 256) overflowed and was discarded, leaving 00000100 (4).',
          'The barometer sensor froze due to cold temperatures.',
          'Binary numbers cannot represent multiples of 10.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Look at Clues B and C: what is 260 in binary (`256 + 4`), and how many bits can an 8-bit register hold?',
        confirmFeedback: 'Correct! 260 is `256 + 4` (`100000100` in binary). Dropping the 9th bit (`256`) due to 8-bit integer overflow leaves `00000100`, which is `4`!'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How should the telemetry packet format be upgraded so the balloon can record altitudes up to 30,000 meters?',
        options: [
          'Upgrade the altitude field from an 8-bit unsigned integer (`uint8_t`, max 255) to a 16-bit unsigned integer (`uint16_t`, max 65,535).',
          'Subtract 255 from the altitude before transmitting.',
          'Use a 4-bit nibble instead of an 8-bit byte.',
          'Convert the binary bits into ASCII letters.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'To represent 30,000 meters in binary without overflow, we need enough bits so that 2ⁿ − 1 ≥ 30,000. Check Lead 3!',
        confirmFeedback: 'Case Solved! A 16-bit unsigned integer (`uint16_t`) provides 2¹⁶ = 65,536 states (0 to 65,535m), easily accommodating 30,000m.'
      },
      resolution: 'The altitude anomaly was a classic 8-bit Unsigned Integer Overflow. Because 1 byte (8 bits) can only represent values up to `2⁸ - 1 = 255`, reaching `260` (`100000100₂`) caused the 9th bit (`256`) to be truncated, wrapping the value modulo 256 down to `4`. Widening the register to 16 bits (`uint16_t`) increases capacity to `65,535`.',
      fixedCode: `// Packet Header Specification (Fixed)
struct TelemetryPacket {
  uint16_t altitudeMeters; // FIXED: 16-bit unsigned (Range: 0 to 65,535m)
  int16_t  temperatureC;
};`,
      learningOutcome: 'In computer architecture, fixed-width registers store a finite range of numbers: an n-bit unsigned integer stores `0` to `2ⁿ - 1`. Exceeding this ceiling causes arithmetic overflow, where higher-order bits are truncated (wrapping around modulo `2ⁿ`).'
    },
    {
      id: 'case-cs-logic-gate',
      caseCode: 'CASE #CS-02',
      title: 'The Logic Gate Mystery',
      subject: 'computer-science',
      topicId: 'cs-fundamentals',
      difficulty: 'Intermediate',
      points: 75,
      summary: 'A laboratory cleanroom airlock refuses to unseal even when both the Inner Pressure Equalized sensor and Bio-Filter Active sensor report TRUE (1).',
      introduction: 'The semiconductor lab airlock door is controlled by a digital logic circuit with two inputs: Input A (Pressure Equalized) and Input B (Bio-Filter Active), plus an Emergency Lockout Override (Input C, normally 0). The door should unlock (`Output = 1`) ONLY when `A = 1`, `B = 1`, and `C = 0`. Today, with `A = 1, B = 1, C = 0`, the door remains locked (`Output = 0`)!',
      artifactTitle: 'airlock_schematic.hdl — Digital Logic Gate Wiring',
      artifactCode: `Inputs:
  A = 1 (Pressure Equalized)
  B = 1 (Bio-Filter Active)
  C = 0 (Emergency Lockout Override)

Current Circuit Wiring:
  Stage 1: Gate_1 = A XOR B        // <-- Suspect Gate 1
  Stage 2: Gate_2 = NOT C
  Stage 3: Unlock = Gate_1 AND Gate_2`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Specification Requirement',
          title: 'Intended Truth Table Condition',
          detail: 'The safety manual states: Stage 1 must output 1 when BOTH Sensor A is 1 AND Sensor B is 1 (`A = 1, B = 1 -> Stage 1 = 1`).'
        },
        {
          id: 'c2',
          tag: 'Clue B • XOR Gate Truth Table',
          title: 'Exclusive-OR Behavior on Dual High Inputs',
          detail: 'An XOR (Exclusive-OR) gate outputs 1 only when its inputs are DIFFERENT (`1 XOR 0 = 1`, `0 XOR 1 = 1`). When BOTH inputs are 1 (`1 XOR 1`), an XOR gate outputs `0`!'
        },
        {
          id: 'c3',
          tag: 'Clue C • Stage 2 Verification',
          title: 'Inverter Gate Check',
          detail: 'With Emergency Lockout `C = 0`, `Gate_2 = NOT 0 = 1`. Stage 2 and Stage 3 (`Gate_1 AND Gate_2`) are wired properly.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Dangerous Side Effect',
          title: 'Single-Sensor Unlock Hazard',
          detail: 'Because Stage 1 uses `XOR`, if `A = 1` and `B = 0` (Bio-Filter OFF!), `1 XOR 0` outputs `1`, unlocking the airlock when it is unsafe!'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Probe Voltage at Stage 1 Output with A = 1, B = 1',
          finding: 'SMOKING GUN: Input A is 5V (1) and Input B is 5V (1), but `Gate_1` (wired as XOR) outputs 0V (0)!'
        },
        {
          id: 'l2',
          action: 'Test Stage 1 with A = 1, B = 0 (Unsafe State)',
          finding: 'CRITICAL HAZARD: With Bio-Filter OFF (`B = 0`), `1 XOR 0` evaluates to `1`, unlocking the door during contamination!'
        },
        {
          id: 'l3',
          action: 'Replace Gate_1 with an AND Gate in Circuit Simulator',
          finding: 'VERIFIED: With `Gate_1 = A AND B`, `1 AND 1` outputs `1` (unlocking safely) and `1 AND 0` outputs `0` (staying locked).'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why does the airlock stay locked when both `A = 1` and `B = 1`, and unlock when only one sensor is `1`?',
        options: [
          'Stage 2 uses a NOT gate on C instead of a buffer.',
          'Stage 1 used an XOR (Exclusive-OR) gate instead of an AND gate; XOR outputs 0 when both inputs are 1 (`1 XOR 1 = 0`).',
          'Electricity cannot flow through three logic gates in series.',
          'Input C must be set to 1 for `NOT C` to output 1.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Inspect Clue B and Lead 1: what does `1 XOR 1` evaluate to in Boolean logic?',
        confirmFeedback: 'Spot on! An XOR gate means "one or the other, but NOT both" (`1 XOR 1 = 0`), whereas the airlock requires "both A AND B" (`1 AND 1 = 1`).'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How should the logic circuit be rewired to meet the safety specification?',
        options: [
          'Replace the XOR gate in Stage 1 with an AND gate so `Unlock = (A AND B) AND (NOT C)`.',
          'Replace all gates in the circuit with NOT gates.',
          'Replace the XOR gate in Stage 1 with a NAND gate.',
          'Disconnect Sensor B from the circuit.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'We want Stage 1 to output `1` if and only if `A = 1` AND `B = 1`. Which logic gate implements conjunction?',
        confirmFeedback: 'Case Solved! Using `Gate_1 = A AND B` guarantees `Unlock = 1` strictly when `A = 1, B = 1, C = 0`.'
      },
      resolution: 'An engineer mistakenly installed an XOR (Exclusive-OR) gate in Stage 1 instead of an AND gate. Because `1 XOR 1 = 0`, the airlock locked down whenever both safety sensors were active, and dangerously unlocked when only one sensor was active (`1 XOR 0 = 1`). Replacing XOR with an AND gate (`(A AND B) AND (NOT C)`) restores the exact truth table.',
      fixedCode: `// Corrected Airlock Boolean Logic Expression:
Stage 1: Gate_1 = A AND B       // FIXED: Conjunction (1 only when both A=1 and B=1)
Stage 2: Gate_2 = NOT C         // 1 when Emergency Lockout C=0
Stage 3: Unlock = Gate_1 AND Gate_2`,
      learningOutcome: 'In Boolean algebra and digital logic circuits, AND outputs `1` only when all inputs are `1`, OR outputs `1` when at least one input is `1`, and XOR (Exclusive-OR) outputs `1` only when inputs differ (`A ≠ B`).'
    },
    {
      id: 'case-cs-data-structure',
      caseCode: 'CASE #CS-03',
      title: 'The Data Structure Investigation',
      subject: 'computer-science',
      topicId: 'cs-ds',
      difficulty: 'Advanced',
      points: 100,
      summary: 'A hospital print-and-dispatch server processes the newest patient lab orders immediately while the earliest morning requests sit unprinted at the bottom for hours.',
      introduction: 'Central Hospital\'s pathology lab noticed a severe scheduling anomaly: a blood test ordered at 08:00 AM was still waiting at 11:30 AM, while requests submitted 10 seconds ago were dispatched immediately. As long as new orders keep arriving, older orders suffer indefinite starvation.',
      artifactTitle: 'dispatch_buffer.js — Lab Order Dispatcher',
      artifactCode: `class LabOrderDispatcher {
  constructor() {
    this.buffer = [];
  }
  enqueueOrder(order) {
    this.buffer.push(order); // Appends to end of array
  }
  dispatchNext() {
    return this.buffer.pop(); // <-- Suspect retrieval operation
  }
}`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Dispatch Order Log',
          title: 'Arrival vs Execution Sequence',
          detail: 'Orders arrived in sequence: [Order_1 (08:00), Order_2 (08:05), Order_3 (08:10)]. Calling dispatchNext() returned Order_3 first, then Order_2, leaving Order_1 last!'
        },
        {
          id: 'c2',
          tag: 'Clue B • Array Method Behavior',
          title: 'push() Combined with pop()',
          detail: '`this.buffer.push(order)` adds the new element to the tail (end) of the array. `this.buffer.pop()` also removes and returns the element from the tail (end) of the array!'
        },
        {
          id: 'c3',
          tag: 'Clue C • Data Structure Classification',
          title: 'LIFO Stack vs FIFO Queue',
          detail: 'Pushing and popping from the same end implements a Last-In, First-Out (LIFO) Stack instead of a First-In, First-Out (FIFO) Queue.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Process Starvation Analysis',
          title: 'Why Morning Orders Never Print',
          detail: 'In a LIFO Stack under continuous load, new items keep burying index 0 (`Order_1`). Index 0 is never reached until the buffer is 100% drained.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Simulate enqueueOrder("A"), enqueueOrder("B"), dispatchNext()',
          finding: 'SMOKING GUN: `buffer` becomes `["A", "B"]`. Calling `buffer.pop()` removes `"B"` (the newest item) instead of `"A"` (the oldest item).'
        },
        {
          id: 'l2',
          action: 'Test FIFO Dequeue from Front of Buffer',
          finding: 'VERIFIED: Removing from the front (`this.buffer.shift()` or a head-pointer Queue) dispatches `"A"` first, preserving arrival order.'
        },
        {
          id: 'l3',
          action: 'Check Network Printer Cable Bandwidth',
          finding: 'RULED OUT: Network latency is under 2ms; the inversion of order happens entirely inside `LabOrderDispatcher` in memory.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): What fundamental data structure error is causing the newest orders to be processed before the oldest orders?',
        options: [
          'The array is sorting orders alphabetically by patient name.',
          'Combining `push()` (insert at tail) with `pop()` (remove from tail) turned the dispatcher into a LIFO Stack instead of a FIFO Queue.',
          'JavaScript classes cannot store objects inside arrays.',
          'The `enqueueOrder` method is deleting the array on every call.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Look at Clues B and C: if you add items to the end (`push`) and also remove items from the end (`pop`), which item comes out first?',
        confirmFeedback: 'Exactly! `push()` + `pop()` operates on the same end of the list, creating a Last-In, First-Out (LIFO) Stack rather than a fair First-In, First-Out (FIFO) Queue.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How should `dispatchNext()` be modified so orders are processed in fair First-In, First-Out (FIFO) order?',
        options: [
          'Change `dispatchNext()` to remove from the front of the queue (`return this.buffer.shift();` or use a head-pointer FIFO Queue).',
          'Keep `this.buffer.pop()` and reverse the array on every insertion.',
          'Delete `enqueueOrder` and hardcode 5 orders.',
          'Return `this.buffer.length` instead of the order object.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'Since `enqueueOrder` appends new orders to the back (tail) of the array, FIFO requires `dispatchNext` to remove the oldest order from the front (head).',
        confirmFeedback: 'Case Solved! Dequeuing from the front (`shift()` or a linked/ring FIFO queue) guarantees First-In, First-Out fairness.'
      },
      resolution: 'The developer intended to build a First-In, First-Out (FIFO) Queue for fair job scheduling, but used `array.push()` with `array.pop()`, which both operate on the tail of the array—accidentally implementing a Last-In, First-Out (LIFO) Stack. Dequeuing from the head (`this.buffer.shift()`) restores FIFO ordering.',
      fixedCode: `class LabOrderDispatcher {
  constructor() {
    this.buffer = [];
  }
  enqueueOrder(order) {
    this.buffer.push(order); // Enqueue at tail
  }
  dispatchNext() {
    return this.buffer.shift(); // FIXED: Dequeue oldest order from head (FIFO)
  }
}`,
      learningOutcome: 'Queues (FIFO: First-In, First-Out) and Stacks (LIFO: Last-In, First-Out) govern opposite scheduling behaviors. Task schedulers, print buffers, and breadth-first search require FIFO Queues to prevent starvation of older requests.'
    },

    // --- MATHEMATICS (3 Cases) ---
    {
      id: 'case-math-incorrect-calc',
      caseCode: 'CASE #M-01',
      title: 'The Incorrect Calculation',
      subject: 'mathematics',
      topicId: 'math-stats',
      difficulty: 'Beginner',
      points: 50,
      summary: 'A student scored 95% on three homework assignments and 55% on the Final Exam (worth 70% of the course), yet the grading script awarded an 85% "A-" course grade!',
      introduction: 'The Registrar\'s Office flagged an anomaly in the automated syllabus grading sheet. According to the course syllabus, the 3 Homework assignments combined are worth 30% of the final grade (10% each), and the Final Exam is worth 70%. Student Maya scored 95, 95, 95 on Homework and 55 on the Final Exam. The script calculated her final course grade as 85.0% instead of 67.0%.',
      artifactTitle: 'grade_calculator.js — Course Grade Formula',
      artifactCode: `// Syllabus Weights:
// Homework 1 (10%), Homework 2 (10%), Homework 3 (10%), Final Exam (70%)
const hw1 = 95, hw2 = 95, hw3 = 95;
const finalExam = 55;

// Deployed Formula:
const courseGrade = (hw1 + hw2 + hw3 + finalExam) / 4; // Outputs: 85.0%`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Syllabus Weight Distribution',
          title: 'Unequal Assessment Weights',
          detail: 'Each homework assignment carries weight w = 0.10 (total 0.30 for all three), while the Final Exam carries weight w = 0.70. The weights sum to 0.10 + 0.10 + 0.10 + 0.70 = 1.00 (100%).'
        },
        {
          id: 'c2',
          tag: 'Clue B • Unweighted Mean Fallacy',
          title: 'What Dividing by 4 Actually Computes',
          detail: 'The formula `(hw1 + hw2 + hw3 + finalExam) / 4` assigns an equal 25% weight to each of the 4 numbers—giving Homework 75% of the course grade and the Final Exam only 25%!'
        },
        {
          id: 'c3',
          tag: 'Clue C • Manual Weighted Calculation',
          title: 'True Weighted Average',
          detail: 'Multiplying each score by its syllabus weight gives: (95 × 0.10) + (95 × 0.10) + (95 × 0.10) + (55 × 0.70) = 9.5 + 9.5 + 9.5 + 38.5 = 67.0%.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Reverse Scenario Check',
          title: 'Penalty on High Exam Scorers',
          detail: 'Conversely, a student who scored 60 on homeworks and 98 on the Final Exam was unfairly given `(180 + 98) / 4 = 69.5%` instead of `(60 × 0.30) + (98 × 0.70) = 86.6%`!'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Compare Effective Weights in `(hw1 + hw2 + hw3 + finalExam) / 4`',
          finding: 'SMOKING GUN: Dividing 4 items by 4 gives each item a 0.25 (25%) weight, violating the 10%/10%/10%/70% syllabus rule.'
        },
        {
          id: 'l2',
          action: 'Evaluate Weighted Mean Formula: Σ(wᵢ · xᵢ)',
          finding: 'VERIFIED: `0.10*(95) + 0.10*(95) + 0.10*(95) + 0.70*(55) = 28.5 + 38.5 = 67.0%`.'
        },
        {
          id: 'l3',
          action: 'Check if Scores Were Entered in Wrong Database Columns',
          finding: 'RULED OUT: `hw1=95, hw2=95, hw3=95, finalExam=55` match the raw exam scan sheets.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why did the script compute 85.0% instead of the true 67.0% syllabus grade?',
        options: [
          'The computer added 95 three times incorrectly.',
          'The script used an unweighted arithmetic mean (dividing the 4 scores by 4, giving each 25% weight) instead of a weighted average using the syllabus weights (10%, 10%, 10%, 70%).',
          'The Final Exam score of 55 was negative.',
          'Division by 4 rounds up to the nearest ten.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Look at Clue B and Lead 1: when you add 4 numbers and divide by 4, how much weight does each number receive?',
        confirmFeedback: 'Correct! Dividing 4 numbers by 4 treats all 4 assessments as equally weighted (25% each), ignoring the 70% weight of the Final Exam.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): Which formula accurately computes the weighted course grade?',
        options: [
          'const courseGrade = (0.10 * hw1) + (0.10 * hw2) + (0.10 * hw3) + (0.70 * finalExam);',
          'const courseGrade = (hw1 + hw2 + hw3 + finalExam) / 100;',
          'const courseGrade = (hw1 * hw2 * hw3 * finalExam) / 4;',
          'const courseGrade = Math.max(hw1, hw2, hw3, finalExam);'
        ],
        correctIndex: 0,
        contradictionFeedback: 'In a weighted average, each score `xᵢ` is multiplied by its proportional weight `wᵢ` (where `Σwᵢ = 1`). Check Clue C!',
        confirmFeedback: 'Case Solved! Multiplying each score by its weight (`0.10, 0.10, 0.10, 0.70`) yields the exact `67.0%` weighted grade.'
      },
      resolution: 'The grading discrepancy was caused by applying a simple unweighted arithmetic mean `(Σxᵢ / n)` to categories with unequal importance. Because there were three homework scores and one final exam score, dividing by 4 gave homework 75% of the total weight instead of 30%. Applying the weighted mean formula `Σ(wᵢ · xᵢ)` resolves the error.',
      fixedCode: `// FIXED: Weighted Average Formula (Weights sum to 1.00)
const hwAvg = (hw1 + hw2 + hw3) / 3; // 95.0
const courseGrade = (0.30 * hwAvg) + (0.70 * finalExam); // 28.5 + 38.5 = 67.0%`,
      learningOutcome: 'In statistics, a simple arithmetic mean assumes every observation has equal weight (`1/n`). When observations represent categories of different proportions, you must compute the Weighted Mean: `x̄_w = Σ(wᵢ · xᵢ) / Σwᵢ`.'
    },
    {
      id: 'case-math-missing-number',
      caseCode: 'CASE #M-02',
      title: 'The Missing Number',
      subject: 'mathematics',
      topicId: 'math-prob',
      difficulty: 'Intermediate',
      points: 75,
      summary: 'A quality-control probability table for a dual-battery drone is missing a critical failure probability cell, and an engineer\'s naive sum yields an impossible 10% failure rate.',
      introduction: 'An aerospace reliability team is auditing a drone powered by two independent backup batteries (Battery A and Battery B). Each battery has a `0.05` (5%) probability of failing during flight (`P(A) = 0.05`, `P(B) = 0.05`). The drone crashes ONLY if BOTH batteries fail during the same flight. What is the probability `P(A ∩ B)` that both fail, and what is the probability `P(A ∪ B)` that at least one fails?',
      artifactTitle: 'reliability_audit.txt — Probability Table Dossier',
      artifactCode: `Independent Failure Probabilities:
  P(Battery A Fails) = 0.05
  P(Battery B Fails) = 0.05

Junior Engineer's Claim:
  1. "Probability BOTH fail: P(A ∩ B) = 0.05 + 0.05 = 0.10 (10%)"  <-- Suspect!
  2. "Probability AT LEAST ONE fails: P(A ∪ B) = [ MISSING NUMBER ]"`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Multiplication Rule for Independent Events',
          title: 'Joint Probability P(A ∩ B)',
          detail: 'Because Battery A and Battery B are independent, the probability that BOTH fail simultaneously is the product of their probabilities: `P(A ∩ B) = P(A) × P(B) = 0.05 × 0.05 = 0.0025` (0.25%).'
        },
        {
          id: 'c2',
          tag: 'Clue B • Why Adding Was Wrong',
          title: 'Non-Mutually Exclusive Overlap',
          detail: 'Simply adding `P(A) + P(B) = 0.10` double-counts the overlap `P(A ∩ B)` where both batteries fail at the same time!'
        },
        {
          id: 'c3',
          tag: 'Clue C • Inclusion-Exclusion Principle',
          title: 'Formula for P(A ∪ B)',
          detail: 'For any two events, the probability that at least one occurs is `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Complementary Verification',
          title: 'Neither Battery Fails',
          detail: 'Each battery succeeds with probability `0.95`. Both succeed with `0.95 × 0.95 = 0.9025`. Therefore, the probability that at least one fails is `1 − 0.9025 = 0.0975` (9.75%).'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Compute Joint Failure P(A ∩ B) = P(A) × P(B)',
          finding: 'SMOKING GUN: `0.05 × 0.05 = 0.0025` (1 in 400 flights), NOT `0.10`! Redundancy reduces total crash risk by 20x.'
        },
        {
          id: 'l2',
          action: 'Calculate Missing Number P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
          finding: 'EXACT VALUE: `0.05 + 0.05 − 0.0025 = 0.0975` (9.75%), which matches `1 − (0.95)² = 0.0975`.'
        },
        {
          id: 'l3',
          action: 'Test What Happens if P(A) = 0.60 and P(B) = 0.60 under Naive Addition',
          finding: 'PROOF OF FALLACY: Naive addition `0.60 + 0.60 = 1.20` (120% probability!), which violates the fundamental axiom `0 ≤ P(E) ≤ 1`.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): What mistake did the junior engineer make when claiming `P(A ∩ B) = 0.05 + 0.05 = 0.10`?',
        options: [
          'They added the probabilities instead of multiplying them (`P(A) × P(B) = 0.0025`), confusing joint intersection of independent events with mutually exclusive union.',
          'They forgot to divide 0.05 by 2.',
          'Probabilities can never be written as decimals.',
          'Independent events always have a joint probability of 0.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'Review Clue A and Lead 1: for two independent events A and B, how do you calculate the probability `P(A ∩ B)` that BOTH happen?',
        confirmFeedback: 'Spot on! For independent events, `P(A ∩ B) = P(A) × P(B) = 0.05 × 0.05 = 0.0025` (0.25%).'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): What are the exact values for (1) Both batteries failing `P(A ∩ B)` and (2) The missing number for at least one failing `P(A ∪ B)`?',
        options: [
          'P(A ∩ B) = 0.0025 (0.25%) and P(A ∪ B) = 0.0975 (9.75%).',
          'P(A ∩ B) = 0.10 (10%) and P(A ∪ B) = 0.20 (20%).',
          'P(A ∩ B) = 0.50 (50%) and P(A ∪ B) = 0.05 (5%).',
          'P(A ∩ B) = 0.0000 and P(A ∪ B) = 1.0000.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'Use `P(A ∩ B) = 0.05 × 0.05` and `P(A ∪ B) = 0.05 + 0.05 − P(A ∩ B)` from Clues C and D.',
        confirmFeedback: 'Case Solved! `P(A ∩ B) = 0.0025` and `P(A ∪ B) = 0.05 + 0.05 − 0.0025 = 0.0975`.'
      },
      resolution: 'The engineer confused intersection (`A ∩ B`, both failing) with union (`A ∪ B`, at least one failing) and forgot to subtract the overlap. Because the two batteries are independent, both fail with probability `P(A ∩ B) = 0.05 × 0.05 = 0.0025` (0.25%), and at least one fails with probability `P(A ∪ B) = 0.05 + 0.05 − 0.0025 = 0.0975` (9.75%).',
      fixedCode: `// Verified Reliability Equations:
const pA = 0.05, pB = 0.05;
const pBothFail = pA * pB;                    // 0.0025 (0.25% Crash Risk)
const pAtLeastOneFails = pA + pB - pBothFail; // 0.0975 (9.75% Single-Fault Rate)`,
      learningOutcome: 'For independent events, the joint probability is `P(A ∩ B) = P(A) × P(B)`. For the union of any two events ("at least one occurs"), you must subtract the intersection so it is not counted twice: `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`.'
    },
    {
      id: 'case-math-formula-mystery',
      caseCode: 'CASE #M-03',
      title: 'The Formula Mystery',
      subject: 'mathematics',
      topicId: 'math-matrices',
      difficulty: 'Advanced',
      points: 100,
      summary: 'A 3D robotic assembly arm misses its target weld coordinate by 14 centimeters after a programmer swapped the order of two transformation matrices.',
      introduction: 'In the Robotics Lab, a 2D planar robotic arm applies a Scaling Matrix `S` (stretching X by 2) followed by a Rotation/Shear Matrix `R` to a tool vector `v = [3, 1]`. To "clean up the code", a student rewrote `R × S` as `S × R`, assuming matrix multiplication is commutative like ordinary numbers (`a × b = b × a`). Immediately, the robotic arm began striking the wrong coordinates!',
      artifactTitle: 'kinematics_transform.js — Matrix Pipeline',
      artifactCode: `// Matrix S = [[2, 0], [0, 1]] (Scale X by 2)
// Matrix R = [[1, 2], [0, 1]] (Horizontal Shear)
// Correct Physical Order: T_correct = R * S
// Student's Reordered Formula: T_wrong = S * R  <-- Suspect assumption!`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Product R × S Computation',
          title: 'Evaluating R × S',
          detail: 'Multiplying `R × S = [[1, 2], [0, 1]] × [[2, 0], [0, 1]]` gives `[[1(2)+2(0), 1(0)+2(1)], [0(2)+1(0), 0(0)+1(1)]] = [[2, 2], [0, 1]]`. Applied to `v = [3, 1]`, it yields `[8, 1]`.'
        },
        {
          id: 'c2',
          tag: 'Clue B • Product S × R Computation',
          title: 'Evaluating S × R',
          detail: 'Multiplying `S × R = [[2, 0], [0, 1]] × [[1, 2], [0, 1]]` gives `[[2(1)+0(0), 2(2)+0(1)], [0(1)+1(0), 0(2)+1(1)]] = [[2, 4], [0, 1]]`. Applied to `v = [3, 1]`, it yields `[10, 1]`!'
        },
        {
          id: 'c3',
          tag: 'Clue C • Non-Commutativity Law',
          title: 'Why R × S ≠ S × R',
          detail: 'In linear algebra, matrix multiplication represents function composition. Scaling first and then shearing (`R(S(v))`) produces a different geometric result than shearing first and then scaling (`S(R(v))`).'
        },
        {
          id: 'c4',
          tag: 'Clue D • Upper-Right Entry Discrepancy',
          title: 'Entry (0, 1) Comparison',
          detail: 'In `R × S`, the top-right entry is `2`, whereas in `S × R`, the top-right entry is `4`, shifting the robot arm\'s X-coordinate by +2 units (14 cm).'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Compare R × S vs S × R on Test Vector v = [3, 1]',
          finding: 'SMOKING GUN: `(R × S)v = [8, 1]`, whereas `(S × R)v = [10, 1]`. Swapping the matrix order altered the physical endpoint!'
        },
        {
          id: 'l2',
          action: 'Verify Associativity (R × (S × v)) === ((R × S) × v)',
          finding: 'CONFIRMED: Matrix multiplication IS associative (`(RS)v = R(Sv) = [8, 1]`), but strictly NON-commutative (`RS ≠ SR`).'
        },
        {
          id: 'l3',
          action: 'Check Stepper Motor Calibration',
          finding: 'RULED OUT: Servo encoders match the commanded `[10, 1]` coordinate with 0.01mm precision; the error is purely in the matrix formula.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why did swapping `R × S` to `S × R` cause the robotic arm to miss its target coordinate?',
        options: [
          'Matrices with 0s cannot be multiplied together.',
          'Matrix multiplication is non-commutative (`R × S ≠ S × R`); changing the multiplication order changes the sequence of geometric transformations (`[[2, 2], [0, 1]]` vs `[[2, 4], [0, 1]]`).',
          'The determinant of S is zero.',
          'Vectors must have 4 elements to be multiplied by a 2×2 matrix.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Compare Clue A (`R × S = [[2, 2], [0, 1]]`) with Clue B (`S × R = [[2, 4], [0, 1]]`). Does `R × S` equal `S × R`?',
        confirmFeedback: 'Exact deduction! Because matrix multiplication is non-commutative (`R × S ≠ S × R`), reversing the order changes the resulting transformation matrix.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How must the transformation pipeline be written so that `S` is applied to vector `v` first, followed by `R`?',
        options: [
          'Keep the exact non-commutative order `T = R × S` (so that `T × v = R × (S × v) = [8, 1]`).',
          'Add the matrices `R + S` instead of multiplying them.',
          'Transpose both matrices and multiply `S × S`.',
          'Multiply `v` by `0`.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'When applying transformation `S` to column vector `v` first (`S × v`) and then applying `R` to that result, associativity gives `R × (S × v) = (R × S) × v`.',
        confirmFeedback: 'Case Solved! Preserving the order `T = R × S` ensures `S` transforms `v` first, followed by `R`, yielding the exact target `[8, 1]`.'
      },
      resolution: 'Unlike scalar multiplication (`3 × 5 = 5 × 3`), matrix multiplication is strictly non-commutative (`A × B ≠ B × A` in general). Because transformations act on column vectors from right to left (`R(S(v)) = (R × S)v`), swapping `R × S` to `S × R` changed the combined matrix from `[[2, 2], [0, 1]]` to `[[2, 4], [0, 1]]` and displaced the robot arm.',
      fixedCode: `// FIXED: Preserve non-commutative transformation order T = R * S
// S transforms v first: u = S * v = [6, 1]
// R transforms u second: p = R * u = [6 + 2(1), 1] = [8, 1]
const T_correct = multiplyMatrices(R, S); // [[2, 2], [0, 1]]`,
      learningOutcome: 'Matrix multiplication is associative (`(AB)C = A(BC)`) and distributive, but NOT commutative (`AB ≠ BA`). In computer graphics and robotics, the order of matrix multiplication dictates the physical sequence of rotations, scalings, and translations.'
    },

    // --- TECHNOLOGY (3 Cases) ---
    {
      id: 'case-tech-disappearing-data',
      caseCode: 'CASE #T-01',
      title: 'The Disappearing Data',
      subject: 'technology',
      topicId: 'tech-cloud',
      difficulty: 'Beginner',
      points: 50,
      summary: 'Every night at 02:00 AM when the cloud auto-scaler restarts the web container, all student PDF essay uploads from the previous day vanish completely.',
      introduction: 'A school deployed its Essay Submission Portal inside a cloud container instance. Throughout the day, students upload PDFs and can view them fine. However, whenever the cloud platform deploys an update or restarts the container overnight, the `/app/uploads` folder is completely empty the next morning!',
      artifactTitle: 'container_config.yaml — Cloud Deployment Manifest',
      artifactCode: `service: essay-portal-web
runtime: docker-container
instance_storage: ephemeral-local-rootfs
upload_directory: "/app/uploads"   # <-- Stored inside container local filesystem
persistent_volumes: []             # <-- No external cloud volume or object storage mounted`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Container Lifecycle Log',
          title: 'Container Replacement at 02:00 AM',
          detail: 'At 02:00 AM, the cloud orchestrator terminated container instance `pod-84a` and booted a fresh container from the base Docker image.'
        },
        {
          id: 'c2',
          tag: 'Clue B • Ephemeral Filesystem Architecture',
          title: 'How Container Local Disks Work',
          detail: 'By design, a cloud container\'s internal root filesystem (`ephemeral-local-rootfs`) is temporary scratch space. When a container stops or restarts, all files written to its local folders are permanently destroyed.'
        },
        {
          id: 'c3',
          tag: 'Clue C • Volume Mount Check',
          title: 'Unmounted Persistent Storage',
          detail: 'The manifest shows `persistent_volumes: []`. Neither a managed Cloud Object Storage bucket (like S3 / Cloud Storage) nor a Persistent Block Volume is attached.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Database Metadata Comparison',
          title: 'Why User Accounts Survived',
          detail: 'Student login accounts did NOT disappear because user records are stored in an external managed SQL database, whereas the PDF files were saved to the container\'s local `/app/uploads` folder.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Simulate Container Restart in Staging Environment',
          finding: 'SMOKING GUN: Uploading `essay.pdf` writes to `/app/uploads/essay.pdf`. Running `docker restart` resets the container layer to the clean image, wiping `/app/uploads`.'
        },
        {
          id: 'l2',
          action: 'Audit Security Logs for Unauthorized Deletion or Hackers',
          finding: 'RULED OUT: No external intruder or delete script accessed the server; the wipe coincided 100% with automated container restarts.'
        },
        {
          id: 'l3',
          action: 'Test Cloud Object Storage / Persistent Volume Attachment',
          finding: 'VERIFIED: Storing uploads in a persistent Cloud Object Storage bucket preserves 100% of files across container restarts and auto-scaling.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why do all uploaded PDF essays disappear whenever the cloud container restarts?',
        options: [
          'PDF files automatically expire after 24 hours.',
          'The application writes uploads to the container\'s ephemeral local filesystem (`/app/uploads`), which is wiped and reset to the base image whenever a container restarts or scales.',
          'Hackers are deleting the folder at 02:00 AM every night.',
          'Cloud servers cannot store files larger than 10 kilobytes.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Examine Clues B and D: why did database records survive the 02:00 AM container restart while files in `/app/uploads` vanished?',
        confirmFeedback: 'Spot on! Container local filesystems are ephemeral (temporary); when a container is replaced or restarted, local changes disappear.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): What cloud architecture change will ensure uploaded student essays persist permanently?',
        options: [
          'Store uploaded files in a persistent Cloud Object Storage service (e.g., S3 / Cloud Storage) or mount a dedicated Persistent Volume external to the container lifecycle.',
          'Ask students to re-upload their essays every morning at 08:00 AM.',
          'Rename the folder from `/app/uploads` to `/app/temp`.',
          'Disable all security updates and never restart the server.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'Stateless cloud containers must store durable user files in external persistent storage (Object Storage or Persistent Volumes) so container restarts never lose data.',
        confirmFeedback: 'Case Solved! Externalizing uploads to persistent Cloud Object Storage decouples file durability from ephemeral compute containers.'
      },
      resolution: 'Cloud containers use ephemeral (temporary) local filesystems so they can be spun up, destroyed, and auto-scaled rapidly. Saving user uploads to `/app/uploads` inside the container meant every restart wiped the files. Routing uploads to persistent Cloud Object Storage guarantees durability across restarts and horizontal scaling.',
      fixedCode: `service: essay-portal-web
runtime: docker-container
# FIXED: Externalize user uploads to persistent Cloud Object Storage
storage_backend: "cloud-object-storage://student-essays-bucket"
persistent_volumes:
  - mount_path: "/app/uploads"
    volume_id: "vol-persistent-ssd-01"`,
      learningOutcome: 'In Cloud Computing, compute instances and containers should be treated as stateless and ephemeral. Durable data (user uploads, databases) must always reside on persistent storage tiers (Object Storage, Managed Databases, or Persistent Block Volumes).'
    },
    {
      id: 'case-tech-network-mystery',
      caseCode: 'CASE #T-02',
      title: 'The Network Connection Mystery',
      subject: 'technology',
      topicId: 'tech-cybersecurity',
      difficulty: 'Intermediate',
      points: 75,
      summary: 'After a security firewall upgrade, users can still ping the campus library server by its raw IP address, but typing "https://library.campus.edu" fails immediately.',
      introduction: 'The IT Security Team hardened the campus network perimeter this morning. Strange reports immediately poured in: typing `https://198.51.100.42` in a browser loads the library catalog, but typing `https://library.campus.edu` fails with `ERR_NAME_NOT_RESOLVED`—and even when users on the internal LAN resolve the name, secure HTTPS connections time out while unencrypted HTTP on port 80 still responds!',
      artifactTitle: 'firewall_rules.conf — Perimeter Security Policy',
      artifactCode: `# Inbound & Outbound Firewall Ruleset (Updated 08:00 AM)
ALLOW TCP Port 80   (HTTP Web Traffic)
ALLOW ICMP          (Ping Diagnostics)
DENY  UDP/TCP Port 53  # <-- Rule #3
DENY  TCP Port 443     # <-- Rule #4
DEFAULT DENY ALL`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Browser Error Code',
          title: 'ERR_NAME_NOT_RESOLVED on Domain Name',
          detail: 'Accessing `198.51.100.42` works, but `library.campus.edu` fails to resolve into an IP address. Domain name translation is handled by DNS (Domain Name System).'
        },
        {
          id: 'c2',
          tag: 'Clue B • Firewall Rule #3',
          title: 'Port 53 Blocked',
          detail: 'Firewall Rule #3 explicitly blocks UDP/TCP Port 53, which is the standard network port used by DNS queries to translate domain names into IP addresses.'
        },
        {
          id: 'c3',
          tag: 'Clue C • Firewall Rule #4',
          title: 'Port 443 Blocked',
          detail: 'Firewall Rule #4 blocks TCP Port 443, which is the standard port for encrypted HTTPS (TLS) web traffic, while leaving insecure Port 80 (HTTP) open!'
        },
        {
          id: 'c4',
          tag: 'Clue D • Server Health Check',
          title: 'Web Daemon Status',
          detail: 'The Nginx web server on `198.51.100.42` is running and listening on both Port 80 and Port 443 with a valid TLS certificate.'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Run `nslookup library.campus.edu` Through Campus Firewall',
          finding: 'SMOKING GUN #1: DNS query on UDP Port 53 is dropped by Firewall Rule #3, causing `ERR_NAME_NOT_RESOLVED`.'
        },
        {
          id: 'l2',
          action: 'Test TLS Handshake on TCP Port 443',
          finding: 'SMOKING GUN #2: TCP SYN packets to Port 443 (HTTPS) are dropped by Firewall Rule #4, blocking encrypted web access.'
        },
        {
          id: 'l3',
          action: 'Inspect SSL/TLS Certificate Expiration Date',
          finding: 'RULED OUT: The server\'s X.509 certificate is valid for another 280 days.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Which two firewall rules caused domain name lookups (`library.campus.edu`) and encrypted HTTPS connections to fail?',
        options: [
          'Allowing ICMP Ping packets overloaded the server CPU.',
          'Blocking Port 53 prevented DNS from translating `library.campus.edu` into its IP address, and blocking Port 443 blocked encrypted HTTPS traffic.',
          'The server IP address `198.51.100.42` is invalid.',
          'Web browsers cannot connect to `.edu` domain names without a VPN.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Check Clues B and C and Leads 1 and 2: what services operate on Port 53 and Port 443?',
        confirmFeedback: 'Spot on! Port 53 handles DNS hostname resolution, and Port 443 handles encrypted HTTPS (TLS) connections.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How should the firewall policy be updated to restore secure domain-based web access?',
        options: [
          'Permit DNS queries on Port 53 (to authorized DNS resolvers) and permit encrypted HTTPS traffic on TCP Port 443.',
          'Block Port 80 and ICMP so all ports are blocked equally.',
          'Ask all students to memorize IP addresses and use unencrypted HTTP.',
          'Uninstall the firewall completely.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'To maintain security while allowing users to resolve `library.campus.edu` and connect via `https://`, which two ports must be permitted?',
        confirmFeedback: 'Case Solved! Allowing Port 53 (DNS) and TCP Port 443 (HTTPS) restores domain resolution and encrypted TLS browsing.'
      },
      resolution: 'The outage had a dual network-security cause in `firewall_rules.conf`: blocking Port 53 severed DNS lookups (preventing `library.campus.edu` from resolving to `198.51.100.42`), and blocking TCP Port 443 blocked encrypted HTTPS traffic. Permitting Port 53 for DNS and Port 443 for HTTPS resolves both issues securely.',
      fixedCode: `# FIXED Perimeter Firewall Policy
ALLOW UDP/TCP Port 53  (DNS Domain Name Resolution)
ALLOW TCP Port 443     (Encrypted HTTPS / TLS Web Traffic)
ALLOW TCP Port 80      (HTTP Redirect to HTTPS)
DEFAULT DENY ALL`,
      learningOutcome: 'In network security, firewalls enforce access control lists (ACLs) by port and protocol: Port 53 is essential for DNS (translating domain names to IP addresses), Port 80 serves unencrypted HTTP, and Port 443 serves encrypted HTTPS (Confidentiality & Integrity).'
    },
    {
      id: 'case-tech-device-failure',
      caseCode: 'CASE #T-03',
      title: 'The Device Failure Investigation',
      subject: 'technology',
      topicId: 'tech-iot',
      difficulty: 'Advanced',
      points: 100,
      summary: 'Fifty solar-powered IoT soil sensors in a smart vineyard die of complete battery exhaustion within 6 hours of deployment instead of lasting 6 months.',
      introduction: 'An agri-tech deployment installed 50 wireless IoT soil moisture nodes powered by 2000mAh lithium cells. On the workbench, each sensor was rated to last 180 days by waking up once every 15 minutes. After a firmware update yesterday, all 50 nodes drained their batteries to 0% in less than 6 hours and flooded the cellular gateway with millions of identical packets!',
      artifactTitle: 'sensor_node_firmware.c — Microcontroller Main Loop',
      artifactCode: `void loop() {
  float moisture = readCapacitiveSensor(PIN_A0);
  // Only transmit if moisture changed OR every 15 minutes:
  if (moisture >= 0.0) { // <-- Suspect condition!
    wifiRadioOn();
    httpPostFullJson("https://cloud.vineyard.io/api/telemetry", moisture);
  } else {
    enterDeepSleep(900000); // 15 minutes deep sleep
  }
}`,
      clues: [
        {
          id: 'c1',
          tag: 'Clue A • Power Consumption Profile',
          title: 'Active Radio vs Deep Sleep Current',
          detail: 'In Deep Sleep, the microcontroller draws 0.02 mA. With the Wi-Fi radio continuously transmitting HTTP POST requests, it draws 340 mA (17,000x more power!).'
        },
        {
          id: 'c2',
          tag: 'Clue B • Condition Evaluation on Line 4',
          title: 'Always-True Sensor Check',
          detail: 'Soil moisture percentage (`moisture`) is a physical reading between `0.0%` and `100.0%`. Therefore, `if (moisture >= 0.0)` is ALWAYS true! The `else` branch containing `enterDeepSleep(900000)` is unreachable dead code.'
        },
        {
          id: 'c3',
          tag: 'Clue C • Protocol Overhead',
          title: 'Continuous Unthrottled HTTP Polling',
          detail: 'Because `loop()` runs thousands of times per second without sleeping, the node continuously establishes heavy HTTP/TLS connections back-to-back without pause.'
        },
        {
          id: 'c4',
          tag: 'Clue D • Gateway Log Analysis',
          title: 'Packet Storm Telemetry',
          detail: 'The cloud gateway logged 42,000 redundant transmissions per hour from each sensor node until the 2000mAh battery hit cut-off voltage at 5.8 hours (`2000mAh / 340mA ≈ 5.88 hours`).'
        }
      ],
      leads: [
        {
          id: 'l1',
          action: 'Measure Current Draw on Oscilloscope During loop()',
          finding: 'SMOKING GUN: Current draw is pinned continuously at 340 mA; the microcontroller never enters low-power sleep mode.'
        },
        {
          id: 'l2',
          action: 'Inspect Reachability of enterDeepSleep(900000) on Line 8',
          finding: 'DEAD CODE CONFIRMED: Since `readCapacitiveSensor` returns `0.0` to `100.0`, `moisture >= 0.0` is permanently true, skipping `enterDeepSleep` on every cycle.'
        },
        {
          id: 'l3',
          action: 'Compare Heavy HTTP vs Lightweight MQTT + Unconditional Deep Sleep',
          finding: 'VERIFIED: Publishing a compact MQTT packet and calling `enterDeepSleep(900000)` at the end of every cycle reduces average current draw from 340 mA to 0.45 mA.'
        }
      ],
      decision1: {
        prompt: 'Decision 1 (Root Cause): Why did the IoT sensor nodes drain their 6-month batteries in under 6 hours?',
        options: [
          'The solar panels drained the battery in reverse.',
          'Because soil moisture is always `>= 0.0`, the condition `if (moisture >= 0.0)` was permanently true, keeping the high-power Wi-Fi radio transmitting in a tight loop and making `enterDeepSleep()` unreachable.',
          'The sleep duration `900000` was too large for an integer.',
          'Capacitive moisture sensors use 10,000 watts of electricity.'
        ],
        correctIndex: 1,
        contradictionFeedback: 'Look at Clues A, B, and D: what values can `moisture` (0% to 100%) take, and when does the `else` block (`enterDeepSleep`) ever execute?',
        confirmFeedback: 'Exact diagnosis! Because `moisture >= 0.0` is always true for valid percentages, the `else` branch never ran, trapping the radio in a continuous 340mA transmit loop.'
      },
      decision2: {
        prompt: 'Decision 2 (Corrective Action): How should the IoT firmware be restructured to achieve multi-month battery life?',
        options: [
          'Transmit the telemetry reading (ideally over lightweight MQTT), power down the radio, and call `enterDeepSleep(900000)` unconditionally at the end of every duty cycle.',
          'Keep `enterDeepSleep` inside `else` and change the condition to `if (moisture >= -100.0)`.',
          'Remove the battery and wire 50 extension cords across the vineyard.',
          'Call `wifiRadioOn()` ten times per loop.'
        ],
        correctIndex: 0,
        contradictionFeedback: 'For an IoT sensor to sleep for 15 minutes between readings, `enterDeepSleep(900000)` must execute after every reading cycle, not inside an unreachable `else` branch.',
        confirmFeedback: 'Case Solved! Executing a compact transmission, powering off the radio, and unconditionally entering deep sleep restores the 180-day battery life.'
      },
      resolution: 'Placing `enterDeepSleep(900000)` inside the `else` branch of `if (moisture >= 0.0)` made low-power sleep unreachable dead code, because physical moisture readings are always non-negative (`0.0` to `100.0`). As a result, the microcontroller kept its Wi-Fi radio active at 340 mA continuously (`2000 mAh / 340 mA ≈ 5.88 hours`). Moving `wifiRadioOff()` and `enterDeepSleep()` outside the branch so every cycle sleeps for 15 minutes resolves the failure.',
      fixedCode: `void loop() {
  float moisture = readCapacitiveSensor(PIN_A0);
  if ( Math.abs(moisture - lastSentMoisture) > 1.0 ) {
    wifiRadioOn();
    mqttPublish("vineyard/node/moisture", moisture); // Compact MQTT payload
    wifiRadioOff();
    lastSentMoisture = moisture;
  }
  enterDeepSleep(900000); // FIXED: Unconditionally sleep 15 mins every cycle
}`,
      learningOutcome: 'In Internet of Things (IoT) and embedded systems engineering, wireless radio transmission consumes orders of magnitude more power than sensing or sleep states. Firmware must minimize radio-on duty cycles, use lightweight protocols like MQTT, and guarantee transition into Deep Sleep after each cycle.'
    }
  ];

  function getCaseProgressState(caseId) {
    if (!State.progress.detectiveStats) {
      State.progress.detectiveStats = {
        attemptedIds: [],
        solvedIds: [],
        score: 0,
        totalDecisions: 0,
        correctDecisions: 0,
        incorrectDecisions: 0,
        activeCases: {}
      };
    }
    if (!State.progress.detectiveStats.activeCases[caseId]) {
      State.progress.detectiveStats.activeCases[caseId] = {
        examinedClues: [],
        investigatedLeads: [],
        d1Solved: false,
        d2Solved: false,
        d1WrongChoices: [],
        d2WrongChoices: [],
        caseDecisions: 0,
        caseCorrect: 0,
        caseIncorrect: 0,
        pointsAwarded: 0
      };
    }
    return State.progress.detectiveStats.activeCases[caseId];
  }

  function initDetectiveBureau(params = {}) {
    if (params.subject) {
      State.detectiveState.subjectFilter = params.subject;
    }
    if (params.difficulty) {
      State.detectiveState.difficultyFilter = params.difficulty;
    }
    if (params.status) {
      State.detectiveState.statusFilter = params.status;
    }

    if (params.caseId) {
      openDetectiveCase(params.caseId);
    } else {
      State.detectiveState.activeCaseId = null;
      renderDetectiveBureauLanding();
    }
  }

  function updateDetectiveHeaderBar() {
    const det = State.progress.detectiveStats;
    const solvedCount = det.solvedIds ? det.solvedIds.length : 0;
    const rankEl = document.getElementById('bureau-header-rank');
    const scoreEl = document.getElementById('bureau-header-score');
    const backLbl = document.getElementById('detective-back-btn-label');

    if (rankEl) rankEl.textContent = getDetectiveRank(solvedCount);
    if (scoreEl) scoreEl.textContent = String(det.score || 0);
    if (backLbl) {
      backLbl.textContent = State.detectiveState.activeCaseId ? 'Back to Case Archive' : 'Back to Home';
    }
  }

  function renderDetectiveBureauLanding() {
    State.detectiveState.activeCaseId = null;
    updateDetectiveHeaderBar();

    const landingEl = document.getElementById('detective-bureau-landing');
    const workbenchEl = document.getElementById('detective-case-workbench');
    if (landingEl) landingEl.style.display = 'block';
    if (workbenchEl) workbenchEl.style.display = 'none';

    const det = State.progress.detectiveStats;
    const solvedIds = det.solvedIds || [];
    const attemptedIds = det.attemptedIds || [];
    const activeIds = attemptedIds.filter(id => !solvedIds.includes(id));
    const accuracy = det.totalDecisions > 0 ? Math.round((det.correctDecisions / det.totalDecisions) * 100) : 0;

    // Count difficulty tiers where at least one case (or all cases) are solved
    const diffs = ['Beginner', 'Intermediate', 'Advanced'];
    let tiersCompleted = 0;
    diffs.forEach(d => {
      const casesInTier = DETECTIVE_CASES.filter(c => c.difficulty === d);
      if (casesInTier.length > 0 && casesInTier.every(c => solvedIds.includes(c.id))) {
        tiersCompleted++;
      }
    });

    // Update Bureau Top Stats
    const statScore = document.getElementById('bureau-stat-score');
    const statRankSub = document.getElementById('bureau-stat-rank-sub');
    const statActive = document.getElementById('bureau-stat-active');
    const statAttemptedSub = document.getElementById('bureau-stat-attempted-sub');
    const statSolved = document.getElementById('bureau-stat-solved');
    const statTiersSub = document.getElementById('bureau-stat-tiers-sub');
    const statAcc = document.getElementById('bureau-stat-accuracy');
    const statDecSub = document.getElementById('bureau-stat-decisions-sub');

    if (statScore) statScore.textContent = String(det.score || 0);
    if (statRankSub) statRankSub.textContent = `Rank: ${getDetectiveRank(solvedIds.length)}`;
    if (statActive) statActive.textContent = String(activeIds.length);
    if (statAttemptedSub) statAttemptedSub.textContent = `${attemptedIds.length} Case${attemptedIds.length === 1 ? '' : 's'} Attempted`;
    if (statSolved) statSolved.textContent = `${solvedIds.length} / ${DETECTIVE_CASES.length}`;
    if (statTiersSub) statTiersSub.textContent = `${tiersCompleted} / 3 Difficulty Tiers Cleared`;
    if (statAcc) statAcc.textContent = `${accuracy}%`;
    if (statDecSub) statDecSub.textContent = `${det.incorrectDecisions || 0} Incorrect Decision${det.incorrectDecisions === 1 ? '' : 's'}`;

    // Subject-wise Breakdown Bar
    const breakdownEl = document.getElementById('bureau-subject-breakdown');
    if (breakdownEl) {
      const subjects = ['programming', 'computer-science', 'mathematics', 'technology'];
      breakdownEl.innerHTML = subjects.map(subId => {
        const subCases = DETECTIVE_CASES.filter(c => c.subject === subId);
        const subSolved = subCases.filter(c => solvedIds.includes(c.id)).length;
        const subAttempted = subCases.filter(c => attemptedIds.includes(c.id)).length;
        const pct = Math.round((subSolved / subCases.length) * 100);
        const subTitle = CURRICULUM[subId] ? CURRICULUM[subId].title : subId;
        return `
          <div class="bureau-sub-stat-box">
            <div class="bureau-sub-stat-top">
              <span>${escapeHtml(subTitle)}</span>
              <span>${subSolved}/${subCases.length} Solved</span>
            </div>
            <div class="detector-sub-bar-bg" style="margin-bottom: 0.25rem;">
              <div class="detector-sub-bar-fill" style="width: ${pct}%;"></div>
            </div>
            <div class="bureau-sub-stat-meta">
              <span>${subAttempted} Attempted</span>
              <span>${pct}% Complete</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // Update Tab Counts
    const tabAll = document.getElementById('tab-count-all');
    const tabActive = document.getElementById('tab-count-active');
    const tabSolved = document.getElementById('tab-count-solved');
    if (tabAll) tabAll.textContent = String(DETECTIVE_CASES.length);
    if (tabActive) tabActive.textContent = String(activeIds.length);
    if (tabSolved) tabSolved.textContent = String(solvedIds.length);

    // Sync Filter Active States
    document.querySelectorAll('#detective-status-tabs .bureau-status-tab').forEach(btn => {
      const st = btn.getAttribute('data-case-status');
      btn.classList.toggle('active', st === State.detectiveState.statusFilter);
      btn.setAttribute('aria-selected', st === State.detectiveState.statusFilter ? 'true' : 'false');
    });

    document.querySelectorAll('#detective-subject-filters .filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-detective-subject') === State.detectiveState.subjectFilter);
    });

    document.querySelectorAll('#detective-difficulty-filters .filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-detective-diff') === State.detectiveState.difficultyFilter);
    });

    // Filter Cases
    const filteredCases = DETECTIVE_CASES.filter(c => {
      const isSolved = solvedIds.includes(c.id);
      const isActive = attemptedIds.includes(c.id) && !isSolved;

      if (State.detectiveState.statusFilter === 'active' && !isActive) return false;
      if (State.detectiveState.statusFilter === 'solved' && !isSolved) return false;
      if (State.detectiveState.subjectFilter !== 'all' && c.subject !== State.detectiveState.subjectFilter) return false;
      if (State.detectiveState.difficultyFilter !== 'all' && c.difficulty !== State.detectiveState.difficultyFilter) return false;
      return true;
    });

    const gridEl = document.getElementById('detective-cases-grid');
    if (!gridEl) return;

    if (filteredCases.length === 0) {
      gridEl.innerHTML = `
        <div class="gap-empty-card">
          <h3 class="gap-empty-title">No Case Files Match Current Filters</h3>
          <p class="gap-empty-desc">
            ${State.detectiveState.statusFilter === 'active'
              ? 'You currently have no active in-progress investigations matching these filters. Open any available case file to begin an investigation!'
              : State.detectiveState.statusFilter === 'solved'
              ? 'You have not solved any cases under these filter criteria yet. Start investigating a case file to build your record!'
              : 'No case files match the selected subject and difficulty combination.'}
          </p>
          <button class="btn btn-primary" id="btn-reset-detective-filters">Show All 12 Case Files</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-detective-filters');
      if (resetBtn) {
        resetBtn.onclick = () => {
          State.detectiveState.statusFilter = 'all';
          State.detectiveState.subjectFilter = 'all';
          State.detectiveState.difficultyFilter = 'all';
          renderDetectiveBureauLanding();
        };
      }
      return;
    }

    gridEl.innerHTML = filteredCases.map(c => {
      const isSolved = solvedIds.includes(c.id);
      const isAttempted = attemptedIds.includes(c.id);
      const isActive = isAttempted && !isSolved;
      const caseProg = getCaseProgressState(c.id);
      const subTitle = CURRICULUM[c.subject] ? CURRICULUM[c.subject].title : c.subject;

      let statusLabel = 'Unsolved Dossier';
      let statusClass = 'unsolved';
      let cardStatusClass = '';
      let btnLabel = 'Open Case File';

      if (isSolved) {
        statusLabel = '✓ Case Solved';
        statusClass = 'solved';
        cardStatusClass = 'status-solved';
        btnLabel = 'Review Case Dossier';
      } else if (isActive) {
        statusLabel = '● Active Investigation';
        statusClass = 'active';
        cardStatusClass = 'status-active';
        btnLabel = 'Resume Investigation';
      }

      return `
        <article class="case-dossier-card ${cardStatusClass}">
          <div class="case-card-top">
            <span class="case-code-label">${escapeHtml(c.caseCode)}</span>
            <span class="case-status-pill ${statusClass}">${statusLabel}</span>
          </div>

          <div class="case-badges-row">
            <span class="subject-pill-tag" style="font-size: 0.68rem;">${escapeHtml(subTitle)}</span>
            <span class="case-diff-tag diff-${c.difficulty}">${escapeHtml(c.difficulty)}</span>
            <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); margin-left: auto;">+${c.points} pts</span>
          </div>

          <h3 class="case-card-title">${escapeHtml(c.title)}</h3>
          <p class="case-card-desc">${escapeHtml(c.summary)}</p>

          <div class="case-card-meta-footer">
            <span>Clues: ${caseProg.examinedClues.length}/${c.clues.length} Examined</span>
            <span>Leads: ${caseProg.investigatedLeads.length}/${c.leads.length} Run</span>
          </div>

          <button class="btn ${isSolved ? 'btn-secondary' : 'btn-primary'} btn-block" data-open-case="${c.id}">
            <span>${btnLabel} &rarr;</span>
          </button>
        </article>
      `;
    }).join('');

    gridEl.querySelectorAll('[data-open-case]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.getAttribute('data-open-case');
        openDetectiveCase(cId);
      });
    });
  }

  function openDetectiveCase(caseId) {
    const caseData = DETECTIVE_CASES.find(c => c.id === caseId);
    if (!caseData) return;

    State.detectiveState.activeCaseId = caseId;

    if (!State.progress.detectiveStats.attemptedIds.includes(caseId)) {
      State.progress.detectiveStats.attemptedIds.push(caseId);
      saveProgressToStorage();
    }

    const landingEl = document.getElementById('detective-bureau-landing');
    const workbenchEl = document.getElementById('detective-case-workbench');
    if (landingEl) landingEl.style.display = 'none';
    if (workbenchEl) workbenchEl.style.display = 'block';

    updateDetectiveHeaderBar();
    renderDetectiveCaseWorkbench(caseData);
    window.scrollTo(0, 0);
  }

  function renderDetectiveCaseWorkbench(caseData) {
    const workbenchEl = document.getElementById('detective-case-workbench');
    if (!workbenchEl) return;

    const prog = getCaseProgressState(caseData.id);
    const isSolved = State.progress.detectiveStats.solvedIds.includes(caseData.id);
    const subTitle = CURRICULUM[caseData.subject] ? CURRICULUM[caseData.subject].title : caseData.subject;

    const cluesDone = prog.examinedClues.length >= 2;
    const leadsDone = prog.investigatedLeads.length >= 1;
    const caseAcc = prog.caseDecisions > 0 ? Math.round((prog.caseCorrect / prog.caseDecisions) * 100) : 100;

    workbenchEl.innerHTML = `
      <!-- Top Workbench Navigation & Investigation Stepper -->
      <div class="workbench-top-bar">
        <button class="btn btn-outline" id="btn-workbench-return-archive" style="padding: 0.5rem 0.95rem; font-size: 0.85rem;">
          &larr; All Case Files
        </button>

        <div class="workbench-phases-bar" aria-label="Investigation Stages">
          <span class="phase-pill done">1. Briefing</span>
          <span class="phase-pill ${cluesDone ? 'done' : 'active'}">2. Evidence (${prog.examinedClues.length}/${caseData.clues.length})</span>
          <span class="phase-pill ${leadsDone ? 'done' : (cluesDone ? 'active' : '')}">3. Investigation (${prog.investigatedLeads.length}/${caseData.leads.length})</span>
          <span class="phase-pill ${prog.d1Solved && prog.d2Solved ? 'done' : (leadsDone ? 'active' : '')}">4. Decisions</span>
          <span class="phase-pill ${isSolved ? 'done' : ''}">5. Resolution &amp; Concept</span>
        </div>
      </div>

      <!-- STAGE 1: CASE INTRODUCTION -->
      <section class="investigation-section-card">
        <div class="inv-sec-header">
          <div>
            <span class="inv-step-kicker">${escapeHtml(caseData.caseCode)} &bull; Stage 1: Case Introduction</span>
            <h2 class="inv-sec-title">${escapeHtml(caseData.title)}</h2>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="subject-pill-tag">${escapeHtml(subTitle)}</span>
            <span class="case-diff-tag diff-${caseData.difficulty}">${escapeHtml(caseData.difficulty)}</span>
          </div>
        </div>

        <div class="scenario-dossier-box">
          <p class="scenario-text"><strong>Incident Report:</strong> ${escapeHtml(caseData.introduction)}</p>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--color-forest-dark); margin-bottom: 0.4rem;">
            EVIDENCE ARTIFACT: ${escapeHtml(caseData.artifactTitle)}
          </div>
          <div class="scenario-artifact-code">${escapeHtml(caseData.artifactCode)}</div>
        </div>
      </section>

      <!-- STAGE 2: EVIDENCE COLLECTION -->
      <section class="investigation-section-card">
        <div class="inv-sec-header">
          <div>
            <span class="inv-step-kicker">Stage 2: Evidence Collection</span>
            <h3 class="inv-sec-title">Inspect Field Clues &amp; Observations</h3>
          </div>
          <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-forest-accent);">
            ${prog.examinedClues.length} of ${caseData.clues.length} Clues Examined
          </span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.15rem;">
          Click each evidence card below to examine the technical report and log it into your case dossier. (Examine at least 2 clues to unlock Field Investigation).
        </p>

        <div class="clues-grid">
          ${caseData.clues.map(clue => {
            const isExamined = prog.examinedClues.includes(clue.id) || isSolved;
            return `
              <div class="clue-card ${isExamined ? 'examined' : ''}" data-clue-id="${clue.id}" tabindex="0" role="button" aria-expanded="${isExamined ? 'true' : 'false'}">
                <div class="clue-card-header">
                  <span class="clue-tag">${escapeHtml(clue.tag)}</span>
                  <span class="clue-status">${isExamined ? '✓ Examined' : 'Click to Inspect'}</span>
                </div>
                <h4 class="clue-title">${escapeHtml(clue.title)}</h4>
                ${isExamined
                  ? `<p class="clue-body">${escapeHtml(clue.detail)}</p>`
                  : `<p class="clue-unexamined-prompt">🔍 Click to unseal and inspect this evidence card...</p>`
                }
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- STAGE 3: FIELD INVESTIGATION (DECIDE WHAT TO INVESTIGATE NEXT) -->
      <section class="investigation-section-card">
        <div class="inv-sec-header">
          <div>
            <span class="inv-step-kicker">Stage 3: Active Investigation</span>
            <h3 class="inv-sec-title">Execute Diagnostic Probes &amp; Connect Evidence</h3>
          </div>
          <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-info);">
            ${prog.investigatedLeads.length} of ${caseData.leads.length} Probes Executed
          </span>
        </div>

        ${!cluesDone && !isSolved ? `
          <div style="background-color: var(--color-cream-alt); border: 1px dashed var(--color-beige-muted); border-radius: var(--radius-md); padding: 1.5rem; text-align: center; color: var(--text-secondary);">
            🔒 <strong>Collect Evidence First:</strong> Please inspect at least <strong>2 Clue Cards</strong> in Stage 2 above before running diagnostic field probes.
          </div>
        ` : `
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.15rem;">
            Choose which investigative test or diagnostic probe to run next to verify your clues and isolate the root cause.
          </p>
          <div class="leads-list">
            ${caseData.leads.map(lead => {
              const isRun = prog.investigatedLeads.includes(lead.id) || isSolved;
              return `
                <div class="lead-item-card ${isRun ? 'investigated' : ''}">
                  <div class="lead-top-row">
                    <span class="lead-action-title">🔬 ${escapeHtml(lead.action)}</span>
                    <button class="btn ${isRun ? 'btn-secondary' : 'btn-primary'}" data-lead-id="${lead.id}" style="padding: 0.4rem 0.9rem; font-size: 0.8125rem;" ${isRun ? 'disabled' : ''}>
                      ${isRun ? '✓ Probe Completed' : 'Run Diagnostic Probe'}
                    </button>
                  </div>
                  ${isRun ? `
                    <div class="lead-finding-box">
                      <strong>Lab Finding:</strong> ${escapeHtml(lead.finding)}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        `}
      </section>

      <!-- STAGE 4: DECISION MAKING -->
      <section class="investigation-section-card">
        <div class="inv-sec-header">
          <div>
            <span class="inv-step-kicker">Stage 4: Deductive Decision Making</span>
            <h3 class="inv-sec-title">Formulate Hypothesis &amp; Prescribe Resolution</h3>
          </div>
          <span style="font-size: 0.8125rem; font-weight: 700; color: var(--color-forest-dark);">
            ${prog.d1Solved && prog.d2Solved ? '✓ Both Decisions Verified' : '2 Evidence-Based Decisions Required'}
          </span>
        </div>

        ${(!cluesDone || !leadsDone) && !isSolved ? `
          <div style="background-color: var(--color-cream-alt); border: 1px dashed var(--color-beige-muted); border-radius: var(--radius-md); padding: 1.5rem; text-align: center; color: var(--text-secondary);">
            🔒 <strong>Investigation Incomplete:</strong> Examine at least <strong>2 Clues</strong> in Stage 2 and run at least <strong>1 Diagnostic Probe</strong> in Stage 3 before submitting formal case decisions.
          </div>
        ` : `
          <!-- Decision 1: Root Cause Hypothesis -->
          <div class="decision-block">
            <h4 class="decision-question">${escapeHtml(caseData.decision1.prompt)}</h4>
            <div class="decision-options-grid">
              ${caseData.decision1.options.map((opt, idx) => {
                const isCorrectOpt = idx === caseData.decision1.correctIndex;
                const isSolvedD1 = prog.d1Solved || isSolved;
                const wasWrongChoice = prog.d1WrongChoices && prog.d1WrongChoices.includes(idx);
                let btnClass = '';
                if (isSolvedD1 && isCorrectOpt) btnClass = 'correct';
                else if (wasWrongChoice) btnClass = 'incorrect';

                return `
                  <button class="decision-opt-btn ${btnClass}" data-d1-idx="${idx}" ${isSolvedD1 ? 'disabled' : ''}>
                    <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                    <span>${escapeHtml(opt)}</span>
                  </button>
                `;
              }).join('')}
            </div>
            <div id="d1-feedback-slot">
              ${(prog.d1Solved || isSolved) ? `
                <div class="decision-feedback-callout success">
                  <strong>✓ Hypothesis Verified:</strong> ${escapeHtml(caseData.decision1.confirmFeedback)}
                </div>
              ` : (prog.d1WrongChoices && prog.d1WrongChoices.length > 0) ? `
                <div class="decision-feedback-callout error">
                  <strong>✕ Evidence Contradiction:</strong> ${escapeHtml(caseData.decision1.contradictionFeedback)}
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Decision 2: Corrective Resolution -->
          <div class="decision-block">
            <h4 class="decision-question">${escapeHtml(caseData.decision2.prompt)}</h4>
            ${!prog.d1Solved && !isSolved ? `
              <p style="font-size: 0.875rem; color: var(--text-muted); font-style: italic;">
                Verify Decision 1 (Root Cause Hypothesis) above to unlock Decision 2.
              </p>
            ` : `
              <div class="decision-options-grid">
                ${caseData.decision2.options.map((opt, idx) => {
                  const isCorrectOpt = idx === caseData.decision2.correctIndex;
                  const isSolvedD2 = prog.d2Solved || isSolved;
                  const wasWrongChoice = prog.d2WrongChoices && prog.d2WrongChoices.includes(idx);
                  let btnClass = '';
                  if (isSolvedD2 && isCorrectOpt) btnClass = 'correct';
                  else if (wasWrongChoice) btnClass = 'incorrect';

                  return `
                    <button class="decision-opt-btn ${btnClass}" data-d2-idx="${idx}" ${isSolvedD2 ? 'disabled' : ''}>
                      <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                      <span>${escapeHtml(opt)}</span>
                    </button>
                  `;
                }).join('')}
              </div>
              <div id="d2-feedback-slot">
                ${(prog.d2Solved || isSolved) ? `
                  <div class="decision-feedback-callout success">
                    <strong>✓ Resolution Confirmed:</strong> ${escapeHtml(caseData.decision2.confirmFeedback)}
                  </div>
                ` : (prog.d2WrongChoices && prog.d2WrongChoices.length > 0) ? `
                  <div class="decision-feedback-callout error">
                    <strong>✕ Invalid Resolution:</strong> ${escapeHtml(caseData.decision2.contradictionFeedback)}
                  </div>
                ` : ''}
              </div>
            `}
          </div>
        `}
      </section>

      <!-- STAGES 5, 6 & 7: CASE RESOLUTION, LEARNING OUTCOME & PERFORMANCE SUMMARY -->
      ${isSolved ? `
        <section class="resolution-dossier-card" id="case-resolution-section">
          <div class="inv-sec-header">
            <div>
              <span class="inv-step-kicker" style="color: var(--color-success);">Stages 5, 6 &amp; 7 &bull; Official Case Closure Report</span>
              <h3 class="inv-sec-title">✓ Case Solved: ${escapeHtml(caseData.title)}</h3>
            </div>
            <span class="case-status-pill solved">+${prog.pointsAwarded || caseData.points} Detective Pts</span>
          </div>

          <div class="resolution-grid">
            <div class="resolution-box">
              <div class="postmortem-block-title">5. Case Resolution &amp; Deductive Proof</div>
              <p class="postmortem-text">${escapeHtml(caseData.resolution)}</p>
            </div>
            <div class="resolution-box">
              <div class="postmortem-block-title">Verified Technical Remedy</div>
              <div class="scenario-artifact-code" style="margin-top: 0.35rem;">${escapeHtml(caseData.fixedCode)}</div>
            </div>
          </div>

          <div class="learning-outcome-box">
            <div class="postmortem-block-title" style="color: var(--color-forest-accent);">6. Academic Learning Outcome</div>
            <p class="postmortem-text" style="color: var(--text-primary); font-weight: 500;">${escapeHtml(caseData.learningOutcome)}</p>
          </div>

          <div class="postmortem-block-title" style="margin-bottom: 0.65rem;">7. Investigation Performance Summary</div>
          <div class="performance-summary-strip">
            <div class="perf-stat-box">
              <span class="perf-stat-val">${caseAcc}%</span>
              <span class="perf-stat-lbl">Investigation Accuracy</span>
            </div>
            <div class="perf-stat-box">
              <span class="perf-stat-val">${prog.caseCorrect} / ${prog.caseDecisions}</span>
              <span class="perf-stat-lbl">Correct Decisions</span>
            </div>
            <div class="perf-stat-box">
              <span class="perf-stat-val">${prog.caseIncorrect}</span>
              <span class="perf-stat-lbl">Incorrect Decisions</span>
            </div>
            <div class="perf-stat-box">
              <span class="perf-stat-val">${prog.examinedClues.length} / ${caseData.clues.length}</span>
              <span class="perf-stat-lbl">Clues Examined</span>
            </div>
          </div>

          <div class="postmortem-actions" style="justify-content: space-between; flex-wrap: wrap;">
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-primary" id="btn-case-next">Investigate Next Case &rarr;</button>
              <button class="btn btn-secondary" id="btn-case-study-lesson">Study Curriculum Lesson</button>
            </div>
            <button class="btn btn-outline" id="btn-case-back-bureau">Return to Detective Bureau</button>
          </div>
        </section>
      ` : ''}
    `;

    // Bind Workbench Return Button
    const backBtn = document.getElementById('btn-workbench-return-archive');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        renderDetectiveBureauLanding();
        window.scrollTo(0, 0);
      });
    }

    // Bind Clue Cards Click
    workbenchEl.querySelectorAll('[data-clue-id]').forEach(card => {
      const handleClueInspect = () => {
        const clueId = card.getAttribute('data-clue-id');
        if (!prog.examinedClues.includes(clueId)) {
          prog.examinedClues.push(clueId);
          playSoftChime(true);
          saveProgressToStorage();
          renderDetectiveCaseWorkbench(caseData);
        }
      };
      card.addEventListener('click', handleClueInspect);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClueInspect();
        }
      });
    });

    // Bind Diagnostic Lead Buttons
    workbenchEl.querySelectorAll('[data-lead-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const leadId = btn.getAttribute('data-lead-id');
        if (!prog.investigatedLeads.includes(leadId)) {
          prog.investigatedLeads.push(leadId);
          playSoftChime(true);
          saveProgressToStorage();
          renderDetectiveCaseWorkbench(caseData);
        }
      });
    });

    // Bind Decision 1 Options
    workbenchEl.querySelectorAll('[data-d1-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (prog.d1Solved) return;
        const chosen = parseInt(btn.getAttribute('data-d1-idx'), 10);
        const isCorrect = chosen === caseData.decision1.correctIndex;

        prog.caseDecisions++;
        State.progress.detectiveStats.totalDecisions++;

        if (isCorrect) {
          prog.d1Solved = true;
          prog.caseCorrect++;
          State.progress.detectiveStats.correctDecisions++;
          playSoftChime(true);
        } else {
          prog.caseIncorrect++;
          State.progress.detectiveStats.incorrectDecisions++;
          if (!prog.d1WrongChoices) prog.d1WrongChoices = [];
          if (!prog.d1WrongChoices.includes(chosen)) prog.d1WrongChoices.push(chosen);
          playSoftChime(false);
          logAssessment(caseData.topicId, caseData.subject, false, 'detective', caseData.title);
        }

        saveProgressToStorage();
        renderDetectiveCaseWorkbench(caseData);
      });
    });

    // Bind Decision 2 Options
    workbenchEl.querySelectorAll('[data-d2-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (prog.d2Solved) return;
        const chosen = parseInt(btn.getAttribute('data-d2-idx'), 10);
        const isCorrect = chosen === caseData.decision2.correctIndex;

        prog.caseDecisions++;
        State.progress.detectiveStats.totalDecisions++;

        if (isCorrect) {
          prog.d2Solved = true;
          prog.caseCorrect++;
          State.progress.detectiveStats.correctDecisions++;
          playSoftChime(true);

          if (!State.progress.detectiveStats.solvedIds.includes(caseData.id)) {
            State.progress.detectiveStats.solvedIds.push(caseData.id);
            const penalty = Math.min(25, (prog.caseIncorrect || 0) * 10);
            const earned = Math.max(25, caseData.points - penalty);
            prog.pointsAwarded = earned;
            State.progress.detectiveStats.score += earned;
            showToast(`Case Solved! +${earned} Detective Points earned.`);
          }
          logAssessment(caseData.topicId, caseData.subject, true, 'detective', caseData.title);
          evaluateBadges();
        } else {
          prog.caseIncorrect++;
          State.progress.detectiveStats.incorrectDecisions++;
          if (!prog.d2WrongChoices) prog.d2WrongChoices = [];
          if (!prog.d2WrongChoices.includes(chosen)) prog.d2WrongChoices.push(chosen);
          playSoftChime(false);
          logAssessment(caseData.topicId, caseData.subject, false, 'detective', caseData.title);
        }

        saveProgressToStorage();
        updateDetectiveHeaderBar();
        renderDetectiveCaseWorkbench(caseData);
      });
    });

    // Bind Post-Resolution Action Buttons
    const nextCaseBtn = document.getElementById('btn-case-next');
    if (nextCaseBtn) {
      nextCaseBtn.addEventListener('click', () => {
        const curIdx = DETECTIVE_CASES.findIndex(c => c.id === caseData.id);
        const nextCase = DETECTIVE_CASES[(curIdx + 1) % DETECTIVE_CASES.length];
        openDetectiveCase(nextCase.id);
      });
    }

    const studyLessonBtn = document.getElementById('btn-case-study-lesson');
    if (studyLessonBtn) {
      studyLessonBtn.addEventListener('click', () => {
        const subData = CURRICULUM[caseData.subject];
        let lIdx = 0;
        if (subData && subData.lessons) {
          const found = subData.lessons.findIndex(l => l.id === caseData.topicId);
          if (found !== -1) lIdx = found;
        }
        navigateTo('subject', { subjectId: caseData.subject, lessonIndex: lIdx, tab: 'lessons' });
      });
    }

    const backBureauBtn = document.getElementById('btn-case-back-bureau');
    if (backBureauBtn) {
      backBureauBtn.addEventListener('click', () => {
        renderDetectiveBureauLanding();
        window.scrollTo(0, 0);
      });
    }
  }

  /* ============================================================
     9. STUDENT PROGRESS DASHBOARD MODAL
     ============================================================ */
  const ALL_BADGES = [
    { id: 'first_step', name: 'First Step', icon: '🌱', criteria: 'Complete your first lesson' },
    { id: 'code_initiate', name: 'Code Initiate', icon: '💻', criteria: 'Complete 6 curriculum lessons' },
    { id: 'stem_scholar', name: 'STEM Scholar', icon: '📚', criteria: 'Complete 15 curriculum lessons' },
    { id: 'curriculum_master', name: 'Grand Scholar', icon: '🎓', criteria: 'Complete all 21 lessons' },
    { id: 'quiz_ace', name: 'Quiz Ace', icon: '⭐', criteria: 'Score 100% on any subject quiz' },
    { id: 'grandmaster', name: 'Quiz Grandmaster', icon: '👑', criteria: 'Score 100% on all 4 subject quizzes' },
    { id: 'bug_hunter', name: 'Bug Hunter', icon: '🔍', criteria: 'Score 30+ points in Code Detective' },
    { id: 'vocab_virtuoso', name: 'Vocab Virtuoso', icon: '⚡', criteria: 'Clear 2 decks in Concept Match' },
    { id: 'logic_titan', name: 'Logic Titan', icon: '🧩', criteria: 'Solve 3 Logic Quest challenges' },
    { id: 'concept_explorer', name: 'Concept Navigator', icon: '🌐', criteria: 'Explore 5+ concepts on the Connection Map' },
    { id: 'bug_diagnostician', name: 'Bug Diagnostician', icon: '🔬', criteria: 'Diagnose 3 Find the Mistake challenges' },
    { id: 'master_debugger', name: 'Master Debugger', icon: '🛠️', criteria: 'Diagnose 8 Find the Mistake challenges' },
    { id: 'gap_closer', name: 'Knowledge Healer', icon: '🎯', criteria: 'Resolve a detected knowledge gap' },
    { id: 'junior_detective', name: 'Junior Detective', icon: '🕵️', criteria: 'Solve your first Detective Bureau case' },
    { id: 'senior_investigator', name: 'Senior Investigator', icon: '📂', criteria: 'Solve 6 Detective Bureau cases' },
    { id: 'chief_inspector', name: 'Chief STEM Inspector', icon: '🏅', criteria: 'Solve all 12 Detective Bureau cases' }
  ];

  function openProgressModal() {
    evaluateBadges();
    renderDashboardModal();
    const modal = document.getElementById('progress-modal');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeProgressModal() {
    const modal = document.getElementById('progress-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function renderDashboardModal() {
    const totalLessons = getTotalLessonsCount();
    const completedCount = State.progress.completedLessons.length;
    const overallPct = getOverallCompletionPercentage();

    // Donut chart updates
    const donutFill = document.getElementById('dashboard-donut-fill');
    const donutText = document.getElementById('dashboard-donut-text');
    if (donutFill) donutFill.setAttribute('stroke-dasharray', `${overallPct}, 100`);
    if (donutText) donutText.textContent = `${overallPct}%`;

    // Overview counters
    const completedEl = document.getElementById('stat-completed-lessons');
    if (completedEl) completedEl.textContent = `${completedCount}/${totalLessons}`;

    // Average quiz score
    const scores = Object.values(State.progress.quizHighScores);
    let avgQuiz = 0;
    if (scores.length > 0) {
      const sum = scores.reduce((a, b) => a + b, 0);
      avgQuiz = Math.round((sum / (scores.length * 5)) * 100);
    }
    const avgEl = document.getElementById('stat-avg-quiz');
    if (avgEl) avgEl.textContent = `${avgQuiz}%`;

    // Games won
    const cdSolved = (State.progress.gamesStats.codeDetective && Array.isArray(State.progress.gamesStats.codeDetective.solvedIds))
      ? State.progress.gamesStats.codeDetective.solvedIds.length : 0;
    const gamesWon = cdSolved +
                     (State.progress.gamesStats.conceptMatch.matchesWon || 0) +
                     (State.progress.gamesStats.logicQuest.solvedIds.length || 0);
    const gamesEl = document.getElementById('stat-games-played');
    if (gamesEl) gamesEl.textContent = `${gamesWon}`;

    // Mistakes Solved
    const mistakeSolvedCount = (State.progress.mistakeStats && State.progress.mistakeStats.solvedIds) ? State.progress.mistakeStats.solvedIds.length : 0;
    const mistakesEl = document.getElementById('stat-mistakes-solved');
    if (mistakesEl) mistakesEl.textContent = `${mistakeSolvedCount}/16`;

    // Detective Cases Solved
    const det = State.progress.detectiveStats || { attemptedIds: [], solvedIds: [], score: 0, totalDecisions: 0, correctDecisions: 0, incorrectDecisions: 0 };
    const detSolvedCount = det.solvedIds ? det.solvedIds.length : 0;
    const detEl = document.getElementById('stat-detective-solved');
    if (detEl) detEl.textContent = `${detSolvedCount}/12`;

    // Active Knowledge Gaps
    const gapAnalysis = analyzeKnowledgeGaps();
    const gapsEl = document.getElementById('stat-gaps-status');
    if (gapsEl) gapsEl.textContent = `${gapAnalysis.gaps.length} Active`;

    // Rank title
    const rankTitle = document.getElementById('dashboard-rank-title');
    if (rankTitle) {
      if (overallPct >= 100) rankTitle.textContent = 'Universal Master 🌟';
      else if (overallPct >= 70) rankTitle.textContent = 'Distinguished Scholar 🎓';
      else if (overallPct >= 35) rankTitle.textContent = 'Active Apprentice 📚';
      else rankTitle.textContent = 'Curious Beginner 🌱';
    }

    // Subject Mastery List
    const subList = document.getElementById('dashboard-subject-list');
    if (subList) {
      subList.innerHTML = '';
      for (const subId in CURRICULUM) {
        const sub = CURRICULUM[subId];
        const doneInSub = sub.lessons.filter(l => State.progress.completedLessons.includes(l.id)).length;
        const quizHighScore = State.progress.quizHighScores[subId];
        const quizText = quizHighScore !== undefined ? `Quiz: ${quizHighScore}/5` : 'Quiz: Untested';
        const casesInSub = DETECTIVE_CASES.filter(c => c.subject === subId);
        const solvedCasesInSub = casesInSub.filter(c => det.solvedIds && det.solvedIds.includes(c.id)).length;

        const row = document.createElement('div');
        row.className = 'dash-subject-row';
        row.innerHTML = `
          <span class="dash-sub-title">${escapeHtml(sub.title)}</span>
          <div class="dash-sub-stats">
            <span>${doneInSub}/${sub.lessons.length} Lessons</span>
            <span>Cases: ${solvedCasesInSub}/${casesInSub.length}</span>
            <span>${quizText}</span>
          </div>
        `;
        subList.appendChild(row);
      }
    }

    // Detective Bureau Summary in Dashboard
    const detSummary = document.getElementById('dashboard-detective-summary');
    if (detSummary) {
      const detAcc = det.totalDecisions > 0 ? Math.round((det.correctDecisions / det.totalDecisions) * 100) : 0;
      detSummary.innerHTML = `
        <div class="dash-detective-grid">
          <div class="dash-det-item">
            <span class="dash-det-val">${det.attemptedIds ? det.attemptedIds.length : 0} / 12</span>
            <span class="dash-det-lbl">Cases Attempted</span>
          </div>
          <div class="dash-det-item">
            <span class="dash-det-val">${detSolvedCount} / 12</span>
            <span class="dash-det-lbl">Cases Solved</span>
          </div>
          <div class="dash-det-item">
            <span class="dash-det-val">${detAcc}%</span>
            <span class="dash-det-lbl">Investigation Accuracy</span>
          </div>
          <div class="dash-det-item">
            <span class="dash-det-val">${det.incorrectDecisions || 0}</span>
            <span class="dash-det-lbl">Incorrect Decisions</span>
          </div>
        </div>
      `;
    }

    // Badges Grid
    const badgesGrid = document.getElementById('dashboard-badges-grid');
    if (badgesGrid) {
      badgesGrid.innerHTML = '';
      ALL_BADGES.forEach(b => {
        const isUnlocked = State.progress.badges.includes(b.id);
        const card = document.createElement('div');
        card.className = `badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
          <div class="badge-icon">${b.icon}</div>
          <div class="badge-name">${escapeHtml(b.name)}</div>
          <div class="badge-criteria">${escapeHtml(b.criteria)}</div>
        `;
        badgesGrid.appendChild(card);
      });
    }
  }

  /* ============================================================
     10. GLOBAL EVENT LISTENERS & INITIALIZATION
     ============================================================ */
  function bindEventListeners() {
    // Brand Logo -> Go Home
    const brand = document.getElementById('nav-brand');
    if (brand) {
      brand.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('homepage');
      });
    }

    // Navigation Links
    const linkSubjects = document.getElementById('nav-link-subjects');
    if (linkSubjects) {
      linkSubjects.addEventListener('click', (e) => {
        if (State.currentView !== 'homepage') {
          e.preventDefault();
          navigateTo('homepage');
          setTimeout(() => {
            const sec = document.getElementById('subjects-section');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      });
    }

    const linkGames = document.getElementById('nav-link-games');
    if (linkGames) {
      linkGames.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('games');
      });
    }

    // Smart Tools Navigation Links
    const linkTools = document.getElementById('nav-link-tools');
    if (linkTools) {
      linkTools.addEventListener('click', (e) => {
        if (State.currentView !== 'homepage') {
          e.preventDefault();
          navigateTo('homepage');
          setTimeout(() => {
            const sec = document.getElementById('smart-tools-section');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      });
    }

    const navLinkConceptMap = document.getElementById('nav-link-concept-map');
    if (navLinkConceptMap) {
      navLinkConceptMap.addEventListener('click', () => navigateTo('concept-map'));
    }

    const navLinkFindMistake = document.getElementById('nav-link-find-mistake');
    if (navLinkFindMistake) {
      navLinkFindMistake.addEventListener('click', () => navigateTo('find-mistake'));
    }

    const navLinkGapDetector = document.getElementById('nav-link-gap-detector');
    if (navLinkGapDetector) {
      navLinkGapDetector.addEventListener('click', () => navigateTo('gap-detector'));
    }

    const navLinkDetective = document.getElementById('nav-link-detective');
    if (navLinkDetective) {
      navLinkDetective.addEventListener('click', () => navigateTo('detective-bureau'));
    }

    // Mobile Nav Drawer Links
    const mobileLinkDetective = document.getElementById('mobile-link-detective');
    if (mobileLinkDetective) {
      mobileLinkDetective.addEventListener('click', () => {
        navigateTo('detective-bureau');
        const mDrawer = document.getElementById('mobile-nav-drawer');
        if (mDrawer) mDrawer.classList.remove('open');
      });
    }

    const mobileLinkMap = document.getElementById('mobile-link-concept-map');
    if (mobileLinkMap) {
      mobileLinkMap.addEventListener('click', () => {
        navigateTo('concept-map');
        if (drawer) drawer.classList.remove('open');
      });
    }

    const mobileLinkMistake = document.getElementById('mobile-link-find-mistake');
    if (mobileLinkMistake) {
      mobileLinkMistake.addEventListener('click', () => {
        navigateTo('find-mistake');
        if (drawer) drawer.classList.remove('open');
      });
    }

    const mobileLinkGap = document.getElementById('mobile-link-gap-detector');
    if (mobileLinkGap) {
      mobileLinkGap.addEventListener('click', () => {
        navigateTo('gap-detector');
        if (drawer) drawer.classList.remove('open');
      });
    }

    // Hero Smart Tools & Detective Buttons
    const heroBtnDetective = document.getElementById('hero-btn-detective');
    if (heroBtnDetective) {
      heroBtnDetective.addEventListener('click', () => navigateTo('detective-bureau'));
    }

    const btnLaunchDetective = document.getElementById('btn-launch-detective-bureau');
    if (btnLaunchDetective) {
      btnLaunchDetective.addEventListener('click', () => navigateTo('detective-bureau'));
    }

    document.querySelectorAll('.preview-subject-chip[data-detective-subject]').forEach(chip => {
      chip.addEventListener('click', () => {
        const sub = chip.getAttribute('data-detective-subject');
        navigateTo('detective-bureau', { subject: sub, status: 'all', difficulty: 'all' });
      });
    });

    const heroBtnTools = document.getElementById('hero-btn-tools');
    if (heroBtnTools) {
      heroBtnTools.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = document.getElementById('smart-tools-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Homepage Smart Tools Card Buttons
    const btnLaunchMap = document.getElementById('btn-launch-concept-map');
    if (btnLaunchMap) {
      btnLaunchMap.addEventListener('click', () => navigateTo('concept-map'));
    }

    const btnLaunchMistake = document.getElementById('btn-launch-find-mistake');
    if (btnLaunchMistake) {
      btnLaunchMistake.addEventListener('click', () => navigateTo('find-mistake'));
    }

    const btnLaunchGap = document.getElementById('btn-launch-gap-detector');
    if (btnLaunchGap) {
      btnLaunchGap.addEventListener('click', () => navigateTo('gap-detector'));
    }

    // Back Buttons from Tool Views
    const btnBackMap = document.getElementById('btn-back-from-concept-map');
    if (btnBackMap) {
      btnBackMap.addEventListener('click', () => navigateTo('homepage'));
    }

    const btnBackMistake = document.getElementById('btn-back-from-find-mistake');
    if (btnBackMistake) {
      btnBackMistake.addEventListener('click', () => navigateTo('homepage'));
    }

    const btnBackGap = document.getElementById('btn-back-from-gap-detector');
    if (btnBackGap) {
      btnBackGap.addEventListener('click', () => navigateTo('homepage'));
    }

    const btnBackDetective = document.getElementById('btn-back-from-detective');
    if (btnBackDetective) {
      btnBackDetective.addEventListener('click', () => {
        if (State.detectiveState.activeCaseId) {
          renderDetectiveBureauLanding();
          window.scrollTo(0, 0);
        } else {
          navigateTo('homepage');
        }
      });
    }

    // Footer Links for Smart Tools
    const footerBtnDetective = document.getElementById('footer-btn-detective');
    if (footerBtnDetective) {
      footerBtnDetective.addEventListener('click', () => navigateTo('detective-bureau'));
    }

    const footerBtnMap = document.getElementById('footer-btn-concept-map');
    if (footerBtnMap) {
      footerBtnMap.addEventListener('click', () => navigateTo('concept-map'));
    }

    const footerBtnMistake = document.getElementById('footer-btn-find-mistake');
    if (footerBtnMistake) {
      footerBtnMistake.addEventListener('click', () => navigateTo('find-mistake'));
    }

    const footerBtnGap = document.getElementById('footer-btn-gap-detector');
    if (footerBtnGap) {
      footerBtnGap.addEventListener('click', () => navigateTo('gap-detector'));
    }

    // Detective Bureau Filters
    document.querySelectorAll('#detective-status-tabs .bureau-status-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        State.detectiveState.statusFilter = btn.getAttribute('data-case-status');
        renderDetectiveBureauLanding();
      });
    });

    document.querySelectorAll('#detective-subject-filters .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        State.detectiveState.subjectFilter = btn.getAttribute('data-detective-subject');
        renderDetectiveBureauLanding();
      });
    });

    document.querySelectorAll('#detective-difficulty-filters .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        State.detectiveState.difficultyFilter = btn.getAttribute('data-detective-diff');
        renderDetectiveBureauLanding();
      });
    });

    // Find the Mistake Filter Pills
    document.querySelectorAll('#mistake-subject-filters .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        State.mistakeState.activeFilterSubject = btn.getAttribute('data-filter-subject');
        State.mistakeState.currentIndex = 0;
        State.mistakeState.selectedLineOrStep = null;
        State.mistakeState.selectedOptionIndex = null;
        renderMistakeStepperRibbon();
        renderMistakeChallenge();
      });
    });

    document.querySelectorAll('#mistake-difficulty-filters .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        State.mistakeState.activeFilterDiff = btn.getAttribute('data-filter-diff');
        State.mistakeState.currentIndex = 0;
        State.mistakeState.selectedLineOrStep = null;
        State.mistakeState.selectedOptionIndex = null;
        renderMistakeStepperRibbon();
        renderMistakeChallenge();
      });
    });

    // Diagnostic Modal Handlers
    const runDiagBtn = document.getElementById('btn-run-diagnostic');
    if (runDiagBtn) {
      runDiagBtn.addEventListener('click', startStemDiagnostic);
    }

    const diagCloseBtn = document.getElementById('modal-diagnostic-close-btn');
    if (diagCloseBtn) {
      diagCloseBtn.addEventListener('click', closeDiagnosticModal);
    }

    const diagModal = document.getElementById('diagnostic-modal');
    if (diagModal) {
      diagModal.addEventListener('click', (e) => {
        if (e.target === diagModal) closeDiagnosticModal();
      });
    }

    const heroBtnExplore = document.getElementById('hero-btn-explore');
    if (heroBtnExplore) {
      heroBtnExplore.addEventListener('click', (e) => {
        e.preventDefault();
        const sec = document.getElementById('subjects-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const heroBtnGames = document.getElementById('hero-btn-games');
    if (heroBtnGames) {
      heroBtnGames.addEventListener('click', () => {
        navigateTo('games');
      });
    }

    // Subject Cards Click
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
      card.addEventListener('click', () => {
        const subId = card.getAttribute('data-subject-id');
        navigateTo('subject', { subjectId: subId });
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const subId = card.getAttribute('data-subject-id');
          navigateTo('subject', { subjectId: subId });
        }
      });
    });

    // Games Launch Buttons on Homepage
    const gameLaunchBtns = document.querySelectorAll('.btn-game-launch');
    gameLaunchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-game-target');
        navigateTo('games', { gameTarget: target });
      });
    });

    // Footer links
    const footerSubjectBtns = document.querySelectorAll('[data-subject-target]');
    footerSubjectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-subject-target');
        navigateTo('subject', { subjectId: target });
      });
    });

    const footerGameBtns = document.querySelectorAll('.site-footer [data-game-target]');
    footerGameBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-game-target');
        navigateTo('games', { gameTarget: target });
      });
    });

    const footerReset = document.getElementById('footer-reset-data');
    if (footerReset) footerReset.addEventListener('click', resetAllProgress);

    const btnResetDash = document.getElementById('btn-reset-dashboard-data');
    if (btnResetDash) btnResetDash.addEventListener('click', resetAllProgress);

    // Progress Modal triggers
    const btnOpenProg = document.getElementById('btn-open-progress');
    if (btnOpenProg) btnOpenProg.addEventListener('click', openProgressModal);

    const mobileBtnProg = document.getElementById('mobile-btn-progress');
    if (mobileBtnProg) {
      mobileBtnProg.addEventListener('click', () => {
        openProgressModal();
        const drawer = document.getElementById('mobile-nav-drawer');
        if (drawer) drawer.classList.remove('open');
      });
    }

    const footerBtnProg = document.getElementById('footer-btn-progress');
    if (footerBtnProg) footerBtnProg.addEventListener('click', openProgressModal);

    const btnCloseModal = document.getElementById('btn-close-modal');
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeProgressModal);

    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProgressModal);

    const modalBackdrop = document.getElementById('progress-modal');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeProgressModal();
      });
    }

    // Mobile nav hamburger toggle
    const hamburger = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Back to subjects button in subject view
    const btnBackSubjects = document.getElementById('btn-back-to-subjects');
    if (btnBackSubjects) {
      btnBackSubjects.addEventListener('click', () => {
        navigateTo('homepage');
      });
    }

    // Back from games view
    const btnBackGames = document.getElementById('btn-back-from-games');
    if (btnBackGames) {
      btnBackGames.addEventListener('click', () => {
        navigateTo('homepage');
      });
    }

    // Subject Mode Tabs (Lessons vs Quiz)
    const tabLessons = document.getElementById('tab-lessons');
    if (tabLessons) {
      tabLessons.addEventListener('click', () => {
        setSubjectTab('lessons');
        renderSubjectSidebar();
        renderActiveLesson();
      });
    }

    const tabQuiz = document.getElementById('tab-quiz');
    if (tabQuiz) {
      tabQuiz.addEventListener('click', () => {
        setSubjectTab('quiz');
      });
    }

    const sidebarQuizBtn = document.getElementById('sidebar-take-quiz-btn');
    if (sidebarQuizBtn) {
      sidebarQuizBtn.addEventListener('click', () => {
        setSubjectTab('quiz');
      });
    }

    // Sidebar mobile toggle
    const sidebarMobileToggle = document.getElementById('sidebar-mobile-toggle');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const sidebar = document.getElementById('subject-sidebar');

    if (sidebarMobileToggle && sidebar) {
      sidebarMobileToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
      });
    }

    if (sidebarCloseBtn && sidebar) {
      sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    }

    // Lesson bottom navigation
    const btnNext = document.getElementById('btn-complete-and-next');
    if (btnNext) btnNext.addEventListener('click', handleNextLesson);

    const btnPrev = document.getElementById('btn-prev-lesson');
    if (btnPrev) btnPrev.addEventListener('click', handlePrevLesson);

    // Game selector tabs in Games view
    const gameTabs = document.querySelectorAll('.game-selector-tab');
    gameTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const gKey = tab.getAttribute('data-game');
        switchGameTab(gKey);
      });
    });

    // Close mobile nav drawer upon clicking links
    document.querySelectorAll('[data-action="close-mobile"]').forEach(l => {
      l.addEventListener('click', () => {
        if (drawer) drawer.classList.remove('open');
      });
    });

    // ESC key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProgressModal();
        closeDiagnosticModal();
      }
    });
  }

  /* --- Initialize Application --- */
  function initApp() {
    loadProgressFromStorage();
    bindEventListeners();
    navigateTo('homepage');
    updateGlobalProgressPills();
    updateHomepageSubjectCards();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
