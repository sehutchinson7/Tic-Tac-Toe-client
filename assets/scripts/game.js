const store = require('./store')
const api = require('./api')
const ui = require('./ui')
// Create an empty array to represent a 3x3 game board

let gameArray = ['', '', '', '', '', '', '', '', '']

const newGame = function () {
  currentPlayer = 'X'
  gameArray = ['', '', '', '', '', '', '', '', '']
}

let currentPlayer = 'X' // Define currentPlayer to start as X

// declare patchObject with default empty values
const patchObject = {
  'game': {
    'cell': {
      'index': '',
      'value': ''
    },
    'over': false
  }
}

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
      // console.log(event.target.id)
      gameArray[id] = currentPlayer
      $(event.target).text(currentPlayer) // Adc currentPlayer to HTMLL board
      if (findWinner() === false) {
        // update the patch object with the game data
        patchObject.game.cell.index = id
        patchObject.game.cell.value = currentPlayer
        // then run takeTurns
        takeTurns()
      }
    } else {
      onTaken()
    }
  })
}

const takeTurns = function () {
  if (currentPlayer === 'X') { // change player
    currentPlayer = 'O'
    // console.log(patchObject)
    onUpdateGameData()
    onPlayerMove()
  } else {
    currentPlayer = 'X'
    // console.log(patchObject)
    onUpdateGameData()
    onPlayerMove()
  }
}

const onTieGame = function () {
  $('.playerMove').html("It's a draw!")
  $('#game-board').hide()
}

const onWinner = function () {
  $('.playerMove').html('Player ' + currentPlayer + ' wins!')
  $('#game-board').hide()
}

const onPlayerMove = function () {
  $('.playerMove').html('Player ' + currentPlayer + "'s turn")
}

const onTaken = function () {
  $('.playerMove').html('This spot is taken! Choose an empty box.')
}

const findWinner = function () {
  if (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2] && gameArray[0] !== '' && gameArray[1] !== '' && gameArray[2] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[0] + ' Wins!' + ' Winning combo top row') // [0, 1, 2]
  } else if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[0] !== '' && gameArray[4] !== '' && gameArray[8] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[0] + ' Wins!' + ' Winning combo diagonal') // [0, 4, 8]
  } else if (gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[2] !== '' && gameArray[5] !== '' && gameArray[8] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[2] + ' Wins!' + ' Winning combo diagonal') // [2, 5, 8]
  } else if (gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6] && gameArray[0] !== '' && gameArray[3] !== '' && gameArray[6] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[0] + ' Wins!' + ' Winning combo far left column.') // [0, 3, 6]
  } else if (gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[6] !== '' && gameArray[7] !== '' && gameArray[8] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[6] + ' Wins!' + ' Winning combo last row.') // [6, 7, 8]
  } else if (gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[3] !== '' && gameArray[4] !== '' && gameArray[5] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[3] + ' Wins!' + ' Winning combo middle row.') // [3, 4, 5]
  } else if (gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7] && gameArray[1] !== '' && gameArray[4] !== '' && gameArray[7] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[1] + ' Wins!' + ' Winning combo middle column') // [1, 4, 7]
  } else if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[2] !== '' && gameArray[4] !== '' && gameArray[6] !== '') {
    onWinner()
    return true
    // console.log('Player ' + gameArray[2] + ' Wins!' + ' Winning combo diagonal 90 degree') // [2, 4, 6]
  } else if (gameArray[0] !== '' && gameArray[1] !== '' && gameArray[2] !== '' && gameArray[3] !== '' && gameArray[4] !== '' && gameArray[5] !== '' && gameArray[6] !== '' && gameArray[7] !== '' && gameArray[8] !== '') {
    onTieGame()
    // console.log('Tie Game')
  } else {
    // console.log('Keep playing!')
    return false
  }
}

const onUpdateGameData = function () {
  event.preventDefault()
  api.updateGameData(patchObject)
  // console.log("Here's your api patch", patchObject)
}

module.exports = {
  addHandlers,
  newGame,
  patchObject,
  onUpdateGameData
}
