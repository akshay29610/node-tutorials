"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 3000;
app.use(function (req, res, next) {
    console.log("from first middleware");
    next();
});
app.use(function (req, res, next) {
    console.log("from second middleware");
});
app.listen(PORT, function () {
    "server up at port no " + PORT;
});
