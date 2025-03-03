const mongoose = require('mongoose')
const item = require('./itemschema')

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    itemsArr: {
        type: String,
        itemsArr: [{
            type: Object,
            ref: item
        }]
    }
})

module.exports = mongoose.model("Restaurant", RestaurantSchema);