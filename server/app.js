import express from 'express';
import path from 'path';
import bodyParser from'body-parser';
import mongoose from'mongoose';
import cors from 'cors';
import passport from 'passport'
import WebSocket from 'ws'
import passportService from './services/passport';
import {dbConfig} from'./config';
import {listProducts, itemProduct} from'./controllers/productsController';
import {createOrder} from'./controllers/ordersController';
import {searchProducts} from'./controllers/searchController';
import {signup, login} from'./controllers/authController';



const app = express();
mongoose.Promise = global.Promise;
var db = mongoose.connect(dbConfig.db,{ useMongoClient: true});
mongoose.set('debug', true);

const requireLogin = passport.authenticate('local', { session: false });
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(cors());

app.get('/products', (req, res) => {
    listProducts().then(data => res.send(data));
});
app.get('/products/:data', (req, res) => {
    itemProduct(req.params.data).then(data => res.send(data));
});
app.get('/products/search/:data', (req, res) => {
    searchProducts(req.params.data).then(data => res.send(data));
});
app.post('/orders', (req, res) => {
    createOrder(req.body).then(data => res.send(data));
});
app.post('/signup', signup);
app.post('/login', requireLogin, login);

const server = app.listen(8080, () => {
    console.log(`Server gatou`)
})

var wss = new WebSocket.Server({server: server, path: "/chat"});

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('Message Received: %s', message);
        wss.clients.forEach(function (conn) {
            conn.send(message);
        });я
    });
});
