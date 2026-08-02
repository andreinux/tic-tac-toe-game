
//
let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile)=> {
    tile.addEventListener("click" , ()=> {
        console.log(tile.dataset.id);

        let targetIndex = tile.dataset.id;

        gameboard.board[targetIndex] = "X";
        console.log(gameboard.board);

        tile.textContent = "X";
         
        switchPlayer();
        console.log(currentPlayer.name);
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