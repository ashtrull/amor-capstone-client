'use strict'
const app = require('../app.js')
// const config = require('../config.js')

// AJAX POST for new account
const addOffer = (data) => {
  console.log(data)
  console.log(app.user)
  return $.ajax({
    url: app.host + '/offers',
    headers: {'header': 'Content-Type: application/json'},
    method: 'POST',
    data: {
      'offer': {
        'user_id': app.user.id,
        'offer_type': data.type
      }
    }
  })
}

const addRequest = (data) => {
  console.log(data)
  console.log(app.user)
  return $.ajax({
    url: app.host + '/requests',
    headers: {'header': 'Content-Type: application/json'},
    method: 'POST',
    data: {
      'request': {
        'user_id': app.user.id,
        'request_type': data.type
      }
    }
  })
}

const getOffers = () => {
  console.log('api.js getOffers')
  return $.ajax({
    url: app.host + '/offers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getRequests = () => {
  console.log('api.js getRequests')
  return $.ajax({
    url: app.host + '/requests',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// AJAX POST log in for existing account
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = function (data) {
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'passwords': {
        'old': data.credentials.password,
        'new': data.credentials.newpassword
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  addOffer,
  addRequest,
  getOffers,
  getRequests,
  signIn,
  changePassword,
  signOut
}
