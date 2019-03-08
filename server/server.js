const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'jen@example.com',
        text: 'Kya ho raha hai',
        createdAt: 123
    })

    socket.on('createMessage', function(message) {
        console.log('Got new message', message.text);
        console.log(message.from);
    })

    socket.on('disconnect', () =>{
        console.log('Disconnected from client');
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});