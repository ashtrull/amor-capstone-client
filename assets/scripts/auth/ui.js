'use strict'

const app = require('../app.js')

const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully created account!')
  $('#signup-prompt').text('Created user ' + data.user.email + '. Log in to get started!')
  $('.user-signup-form')[0].reset()
}

const signUpFail = () => {
  console.log('Passwords did not match or username taken.')
  $('#signup-prompt').text('Could not make account. Passwords did not match or username taken. Please try again.')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully signed in!')
  $('#signin-prompt').text('Signed in as ' + app.user.email)
  $('.logged-out').hide()
  $('.logged-in').show()

  $('.user-signin-form')[0].reset()
  if (data.user.admin === true) {
    $('#show-admin-panel').show()
    $('#show-requests-btn').show()
    $('#show-offers-btn').show()
    $('.delete-offer-form').removeClass('hidden')
    $('.change-offer-form').removeClass('hidden')
    $('.delete-request-form').removeClass('hidden')
    $('.change-request-form').removeClass('hidden')
  } else {
    $('#add-offer-btn').show()
    $('#add-request-btn').show()
  }
}

const signInFail = () => {
  console.log('Email/password combination not found')
  $('#signin-prompt').text('Email/password combination not found')
  $('#signin-modal').modal('toggle')
  $('#sign-in-prompt').text('Email/password combination not found')
}

const changePasswordSuccess = (data) => {
  // app.user = data.user
  console.log('Password successfully changed.')
  console.log(data)
  $('#changepw-modal').modal('toggle')
  $('.sidebar-prompt').text('Password successfully changed. Signed in as ' + app.user.email)
  $('.user-changepw-form')[0].reset()
}

const changePasswordFail = () => {
  console.log('Incorrect old password. Please try again.')
  $('#changepw-modal').modal('toggle')
  $('.sidebar-prompt').text('Email/password combination not found')
}

const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('Successfully signed out!')
  $('.sidebar-prompt').text('Sign in to get started!')
  $('#signin-prompt').text('')
  $('.logged-out').show()
  $('.logged-in').hide()
  $('#show-requests-btn').hide()
  $('#show-offers-btn').hide()
}

const signOutFail = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
