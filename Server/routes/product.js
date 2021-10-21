"use strict";
exports.__esModule = true;
exports.Product = void 0;
var express_1 = require("express");
exports.Product = express_1.Router();
exports.Product.get('/product', function (req, res) {
    res.status(200).send('<h1>Get Product</h1>');
});
