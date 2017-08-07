import mongoose from 'mongoose';
import product from '../models/product';

export function searchProducts(data) {
    return product.find({$text: {$search: `${data}`}});
}
