import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    firstname: {type: String},
    surname: {type: String},
    address: {type: String},
    number: {type: String},
    email:{type: String},
    basket: {type: String}
})

export default mongoose.model('orders', OrderSchema);
