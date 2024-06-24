/* ----------------------------------------------2. Objects---------------------------------------------- */
/* Objects are collections of properties, where each property is defined by a key-value pair.
   Properties can hold values of any data type, including other objects and functions. */

/* -------Object Creation------- */

// Object literal
let person = {
    name: 'Rehman',
    age: 21,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name);
person.greet();

// Adding a new property
person.country = 'Pakistan';
console.log(person.country);

// Deleting a property
delete person.age;
console.log(person.age);


/* -------Accessing Properties------- */

// Dot notation
console.log(person.name); 

// Bracket notation
console.log(person['name']); 


/* -------Nested Objects------- */

let company = {
    name: 'TechCorp',
    address: {
        city: 'Islamaabad',
        zipCode: '46000'
    }
};

console.log(company.address.city); 


/* -------Object Methods------- */
// Methods are functions stored as object properties.

let car = {
    brand: 'Toyota',
    start: function() {
        console.log(`${this.brand} car started`);
    }
};

car.start(); 


/* -------'this' Keyword------- */
// Refers to the object from which the method was called.

let user = {
    name: 'Rehman',
    logName: function() {
        console.log(this.name);
    }
};

user.logName();

/* -------Constructor Functions------- */
// Used to create multiple objects with similar properties and methods.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person('Bilal', 25);
let jane = new Person('Ali', 28);

console.log(john); 
console.log(jane.age); 
