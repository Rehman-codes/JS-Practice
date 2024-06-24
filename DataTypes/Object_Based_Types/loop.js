/* ----------------------------------------------5. Loops---------------------------------------------- */

/* -------for Loop------- */

for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}


/* -------while Loop------- */

let count = 0;
while (count < 5) {
    console.log(count); // Output: 0, 1, 2, 3, 4
    count++;
}


/* -------do...while Loop------- */

let num = 0;
do {
    console.log(num); // Output: 0, 1, 2, 3, 4
    num++;
} while (num < 5);


/* -------for...of Loop------- */
// Used to iterate over iterable objects (like arrays or strings)

let fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, cherry
}


/* -------for...in Loop------- */
// Used to iterate over the enumerable properties (iterable) of an object.

let person = {
    name: 'Rehman',
    age: 21,
    city: 'Pakistan'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
