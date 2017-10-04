'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const resourceEvents = require('./resources/events.js')

$(() => {
  setAPIOrigin(location, config)
  // on page load
  $('#changepw-btn').hide()
  $('#signout-btn').hide()
  $('#user-logout').hide()
  // auth form events
  $('.user-signup-form').on('submit', authEvents.onSignUp)
  $('.user-signin-form').on('submit', authEvents.onSignIn)
  $('.user-changepw-form').on('submit', authEvents.onChangePassword)
  $('.user-logout').on('submit', authEvents.onSignOut)
  // resource form events
  $('.offer-form').on('submit', resourceEvents.onMakeOffer)
  $('.request-form').on('submit', resourceEvents.onMakeRequest)
  $('.show-requests-btn').on('click', resourceEvents.onGetRequests)
  $('.show-offers-btn').on('click', resourceEvents.onGetOffers)
})

module.exports = {
}
