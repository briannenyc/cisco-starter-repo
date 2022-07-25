var WebSocketServer = require('websocket').server;
var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;
var W3CWebSocket = require('websocket').w3cwebsocket;

console.log("hello world")

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log('/ route requested');
    res.send("hello world")
})


app.listen(55455, () => {
    console.log('server is up')
})