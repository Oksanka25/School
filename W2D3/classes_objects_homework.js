class Cat {
    constructor(name, color, breed, age, habits, favFood) {
        this.eyes = 2
        this.name = name
        this.color = color
        this.breed = breed
        this.age = age
        this.habits = habits
        this.favFood = favFood
    }
    hadDinner(dinner) {
        this.meal = dinner
    }
    sayHi() {
        console.log(`Hi from ${this.name}!`)
    }
    meow() {
        console.log('Meow-meow')
    }
}

const catOne = new Cat('Cactus', 'Grey', 'British Straight', '2 years', 'Chasing a dog', 'Tuna')
catOne.hadDinner("Ocean Fish")
catOne.sayHi()
catOne.meow()
console.log(catOne)

const catTwo = new Cat('Joe', 'White&Silver', 'Scotish Folded', '1 year', 'Catching sun beams', 'Salmon')
catTwo.hadDinner("Smoked Salmon")
catTwo.sayHi()
catTwo.meow()
console.log(catTwo)

// ---------- //

class Pirate {
    constructor(name, rank, experienceLevel, achievements) {
        this.name = name
        this.rank = rank
        this.experienceLevel = experienceLevel
        this.achievements = achievements

    }
    capturedANewShip() {
        console.log("Yaaay! A new ship to the collection")
    }
    underAttack() {
        console.log('Get ready! We are under the Attack')
    }
    wonABattle() {
        console.log('Hoooray! We won a battle')
    }

}

const jollyRogerShip = [
    new Pirate('Henry Morgan', 5, 6, "many"),
    new Pirate('Thomas Tew', 4, 5, 'lots'),
    new Pirate('William Kidd', 8, 15, 'plenty')
];
const blackPearlShip = [
    new Pirate('Calico Jack', 6, 7, "2 ships captured"),
    new Pirate('Francis Drake', 8, 10, "15lb of gold captured"),
    new Pirate('Howell Davis', 4, 6, "Fast running and good shoting")

];

// jollyRogerShip.capturedANewShip()

for (let i = 0; i < jollyRogerShip.length; i++) {
    console.log(jollyRogerShip)
}
for (let i = 0; i < blackPearlShip.length; i++) {
    console.log(blackPearlShip)
}