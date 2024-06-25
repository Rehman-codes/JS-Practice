// Importing named exports
import { add, subtract, multiply, divide } from './modules1.js';

// Importing default export
import PI from './modules1.js';

console.log("Add:", add(5, 3)); // Add: 8
console.log("Subtract:", subtract(5, 3)); // Subtract: 2
console.log("Multiply:", multiply(5, 3)); // Multiply: 15
console.log("PI:", PI); // PI: 3.14159