const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
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
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
