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

const deleteOffer = (data) => {
  console.log('api.js deleteOffer')
  return $.ajax({
    url: app.host + '/offers/' + data.offer_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteRequest = (data) => {
  console.log('api.js deleteRequest')
  return $.ajax({
    url: app.host + '/requests/' + data.request_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateOffer = (data) => {
  console.log('api.js updateOffer')
  console.log(data)
  return $.ajax({
    url: app.host + '/offers/' + data.offer_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'offer': {
        'offer_type': data.type
      }
    }
  })
}

const showOffer = (offer) => {
  console.log('api.js showOffer')
  console.log(offer)
  return $.ajax({
    url: app.host + '/offers/' + offer,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateRequest = (data) => {
  console.log('api.js updateRequest')
  console.log(data)
  return $.ajax({
    url: app.host + '/requests/' + data.request_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'request': {
        'request_type': data.type
      }
    }
  })
}

const showRequest = (request) => {
  console.log('api.js showRequest')
  console.log(request)
  return $.ajax({
    url: app.host + '/requests/' + request,
    method: 'GET',
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
  deleteOffer,
  deleteRequest,
  updateOffer,
  showOffer,
  updateRequest,
  showRequest
}
