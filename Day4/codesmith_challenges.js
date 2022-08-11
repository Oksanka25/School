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
    // sum += addThis
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

// #4
// Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"

function wereAwesome(you, yourBuddy) {
    return `${yourBuddy} and ${you} are awesome!`
}

console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"

// #5
// Create a function addWaldo that accepts an object with keys being first names and values being last names. For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.

const addWaldo = (object1) => {
    object1.Waldo = "unknown"
}

const siliconValley = { 'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle' }
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

// #6
// Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd.

function iLoveEvenNumbers(num) {
    if (num % 2 === 0) {
        return 'Oh Yeah Evens!'
    } else {
        return 'I am too normal for odd numbers'
    }
}

console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'

