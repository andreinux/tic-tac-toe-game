

//GAMEBOARD MODULE
const GameBoard = (()=> {
    
    
   
   const board = ["", "", "", "", "", "", "", "", ""]
 

    const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function reset (){
    board.fill("");
}

return {
    reset, winningPatterns, board
}

})();


//GAMECONTROLLER MODULE
const GameController = (()=> {

    

let player1Name = "Player 1";
let player2Name = "Player 2";

function setPlayerNames(name1, name2) {
    player1.name = name1;
    player2.name = name2;
}

    
const player1 = createPlayer(player1Name, "X");
const player2 = createPlayer(player2Name , "O");


let currentPlayer =  player1;
let gameOver = false;


function switchPlayer (){
    if (currentPlayer === player1){
        currentPlayer = player2;
    }else if (currentPlayer === player2){
        currentPlayer = player1;
    }
}

function checkWinner() {
    for (const pattern of GameBoard.winningPatterns) {

        const a = pattern[0];
        const b = pattern[1];
        const c = pattern[2];

        if (
            GameBoard.board[a] !== "" &&
            GameBoard.board[a] === GameBoard.board[b] &&
            GameBoard.board[b] === GameBoard.board[c]
        ) {
             gameOver =  true;
            return currentPlayer;
            return true;
        }
    }

    return false;
}

function checkTie() {
    return !GameBoard.board.includes("");
}

function reset (){
    GameBoard.reset();      
}

function getCurrentPlayer() {
    return currentPlayer;
}


return {
    switchPlayer, getCurrentPlayer,
    setPlayerNames, checkWinner, reset, checkTie
}

})();


//player factory
function createPlayer (name, marker){
    return {
        name,
        marker
    }
}


const DisplayController = (()=> {
    
let signupBtn = document.querySelector("#submit-btn");
let signup = document.querySelector("#sign-up");
let gameboardSection = document.querySelector("#gameboard");
let player1Input = document.querySelector("#player1");
let player2Input = document.querySelector("#player2");
let matchName = document.querySelector("#match-name");
let tiles = document.querySelectorAll(".tile");
let matchWinner = document.querySelector("#match-winner");
let restartBtn = document.querySelector("#restartBtn");

        
signupBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    
     const player1Name = player1Input.value.trim() || "Player 1";
const player2Name = player2Input.value.trim() || "Player 2";

GameController.setPlayerNames(player1Name, player2Name);
    
    signup.classList.add("hidden");
    gameboardSection.classList.remove("hidden");

    matchName.textContent = `${player1Name} vs ${player2Name}`
})

restartBtn.addEventListener("click", ()=> {
    tiles.forEach((tile)=> {
        tile.textContent = "";
        GameController.reset();
        matchWinner.textContent = "";
        GameController.gameOver = false;
    })
})


    
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {

        if (GameController.gameOver) return;
        
        const targetIndex = tile.dataset.id;
        if (GameBoard.board[targetIndex] !== "") return;

        GameBoard.board[targetIndex] = GameController.getCurrentPlayer().marker;
        tile.textContent = GameController.getCurrentPlayer().marker;
        
const winner = GameController.checkWinner();

if (winner) {
    matchWinner.textContent = `${winner.name} wins!`;
    GameController.gameOver = true;
}

if (GameController.checkTie()){
    matchWinner.textContent = "It's A Tie!";
    return;

}


        GameController.switchPlayer();

    });
});


})();

