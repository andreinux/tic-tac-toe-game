
//
let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile)=> {
    tile.addEventListener("click" , ()=> {
        console.log(tile.dataset.id);

        let targetIndex = tile.dataset.id;

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

const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player2" , "0");


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

function checkWinner (){

    for (const pattern of winningPatterns){
    const a = pattern[0];
    const b = pattern[1];
    const c = pattern[2];
    
    if (
        gameboard.board[a] !== "" &&
        gameboard.board[a] === gameboard.board[b] &&
        gameboard.board[b] === gameboard.board[c]
    ){ if (currentPlayer === player1) {
        alert("player1 won");
    }else if ( currentPlayer === player2){
        alert("Player2 won");
    }
    }


    else {
        console.log("continue playing");
    }
}
}