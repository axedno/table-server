const mongoose = require('mongoose')

const Row = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    gender: {type: String, required: true},
    salary: {type: Number, required: true},
})

module.exports = mongoose.model('Row', Row)
