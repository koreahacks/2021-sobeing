const mongoose = require('mongoose')
const basicSchema = require('./basic')

// cost part
const costSchema = new mongoose.Schema({
    category: { type: Number, default: 2 },
    securityDeposit: basicSchema,
    firstDeposit: basicSchema,
    firstDepositReceiver: basicSchema,
    secondDeposit: basicSchema,
    secondDepositDate: basicSchema,
    lastDeposit: basicSchema,
    lastDepositDate: basicSchema,
    maintenanceCost: basicSchema,
    payday: basicSchema
})

module.exports = costSchema