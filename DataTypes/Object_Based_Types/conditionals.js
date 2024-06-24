/* ----------------------------------------------4. Conditionals---------------------------------------------- */
/* Conditionals are used to perform different actions based on different conditions.
   Common conditional statements are if, else if, else, and switch. */

/* -------if Statement------- */

let num = 10;

if (num > 5) {
    console.log('Number is greater than 5');
} // Output: Number is greater than 5


/* -------else if Statement------- */

if (num > 15) {
    console.log('Number is greater than 15');
} else if (num > 5) {
    console.log('Number is greater than 5');
} else {
    console.log('Number is 5 or less');
} // Output: Number is greater than 5


/* -------else Statement------- */

let isMember = false;

if (isMember) {
    console.log('Welcome member!');
} else {
    console.log('Please sign up to become a member');
} // Output: Please sign up to become a member


/* -------Nested if Statement------- */

let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else {
    if (score >= 80) {
        console.log('Grade: B');
    } else {
        console.log('Grade: C or below');
    }
} // Output: Grade: B


/* -------switch Statement------- */
// The switch statement is used to perform different actions based on different conditions.

let day = 2;
let dayName;

switch (day) {
    case 0:
        dayName = 'Sunday';
        break;
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Output: Tuesday


/* -------Conditional (Ternary) Operator------- */
// This operator assigns a value to a variable based on a condition.

let age = 20;
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult); // Output: Yes
