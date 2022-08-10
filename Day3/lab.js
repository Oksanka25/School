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
