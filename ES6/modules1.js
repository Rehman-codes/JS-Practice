/* JavaScript modules allow you to break up your code into separate files. 
This makes it easier to maintain and reuse code. 
Modules can export and import functionalities (variables, functions, classes, etc.) between different files, 
providing better modularity and organization. */

/* ----------------Key Concepts of JavaScript Modules----------------
Exporting:
You can export functions, objects, or primitive values from a module so they can be used by other programs with the 'export' keyword.

Importing:
You can import functionalities from other modules into your current file using the 'import' keyword.

Default Exports:
Each module can have one default export using the 'export default' syntax. This is useful for exporting a single main functionality from a module.

Named Exports:
You can have multiple named exports per module. These are exported using the 'export' keyword and must be imported with their exact names. */


// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// Default export
const PI = 3.14159;
export default PI;
