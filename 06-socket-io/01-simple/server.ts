import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
import cors from 'cors';

interface Picture {
    url:string;
    title:string;
    artist:string;
    id:string;
}

const pictures:Picture[] = [
    {
        id: "1",
        url: "https://media.architecturaldigest.com/photos/5abe831a33e2a9249e2c08d0/4:3/w_1631,h_1223,c_limit/GettyImages-544265174.jpg",
        title: "self portrait",
        artist: "Van Gogh",
    },
    {
        id: "2",
        url: "https://www.liveabout.com/thmb/U1muh3czVn6Q_11RWmkjgdPgk3A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mona_Lisa-copy-56a6e6d95f9b58b7d0e56987.jpg",
        title: "Mona LIsa",
        artist: "De vinchy",
    }
];

const io = new Server(server, {
    cors: {

        origin: "http://localhost:5174",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

app.get('/pictures', (req, res) => {
    res.send(pictures);
});

app.get('/picture/:id', (req, res) => {
    const id = req.params.id;
    const picture = pictures.find(p => p.id === id);
    if (picture) {
        res.send(picture);
    } else {
        res.status(404).send("picture not found");
    }
});

io.on('connection', (socket) => {
    console.log("socket connected");

    socket.on('message', (message) => {
        console.log(message);
        socket.broadcast.emit('message', message);
    });

    socket.on('join room', roomId => {
        socket.join(roomId);
        console.log("joined room number "+roomId);
    });
    socket.on('leave room', roomId => {
        socket.leave(roomId);
        console.log("left room number "+roomId);
    });

    socket.on("add message", ({message, roomId}) => {
        console.log(message, roomId);
        socket.to(roomId).emit("add message", message);
    })
 }); 


 server.listen(3000, () => {
    console.log('listening on *:3000');
  });
