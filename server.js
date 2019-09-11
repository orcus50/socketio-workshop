// node modules
var express = require('express')
var io = require('socket.io')(http)

// node http module
var http = require('http')

// express app
var app = express()

app.use(express.static(__dirname))

var server = http.createServer(app)

// bind server to port 3000
server.listen(3000, () => {
    console.log('Server started on port 3000')
})