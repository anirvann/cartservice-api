const functions = require('firebase-functions');
const express = require('express');
const app = express();

const fakeData = require('./database/db.json');

app.get('/cart', (request, response) => {
    response.json(fakeData);
})
app.get('/cart-cached', (request, response) => {
    response.set('Cache-Control', 'public, max-age=10000, s-maxage=10000');
    response.json(fakeData);
})

exports.app = functions.https.onRequest(app);
