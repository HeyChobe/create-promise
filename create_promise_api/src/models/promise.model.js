const mongoose = require("mongoose")

const promiseSchema = mongoose.Schema({
    detail: {type: String, required: true},
    time: {type: String, required: true},
    email: {type: String, required: true},
    ong: {type: String, required: true},
    amount: {type: String, required: true},
    date: {type: String, required: true}
})

module.exports = mongoose.model("Promise", promiseSchema)