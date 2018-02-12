"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var constants_1 = require("./constants");
var app = express();
var messagesId = 0;
var messages = [];
app.use(express.static(constants_1.ROOT));
app.use(bodyParser.json());
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
    res.json(messages);
});
app.post('/api/rooms/:roomId/messages', function (req, res) {
    var message = {
        id: ++messagesId,
        authorId: req.body.authorId,
        roomId: req.params.roomId,
        content: req.body.content
    };
    messages.push(message);
    res.json(message);
});
app.get('*', function (req, res) {
    res.sendFile(constants_1.ROOT + '/index.html');
});
app.listen(3000);
