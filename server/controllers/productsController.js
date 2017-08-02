const mongoose = require('mongoose');
const Product = require('../models/product');

function listProducts(req, res) {
    Product.find({}, function(err, data) {
        res.json({ message: 'vladhui' });
    });
}

module.exports.listProducts = listProducts;
