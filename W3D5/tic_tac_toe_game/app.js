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
let gameSound;

function changePlayer() {
    if (player === "X") player = "O";
    else if (player === "O") player = "X";
}



squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.innerHTML === "" && activeGame === true) {
            square.innerHTML = player;
            changePlayer();
            moves++;
            if (moves === 9) illegal.innerHTML = "It's a tie! Reset a game and start over!"
        } else if (square.innerHTML) {
            square.style.backgroundColor = "rgb(237, 75, 75)"
            illegal.innerHTML = "Don't cheat!";
            illegal.style.setProperty('--animate-duration', '2s');
            illegal.classList.add('animate__animated', 'animate__lightSpeedInLeft')

            setTimeout(
                function () {
                    let bgColor = "rgb(246, 228, 228)";
                    square.style.backgroundColor = bgColor;
                    illegal.innerHTML = " "
                    console.log(illegal.innerHTML);
                    illegal.classList.remove('animate__animated', 'animate__lightSpeedInLeft')
                }, 2000);
        } else {
            illegal.innerHTML = "Someone has already won! Reset the game!"
        }
        checkResult();
    });
})

const checkResult = () => {
    const arrSq = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ];

    if (activeGame === true) {
        for (i = 0; i < arrSq.length; i++) {
            if (squares[arrSq[i][0]].innerHTML == "X" && squares[arrSq[i][1]].innerHTML == "X" && squares[arrSq[i][2]].innerHTML == "X") {
                squares[arrSq[i][0]].style.backgroundColor = "rgb(187, 235, 131)"
                squares[arrSq[i][1]].style.backgroundColor = "rgb(187, 235, 131)"
                squares[arrSq[i][2]].style.backgroundColor = "rgb(187, 235, 131)"

                result = "Player X wins!";
                activeGame = false;
                scoreX();
                prepareResult(result);
                break;

            } else if (squares[arrSq[i][0]].innerHTML == "O" && squares[arrSq[i][1]].innerHTML == "O" && squares[arrSq[i][2]].innerHTML == "O") {
                squares[arrSq[i][0]].style.backgroundColor = "rgb(187, 235, 131)"
                squares[arrSq[i][1]].style.backgroundColor = "rgb(187, 235, 131)"
                squares[arrSq[i][2]].style.backgroundColor = "rgb(187, 235, 131)"
                result = "Player O wins!";
                scoreO();
                prepareResult(result);
                activeGame = false;
                newGame()
                break;
            }
        }
    }
}

const prepareResult = (winner) => {
    illegal.innerHTML = winner;
}

startGame.addEventListener("click", () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("hidden")
    }
    xCount.classList.remove("player")
    oCount.classList.remove("player")
    activeGame = true;
})

resetGame.addEventListener("click", () => {
    squares.forEach(square => {
        square.style.backgroundColor = "rgb(246, 228, 228)"
        square.innerHTML = "";
        illegal.innerHTML = "";
        moves = 0;
    })
    activeGame = true;
})

function scoreX() {
    xWins++;
    xCount.innerHTML = `Player X: ${xWins}`
}

function scoreO() {
    oWins++;
    oCount.innerHTML = `Player O: ${oWins}`
}




