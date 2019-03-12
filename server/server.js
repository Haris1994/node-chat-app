const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage' , generateMessage('Admin', 'Welcome to the chat group')); 

    socket.broadcast.emit('newMessage' , generateMessage('Admin','new user joined'));

    socket.on('createMessage', function(message, callback) {
        console.log('Got new message', message);
        io.emit('newMessage' , generateMessage(message.from,message.text));
        callback();
    })

    socket.on('createLocationMessage' , (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude , coords.longitude));
    });

    socket.on('disconnect', () =>{
        console.log('Disconnected from client');
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});