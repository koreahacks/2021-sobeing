const mongoose = require("mongoose");
const buildingSchema = require("./schemas/building");
const costSchema = require("./schemas/cost");
const dateSchema = require("./schemas/date");
const brokerSchema = require("./schemas/broker");
const landlordSchema = require("./schemas/landlord");
const tenantSchema = require("./schemas/tenant");
const checkSchema = require("./schemas/check")

// 계약서 전체 내용에 대한 Schema
const contractSchema = new mongoose.Schema({
  // 계약서 이름
  title: {
    type: String,
    required: true,
    trim: true,
  },

  building: buildingSchema,
  cost: costSchema,
  date: dateSchema,
  broker: brokerSchema,
  landlord: landlordSchema,
  tenant: tenantSchema,
  check: checkSchema,

  // 계약 종료 여부
  completed: {
    type: Boolean,
    default: false,
  },
  // 계약서를 어플에 등록한 날짜
  contractDate: {
    type: Date,
    default: Date.now,
  },
  // 계약서를 등록한 사람
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

// 모델 생성
const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
