// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreeNumbers = (a, b, c) => {
    if (a >= b && a >= c) {
        return `${a} is the largest number`;
    } else if (b >= a && b >= c) {
        return `${b} is the largest number`;
    } else {
        return `${c} is the largest number`;
    }
}
console.log(maxOfThreeNumbers(3, 5, 20));
console.log(maxOfThreeNumbers(9, 5, 2));
console.log(maxOfThreeNumbers(7, 13, 0));

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    let vowels = ['a', 'e', 'y', 'i', 'u', 'o'];
    for (let i = 0; i < vowels.length; i++) {
        if (char.toLowerCase() === vowels[i]) {
            return `True. ${char} is a vowel`;
        }
    }
    return `False. ${char} is not a vowel`;
}
console.log(isCharAVowel('a'));
console.log(isCharAVowel('b'));
console.log(isCharAVowel('Y'));


// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = (arr) => {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    return sum;
}
console.log(sumArray([2, 4, 5]));


// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}
console.log(multiplyArray([2, 4, 5]));

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

let args = [];
const numArgs = (args) => {
    return args.length;
}
console.log(numArgs('abc'));

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString('rockstar'));

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = (arr) => {
    let theLongestString = " ";
    for (let i = 0; i < arr.length; i++) {
        if (theLongestString.length < arr[i].length) {
            theLongestString = arr[i];
        }
    }
    return theLongestString;
}
console.log(longestStringInArray(["Laptop", "Computer", "Screenshot", "Android", "Butterfly", "Water", "big", "star"]));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));