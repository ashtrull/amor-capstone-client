'use strict'

const app = require('../app.js')

const addOfferSuccess = (data) => {
  console.log(data)
  console.log('Offer submitted!')
  $('.center-prompt').text('Thank you for submitting a solidarity offer')
}

const addOfferFail = (error) => {
  console.log(error)
  console.log('Could not submit offer')
  $('.center-prompt').text('Sorry, something went wrong. Please try again!')

}

const addRequestSuccess = (data) => {
  console.log(data)
  console.log('Request submitted!')
  $('.center-prompt').text('Thank you for submitting a solidarity request')
}

const addRequestFail = (error) => {
  console.log(error)
  console.log('Could not submit request')
  $('.center-prompt').text('Sorry, something went wrong. Please try again!')

}

const signUpFail = () => {
  console.log('Passwords did not match or username taken.')
  $('#register-modal').modal('toggle')
  $('.sidebar-prompt').text('Could not make account. Passwords did not match or username taken. Please try again.')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('Successfully signed in!')
  $('#signin-modal').modal('toggle')
  $('.sidebar-prompt').text('Signed in as ' + app.user.email)
  $('#signin-btn').hide()
  $('#signout-btn').show()
  $('#changepw-btn').show()
}

const signInFail = () => {
  console.log('Email/password combination not found')
  $('#signin-modal').modal('toggle')
  $('#sign-in-prompt').text('Email/password combination not found')
}

const changePasswordSuccess = (data) => {
  // app.user = data.user
  console.log('Password successfully changed.')
  $('#changepw-modal').modal('toggle')
  $('#sidebar-prompt').text('Password successfully changed. Signed in as')
}

const changePasswordFail = () => {
  console.log('Email/password combination not found')
  $('.changepw-modal').modal('toggle')
  $('.sidebar-prompt').text('Email/password combination not found')
}

const signOutSuccess = (data) => {
  app.user = null
  console.log(data)
  console.log('Successfully signed out!')
  $('.sidebar-prompt').text('Sign in to create your garden!')
  $('.signin-btn').show()
  $('.signout-btn').hide()
  $('.changepw-btn').hide()
}

const signOutFail = (error) => {
  console.error(error)
}

module.exports = {
  addOfferSuccess,
  addOfferFail,
  addRequestSuccess,
  addRequestFail,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
