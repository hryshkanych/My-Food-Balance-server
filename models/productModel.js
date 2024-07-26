const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  }
}, { collection: 'Products' }); 

const Product = mongoose.model('Products', productSchema, 'Products');

module.exports = Product;
