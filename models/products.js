// const mongoose = require('mongoose');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    prodName: { type: String, required: true },
    company:{type:String,required:true},
    price: { type: String, required: true },
    type:{type:String,required:true},
    offer: { type: Boolean,default:false }
  });

  const Products = mongoose.model('Products', productSchema);

  module.exports = Products;