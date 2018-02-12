"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var constants_1 = require("./constants");
var app = express();
app.use(express.static(constants_1.ROOT));
app.get('/api/rooms', function (req, res) {
    res.json([{
            id: 1,
            title: 'Monday',
            totalUsers: 5
        }]);
});
app.get('/api/rooms/:roomId/users', function (req, res) {
    res.json([{
            id: 2,
            username: 'Mishka'
        }]);
});
app.get('/api/rooms/:roomId/messages', function (req, res) {
    res.json([{
            id: 1,
            authorId: 1,
            roomId: 1,
            content: 'Hello, world!'
        }, {
            id: 2,
            authorId: 2,
            roomId: 1,
            content: 'Muahahhaha!'
        }]);
});
app.get('*', function (req, res) {
    res.sendFile(constants_1.ROOT + '/index.html');
});
app.listen(3000);
