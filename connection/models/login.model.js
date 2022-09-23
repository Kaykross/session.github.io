const mongoose = require("mongoose");
const loginUser = new mongoose.Schema({
    email:String,
    password: String,
    date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('loginUser', loginUser);