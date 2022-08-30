let startGame = document.querySelector('.start');
let attack = document.querySelector('.attack');
let checkShip = document.querySelector('.check-ships');
let useMissile = document.querySelector('.use-missile');
let useShield = document.querySelector('.use-shield');
let allyStats = document.querySelector('.ally-stats');
let enemyStats = document.querySelector('enemy-stats');
let gameBoard = document.querySelector('.gameboard');





function startGame() {
    let welcome = prompt('Welcome to Space Battle, Earth is under attack and in need of assistance! Will you Aid in the survival of Earth? Y/N');
    if (welcome.toLowerCase() == 'y') {
        return true
    } else {
        return false
    }
}


class Spaceship {
    constructor() {
        this.name = 'USS HelloWorld'
        this.hull = 20
        this.firepower = 5
        this.accuracy = 0.7
    }
};

console.log(Spaceship)

const alienShip = [
    { name: 'War Fighter 1', hull: 3, firepower: 2, accuracy: .6 },
    { name: 'War Fighter 2', hull: 4, firepower: 2, accuracy: .6 },
    { name: 'Alien Lieutenant', hull: 5, firepower: 3, accuracy: .7 },
    { name: 'War Fighter 4', hull: 5, firepower: 3, accuracy: .7 },
    { name: 'War Fighter 5', hull: 6, firepower: 3, accuracy: .7 },
    { name: 'Alien General', hull: 6, firepower: 4, accuracy: .8 }
];
console.log(alienShip)

// startGame()

function attackShip() {
    if (startGame() === true) {
        alert('Awesome! Lets get started!')
        for (let i = 0; i < alienShip.length; i++) {
            // console.log(alienShip[i].hull)
            let progress = prompt('Attack!!! You have them scared now! Attack / Retreat');
            if (progress.toLowerCase() === 'a') {
                alert('They showed up to the WRONG PLANET')
                battle(alienShip[i])
            } else {
                alert('Hopefully the next commander will finish the job')
                return
            }
        } if (Spaceship.hull > 0) {
            console.log('You have saved Earth!')
            return Spaceship.hull
        } else {
            console.log('The Commander has fallen!')
            return
        }
    } else {
        alert('Well Earth needed someone more reliable anyways')

        return
    }
}


function battle(alienShip) {
    while (alienShip.hull > 0 && Spaceship.hull > 0) {
        // console.log('hello')
        // console.log(Spaceship.accuracy)       
        if (Spaceship.accuracy >= Math.random()) {
            // console.log('hello')
            alienShip.hull -= Spaceship.firepower // attackShip(alienShipOne, myShip)    
            console.log(alienShip)
            console.log('DIRECT HIT!!!')
            if (alienShip.hull <= 0) {
                console.log('The ship went kabloo-ey')
            } else if (alienShip.accuracy >= Math.random()) {
                Spaceship.hull -= alienShip.firepower
                console.log(`Your hull integrity is at ${Spaceship.hull}`)
            } else if (Spaceship.hull <= 0) {
                console.log('The commander has been lost!')
            } else {
                console.log('They are still alive!')
            }
        } else {
            console.log('Miss!!!')
        }
    }
}
setTimeout(attackShip, 500)
// attackShip()