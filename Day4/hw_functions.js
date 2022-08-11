// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

// console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreeNumbers = (a, b, c) => {
    if (a >= b && a >= c) {
        return `${a} is the largest`
    } else if (b >= a && b >= c) {
        return `${b} is the largest`
    } else {
        return `${c} is the largest`
    }
}
console.log(maxOfThreeNumbers(3, 5, 20));
console.log(maxOfThreeNumbers(9, 5, 2));
console.log(maxOfThreeNumbers(7, 13, 0));

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].