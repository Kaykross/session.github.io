const mongoose = require("mongoose");
const registerUser = new mongoose.Schema({
    "name":String,
    "email":String,
    "password": String,
    "confirm password":String,
    date:{type:Date,default:Date.now}
});
module.exports = mongoose.model('registerUser', registerUser);