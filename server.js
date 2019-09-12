// node modules
var express = require('express')
var http = require('http')

// express app
var app = express()

app.use(express.static(__dirname))

var server = http.createServer(app)

var io = require('socket.io')(server)
// add connection event listener
io.on('connection', socket => {
    console.log('Client connected...')
    socket.on('chat', data  => io.emit('chat', data))
})

// bind server to port 3000
server.listen(3000, () => {
    console.log('Server started on port 3000')
})