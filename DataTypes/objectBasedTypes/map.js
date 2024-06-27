/*
A Map is a collection of key-value pairs where both keys and values can be any data type.
*/

let map = new Map();
map.set('a', 1);
map.set('b', 2);

console.log(map.get('a')); // 1
console.log(map.has('b')); // true
console.log(map.size); // 2

map.delete('a');
console.log(map.has('a')); // false

map.forEach((value, key) => console.log(`${key}: ${value}`)); // b: 2


/*
A WeakMap is similar to a Map, but it only accepts objects as keys and holds them weakly. 
If there are no other references to an object used as a key in a WeakMap, the object can be garbage collected.
*/

/*
Differences from Map:
No size property: You can't get the number of elements in a WeakMap.
No iteration methods: You can't iterate over the elements of a WeakMap.
Only object keys: A WeakMap can only have objects as keys, not primitive values.
*/

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');

console.log(weakMap.get(obj)); // 'value'
console.log(weakMap.has(obj)); // true

weakMap.delete(obj);
console.log(weakMap.has(obj)); // false
