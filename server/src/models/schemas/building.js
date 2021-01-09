const mongoose = require('mongoose')
const basicSchema = require('./basic')

// building part
const buildingSchema = new mongoose.Schema({
    category: { type: Number, default: 1 },
    address: basicSchema,
    landType: basicSchema,
    landArea: basicSchema,
    buildingStructure: basicSchema,
    buildingUsage: basicSchema,
    buildingArea: basicSchema,
    rentContent: basicSchema,
    rentArea: basicSchema,
    option: basicSchema
})

module.exports = buildingSchema