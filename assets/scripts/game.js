// Create an empty array to represent a 3x3 game board

const gameArray = ['', '', '', '', '', '', '', '', '']

// Create an array of winning combinations
// const winningCombo = [
//   [0, 1, 2], // Player wins top row
//   [0, 4, 8], // Player wins diagonally
//   [2, 5, 8], // Player wins far right column
//   [0, 3, 6], // Player wins far left column
//   [6, 7, 8], // Player wins last row
//   [3, 4, 5], // Player wins middle row
//   [1, 4, 7], // Player wins middle column
//   [2, 4, 6] // Player wins diagonally 45 degree angle
// ]
// Define Player 1 as X and Player 2 as O
// const playerOne = 'X'
// const playerTwo = 'O'
let currentPlayer = 'X' // Define currentPlayer to start as X
// Makes the table clickable
const addHandlers = function () {
  $('.cell').on('click', function (event) {
    event.preventDefault() // Prevent default action
    // console.log('You clicked me!', event.target) // Log the event.target
    // const id = this.id
    // ('#' + id).text(this.id)
    // Displays ID of array on the game board
    // Add currentPlayer token to event.target
    if ($(event.target).text() === '') { // If the space is empty
      const id = event.target.id // Add currentPlayer to JS board array
      gameArray[id] = currentPlayer
      $(event.target).text(currentPlayer) // Adc currentPlayer to HTMLL board
      findWinner() // log if a person won
      if (currentPlayer === 'X') { // change player
        currentPlayer = 'O'
      } else {
        currentPlayer = 'X'
      }
    } else {
      console.log('This spot is taken!')
    }
  })
}

const findWinner = function () {
  // If the game board array has the winning combo of all X's in [0,1,2]
  if (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2] && gameArray[1] !== '') {
    console.log('Player ' + gameArray[0] + ' Wins!')
  } else if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[4] !== '') {
    console.log('Player ' + gameArray[0] + ' Wins!')
  } else if (gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[5] !== '') {
    console.log('Player ' + gameArray[2] + ' Wins!')
  } else if (gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6] && gameArray[3] !== '') {
    console.log('Player ' + gameArray[0] + ' Wins!')
  } else if (gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[7] !== '') {
    console.log('Player ' + gameArray[6] + ' Wins!')
  } else if (gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[4] !== '') {
    console.log('Player ' + gameArray[3] + ' Wins!')
  } else if (gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7] && gameArray[4] !== '') {
    console.log('Player ' + gameArray[1] + ' Wins!')
  } else if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[4] !== '') {
    console.log('Player ' + gameArray[2] + ' Wins!')
  } else {
    console.log('Keep playing!')
  }
}

module.exports = {
  addHandlers
}
