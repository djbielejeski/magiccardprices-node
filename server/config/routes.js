const homeController = require('../controllers/home.controller');
var express = require('express');

module.exports.http = function (app) {
    // Build the bindings between each route and their controller
    //app.get('/', homeController.index);
    app.use(express.static('public'));
};
