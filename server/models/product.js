import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
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

export default mongoose.model('products', ProductSchema);
