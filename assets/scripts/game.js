
const board = ['', '', '', //I know I need to create an empty array to represent a 3x3 board
              '', '', '',
              '', '', '']

const player_one = X; //I know I need to create a findWinner function that will loop through the array
                      //and find all the winning combinations on the board
const player_two = O; //I want to assume that player 1 is always X and player 2 is always O

const winningCombo = [
  [0, 1, 2], // Player wins top row
  [0, 4, 8], //Player wins diagonally
  [2, 5, 8], //Player wins far right column
  [0, 3, 6], //Player wins far left column
  [6, 7, 8], //Player wins last row
  [3, 4, 5], //Player wins middle row
  [1, 4, 7], //Player wins middle column
  [2, 4, 6], //Player wins diagonally 45 degree angle
]

//I'm trying to write a function that will take turns between player_one (X)
//and player_two (O)

if (turn) {
  game.player_one.playerMove();
} else {
  game.player_two.playerMove();
}



//I'm writing a function that will iterate through player one and two
//and stop the game if winning combo === true
const findWinner = function () {
  for(var i=0; i<this.wins.length; i++) {
  if player_one === true
  console.log ('Player 1 is the Winner!') //How do i tell it to stop the game?
  return (resetGame) //Calls on a functiont to clear the board if someone has won

  break; //Break out of the loop if a player has one
}
//const resetGame = function()
