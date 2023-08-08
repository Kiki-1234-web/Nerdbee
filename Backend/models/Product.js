const mongoose = require('mongoose');
const { Document, Schema, model, Query, Model } = require('mongoose');



const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    hardcover:{
        type:Number,
        required:true
    },
    paperback:{
        type:Number,
        required:true,
    },
    description: {
        type: String,
        required: true
    },
    categoryname:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('proudct', ProductSchema)
