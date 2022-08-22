// I. Variables & Datatypes 
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

function canDrive(age) {
    if (age >= 16) {
        console.log("Here are the keys")
    } else {
        console.log("Sorry, you're too young.")
    }
}
canDrive(15)

// II. Loops
// A. The basics
for (let i = 0; i <= 10; i++) {
    // console.log(i)
}
for (let i = 10; i <= 400; i++) {
    // console.log(i)
}
let num = 12;
while (num < 4000) {
    console.log(num)
    num = num + 3;
}

// B. Get even

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is an even number`)
    } else {
        console.log("Odd")
    }
}

// C. Give me Five

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(` I found a ${i}. High five and Three is a crowd! !`)
    } else if (i % 5 === 0) {
        console.log(` I found a ${i}. High five!`)
    } else if (i % 3 === 0) {
        console.log(` I found a ${i}. Three is a crowd!`)
    }
}

// D. Savings account

let bankAccount = 0;
for (let i = 1; i <= 10; i++) {
    bankAccount += i
}
console.log(bankAccount) //55
let savingsAccount = 0;
for (let i = 1; i <= 100; i++) {
    savingsAccount += i * 2
}
console.log(savingsAccount) //10,100

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
// - An element
// Do Arrays guarantee those things will be in order?
// - No, we can use different sort methods to put it in order we need. 
// What real-life thing could you model with an array?
// - Any kind of list (list of fruits, list of products, etc) that gathers similar items/elements at one place.

// B. Easy Does It

let quotes = ['Quote One', 'Quote Two', 'Quote Three'];

// C. Accessing elements

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0])
randomThings[2] = 'World'
console.log(randomThings)