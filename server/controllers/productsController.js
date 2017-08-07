import mongoose from 'mongoose';
import product from '../models/product';

export function listProducts() {
    return product.find();
}
export function itemProduct(data) {
    return product.findOne({_id: data});
}
