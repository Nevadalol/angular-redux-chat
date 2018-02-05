"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var constants_1 = require("./constants");
var app = express();
app.use(express.static(constants_1.ROOT));
app.get('*', function (req, res) {
    res.sendFile(constants_1.ROOT + '/index.html');
});
app.listen(3000);
