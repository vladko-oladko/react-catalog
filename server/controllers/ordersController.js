import mongoose from 'mongoose';
import order from '../models/order';

export function createOrder(data) {
    const Order = new order({
        firstname: data.firstname,
        surname: data.surname,
        address: data.address,
        number: data.number,
        email: data.email,
        basket: data.basket.join(',')
    });

    return Order.save();
}
