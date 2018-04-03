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

  // Take turns between Player 1 and Player 2
  let turn = '' // Initiate play
  const takeTurns = function (element) {
    if (turn === playerOne) {
      $(element.target).text()
    } else {
      $(element.target).text()
    }
  }
  takeTurns()

  break; //Break out of the loop if a player has won
}
//const resetGame = function()
const clickBoard = function () {
  $('.cell').on('click', function (event) {
    event.preventDefault() // Prevent default action
    console.log('You clicked me!', event.target) // Log the event.target
  })
}
clickBoard()

// Take turns between Player 1 and Player 2
let turn = '' // Initiate play
const takeTurns = function (element) {
  if (turn === playerOne) {
    $(element.target).text()
  } else {
    $(element.target).text()
  }
}
takeTurns()

cont takeTurns = function () {
  initiateGame = 0
  while player_one === true

}

  if  {


game.player_one.playerMove();
} else {
game.player_two.playerMove();
}

const isAvailable = function () {
  if (something === true )// use jquery to determine if cell is available and allow user to click
    //call the function above that allows users to click into a cell
  } else { // use jquery to determine if cell is taken
    return messages.html('This cell has already been played!')
  }

})


const findWinner = function () {
  if (gameArray[winningCombo[0]] === 'X' && gameArray[winningCombo[1]] === 'X' && gameArray[winningCombo[2]] === 'X') {
    console.log('Player 1 Wins!')
  } else if (gameArray[winningCombo[0]] === 'O' && gameArray[winningCombo[1]] === 'O' && gameArray[winningCombo[2]] === 'O') {
    console.log('Player 2 Wins!')
  } else if (gameArray[winningCombo[0]] === 'X' && gameArray[winningCombo[4]] === 'X' && gameArray[winningCombo[8]] === 'X') {
    console.log('Player 1 Wins!')
  } else if (gameArray[winningCombo[0]] === 'O' && gameArray[winningCombo[4]] === 'O' && gameArray[winningCombo[8]] === 'O') {
    console.log('Player 2 Wins')
  } else if (gameArray[winningCombo[2]] === 'X' && gameArray[winningCombo[5]] === 'X' && gameArray[winningCombo[8]] === 'X') {
    console.log('Player 1 Wins')
  } else if (gameArray[winningCombo[2]] === 'O' && gameArray[winningCombo[5]] === 'O' && gameArray[winningCombo[8]] === 'O') {
    console.log('Player 2 Wins')
  } else if (gameArray[winningCombo[0]] === 'X' && gameArray[winningCombo[3]] === 'X' && gameArray[winningCombo[6]] === 'X') {
    console.log('Player 1 Wins')
  } else if (gameArray[winningCombo[0]] === 'O' && gameArray[winningCombo[3]] === 'O' && gameArray[winningCombo[6]] === 'O') {
    console.log('Player 2 Wins')
  } else if (gameArray[winningCombo[6]] === 'X' && gameArray[winningCombo[7]] === 'X' && gameArray[winningCombo[8]] === 'X') {
    console.log('Player 1 Wins')
  } else if (gameArray[winningCombo[6]] === 'O' && gameArray[winningCombo[7]] === 'O' && gameArray[winningCombo[8]] === 'O') {
    console.log('Player 2 Wins')
  } else if (gameArray[winningCombo[3]] === 'X' && gameArray[winningCombo[4]] === 'X' && gameArray[winningCombo[5]] === 'X') {
    console.log('Player 1 Wins')
  } else if (gameArray[winningCombo[3]] === 'O' && gameArray[winningCombo[4]] === 'O' && gameArray[winningCombo[5]] === 'O') {
    console.log('Player 2 Wins')
  } else if (gameArray[winningCombo[1]] === 'X' && gameArray[winningCombo[4]] === 'X' && gameArray[winningCombo[7]] === 'X') {
    console.log('Player 1 Wins')
  } else if (gameArray[winningCombo[1]] === 'O' && gameArray[winningCombo[4]] === 'O' && gameArray[winningCombo[7]] === 'O') {
    console.log('Player 2 Wins')
  } else if (gameArray[winningCombo[2]] === 'X' && gameArray[winningCombo[4]] === 'X' && gameArray[winningCombo[6]] === 'X') {
    console.log('Player 1 Wins')
  } else if (gameArray[winningCombo[2]] === 'O' && gameArray[winningCombo[4]] === 'O' && gameArray[winningCombo[6]] === 'O') {
    console.log('Player 1 Wins')
  } else {
    return console.log('Tie Game!')
  }
})

const newGame = () => {
  $('#new-game').on('click', function (event) {
    event.preventDefault() // Prevent preventDefault
    console.log('You clicked the button', event.target)
    $(event.target).clear(gameArray)
  }
}
  //<button id="newGame">onclick="playGame">New Game</button>
