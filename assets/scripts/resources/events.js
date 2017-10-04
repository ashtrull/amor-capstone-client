'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onMakeOffer = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Data is:')
  console.log(data)
  api.addOffer(data)
    .done(ui.addOfferSuccess)
    .fail(ui.addOfferFail)
}

const onMakeRequest = (event) => {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  console.log('Data is:')
  console.log(data)
  api.addRequest(data)
    .done(ui.addRequestSuccess)
    .fail(ui.addRequestFail)
}

const onGetOffers = (event) => {
  event.preventDefault()
  console.log(event.target)
  api.getOffers()
    .done(ui.getOffersSuccess)
    .fail(ui.getOffersFail)
}

const onGetRequests = (event) => {
  event.preventDefault()
  console.log(event.target)
  api.getRequests()
    .done(ui.getRequestsSuccess)
    .fail(ui.getRequetsFail)
}

module.exports = {
  onMakeOffer,
  onMakeRequest,
  onGetOffers,
  onGetRequests
}
