//Arrow function
const add = (x, y) => {
    console.log(x + y)
}
add(5, 6)

// Regular function
function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 5)

// Ex1
// Write A function that : 
// --Takes in a parameter and adds the text "Bird is the Word" to the end
// ---Takes 3 parameters and adds them
// ---Takes 4 parameters and subtracts them
// ---Takes 2 parameters and divides them
// ---Takes 3 parameters and multiplies them

let myFunction = (a, b, c, d) => {
    console.log(`${a} Bird is the Word `);
    console.log(a + b + c);
    console.log(a - b - c - d);
    console.log(d / c);
    console.log(b * c * d);
}
myFunction(6, 8, 13, 5)