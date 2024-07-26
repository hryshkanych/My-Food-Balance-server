const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        name: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        calories: {
            type: Number,
            required: true
        }
    }]
}, { collection: 'Dishes' });

const Dish = mongoose.model('Dishes', dishSchema, 'Dishes');

module.exports = Dish;
