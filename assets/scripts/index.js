'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const resourceEvents = require('./resources/events.js')
const viewEvents = require('./view.js')

$(() => {
  setAPIOrigin(location, config)
  // on page load
  $('.logged-in').hide()
  $('.logged-out').show()
  $('#show-offers-btn').hide()
  $('#show-requests-btn').hide()
  $('#show-admin-panel').hide()
  $('#add-offer-btn').hide()
  $('#add-request-btn').hide()
  $('#add-resources-container').hide()
  // auth form events
  $('#signout-btn').on('click', authEvents.onSignOut)
  $('.user-signup-form').on('submit', authEvents.onSignUp)
  $('.user-signin-form').on('submit', authEvents.onSignIn)
  $('.user-changepw-form').on('submit', authEvents.onChangePassword)
  // resource form events
  $('.show-admin-panel').on('click', function () {
    $('#resource-page').click()
  })
  $('#add-offer-btn').on('click', function () {
    $('.offer-form').show()
  })
  $('#add-request-btn').on('click', function () {
    $('.request-form').show()
  })
  $('.offer-form').on('submit', resourceEvents.onMakeOffer)
  $('.request-form').on('submit', resourceEvents.onMakeRequest)
  $('#show-requests-btn').on('click', resourceEvents.onGetRequests)
  $('#show-offers-btn').on('click', resourceEvents.onGetOffers)
  $('.delete-offer-form').on('submit', resourceEvents.onDeleteOffer)
  $('.delete-request-form').on('submit', resourceEvents.onDeleteRequest)
  $('.change-offer-form').on('submit', resourceEvents.onUpdateOffer)
  $('.change-request-form').on('submit', resourceEvents.onUpdateRequest)
  $('#show-offer-form-btn').on('click', function () {
    $('.offer-form').removeClass('hidden')
    $('.request-form').addClass('hidden')
  })
  $('#show-request-form-btn').on('click', function () {
    $('.request-form').removeClass('hidden')
    $('.offer-form').addClass('hidden')
  })
  $('#show-admin-panel').on('click', function () {
    $('.resource-link').click()
  })
  // navbar events
  $('.navlinks').on('click', viewEvents.openView)
  $('#defaultOpen').click()
  // Collapse accordion every time dropdown is shown
  $('.dropdown-accordion').on('show.bs.dropdown', function (event) {
    const accordion = $(this).find($(this).data('accordion'))
    accordion.find('.panel-collapse.in').collapse('hide')
  })

  // Prevent dropdown to be closed when we click on an accordion link
  $('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
    event.preventDefault()
    event.stopPropagation()
    $($(this).data('parent')).find('.panel-collapse.in').collapse('hide')
    $($(this).attr('href')).collapse('show')
  })
  const limit = 1
  $('input.offer-checkbox').on('click', function (event) {
    if ($('input[name="offer-select"]:checked').length > limit) {
      this.checked = false
      console.log('You can only select one offer at a time')
    }
  })
  $('input.request-checkbox').on('click', function (event) {
    if ($('input[name="request-select"]:checked').length > limit) {
      this.checked = false
      console.log('You can only select one request at a time')
    }
  })
})

module.exports = {
}
