const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    image: {type: String},
    description: {type: String},
    resolution: {type: String},
    cpu: {type: String},
    core: {type: Number},
    cpuCount: {type: Number},
    weight: {type: Number},
    price: {type: Number},
    category: {type: String},
    count: {type: Number},
})

module.exports =  mongoose.model('product', ProductSchema);
