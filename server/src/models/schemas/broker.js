const mongoose = require('mongoose')
const basicSchema = require('./basic')

// broker part
const brokerSchema = new mongoose.Schema({
    category: { type: Number, default: 4 },
    brokerOfficeName: basicSchema,
    brokerOfficeLocation: basicSchema,
    brokerName: basicSchema,
    brokerRegisterNum: basicSchema,
    brokerNum: basicSchema,
    brokerOffice: basicSchema
})

module.exports = brokerSchema