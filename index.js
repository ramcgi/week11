
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],



];
let options = ["" ,"" ,"" ,"" ,"" ,"", "" ,"", ""];
let currentPlayer = "X";
let running = true;


for(let i = 1; i <= 9; i++){
    let cell = document.getElementById(i)
    cell.addEventListener("click", function(){
        console.log("clicked")
        const id = this.getAttribute("id");
        cell.innerHTML = currentPlayer
        currentPlayer = currentPlayer === "X" ?  "O" : "X";
        let statusText = document.getElementById("statusText")
        statusText.innerHTML = `${currentPlayer}'s Turn`
         
        
    } );
}

 //restartBtn.addEventListener("click", restartGame);
 //statusText.textContent = `${currentPlayer}'s turn`;
    
           
        



//updateCell(this,id);

//checkWinner();

  






function checkWinner(){
let roundWon = false;
for(i = 0; i < winConditions.length; i++)
condition = winConditions[i];
const cellA = options[condition[0]];
const cellB = options[condition[1]];
const cellc = options[condition[2]];

if (cellA == "" || cellB == "" || cellc == ""){
    roundWon = false;
}
if(cellA == cellB && cellB == cellc){
    roundWon = true;
    
    statusText.innerHTML = `${currentPlayer}' won!`
}


}
//if(roundWon){
   // statusText.textContent =`${currentPlayer} wins!`;
    //running = false
//}
// else if(!options.includes("")){
//     statusText.textContent =`Draw!`;
//     running = false;
// }
// else{
//     changePlayer();

// }
// function restartGame(){

//     currentPlayer = "x";

//     options = ["" ,"" ,"" ,"" ,"" ,"", "" ,"", ""];

    

//     cells.forEach (cell => cell.textContent = "");
//     running = true;


// }




