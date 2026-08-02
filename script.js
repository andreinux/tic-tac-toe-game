
//


//signup

let signupBtn = document.querySelector("#submit-btn");
let signup = document.querySelector("#sign-up");
let gameboardSection = document.querySelector("#gameboard");

let player1Input = document.querySelector("#player1");
let player2Input = document.querySelector("#player2");

let matchName = document.querySelector("#match-name");

signupBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    
     player1Name = player1Input.value.trim() || "Player 1";
   player2Name = player2Input.value.trim() || "Player 2";

    signup.classList.add("hidden");
    gameboardSection.classList.remove("hidden");

    matchName.textContent = `${player1Name} vs ${player2Name}`
})

//game
let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile)=> {
    tile.addEventListener("click" , ()=> {
        console.log(tile.dataset.id);

        let targetIndex = tile.dataset.id;

        if (gameboard.board[targetIndex]  !== "") return;

        if (currentPlayer === player1){
        gameboard.board[targetIndex] = "X";
        tile.textContent = "X";

        }else if (currentPlayer === player2){
            gameboard.board[targetIndex] = "O"
            tile.textContent = "O";
        }

    
        switchPlayer();
        checkWinner();
        console.log(currentPlayer.name);
        console.log(gameboard.board);
    })
})

//gameboard 

const gameboard = {
    board : ["", "", "", "", "", "", "", "", ""],
};

//player factory
function createPlayer (name, marker){
    return {
        name,
        marker
    }
}

let player1Name = "Player 1";
let player2Name = "Player 2";

const player1 = createPlayer(player1Name, "X");
const player2 = createPlayer(player2Name , "O");


let currentPlayer =  player1;

function switchPlayer (){
    if (currentPlayer === player1){
        currentPlayer = player2;
    }else if (currentPlayer === player2){
        currentPlayer = player1;
    }
}


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

//check winner function
let matchWinner = document.querySelector("#match-winner");

function checkWinner (){

    for (const pattern of winningPatterns){
    const a = pattern[0];
    const b = pattern[1];
    const c = pattern[2];
    
    if (
        gameboard.board[a] !== "" &&
        gameboard.board[a] === gameboard.board[b] &&
        gameboard.board[b] === gameboard.board[c]
    ){ if (currentPlayer === player2) {
    matchWinner.textContent = `${player1Name} wins!`;
    }else if ( currentPlayer === player1){
        matchWinner.textContent = `${player2Name} wins!`;
    };
    }else if (!gameboard.board.includes("")){
        matchWinner.textContent = "Its a Tie!";
    }



}
}

function restart (){
    gameboard.board.fill("");
    currentPlayer = player1;
    tiles.forEach((tile)=> {
        tile.textContent = "";
    })
}



let restartBtn = document.querySelector("#restartBtn");

restartBtn.addEventListener("click", ()=> {
    restart();
})
