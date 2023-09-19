const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber:String,
    countryCode:String,
    country:String,
    weightInKg:Number,
    heightInfeet:Number,
    heightInInches:Number
});

module.exports = mongoose.model('userDetials', Schema);