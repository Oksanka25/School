// #1
// You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.
const increaseByTwo = [1, 2, 3, 4, 5];
for (let i = 0; i < increaseByTwo.length; i++) {
    increaseByTwo[i] += 2
    // increaseByTwo[i] = increaseByTwo[i] + 2
}

console.log(increaseByTwo);
// -> should print [3, 4, 5, 6, 7];

// #2
// Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
let addThis = 0;
let sum = 0;
while (addThis < 10) {
    sum = addThis + sum
    addThis++
}
console.log(sum);

// #3
// Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.
const num = 40;
let final;
if (num > 100) {
    final = null
} else {
    final = num * 2
}
console.log(final)