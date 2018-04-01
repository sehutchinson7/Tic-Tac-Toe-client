const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
}

const onPasswordSuccess = function (data) {
  $('#message').text('Your password has been changed')
  $('#message').css('background-color', 'green')
  console.log('New password is:', data)
  store.user = data.user
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers,
  onPasswordSuccess
}
