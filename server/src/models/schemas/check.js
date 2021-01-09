const mongoose = require('mongoose')
const basicSchema = require('./basic')

// broker part
const checkSchema = new mongoose.Schema({
    category: { type: Number, default: 7 },
    landlordNameCheck: {
        type: Boolean,
        default: false,
      },
    tenantNameCheck: {
        type: Boolean,
        default: false,
    },
    specialContractCheck: basicSchema,
    leverageCheck: basicSchema,
})

module.exports = checkSchema