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