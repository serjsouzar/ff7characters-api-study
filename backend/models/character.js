const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: String,
  yearsOld: Number,
  charImg: String
})

module.exports	= mongoose.model('character', schema)