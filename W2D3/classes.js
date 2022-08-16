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