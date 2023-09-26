import app from './app';
import http from 'http';
import { Server } from 'socket.io';
import { config } from './config/config';

// Server instance

const httpServer = http.createServer(app).listen(config.port, () => {console.log(config.port)});
const socketServer: Server = new Server(httpServer, {
    cors: {
        origin: true,
        credentials: true,
    },
    allowEIO3: true
});

// user counting system
let userCount = 0;
socketServer.on('connection', socket => {
    userCount++;
    socketServer.emit('userCount', userCount);
    console.log(`connected, count: ${userCount}`)

    socket.on('disconnect', () => {
        userCount--;
        socketServer.emit('userCount', userCount);
        console.log(`disconnected, count: ${userCount}`)
    })
})


app.get('/api/userCount', (req, res, next) => {
    try {
        return res.status(200).json({userCount});
    } catch(error) {
        return res.status(400)
    }
})