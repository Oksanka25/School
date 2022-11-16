/************ Question 1: FIZZBUZZ *************/

// loop that iterates integers from 1 to 100
for (var i = 1; i <= 100; i++) {
  // to print for multiple of 3 and 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  }

  // to print for multiple of 3 only
  else if (i % 3 == 0) {
    console.log(`${i} Fizz`);
  }

  // to print for multiple of 5 only
  else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  }

  // to print remaining numbers
  else {
    console.log(i);
  }
}

/*********** Question 2: THE EVEN/ODD REPORTER ************/
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

/*********** Question 3: MULTIPLICATION TABLE ************/
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// Multiplication tables
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
  var result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}

for (var multiplier = 0; multiplier <= 10; multiplier++) {
  for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
}

/*********** Question 4: THE GRADE ASSIGNER ************/
// Check the results of your assignGrade function by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.

function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}

for (var i = 80; i <= 100; i++) {
  console.log("For " + i + ", you got a " + assignGrade(i));
}

/*********** Question 5 ************/
/*

Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * *  

*/

var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
}

/*********** Question 6 ************/
// Sum the multiples of 3 and 5 under 1000

var sum = 0;
for (var x = 0; x < 1000; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
  }
}
console.log(sum);
