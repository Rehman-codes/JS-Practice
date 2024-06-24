/* Primitive data types are basic types provided by JavaScript, 
such as Number, String, Boolean, Null, Undefined, Symbol, and BigInt, 
which represent single values and are immutable.  */ 

/* ----------------------------------------------1.Number----------------------------------------------
They represent [integers] and [decimals].
They can have have special values such as "Infinity" and "NaN". */

// let num1 = 5;
// console.log(num1);

// let num2 = Infinity;
// console.log(num2);

// let num3 = NaN;
// console.log(num3);



/* ----------------------------------------------2.String----------------------------------------------
They represent a sequence of characters.
They can be used in 3 ways. */


// let str1 = "Double quotes string";
// console.log(str1);

// let str2 = 'Single quotes string';
// console.log(str2);

// let str3 = `String with backticks`;
// console.log(str3);



/* ----------------------------------------------3.Boolean----------------------------------------------
They can have 2 values. Either "true" or "false" */


// let val1 = true;
// console.log(val1);

// let val2 = false;
// console.log(val2);



/* ----------------------------------------------4.Null----------------------------------------------
It represents the absence of a value for a variable. */


// let val1 = null;
// console.log(val1);



/* ----------------------------------------------5.Undefined----------------------------------------------
It represents a variable that has been declared but not initialized. */


// let val1 = undefined;
// console.log(val1);



/* ----------------------------------------------6.BigInt----------------------------------------------
It represents integers with arbitrary precision. (numbers whose accuracy is limited only by available memory)
It can store very large numbers. */


// let bigNumber = BigInt(900719925474099185684);
// console.log(bigNumber);


/* ----------------------------------------------7.Symbol----------------------------------------------
It is a "unique" and "immutable" value (Unchanging).
Syntax: let sym = Symbol();
The argument to Symbol can be any data type.
The immutability of a symbol means that the symbol itself cannot be changed once created, 
not that the variable holding the symbol cannot be reassigned.
*/


// let sym1 = Symbol('Admin');
// console.log(sym1);

// let sym2 = Symbol('Admin');
// console.log(sym2);

// console.log(sym1 === sym2);

// sym1 = Symbol('newAdmin');
// console.log(sym1);
