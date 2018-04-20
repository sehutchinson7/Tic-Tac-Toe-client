'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
}

const signUpFailure = function (data) {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  console.log('signInSuccess ran. Data is ', data)
}

const signInSuccess = function (data) { // represents what the api is sending back (the api response)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
  //setTimeout(() => $('#message').text('Successfully signed in'), 2000)
  //$('#game-board').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#new-game').removeClass('hidden')
  $('.playerMove').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#get-games').removeClass('hidden')
  //$('#sign-in').val($('#sign-in').text())
  //$('#sign-up').val($('#sign-up').text())
  //$('#change-password')[0].reset()
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  console.log('signInSuccess ran. Data is ', data)
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
  store.user = null
  $('#game-board').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('.playerMove').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#get-games').addClass('hidden')
  $('input[type=email]').val('')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
}

const changePasswordFailure = function (data) {
  $('#message').text('Failure changing password')
  $('#message').css('background-color', 'red')
  console.log('signInSuccess ran. Data is ', data)
}

const newGameSuccess = function (data) {
  console.log('newGameSuccess ran', data)
  store.game = data.game
}

const getGameDataSuccess = function (data) {
  $('.total').text('')
  $('.total').append(data.games.length)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  getGameDataSuccess
}
