const getFormFields = require('../../lib/get-form-fields')
const game = require('./game')

const api = require('./api')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')
  console.log(onSignUp)

  const data = getFormFields(this)
  api.signUp(data)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data).then(signInSuccess)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
  store.user = data.user
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')
  api.signOut()
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('clear board successful')
  $('.cell').html('')
  game.newGame()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
