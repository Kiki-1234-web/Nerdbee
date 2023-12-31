// A model is a wrapper for your schema which is used to import data into mongodb
const mongoose = require('mongoose');
const { Document, Schema, model, Query, Model } = require('mongoose');

const UserSchema = new Schema({
    name:{
         type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema)

