const mongoose = require('mongoose')

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
            type: String
        }]
    }
})

module.exports = mongoose.model("Restaurant", RestaurantSchema);