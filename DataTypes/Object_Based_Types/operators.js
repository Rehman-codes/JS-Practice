/* ----------------------------------------------3. Operators---------------------------------------------- */
/* Operators are symbols used to perform operations on operands.
   JavaScript includes various types of operators such as arithmetic, comparison, logical, etc. */

/* -------Arithmetic Operators------- */

let a = 10;
let b = 5;

console.log(a + b); // Addition: Output: 15
console.log(a - b); // Subtraction: Output: 5
console.log(a * b); // Multiplication: Output: 50
console.log(a / b); // Division: Output: 2
console.log(a % b); // Modulus: Output: 0
console.log(a ** b); // Exponentiation: Output: 100000


/* -------Comparison Operators------- */

console.log(a == b); // Equal to: Output: false
console.log(a != b); // Not equal to: Output: true
console.log(a === b); // Strict equal to: Output: false
console.log(a !== b); // Strict not equal to: Output: true
console.log(a > b); // Greater than: Output: true
console.log(a >= b); // Greater than or equal to: Output: true
console.log(a < b); // Less than: Output: false
console.log(a <= b); // Less than or equal to: Output: false


/* -------Logical Operators------- */

let x = true;
let y = false;

console.log(x && y); // AND: Output: false
console.log(x || y); // OR: Output: true
console.log(!x); // NOT: Output: false

/* In JavaScript, the logical OR (||) operator performs short-circuit evaluation.
This means that if the left-hand operand evaluates to true, 
the right-hand operand is not evaluated because the overall result will already be true regardless of the right-hand operand's value. */

/* -------Assignment Operators------- */

let c = 10;

c += 5; // c = c + 5
console.log(c); // Output: 15

c -= 3; // c = c - 3
console.log(c); // Output: 12

c *= 2; // c = c * 2
console.log(c); // Output: 24

c /= 4; // c = c / 4
console.log(c); // Output: 6

c %= 3; // c = c % 3
console.log(c); // Output: 0


/* -------Bitwise Operators------- */

let d = 5;  // Binary: 0101
let e = 3;  // Binary: 0011

console.log(d & e); // AND: Output: 1 (Binary: 0001)
console.log(d | e); // OR: Output: 7 (Binary: 0111)
console.log(d ^ e); // XOR: Output: 6 (Binary: 0110)
console.log(~d); // NOT: Output: -6 (Binary: 1010)


/* -------Ternary Operator------- */

let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes
