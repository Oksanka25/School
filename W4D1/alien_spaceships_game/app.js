function startGame() {
    let welcome = prompt('Welcome to Space Battle, Earth is under attack and in need of assistance! Will you Aid in the survival of Earth? Y/N');
    if (welcome.toLowerCase() == 'y') {
        return true
    } else {
        return false
    }
}

const alienShips = [
    { name: 'War Fighter 1', hull: 3, firepower: 2, accuracy: .6 },
    { name: 'War Fighter 2', hull: 4, firepower: 2, accuracy: .6 },
    { name: 'War Fighter 4', hull: 5, firepower: 3, accuracy: .7 },
    { name: 'War Fighter 5', hull: 6, firepower: 3, accuracy: .7 },
    { name: 'Alien Lieutenant', hull: 5, firepower: 3, accuracy: .7 },
    { name: 'Alien General', hull: 6, firepower: 4, accuracy: .8 }
];