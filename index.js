const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


//// 1차든 2차든 인증이 되고 나서 이 부분을 접근가능하도록 해야할 것으로 보임


// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg) => {
//         socket.broadcast.emit(msg);
//     });
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//       });
// });

io.on('connection', (socket) => {
    console.log("user con");
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
  });
  
  