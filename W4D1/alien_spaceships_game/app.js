function startGame() {
    let welcome = prompt('Welcome to Space Battle, Earth is under attack and in need of assistance! Will you Aid in the survival of Earth? Y/N');
    if (welcome.toLowerCase() == 'y') {
        return true
    } else {
        return false
    }
}