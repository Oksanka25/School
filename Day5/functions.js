
// #1
const computeArea = (width, height) => {
    let area = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`;
}
console.log(computeArea(5, 6))

// #2

const planetHasWater = (planet) => {
    let planets = ['Earth', 'Mars']
    for (let i = 0; i < planets.length; i++) {
        if (planet.toLowerCase() === planets[i].toLowerCase()) {
            return true
        }
    }
    return false
}

console.log(planetHasWater('Earth')) //=> true
console.log(planetHasWater('Venus')) //=> false
console.log(planetHasWater('mArS')) //=> true