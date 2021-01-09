const mongoose = require("mongoose");
const basicSchema = require("./basic");

// date part
const dateSchema = new mongoose.Schema({
  category: { type: Number, default: 3 },
  deliveryDate: basicSchema,
  deadline: basicSchema,
  duration: basicSchema,
  documentDeliveryDate: basicSchema,
  specialContract: basicSchema,
  contractDate: basicSchema,
});

module.exports = dateSchema;
