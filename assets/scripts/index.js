'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
// const solEvents = require('./auth/solidarity.js')

$(() => {
  setAPIOrigin(location, config)
  $('#changepw-btn').hide()
  $('#signout-btn').hide()
  $('#user-logout').hide()
  $('.user-signup-form').on('submit', authEvents.onSignUp)
  $('.user-signin-form').on('submit', authEvents.onSignIn)
  $('.user-changepw-form').on('submit', authEvents.onChangePassword)
  $('.user-logout').on('submit', authEvents.onSignOut)
})

module.exports = {
}
