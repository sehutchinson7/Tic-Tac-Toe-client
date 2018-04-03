// Create an empty array to represent a 3x3 game board

const gameArray = ['', '', '', '', '', '', '', '', '']

// Define Player 1 as X and Player 2 as O
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = 'X' // Define currentPlayer to start as X
// Makes the table clickable
const addHandlers = function () {
  $('.cell').on('click', function (event) {
    event.preventDefault() // Prevent default action
    console.log('You clicked me!', event.target) // Log the event.target
    const id = this.id
    console.log(id)
    // $('#' + id).text(this.id)
    // Displays ID of array on the game board
    // Add currentPlayer token to event.Target
    $(event.target).text(currentPlayer)
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  })
}

module.exports = {
  addHandlers,
  gameArray,
  playerOne,
  playerTwo
}
