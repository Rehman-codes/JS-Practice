// -------------------------------- 1.Multi-line Strings --------------------------------
/* Multi-line strings in ES6 are created using template literals, which are enclosed by backticks (``). 
They allow strings to span multiple lines.
No need to use (+)*/

console.log('-------------------Multiline Strings-------------------');
const multiLineString1 = `This is a
multi-line
string. ES6`;
console.log(multiLineString1);

console.log('--------------------------------------');

const multiLineString2 = 'This is a\n' +
                        'multi-line\n' +
                        'string. Pre-ES6';
console.log(multiLineString2);

// -------------------------------- 2.Default Parameters --------------------------------
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log('-----------------Default Parameters---------------------');
console.log(greet());        // Output: Hello, Guest!
console.log(greet('Rehman')); // Output: Hello, Rehman!

// -------------------------------- 3.Template Literals --------------------------------
/* Template literals are literals delimited with backtick (`) characters, 
allowing for multi-line strings, string interpolation (to create strings by doing substitution of placeholders) with embedded expressions, 
and special constructs called tagged templates.
Template literals are sometimes informally called template strings. */

console.log('-----------------String Interpolation---------------------');
const num1 = 10;
const num2 = 5;
const result1 = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(result1); // Output: The sum of 10 and 5 is 15.

console.log('-------------------Tagged Templates-------------------');
let personName = 'Rehman';
const personAge = 21;
tag`Name: ${personName}, Age: ${personAge} `;

function tag(strings, name, age) {  // First argument is an Array of string parts and the rest are variables inside the string.
    console.log(strings);  
    console.log(name); 
    console.log(age); 
}

// -------------------------------- 4.Destructuring --------------------------------
// Array Destructuring
console.log('-------------------Destructuring-------------------');
// Assign elements of an array to variables
const numbers = [1, 2, 3];
const [one, two, three] = numbers;
console.log(one);   // Output: 1
console.log(two);   // Output: 2
console.log(three); // Output: 3

// Skip elements in the array
const [first, , third] = [1, 2, 3, 4];
console.log(first); // Output: 1 
console.log(third); // Output: 3

// Use default values if the array doesn't contain enough elements
const [num3, num4 = 2] = [1];
console.log(num3); // Output: 1
console.log(num4); // Output: 2

// Swap variables using destructuring
let val1 = 1;
let val2 = 2;
[val1, val2] = [val2, val1];
console.log(val1); // Output: 2
console.log(val2); // Output: 1

// Object Destructuring

// Assign properties of an object to variables
const person = { name: 'Alice', age: 25 };
const { name: personName1, age: personAge1 } = person;
console.log('---------^^^^^----------');
console.log(personName1); // Output: Alice
console.log(personAge1);  // Output: 25

// Rename variables while destructuring
const { name: fullName, age: years } = person;
console.log(fullName); // Output: Alice
console.log(years);    // Output: 25

// Use default values if the object doesn't contain the property
const { name: personFullName, age: personYears = 30 } = { name: 'Alice' };
console.log(personFullName); // Output: Alice
console.log(personYears);    // Output: 30

// Nested Destructuring

// Destructure nested arrays
const nestedArray = [1, [2, 3], 4];
const [one1, [two2, three3], four4] = nestedArray;
console.log(one1);   // Output: 1
console.log(two2);   // Output: 2
console.log(three3); // Output: 3
console.log(four4);  // Output: 4

// Destructure nested objects
const nestedObject = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};
const { name: nestedName, address: { city, zip } } = nestedObject;
console.log(nestedName);    // Output: Alice
console.log(city); // Output: Wonderland
console.log(zip);  // Output: 12345

// Destructuring in Function Parameters

// Array destructuring in function parameters
function sum([a, b]) {
    return a + b;
}
console.log(sum([1, 2])); // Output: 3

// Object destructuring in function parameters
function introduce({ name: introName, age: introAge }) {
    return `Hello, ${introName}! You are ${introAge} years old.`;
}
console.log(introduce({ name: 'Alice', age: 25 })); // Output: Hello, Alice! You are 25 years old.

// ----Destructuring with Rest Parameters----

// Array rest destructuring
const numbers2 = [1, 2, 3, 4];
const [first2, ...rest2] = numbers2;
console.log(first2); // Output: 1
console.log(rest2);  // Output: [2, 3, 4]

// Object rest destructuring
const person3 = { name: 'Alice', age: 25, country: 'Wonderland' };
const { name: n2, ...rest3 } = person3;
console.log(n2);   // Output: Alice
console.log(rest3); // Output: { age: 25, country: 'Wonderland' }

// Practical Examples

// Extracting data from API responses
const response = {
    data: {
        user: {
            id: 1,
            name: 'Alice'
        }
    }
};
const { data: { user: { id, name: userName } } } = response;
console.log(id, userName); // Output: 1 Alice

// Setting up default options
function setup({ width = 100, height = 100, color = 'blue' }) {
    console.log(width, height, color);
}
setup({ width: 200 }); // Output: 200 100 blue


// -------------------------------- 5.Enhanced Object Literals --------------------------------

// 1. Shorthand Property Names
const shortName = 'Alice';
const shortAge = 25;

// Before ES6
const person1 = {
    name: shortName,
    age: shortAge
};

// Using Enhanced Object Literals
const person4 = {
    shortName,
    shortAge
};

console.log(person1); // Output: { name: 'Alice', age: 25 }
console.log(person4); // Output: { shortName: 'Alice', shortAge: 25 }


// 2. Shorthand Method Names
// Before ES6
const person5 = {
    name: 'Alice',
    greet: function() {
        console.log('Hello!');
    }
};

// Using Enhanced Object Literals
const person6 = {
    name: 'Alice',
    greet() {
        console.log('Hello!');
    }
};

person5.greet(); // Output: Hello!
person6.greet(); // Output: Hello!

// 3. Computed Property Names
const propName = 'age';

// Before ES6
const person7 = {
    name: 'Alice'
};
person7[propName] = 25;

// Using Enhanced Object Literals
const person8 = {
    name: 'Alice',
    [propName]: 25
};

console.log(person7); // Output: { name: 'Alice', age: 25 }
console.log(person8); // Output: { name: 'Alice', age: 25 }

// 4. Concise Properties
const firstName = 'Alice';
const lastName = 'Wonderland';
const conciseAge = 25;

// Before ES6
const person9 = {
    firstName: firstName,
    lastName: lastName,
    age: conciseAge,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Using Enhanced Object Literals
const person10 = {
    firstName,
    lastName,
    age: conciseAge,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person9.fullName()); // Output: Alice Wonderland
console.log(person10.fullName()); // Output: Alice Wonderland



/* -------------------------------- Others -------------------------------- */
// 8.Promises
// 10.Modules