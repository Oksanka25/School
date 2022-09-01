let startGame = document.querySelector('.start');
let attack = document.querySelector('.attack');
let checkShip = document.querySelector('.check-ships');
let useMissile = document.querySelector('.use-missile');
let useShield = document.querySelector('.use-shield');
let allyStats = document.querySelector('.ally-stats');
let enemyStats = document.querySelector('.enemy-stats');
let gameBoard = document.querySelector('.gameboard');


// Function for random integer between 'min' and 'max'
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to separate sections
function separator() {
    console.log("%c-------------------", "font-weight:bold;");
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
            console.log(`${this.name}'s shots missed ${enemy.name}!`);
        }
    }
    target(group, enemyName) {
        // Find the specific Enemy alien ship in the array of ships
        let index = group.findIndex(ship => ship.name === enemyName);

        // If Target Index = -1, means Ship with ship.name is not in the group array anymore
        if (index === -1) {
            gameBoard.innerHTML = `${enemyName} is not a valid selection.`
            console.log(`${enemyName} is not a valid selection.`);
            return false;
        } else {
            // Attack the targeted ship
            this.attack(group[index]);
            // If Enemy ship is destroyed, remove from array of ships
            if (group[index].hull <= 0) {
                gameBoard.innerHTML = `${group[index].name} was destroyed!`
                console.log(`${group[index].name} was destroyed!`);
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

// Create Class Enemy
class Enemy {
    constructor(num) {
        this.name = `Alien ${num}`;
        this.hull = parseInt(randomBetween(3, 6).toFixed(0));          //between 3 & 6
        this.firepower = parseInt(randomBetween(2, 4).toFixed(0));     //between 2 & 4
        this.accuracy = parseFloat(randomBetween(.6, .8).toFixed(1));  //between .6 & .8
    }
    attack(ship) {
        // Use of accuracy to determine a hit
        if (Math.random() < this.accuracy) {
            gameBoard.innerHTML = `${this.name} attacked ${ship.name} with ${this.firepower} firepower!`
            console.log(`${this.name} attacked ${ship.name} with ${this.firepower} firepower!`);
            ship.hull -= this.firepower;
        } else {
            gameBoard.innerHTML = `${this.name}'s shots missed ${ship.name}!`;
            console.log(`${this.name}'s shots missed ${ship.name}!`);
        }
    }
}

class MegaShip extends Enemy {
    constructor() {
        super('Mega-Ship');
        this.weaponPods = createPods();
    }
    useWeaponPodOn(ship) {
        // Use of accuracy to determine a hit
        if (Math.random() < this.accuracy) {
            // Uses weapon pod to attack, removes pod from inventory
            console.log(`${this.name} attacked ${ship.name} with ${this.firepower} firepower using it's weapon pod!`);
            ship.hull -= this.weaponPods[0].firepower;
            this.weaponPods.splice(0, 1);
        } else {
            // Even if the weapon pod misses, it is still removed from inventory
            console.log(`${this.name}'s weapon pod missed ${ship.name}!`);
            this.weaponPods.splice(0, 1);
        }
    }
    isAttackedBy(ship) {
        // This function works out the weapon pod to health feature
        // Checks if Mega-Ship still has pods
        if (this.weaponPods.length === 0) {
            this.hull -= ship.firepower;
        } else {
            // Removes weapon pod if used for defense
            this.weaponPods.pop();
            console.log(`${this.name} used a weapon pod to take the damage!\n${this.name} lost a weapon pod.`);
        }
    }
}

// Create Weapon Pods
function createPods() {
    let weaponPods = [];
    // Giving each weapon pod random health
    for (let i = 0; i < randomBetween(1, 3); i++) {
        // Create weapon pods with health(1-5) and firepower(1-5)
        const pod = { hull: parseInt(randomBetween(1, 5)), firepower: parseInt(randomBetween(1, 5)) };
        weaponPods.push(pod);
    }
    return weaponPods;
}


class Game {
    constructor(allyShip, enemyShips) {
        allyShip = [];
        enemyShips = [];
    }
    start(allyShipName, enemyNumbers) {
        // Create Hero Ship
        const uss = new Ship(allyShipName);
        // Creates Enemy Squad
        let enemyArr = [];
        for (let i = 1; i <= enemyNumbers; i++) {
            const enemyShip = new Enemy(`${i}`);
            enemyArr.push(enemyShip);
        }
        // Create Mega-Ship for Enemy Squad
        const megaShip = new MegaShip();
        enemyArr.push(megaShip)
        this.allyShip = uss;
        this.enemyShips = enemyArr;

    }
    battle() {
        // Function to start a battle
        let check = this.checkWin();
        let checkOption = false;
        while (check === false) {
            // Prompts user to make a choice of action
            let option = prompt("What do you want to do? \n (attack) (shield) (check) (exit)");
            // Output choice
            console.log(`%cYou chose: ${option}`, "color:orange;");
            // Switch case for each option
            switch (option) {
                case 'attack':
                    let target = prompt("Who to attack? \n Alien Name");
                    this.allyShip.target(this.enemyShips, target);
                    separator();
                    break;
                case 'shield':
                    this.allyShip.shield();
                    separator();
                    break;
                case 'check':
                    checkOption = true;
                    this.print();
                    break;
                case 'exit':
                    console.log("Game Stopped - exit");
                    return;     // immediately exits the function
                default:
                    console.log("Game Stopped - Console \"game.battle()\" to continue.");
                    return;
            }
            // List of options for enemy actions
            let enemyOptions = ['attack', 'multiAttack'];
            // Enemies randomly choose their actions
            let enemyOption = enemyOptions[Math.floor(Math.random() * 2)];
            if (checkOption) {
                enemyOption = 'check';
            } else {
                // Output enemy choice
                console.log(`%cEnemy Chose: ${enemyOption}`, "color:orange;");
            }
            switch (enemyOption) {
                case 'attack':
                    this.enemyShips[0].attack(this.allyShip);
                    separator();
                    break;
                case 'multiAttack':
                    this.multiAttack();
                    separator();
                    break;
                case 'check':
                    separator();
                    break;
                default:
                    console.log("Game Stopped - enemyOption");
            }
            // Update check win conditions
            check = this.checkWin();
        }
    }
    multiAttack() {
        // Display how many enemy ships are left
        console.log(`Ships left: ${this.enemyShips.length}`);
        // Lets random amount of ships attack, will start from the beginning of Enemy ship array
        if (this.enemyShips.length > 1) {
            let rand = Math.floor(randomBetween(2, this.enemyShips.length));
            console.log(`${rand} of the alien ships attacked!`);
            for (let i = 0; i < rand; i++) {
                this.enemyShips[i].attack(this.allyShip);
            }
        }
    }
    print() {
        // Prints ally ship's values in green
        let allyShip = Object.entries(this.allyShip);
        let messageA = printArrObj(allyShip);
        allyStats.innerHTML = `${messageA}`
        console.log("%c" + messageA, "color:lightgreen; font-weight:bold; text-transform:capitalize;");

        // Prints all enemy ships' values in red
        let enemyArr = Object.values(this.enemyShips);
        // Will check to see where Alien Mega-Ship is in Enemy ship array
        for (let i = 0; i < enemyArr.length; i++) {
            if (Object.values(this.enemyShips[i])[0] === 'Alien Mega-Ship') {
                // If, found the MegaShip object
                let megaShip = Object.entries(this.enemyShips[enemyArr.length - 1]);
                // Use printArrObj() to print the ships
                let messageMS = printArrObj(megaShip)
                console.log("%c" + messageMS, "color:pink; font-weight:bold; text-transform:capitalize;");
            } else {
                let q = Object.entries(this.enemyShips[i]);
                // Use printArrObj() to print the ships
                let messageE = printArrObj(q);
                console.log("%c" + messageE, "color:pink; font-weight:bold; text-transform:capitalize;");
                enemyStats.innerHTML = `${messageE}`
            }
        }
    }
    checkWin() {
        // If the ally ship is destroyed
        if (this.allyShip.hull <= 0) {
            console.log(`%cThe ${this.allyShip.name} went down!`,
                "font-weight:bold; text-shadow:1px 1px 0 red");
            return true;
        } else if (this.enemyShips.length === 0) {
            // If the ally ship beat the Enemy ship squad
            console.log(`%cThe ${this.allyShip.name} won!`,
                "font-weight:bold; text-shadow:1px 1px 0 red");
            return true;
        }
        // No one won yet
        return false;
    }
}

// Function that prints Objects in an Array
function printArrObj(arr) {
    let message = '';
    // Iterate through array with forEach
    arr.forEach(arrObj => {
        // Iterate through the object's properties
        for (let i = 0; i < arrObj.length; i = i + 2) {
            // If the value of the property is another object
            if (typeof arrObj[i + 1] === 'object') {
                let message2 = '';
                // Iterate through array of objects
                for (let j = 0; j < arrObj[i + 1].length; j++) {
                    let obj2 = arrObj[i + 1][j];
                    // Appends each weapon pod
                    message2 += `{ Hull: ${obj2.hull}, Firepower: ${obj2.firepower} } \n`
                }
                // Appends the property that contains an array of objects as a value
                message += `${arrObj[i]}: ${message2}`
            } else {
                // Appends each property to the overall message
                message += `${arrObj[i]}: ${arrObj[i + 1]}\n`
            }
        }
        // console.log(message)
    })
    return message;
}

// Main Game
const game = new Game();
game.start('USS HelloWorld', 5);
game.print();
game.battle();