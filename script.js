
//
let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile)=> {
    tile.addEventListener("click" , ()=> {
        console.log(tile.dataset.id);

        let targetIndex = tile.dataset.id;

        gameboard.board[targetIndex] = "X";
        console.log(gameboard.board);

        tile.textContent = "X";
    })
})

//gameboard 

const gameboard = {
    board : ["", "", "", "", "", "", "", "", ""],
};


