"use strict";
exports.__esModule = true;
exports.User = void 0;
var express_1 = require("express");
exports.User = express_1.Router();
exports.User.get('/create', function (req, res) {
    res.status(200).send('<h1>Get Users</h1>');
});
