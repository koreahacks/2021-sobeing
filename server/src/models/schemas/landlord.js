const mongoose = require('mongoose')
const basicSchema = require('./basic')

const landlordSchema = new mongoose.Schema({
    category: { type: Number, default: 5 },
    landlordAddress: basicSchema,
    landlordID: basicSchema,
    landlordNum1: basicSchema,
    landlordNum2: basicSchema,
    landlordName: basicSchema
})

module.exports = landlordSchema