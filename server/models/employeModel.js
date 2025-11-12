const { mongoose } = require("mongoose");

const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Employee', employeSchema)