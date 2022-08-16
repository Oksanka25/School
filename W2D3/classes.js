// a code example of encapsulating data (attributes/properties) & behavior (methods):

const cohort = {
    id: 'SEIR Flex Madeline',
    students: ['Diana', 'Julio', 'Cory'],
    instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
    addStudent: function (name) {
        name = name[0].toUpperCase() + name.substr(1).toLowerCase();
        this.students.push(name);
    },
    pickRandomStudent: function () {
        const rndIdx = Math.floor(Math.random() * this.students.length);
        return this.students[rndIdx];
    }
};

// The constructor Method
class Vehicle {
    constructor(vin, make) {
        this.vin = vin;
        this.make = make;
        // return is not needed
        // because the new object is returned by default
    }
}

const plane = new Vehicle('X123Y', 'Boeing');
let prius = new Vehicle('453572', 'Toyota')
console.log(plane, prius)


class Car {
    constructor(make, model) {
        this.model = model
        this.make = make
    }
}

class Toyota extends Car {
    constructor(make, model, driveTrain) {
        super(make, model)
        this.fourByFour = driveTrain
    }
    drive() {
        console.log('vroom vroom')
    }
}



class Human {
    constructor(eyeColor, hairColor, favColor) {
        this.legs = 2
        this.arms = 2
        this.eyeColor = eyeColor
        this.hairColor = hairColor
        this.favColor = favColor
    }

    walk() {
        console.log("im walking")
    }

    gotANewJob(newJob) {
        this.occupation = newJob
    }

    sharkAttack() {
        this.legs--
    }

}

const John = new Human("brown", "brown", "coolest eyebrows")
// John.walk()
// John.gotANewJob("CEO")
John.sharkAttack()
console.log(John)

const Bob = new Human("brown", "brown", "yeah")

Bob.walk()
Bob.gotANewJob("Freelance Developer")
console.log(Bob)