
const express = require('express');
const config = require('config');

const functions = require('firebase-functions');
const admin = require('firebase-admin');
// Initialize Firebase App
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://local-parikrama.firebaseio.com"
});

const categories = require('./api/category');
const products = require('./api/product');
const users = require('./api/users');
const inventory = require('./api/inventory');
const branch = require('./api/branch');
console.info('Initializing Inventory Management System');
// Initialize express
const app = express();
require('./startup/routes')(app);

exports.api = functions.https.onRequest(app)
exports.addOrUpdateProduct = products.addOrUpdateProduct
exports.addOrUpdateCategory = categories.addOrUpdateCategory
exports.modifyUsers = users.modifyUsers
exports.updateAvailableQuantityInInventory = inventory.updateAvailableQuantityInInventory
exports.addOrUpdateBranch = branch.addOrUpdateBranch
