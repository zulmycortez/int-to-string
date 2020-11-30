const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Numbers = new Schema({
  number: { type: Number, required: true }
})

module.exports = mongoose.model('number', Numbers)