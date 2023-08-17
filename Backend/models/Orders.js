const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    }
    // rating: {
    //     type: Number,
    //     required: true
    // },
    // moviename: {
    //     type: String,
    //     required: true
    // },
    // review: {
    //      type: String,
    //      required: true
    // }

});

module.exports = mongoose.model('order', OrderSchema)