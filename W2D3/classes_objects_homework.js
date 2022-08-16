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

const catOne = new Cat('Cactus', 'Grey', 'British Straight', '2', 'Chasing a dog', 'Tuna')
catOne.hadDinner("Ocean Fish")
catOne.sayHi()
catOne.meow()
console.log(catOne)