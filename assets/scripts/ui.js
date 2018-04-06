'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully sign up')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
}

const signUpFailure = function (data) {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  console.log('signInSuccess ran. Data is ', data)
}

const signInSuccess = function (data) {
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is ', data)
  setTimeout(() => $('#message').text('Successfully signed in'), 2000)
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
