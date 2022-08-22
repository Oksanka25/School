
// A. Q + A
// How do we assign a value to a variable?
// With the assignment operator
// How do we change the value of a variable?
// We can assign the variable to a new value within a function or any time after the original variable value assignment.
// How do we assign an existing variable to a new variable?
// By Using the assignment operator myVariable = 1; let myNum; myNum = myVariable;
// Remind me, what are declare, assign, and define?
// declare is creating a variable (let myName)
// assign is to store a value to a variable (myName = Oksana)
// To define a variable we have to declare a variable and assign it (let myName = Oksana)
// What is pseudocoding and why should you do it?
// Pseudocode is an informal way of programming description that does not require any strict programming language syntax or underlying technology considerations. It is used for creating an outline or a rough draft of a program. Pseudocode summarizes a program's flow, but excludes underlying details.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//It's better to go through most of details pseudocoding before start real coding. it usually saves time 

// B. Strings

let firstVariable = 'Hello World';
firstVariable = 6;
let secondVariable = "Yaay";
firstVariable = secondVariable;

console.log(firstVariable);
/// Yaay

let myName = 'Oksana';
console.log(`Hello, my name is ${myName}`);



// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm

let animal = 'cow';
function isCow() {
    if (animal === 'cow') {
        console.log("Moooo")
    } else {
        console.log("Hey! You're not a cow")
    }
}
isCow();

// E. Driver's Ed

let age;
function canDrive(age) {
    if (age >= 16) {
        console.log("Here are the keys")
    } else {
        console.log("Sorry, you're too young.")
    }
}
canDrive(15)