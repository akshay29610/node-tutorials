"use strict";
exports.__esModule = true;
var express = require("express");
var user_1 = require("./routes/user");
var product_1 = require("./routes/product");
var app = express();
var PORT = 3000;
app.use(express.json());
app.use(user_1.User);
app.use(product_1.Product);
app.listen(PORT, function () {
    console.log("server up a port " + PORT);
});
