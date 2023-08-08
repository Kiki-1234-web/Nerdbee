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
    book:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema)

// Reflect the saved data on my orders page
