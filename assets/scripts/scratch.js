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

let currentPlayer = 'X' // Define currentPlayer to start as X
// Makes the table clickable
const addHandlers = function () {
  $('.cell').on('click', function (event) {
    event.preventDefault() // Prevent default action
    console.log('You clicked me!', event.target) // Log the event.target
    const id = this.id
    console.log(id)
    // ('#' + id).text(this.id)
    // Displays ID of array on the game board
    // Add currentPlayer token to event.target
    $(event.target).text(currentPlayer)
    gameArray[id] = currentPlayer

    // log if a person won
    findWinner()
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  })
}
  //<button id="newGame">onclick="playGame">New Game</button>

  const addHandlers = function () {
    $('.cell').on('click', function (event) {
      event.preventDefault() // Prevent default action
      console.log('You clicked me!', event.target) // Log the event.target
      const id = this.id
      console.log(id)
      // ('#' + id).text(this.id)
      // Displays ID of array on the game board
      // Add currentPlayer token to event.target
      $(event.target).text(currentPlayer)
      gameArray[id] = currentPlayer
      console.log(gameArray)
      // log if a person won
      findWinner()
      if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
        if (currentPlayer === 'X') {
          currentPlayer = 'O'
        } else {
          currentPlayer = 'X'
        }
      }
    })
  }



  const addHandlers = function (event) {
    $('.cell').on('click', function () {
      event.preventDefault() // Prevent default action
      console.log('You clicked me!', event.target) // Log the event.target
      const id = this.id
      console.log(id)
      // ('#' + id).text(this.id)
      // Displays ID of array on the game board
      // Add currentPlayer token to event.target
      $(event.target).text(currentPlayer)
      gameArray[id] = currentPlayer
      console.log(gameArray)
      // log if a person won
      findWinner()
      if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
        if (currentPlayer === 'X') {
          currentPlayer = 'O'
        } else {
          currentPlayer = 'X'
        }
      }
    })
  }



  let currentPlayer = 'X' // Define currentPlayer to start as X
  // Makes the table clickable
  const addHandlers = function () {
    $('.cell').on('click', function () {
      event.preventDefault() // Prevent default action
      console.log('You clicked me!', event.target) // Log the event.target
      const id = this.id
      console.log(id)
      // ('#' + id).text(this.id)
      // Displays ID of array on the game board
      // Add currentPlayer token to event.target
      $(event.target).text(currentPlayer)
      gameArray[id] = currentPlayer
      console.log(gameArray)
      // log if a person won
      findWinner()
      if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
      } else {
        takeTurns()
      }
    })
  }

  const takeTurns = function () {
    if (event.target.innerHTML !== 'X' && event.target.innerHTML !== 'O') {
      if (currentPlayer === 'X') {
        currentPlayer = 'O'
      } else {
        currentPlayer = 'X'
      }
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

    const onIndex = function (event) {
      event.preventDefault()
      console.log('onIndex ran')
      api.index()
    }

    const index = function () {
      return $.ajax({
        url: config.apiUrl + `/games[?over=]`,
        method: 'GET',
        headers: {
          contentType: 'application/json',
          Authorization: 'Token token' + store.user.token
        }
      })
    }


    const show = function (game) {
      return $.ajax({
        url: config.apirUrl + `/games/:id` + game.id,
        method: 'GET',
        headers: {
          contentType: 'application/json',
          Authorization: 'Token token=' + store.user.token
        }

      })
    }

    const update = function (data) {
      console.log('data: ', data)
      return $.ajax({
        url: config.apiUrl + `/games/:id` + data.game.id,
        method: 'PATCH',
        headers: {
          contentType: 'application/json',
          Authorization: 'Token token=' + store.user.token
        },
        data
      })
    }

    const onCreateGame = function (event) {
      event.preventDefault()
      console.log('onCreate ran')
      const data = getFormFields(event.target)
      store.game=data.game
      console.log(store.game)
      api.createGame(data)
    }

    const createGame = function (data) {
      return $.ajax({
        url: config.apiUrl + '/games',
        method: 'POST',
        headers: {
          contentType: 'application/json',
          Authorization: 'Token token=' + store.user.token
        },
        data
      })
    }
