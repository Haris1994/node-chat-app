let socket = io();

     socket.on('connect' , function() {
         console.log('Connected to server');
     })

     socket.on('disconnect', function() {
         console.log('Disconnected from server');
     })

     socket.on('newMessage', function(message) {
         console.log('Got new message', message.text);
         console.log(message.from);
         console.log(message.createdAt);
     })
     socket.emit('createMessage', {
        from: 'jen@example.com',
        text: 'Kya ho raha hai'
    })