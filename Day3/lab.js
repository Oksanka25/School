// If statements
let number = 0;

if (number > 0) {
    console.log(`${number} is a positive number`);
} else if (number === 0) {
    console.log(` The number ${number} is neither positive nor negative.`);
} else {
    console.log(`${number} is a negative number`);
}



let age = 6;
if (age >= 18) {
    console.log('Access to the website is granted. Explore!');
} else {
    console.log(`Access to the website denied. The minimum age is 18, wait ${18 - age} years`);
}


// Nested if statements

let num = 5;
if (num > 100) {
    console.log(` The number ${num} is positive and greater than 100.`)
} else if (num > 0 && num < 100) {
    console.log(` The number ${num} is positive and less than 100.`)
} else if (num === 100) {
    console.log(` The number ${num} is 100.`)
}
else {
    console.log(`${num} is a negative number`)
}

// For Loops

// 0-9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for loop that counts down from 10 to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// for loop for the given output: 1, 3, 5, 7, 9, 2, 4, 6, 8, 10

for (let i = 1; i < 10; i += 2) {
    console.log(i);
    if (i > 8) {
        for (let i = 2; i < 11; i += 2) {
            console.log(i);
        }
    }
}

// a loop that outputs multiples of 3 starting at 6 ending at 60.
// #1
for (let i = 6; i <= 60; i += 3) {
    console.log(i);
}

// #2
for (let i = 6; i <= 60; i++) {
    if (i % 3 === 0)
        console.log(i);
}



// Write a for loop for the given output:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let arr = [];
for (let i = 1; i <= 7; i++) {
    let i = "#"
    arr.push(i);
    console.log(arr.join(" ").toString());
}

// Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0 && i > 0)
        console.log(i);
}


// EX 
let grade = 50;
if (grade >= 80) {
    console.log(" You did a great job")
} else if (grade < 80 && grade >= 70) {
    console.log("Keep trying")
} else if (grade < 70 && grade >= 60) {
    console.log("ehhhh")
} else if (grade < 60 && grade >= 55) {
    console.log("Not to good")
} else {
    console.log("Bad Grade But You'll Get Em Next Time")
}


// Write a for loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100

for (let i = 10; i <= 100; i += 20) {
    console.log(i);
    if (i >= 90) {
        for (let i = 20; i <= 100; i += 20)
            console.log(i);
    }
}

// Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz". If can be multiplied by 3&5 console log 'FizzBuzz'


for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0)
        console.log("FizzBuzz")
    else if (i % 3 === 0)
        console.log("Fizz")
    else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}

