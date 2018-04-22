const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  // console.log('data is ', data)
  // console.log('store.user is ', store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password/:id',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + `/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const startGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data: {}
  })
}

const getGameData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const updateGameData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startGame,
  getGameData,
  updateGameData
}
