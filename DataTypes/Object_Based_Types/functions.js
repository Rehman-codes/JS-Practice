/* ----------------------------------------------1. Functions---------------------------------------------- */

/* -------Function Declaration------- */

// Function declaration (function statement)
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling a function
console.log(greet('Rehman')); // Output: Hello, Rehman!


/* -------Function Expression------- */

// Function expression
const square = function(number) {
    return number * number;
};

// Calling a function expression
console.log(square(4)); // Output: 16


/* -------Arrow Functions------- */

// Arrow function expression
const add1 = (a, b) => a + b;
const add2 = (a, b) => (a + b);
const add3 = (a, b) => {return a + b};
const func1 = a => a;
const func2 = ()  => "no args";

// Calling an arrow function
console.log('Arrow1', add1(2, 3)); 
console.log('Arrow2', add2(2, 3)); 
console.log('Arrow3', add3(2, 3)); 
console.log('Arrow4', func1(2)); 
console.log('Arrow4', func2()); 


/* -------Immediately Invoked Function Expressions (IIFE)------- */
/* An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after its creation.
It helps in creating a local scope to avoid polluting the global namespace. */
(function() {
    console.log('This function runs immediately upon definition');
})(); 


/* -------Higher-Order Functions------- */
// Functions that take other functions as arguments or return functions as their result.

function applyOperation(a, b, operation) {
    return operation(a, b);
}

const multiply = (a, b) => a * b;
console.log(applyOperation(3, 4, multiply));


/* -------Callback Functions------- */
// A callback function is passed into another function as an argument to be executed later.

function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}

fetchData(callback);

function callback(message){
    console.log(message);
}

/* -------Recursion------- */
// A function that calls itself to solve a problem.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
