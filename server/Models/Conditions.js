const mongoose = require('mongoose');

const ConditionsSchema = new mongoose.Schema({
    disease:String,
    symptoms:[String]
})

module.exports = mongoose.model('Conditions', ConditionsSchema)