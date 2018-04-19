const getFormFields = require('../../lib/get-form-fields')
const game = require('./game')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')
  $('.cell').html('') // Prevents next user from seeing previous user's board when signing i
  $('.playerMove').html('Player 1 Start Game')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('clear board successful')
  $('.cell').html('')
  $('#game-board').show()
  $('#game-board').removeClass('hidden')
  $('.playerMove').html('Player 1 Start Game')
  game.newGame()
  api.startGame()
    .then(ui.newGameSuccess)
}

const onGetGameData = function () {
  event.preventDefault()
  api.getGameData()
    .then(ui.getGameDataSuccess)
    .catch(console.error)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('click', onNewGame)
  $('#get-games').on('click', onGetGameData)
}

module.exports = {
  addHandlers
}
