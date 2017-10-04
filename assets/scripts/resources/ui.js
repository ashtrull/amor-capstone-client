'use strict'
const Handlebars = require('../../handlebars-v4.0.10.js')

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
const getOffersSuccess = (data) => {
  console.log('ui.js getOffersSuccess')
  console.table(data.offers)
  $('#all-offers-table').remove()
  $('#all-offers-view').show()
  const offersData = data.offers
  const createHTML = function (data) {
    const rawTemplate = $('#offers-template').html()
    const compiledTemplate = Handlebars.compile(rawTemplate)
    const context = {
      offers: data
    }
    const compiledHTML = compiledTemplate(context)
    $('#offers-container').append(compiledHTML)
  }
  createHTML(offersData)
}

const getOffersFail = (error) => {
  console.log(error)
}

const getRequestsSuccess = (data) => {
  console.log('ui.js getRequestsSuccess')
  console.table(data.requests)
  $('#all-requests-table').remove()
  $('#all-requests-view').show()
  const requestsData = data.requests
  console.log(requestsData)
  const createHTML = function (data) {
    const rawTemplate = $('#requests-template').html()
    console.log(rawTemplate)
    const compiledTemplate = Handlebars.compile(rawTemplate)
    console.log(compiledTemplate)
    const context = {
      requests: data
    }
    console.log(context)
    const compiledHTML = compiledTemplate(context)
    $('#requests-container').append(compiledHTML)
  }
  createHTML(requestsData)
}

const getRequestsFail = (error) => {
  console.log(error)
}

const deleteOfferSuccess = (rowId) => {
  console.log('ui.js deleteOfferSuccess')
  console.log(rowId)
  $('' + rowId).remove()
}

const deleteOfferFail = (error) => {
  console.log(error)
}

const deleteRequestSuccess = (rowId) => {
  console.log('ui.js deleteRequestSuccess')
  console.log(rowId)
  $('' + rowId).remove()
}

const deleteRequestFail = (error) => {
  console.log(error)
}

const updateOfferSuccess = (data) => {
  console.log('ui.js updateOfferSuccess')
  console.log(data)
  const rowId = '#offer-' + data.offer.id
  console.log(rowId)
  $('' + rowId).children().eq(2).empty
  $('' + rowId).children().eq(2).text(data.offer.offer_type)
}

module.exports = {
  addOfferSuccess,
  addOfferFail,
  addRequestSuccess,
  addRequestFail,
  getOffersSuccess,
  getOffersFail,
  getRequestsSuccess,
  getRequestsFail,
  deleteOfferSuccess,
  deleteOfferFail,
  deleteRequestSuccess,
  deleteRequestFail,
  updateOfferSuccess
}
