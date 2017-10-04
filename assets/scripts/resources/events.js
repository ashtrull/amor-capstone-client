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

module.exports = {
  onMakeOffer
}
