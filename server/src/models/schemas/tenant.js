const mongoose = require('mongoose')
const basicSchema = require('./basic')

// tenant part
const tenantSchema = new mongoose.Schema({
    category: { type: Number, default: 6 },
    tenantAddress: basicSchema,
    tenantID: basicSchema,
    tenantNum1: basicSchema,
    tenantNum2: basicSchema,
    tenantName: basicSchema
})

module.exports = tenantSchema