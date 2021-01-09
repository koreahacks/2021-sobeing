const mongoose = require("mongoose");

// 집 체크리스트에 대한 Schema
const checklistSchema = new mongoose.Schema({
    // 집 이름 (user 설정)
    title: {
        type: String,
        required: true,
        trim: true,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }, 

    price: {
        type: Boolean,
        default: false,
    },

    facility: {
        type: Boolean,
        default: false,
    },

    hygiene: {
        type: Boolean,
        default: false,
    },

    convenience: {
        type: Boolean,
        default: false,
    },

    security : {
        type: Boolean,
        default: false,
    },
    
    transportation: {
        type: Boolean,
        default: false,
    },

    count: {
        type: Number,
        default: 0,
    }
})

// 모델 생성
const Checklist = mongoose.model("Checklist", checklistSchema);

module.exports = Checklist