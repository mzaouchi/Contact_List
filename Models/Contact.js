const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name : String,
    old : Number,
    email : {type : String, required : true, unique : true}
})

module.exports = mongoose.model('Contact', contactSchema)