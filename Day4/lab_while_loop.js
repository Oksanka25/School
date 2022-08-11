// while loop
//  2-101
let score = 1;
while (score <= 100) {
    console.log("Get your Points Up...")
    score++;
    console.log("New Score:", score)
}

// let i = 1;
// while (i < 12) {
//     console.log("Hello")
//     i++;
// }

// Ex1
// Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop

let i = 3;
while (i < 34) {
    // console.log(i);
    i += 3;
}

// Ex2
// Keep printing integers in multiples of 5 as long as integers are less than 100

let x = 5;
while (x <= 100) {
    // console.log(x);
    x += 5;
}


// Ex3
// Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.

let j = 2;
while (j < 20) {
    if (j % 2 === 0) {
        console.log(j * 3)
    }
    j++;
}

// Ex4
// Using a while loop, print out all prime numbers between 0 - 20


// Ex5
// Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.
// #1
let paidD = 10;
let costD = 4;
let change = paidD - costD;
let quarters1 = change / .25;
console.log(quarters1)

// #2
let paidDollars = 10;
let costDollars = 4;
let quarters = 0;
while (paidDollars > costDollars) {
    paidDollars--;
    quarters += 4;
}
console.log(quarters)
