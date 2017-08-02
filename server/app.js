import express from 'express';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {listProducts} = require('./controllers/productsController');
const {configDb} = require('./config');
const cors = require('cors');

const app = express();

mongoose.connect(configDb);
mongoose.set('debug', true);

app.use(bodyParser.json());
app.use(cors());

app.get('/products', listProducts);

const server = app.listen(8080, function() {
    console.log(`Server gatou`)
})
