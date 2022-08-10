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

for (let i = 6; i <= 60; i += 3) {
    console.log(i);
}

