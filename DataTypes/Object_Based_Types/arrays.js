/* ----------------------------------------------1.Arrays---------------------------------------------- */
/* In JS arrays are objects.
   The indices are keys and these keys can have values of any data type. */


/* -------Declaration------- */

// let arr1 = [];
// console.log(arr1);
// console.log(typeof arr1);

// let arr2 = new Array();
// console.log(arr2);
// console.log(typeof arr2);


/* -------Initialization------- */

// let arr1 = [1,true,null,"hi"];
// console.log(arr1);

// let arr2 = new Array(undefined,"Welcome to JS Land");
// console.log(arr2);



/* -------Mutator Methods------- */  //(modify the array)

// 1.Push: Adds 1 or more elements to the end of the array.

let food = ['🍔', '🍩', '🍦', '🍟', '🥗'];
console.log('Original   ',food);

food.push('🍎');
console.log('push       ',food);

// 2.Pop: Removes last element from the end of the array.

food.pop();
console.log('pop        ',food);

// 3.Shift: Removes first element from the start of the array.

food.shift();
console.log('shift      ',food);

// 4.Un Shift: Adds 1 or more elements to the start of the array.

food.unshift('🍎','🍌');
console.log('unshift    ',food);

// 5.Splice: Adds, Removes or Replaces elements in an array.
// array.splice(startIndex, deleteCount, item1, item2, ..., itemN)

// Removing
food.splice(0,2);
console.log('splice     ',food);

// Removing All
food.splice(0);
console.log('splice     ',food);

// Adding
food.splice(0,0,'🍎', '🍌','🍩', '🍦', '🍟', '🥗' );
console.log('splice     ',food);

// Replacing
food.splice(0,2,'🍊', '🍊');
console.log('splice     ',food);


// 5.Reverse: Reverses the order of array elements.
food.reverse();
console.log('reverse    ',food);

// 6.Fill: Fills the whole array with a given value.
food.fill('🍎');
console.log('fill       ',food);

// 7.Sort: Sorts the array in ascending order.
let numbers1 = [2,5,1,0];
console.log('sort       ',numbers1);
numbers1.sort();
console.log('sort       ',numbers1);


/* -------Accessor Methods------- */  //(do not modify the array, return some representation of the array)

// 1.Concat: Merges 2 or more arrays.
let arr1 = ['🍎'];
console.log('Array1     ',arr1);
let arr2 = ['🍌','🍩', '🍦', '🍟'];
console.log('Array2     ',arr2);

food = arr1.concat(arr2);

console.log('Concated   ',food);

// 2.slice: Extracts a section of an array.
// end index not included.
// slice(start, end)
console.log('slice      ',food.slice(2,3));


// 3.Join: Extracts a section of an array.
// Combines all elements of an array into a single string, separated by the specified separator.
console.log('join       ', food.join('-'));


// 4.Index of: Gives the 1st index of a given element.
console.log('Index of 🍩',food.indexOf('🍩'));


// 5.Last Index of: Gives the last index of a given element.
console.log('end index🍟',food.lastIndexOf('🍟'));


// 6.Includes: Determines if an array has an element.
console.log('includes 🍊',food.includes('🍊'));


/* -------Iteration Methods------- */  //(operate on every array element)

let numbers = [1, 2, 3, 4, 5];
console.log('Original   ', numbers);

// 1. forEach: Executes a provided function once for each array element.
numbers.forEach((num, index) => {
  console.log(`forEach    Element at index ${index} is ${num}`);
});

// 2. map: Creates a new array with the results of calling a provided function on every element.
let doubled = numbers.map(num => num * 2);
console.log('map        ', doubled);

// 3. filter: Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('filter     ', evenNumbers);

// 4. reduce: Executes a reducer function on each element, resulting in a single output value.
// Accumulator: It accumulates the callback's return values.
// Current Value: The current element being processed in the array.
// Current Index (optional): The index of the current element being processed in the array.
// Source Array (optional): The array on which reduce was called.
//array.reduce(callback(accumulator, currentValue, currentIndex, array){}, initialValue)

let sum = numbers.reduce((accumulator, currentValue, index,Source) => {
    
    console.log('array ',Source);
    console.log('index ',index);
    console.log('value ',currentValue);
    console.log('accumulative ',accumulator);


   return accumulator + currentValue;

},0);

console.log('reduce     ', sum);

// 5. reduceRight: Executes a reducer function on each element from right to left, resulting in a single output value.
let difference = numbers.reduceRight((accumulator, currentValue) => accumulator - currentValue, 0);
console.log('reduceRight', difference);

// 6. some: Tests whether at least one element in the array passes the test implemented by the provided function.
let hasEven = numbers.some(num => num % 2 === 0);
console.log('some       ', hasEven);

// 7. every: Tests whether all elements in the array pass the test implemented by the provided function.
let allPositive = numbers.every(num => num > 0);
console.log('every      ', allPositive);

// 8. find: Returns the value of the first element that satisfies the provided testing function.
let firstEven = numbers.find(num => num % 2 === 0);
console.log('find       ', firstEven);

// 9. findIndex: Returns the index of the first element that satisfies the provided testing function.
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log('findIndex  ', firstEvenIndex);

// 10. keys: Returns a new Array Iterator object that contains the keys for each index in the array.
let keys = numbers.keys();
console.log('keys       ', ...keys);

// 11. values: Returns a new Array Iterator object that contains the values for each index in the array.
let values = numbers.values();
console.log('values     ', ...values);

// 12. entries: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let entries = numbers.entries();
for (let entry of entries) {
  console.log('entries    ', entry);
}

// 13. flat: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, [3, [4, 5]]]];
let flatArray = nestedArray.flat(2);
console.log('flat       ', flatArray);

// 14. flatMap: First maps each element using a mapping function, then flattens the result into a new array.
let flatMapped = numbers.flatMap(num => [num, num * 2]);
console.log('flatMap    ', flatMapped);