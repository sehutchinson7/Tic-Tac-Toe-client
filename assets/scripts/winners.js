//I'm trying to write a function that will take turns between player_one (X)
//and player_two (O)
function playGame() {
  document.querySelector(".start-game")
  console.log(board)
}

if (turn) {
  game.player_one.playerMove();
} else {
  game.player_two.playerMove();
}

// Create an array of winning combinations
const winningCombo = [
  [0, 1, 2], // Player wins top row
  [0, 4, 8], // Player wins diagonally
  [2, 5, 8], // Player wins far right column
  [0, 3, 6], // Player wins far left column
  [6, 7, 8], // Player wins last row
  [3, 4, 5], // Player wins middle row
  [1, 4, 7], // Player wins middle column
  [2, 4, 6] // Player wins diagonally 45 degree angle
]

//I'm writing a function that will iterate through player one and two
//and stop the game if winning combo === true
const findWinner = function () {
  for(var i=0; i<this.wins.length; i++) {
  if player_one === true
  console.log ('Player 1 is the Winner!') //How do i tell it to stop the game?
  return (resetGame) //Calls on a functiont to clear the board if someone has won



  break; //Break out of the loop if a player has won
}
//const resetGame = function()


cont takeTurns = function () {
  initiateGame = 0
  while player_one === true

}

  if  {


game.player_one.playerMove();
} else {
game.player_two.playerMove();
}
