// ------------------------ Single Threaded ------------------------
/* JavaScript is single-threaded, meaning it executes one command at a time, using a single call stack. 
This simplifies programming but can lead to issues with blocking code if not managed properly. */

console.log("First");
setTimeout(() => console.log("Second"), 1000);
console.log("Third");


// ------------------------ Event Loop ------------------------
/* The event loop is a mechanism that handles asynchronous operations in JavaScript. 
It continuously checks the call stack and the task queue, 
pushing tasks from the queue to the stack once the stack is empty. */

console.log("Start");
setTimeout(() => console.log("Callback"), 0);
console.log("End");


// ------------------------ Garbage Collection ------------------------
/* Garbage collection in JavaScript is the process of automatically freeing up 
memory by removing objects that are no longer reachable or in use. */

let obj = { name: "John" };
obj = null; // obj is now eligible for garbage collection


// ------------------------ Call Stack ------------------------
/* The call stack is a stack data structure that keeps track of function calls. When a function is called, it’s pushed onto the stack. 
When it returns, it’s popped off the stack. */ 

function first() {
    second();
}
function second() {
    console.log("Second function");
}
first();

/* Call stack for the above code
 console.log()
 second()
 first()
*/


// ------------------------ Heap Memory ------------------------
/* Heap memory is used for dynamic memory allocation where variables are stored and memory is managed automatically.*/ 

// ------------------------ Hoisting ------------------------
/* Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. 
Only the declarations are hoisted, not the initializations. */ 


// ------------------------ Prototype Chaining ------------------------
/* Prototype chaining is a feature in JavaScript that allows objects to 
inherit properties and methods from other objects via the prototype property. */

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
};

let john = new Person("John");
john.greet(); // Hello, John


// ------------------------ this, bind, and window ------------------------
/* this refers to the context in which a function is called. 
bind creates a new function with a specific this value. 
window is the global object in browsers. */

// Example-1
const objA = {
    name: "John",
    greet: function() {
        console.log(this.name);
    }
};
const greet = objA.greet.bind(objA);
greet(); // John

// Example-2
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10


// ------------------------ Closures ------------------------
/* Closures are functions that retain access to their outer (enclosing) function’s scope 
even after the outer function has returned. */

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
const counter = outer();
counter(); // 1
counter(); // 2


// ------------------------ JS Runtime ------------------------
/* JavaScript runtime provides the environment in which JavaScript code is executed. 
It includes the call stack, heap, and event loop. */


// ------------------------ Event Propagation ------------------------
/* Event propagation is the order in which event handlers are executed. 
It includes two phases: 
1. Capturing (from the outer element to the target) 
2. Bubbling (from the target element back to the outer elements). 

Capturing phase is when the event travels from the outermost element to the target element, 
Bubbling phase is when it travels back up from the target to the outermost element. 
By default, event listeners are in the bubbling phase.
*/

<>
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', {() => console.log('Parent clicked')});
  document.getElementById('child').addEventListener('click', {() => console.log('Child clicked')});
</script>
</>

/* 
Capturing Phase:
document -> html -> body -> div#parent -> button#child

Target Phase:
button#child (event listener fires, "Child clicked")

Bubbling Phase:
button#child -> div#parent (event listener fires, "Parent clicked") -> body -> html -> document
*/

/* 
Bubbling phase Output
Child clicked
Parent clicked
*/

// document.getElementById('parent').addEventListener('click', () => console.log('Parent clicked'), { capture: true });

/* 
Capturing phase Output
Parent clicked
Child clicked
*/

// ------------------------ Scope (local, global, block) ------------------------
/* Scope determines the visibility of variables. Global scope is accessible everywhere, 
local scope is within functions, and block scope is within blocks (e.g., if statements). */

let globalVar = "global"; // global scope

function myFunc() {
    let localVar = "local"; // local scope
    if (true) {
        let blockVar = "block"; // block scope
    }
    console.log(blockVar); // Error: blockVar is not defined
}
myFunc();


// ------------------------ Lexical Environment ------------------------
/* 
A Lexical Environment is a structure that holds identifier-variable mappings (i.e., where a variable name maps to the variable's value) 
and the reference to its outer environment. 

When JavaScript code is executed, the JavaScript engine creates a global lexical environment 
and then creates new lexical environments for each function call or block scope encountered.
*/

/* 
Components of a Lexical Environment
1. Environment Record: This is an object that stores all the variable and function declarations 
within a particular function or block.

2. Reference to the Outer Lexical Environment: This is a reference to the parent lexical environment, 
allowing access to variables declared outside the current scope.
*/

/* Types of Lexical Environments
1.Global Lexical Environment: The outermost environment where global variables and functions are stored.
2.Function Lexical Environment: Created when a function is invoked. It holds function-specific variables and parameters.
3.Block Lexical Environment: Created within a block (e.g., inside an if statement or a for loop) when let or const is used. 
*/


// ------------------------ Regular Expressions(RegExp) ------------------------
// Creating a Regular Expression
let re1 = /pattern/flags; // Example: /hello/i (the i flag makes the search case-insensitive)

// Using the RegExp constructor:
let re2 = new RegExp('pattern', 'flags');  // Example: new RegExp('hello', 'i')


/*
Common Flags
g (global): Match all occurrences.
i (case-insensitive): Ignore case.
m (multiline): Treat beginning and end characters (^ and $) as working across multiple lines.
u (unicode): Treat pattern as a sequence of unicode code points.
s (dotAll): Allows . to match newline characters.
*/

let re = /hello/;
re.test('hello world'); // true


// ------------------------ Iterators ------------------------
/*
An iterator is an object that allows you to traverse a collection, one element at a time. 
An iterator must implement a next method that returns an object with two properties:
1.value: The next value in the iteration sequence.
2.done: A boolean indicating whether the sequence has finished (true) or not (false).
*/


// ------------------------ Generators ------------------------
/*
Generators are special functions that can pause and resume their execution. 
They provide a simpler way to create iterators. 
Generators are defined using the function* syntax and use the yield keyword to pause execution and return a value.
*/

function* generatorFunction() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  
  const gen = generatorFunction();
  
  console.log(gen.next()); // { value: 'a', done: false }
  console.log(gen.next()); // { value: 'b', done: false }
  console.log(gen.next()); // { value: 'c', done: false }
  console.log(gen.next()); // { value: undefined, done: true }
  