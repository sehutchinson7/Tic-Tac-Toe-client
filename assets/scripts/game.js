// Create an empty array to represent a 3x3 game board

const gameArray = ['', '', '', '', '', '', '', '', '']

// Define Player 1 as X and Player 2 as O
const playerOne = 'X'
const playerTwo = 'O'

// Write a function that takes turns between plaer_one and player_two

// Makes the table clickable
const clickBoard = function () {
  $('.cell').on('click', function (event) {
    event.preventDefault() // Prevent default action
    console.log('You clicked me!', event.target) // Log the event.target
  })
}
clickBoard()

module.exports = {
  gameArray,
  playerOne,
  playerTwo,
  clickBoard
}
