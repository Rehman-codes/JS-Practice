/* ---------------------------------------------Key Concepts of Error Handling---------------------------------------------

-----------try...catch Statement-----------
The try...catch statement allows you to handle exceptions (errors) that occur in a block of code.
The try block contains code that might throw an error.
The catch block contains code that handles the error.

-----------finally Clause-----------
The finally clause can be added after try...catch to execute code regardless of whether an error occurred or not.

-----------Throwing Errors-----------
You can throw your own errors using the throw statement.
You can throw any type of data, but it's recommended to throw Error objects or objects derived from Error.

-----------Error Types-----------
JavaScript has several built-in error types: Error, RangeError, ReferenceError, SyntaxError, TypeError, URIError.
Each error type represents a specific kind of error.

-----------Custom Errors
You can create custom error classes by extending the built-in Error class.*/


// --------------------------------------------------Basic Error Handling with try...catch--------------------------------------------------
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error occurred:", error.message);
    } finally {
        console.log("Division operation completed.");
    }
}

console.log(divide(10, 2)); // 5
console.log('-------------------------------------');
console.log(divide(10, 0)); // Error occurred: Division by zero is not allowed.
                            // Division operation completed.


// --------------------------------------------------Using Different Error Types--------------------------------------------------
const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30'; // Missing closing brace

function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Syntax Error: Invalid JSON format.");
        } else {
            console.error("Unexpected Error:", error.message);
        }
    }
}

console.log('-------------------------------------');
console.log(parseJSON(validJSON)); // { name: 'John', age: 30 }
console.log('-------------------------------------');
console.log(parseJSON(invalidJSON)); // Syntax Error: Invalid JSON format.
console.log('-------------------------------------');


// --------------------------------------------------Custom Errors--------------------------------------------------
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required.");
    }
    if (user.age < 0) {
        throw new ValidationError("Age cannot be negative.");
    }
    return true;
}

try {
    const user = { name: "", age: -5 };
    validateUser(user);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message);
    } else {
        console.error("Unexpected Error:", error.message);
    }
}
