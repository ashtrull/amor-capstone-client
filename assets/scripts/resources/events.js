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

const onDeleteOffer = (event) => {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  const rowId = '#offer-' + data.offer_id
  console.log(data)
  console.log(rowId)
  api.deleteOffer(data)
    .done(ui.deleteOfferSuccess(rowId))
    .fail(ui.deleteOfferFail)
}

const onDeleteRequest = (event) => {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  const rowId = '#request-' + data.request_id
  console.log(data)
  console.log(rowId)
  api.deleteRequest(data)
    .done(ui.deleteRequestSuccess(rowId))
    .fail(ui.deleteRequestFail)
}

const onUpdateOffer = (event) => {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  const offer = data.offer_id
  const rowId = '#offer-' + data.offer_id
  console.log(data)
  console.log(rowId)
  api.updateOffer(data)
    .then(api.showOffer(offer))
    .done(ui.updateOfferSuccess)
    .fail(ui.updateOfferFail)
}

const onUpdateRequest = (event) => {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  const request = data.request_id
  const rowId = '#request-' + data.request_id
  console.log(data)
  console.log(rowId)
  api.updateOffer(data)
    .then(api.showOffer(request))
    .done(ui.updateOfferSuccess)
    .fail(ui.updateOfferFail)
}

module.exports = {
  onMakeOffer,
  onMakeRequest,
  onGetOffers,
  onGetRequests,
  onDeleteOffer,
  onDeleteRequest,
  onUpdateOffer,
  onUpdateRequest
}
