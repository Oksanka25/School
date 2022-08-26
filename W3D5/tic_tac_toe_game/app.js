let squares = document.querySelectorAll('.square')
console.log(squares);
let player = "X";
let illegal = document.querySelector(".illegal");
let result = "";
let startGame = document.querySelector(".start");
let resetGame = document.querySelector(".reset");
let activeGame = true;
let moves = 0;
let xCount = document.querySelector(".xwins")
let oCount = document.querySelector(".owins")
let xWins = 0;
let oWins = 0;

function changePlayer() {
    if (player === "X") player = "O";
    else if (player === "O") player = "X";
}


