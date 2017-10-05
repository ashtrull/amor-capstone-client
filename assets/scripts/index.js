'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const resourceEvents = require('./resources/events.js')
const viewEvents = require('./view.js')

$(() => {
  setAPIOrigin(location, config)
  // on page load
  $('#changepw-btn').hide()
  $('#signout-btn').hide()
  $('#user-logout').hide()
  $('#show-offers-btn').hide()
  $('#show-requests-btn').hide()
  // auth form events
  $('#signout-btn').on('click', authEvents.onSignOut)
  $('.user-signup-form').on('submit', authEvents.onSignUp)
  $('.user-signin-form').on('submit', authEvents.onSignIn)
  $('.user-changepw-form').on('submit', authEvents.onChangePassword)
  // resource form events
  $('.offer-form').on('submit', resourceEvents.onMakeOffer)
  $('.request-form').on('submit', resourceEvents.onMakeRequest)
  $('#show-requests-btn').on('click', resourceEvents.onGetRequests)
  $('#show-offers-btn').on('click', resourceEvents.onGetOffers)
  $('.delete-offer-form').on('submit', resourceEvents.onDeleteOffer)
  $('.delete-request-form').on('submit', resourceEvents.onDeleteRequest)
  $('.change-offer-form').on('submit', resourceEvents.onUpdateOffer)
  $('.change-request-form').on('submit', resourceEvents.onUpdateRequest)
  // navbar events
  $('.navlinks').on('click', viewEvents.openView)
  $('#defaultOpen').click()
})

module.exports = {
}
