// board indexes 
//gameplay index 
/*
0 1 2
3 4 5 
6 7 8 
*/
const board = ["","","","","","","","",""];
const tiles = document.querySelectorAll(".tile");
const statusDisplay = document.querySelector('.game-status')
const gamePlay = Array(tiles.length);
gamePlay.fill(null);
const PLAYERX = "X";
const PLAYERO = "O";
//let firstPlayer = "";
let playerTurn = PLAYERX;// turn = choose between two variables
//select a tile in the board pass in x or o
let gameActive = true; 
const winnerMessage = () => `${playerTurn} WINS!`;
const drawMessage = () => `DRAW!`;
const currentTurn = () => `Player ${playerTurn}'s Turn!`; 

statusDisplay.innerHTML = currentTurn();
//const winnerText = document.getElementById("winner-text");
// const showWinner = document.getElementById("show-winner-section");
const resetButton = document.getElementById("Reset");

this.firstPlayer = Math.random();
// trying to pick random player call at beginning of game 
const randomPlayer = () => Math.random() > 0.5 ? "X" : "O"; { 

    for(let i = 0; i < 10;i++) {
        console.log(randomPlayer);
        
    }
    randomPlayer(); 
}
// //let player select tile in board loop through player board
tiles.forEach((tile) => tile.addEventListener("click", playerClick));

function setHoverText() {
    tiles.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
    });

    const hoverClass = `${playerTurn.toLowerCase()}-hover`;

    tiles.forEach(tile=>{
        if(tile.innerText == "") {
            tile.classList.add(hoverClass);
        }
    });
}
//when app starts
setHoverText();
randomPlayer();

//make function with an event when the player clicks on tile and switch players
function playerClick(event) {
    //checkWinner();
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    const tileDataIndex = parseInt(tile.getAttribute("data-index"));
    console.log(tileDataIndex)
    if (tile.innerText != "") {
        return;
    }
    if (playerTurn === PLAYERX) {
        tile.innerText = PLAYERX;
        gamePlay[tileNumber-1] = PLAYERX;
        playerTurn = PLAYERO;
    }
    else{
        tile.innerText = PLAYERO;
        gamePlay[tileNumber-1] = PLAYERO;
        playerTurn = PLAYERX;
    }
//invoked on click
    setHoverText();
    //checkWinner();
}

const winningCombinations = [
   //A, B, C or 0, 1, 2 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//get tile played from click and add the value X or 0 from turn
function tilePlayed(playerClick, tileDataIndex) {
    //right now this is showing me the index need it to show X or O
    board[tileDataIndex] = currentTurn;
    tileDataIndex.innerHtml = currentTurn;
} 
function checkWinner() {
    //console.log('im here');
    let roundWin = false;
    for (let i = 0; i <= 7; i++) {
        const winningCombination = winningCombinations[i];
        //console.log(winningCombination);
        let a = board[winningCombination[0]];
        let b = board[winningCombination[1]];
        let c = board[winningCombination[2]];
        console.log('winningCombination', winningCombination);
        console.log('a',a);
        console.log('b',b);
        console.log('c',c);
        if (a === '' || b === '' || c === '') {
           // console.log('im here');
            continue;
        }
        if (a === b && b === c) {
            console.log('im here');
            roundWin = true;
            break;
        }
    }

    if (roundWin) {
        console.log(winnerMessage());
        statusDisplay.innerHtml = winnerMessage();
        gameActive = false;
        return;
    }
   let roundDraw = !board.includes("");
   if (roundDraw) {
       statusDisplay.innerHtml = drawMessage();
      gameActive = false;
      return;
   }
   tilePlayed(playerClick, tileDataIndex);
//show the winner section

   
//reset board to orinigal form
Reset.addEventListener("click", newGame);

function newGame(){
    //showWinner.className = ("hidden");
   // gamePlay.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    playerTurn = PLAYERX;
    setHoverText();
    }
}
