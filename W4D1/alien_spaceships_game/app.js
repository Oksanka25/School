let startGame = document.querySelector('.start');
let attack = document.querySelector('.attack');
let checkShip = document.querySelector('.check-ships');
let useMissile = document.querySelector('.use-missile');
let useShield = document.querySelector('.use-shield');
let allyStats = document.querySelector('.ally-stats');
let enemyStats = document.querySelector('enemy-stats');
let gameBoard = document.querySelector('.gameboard');


// Function for random integer between 'min' and 'max'
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

class Ship {
    constructor(name) {
        this.name = name;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
    attack(enemy) {
        // Use of accuracy to determine a hit
        if (Math.random() < this.accuracy) {
            gameBoard.innerHTML = `${this.name} attacked ${enemy.name} with ${this.firepower} firepower!`
            console.log(`${this.name} attacked ${enemy.name} with ${this.firepower} firepower!`);
            // If attacking Mega-Ship, decrease the Enemy ship's hull equal to this ship's firepower
            if (enemy.name === 'Alien Mega-Ship') {
                enemy.isAttackedBy(this);
            } else {
                // If attacking normally
                enemy.hull -= this.firepower;
            }
        } else {
            gameBoard.innerHTML = `${this.name}'s shots missed ${enemy.name}!`
            // console.log(`${this.name}'s shots missed ${enemy.name}!`);
        }
    }
    target(group, enemyName) {
        // Find the specific Enemy alien ship in the array of ships
        let index = group.findIndex(ship => ship.name === enemyName);

        // If Target Index = -1, means Ship with ship.name is not in the group array anymore
        if (index === -1) {
            gameBoard.innerHTML = `${enemyName} is not a valid selection.`
            // console.log(`${enemyName} is not a valid selection.`);
            return false;
        } else {
            // Attack the targeted ship
            this.attack(group[index]);
            // If Enemy ship is destroyed, remove from array of ships
            if (group[index].hull <= 0) {
                gameBoard.innerHTML = `${group[index].name} was destroyed!`
                // console.log(`${group[index].name} was destroyed!`);
                group.splice(index, 1);
            }
            return true;
        }
    }
    shield() {
        // Random value of shield will be added to hull
        let shieldVal = parseInt(randomBetween(1, 10));
        gameBoard.innerHTML = `${this.name} shielded itself by ${shieldVal}.`;
        console.log(`${this.name} shielded itself by ${shieldVal}.`);
        this.hull += shieldVal;
    }
}