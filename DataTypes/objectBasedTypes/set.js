/*
A Set is a collection of unique values. This means that a value can only occur once in a Set. 
*/

let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored

console.log(set.has(1)); // true
console.log(set.size); // 2

set.delete(1);
console.log(set.has(1)); // false

set.forEach(value => console.log(value)); // 2

/*
A WeakSet is similar to a Set, but it only stores objects and holds them weakly. 
This means that if there are no other references to an object stored in a WeakSet, the object can be garbage collected.
*/

/*
Differences from Set:
No size property: You can't get the number of elements in a WeakSet.
No iteration methods: You can't iterate over the elements of a WeakSet.
Only objects: A WeakSet can only contain objects, not primitive values.
*/

let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);

console.log(weakSet.has(obj)); // true

weakSet.delete(obj);
console.log(weakSet.has(obj)); // false
