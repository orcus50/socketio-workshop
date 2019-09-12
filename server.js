// node modules
var express = require('express')
var io = require('socket.io')
// native node modules
var http = require('http')

// express app
var app = express()
// use static file server (express stuff)
app.use(express.static(__dirname))

var server = http.createServer(app)

// import socket.io module and bind to http server
var io = require('socket.io')(server)
// keep a list of all connected clients
var clients = []

// when user connects this will execute (connection event listener)
io.on('connection', socket => {
    console.log('Client connected...')

    // add newly connected client to list of clients
    clients.push(socket)
    // give the client a badly generated identifier
    var clientNumber = clients.length;

    // when recieve chat event from client
    socket.on('chat', message  => {
        // attach user id to chat message and broadcast
        var userData = message + ' ' + clientNumber
        // broadcast userData to all clients
        io.emit('chat', userData)
    })
})

// bind server to port 3000 (STARTING SERVER)
server.listen(3000, () => {
    console.log('Server started on port 3000')
})