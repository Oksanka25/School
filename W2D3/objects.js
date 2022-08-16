

const apple = {
    color: 'red',
    type: 'fruit',
    beEaten: function () {
        console.log('Chomp chomp that was very good')
    },
    isRipe: true
}
if (apple.isRipe === true) {
    console.log('Very good')
} else {
    console.log('Wait')
}
console.log(apple.beEaten())


const dictionary = {
    title: 'Webster',
    a: ['apple', 'ardvark'],
    b: ['body', 'bear'],
    isFull: false,
}

//add
dictionary.b[2] = "Blaze"

console.log(dictionary)
console.log(dictionary.b[1])
// => bear


const cat = {
    name: 'Shadow',
    age: 3,
    favThings: ['eat', 'sleep', 'eat again'],
    speaksFrench: true,
    solvesRubiksCube: false
}
console.log(cat)


const house = {
    stateLocation: 'MA',
    roomsNum: 6,
    hasAttic: false,
    kitchen: {
        windows: 2,
        table: true,
        appliances: ['coffee maker', 'toaster', 'oven', 'fridge', 'freezer'],
    },
    stores: 2,
    basementLevel: true,
    plants: ['Pothos', 'Money Tree', 'Bird of Paradise', 'Majesty Palm', 'Jasmine', 'Ficus'],
    isTV: {
        livingRoom: true,
        kitchen: false,
        bedroom: true
    },
    getsCleaned: function () {
        console.log('cleaned')
    }

}
console.log(house)
console.log(house.getsRepaired())
