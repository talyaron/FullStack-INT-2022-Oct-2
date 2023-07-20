import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { socket } from "../App";

const enum RoomEvents {
    ADD_MESSAGE = 'add message',
    JOIN_ROOM = 'join room',
    LEAVE_ROOM = 'leave room',
    ROOM_MESSAGE = 'room message',
}

interface Picture {
    url: string;
    title: string;
    artist: string;
    id: string;
}

const Room = () => {
    const { roomId } = useParams();
    const [picture, setPicture] = useState<Picture | null>(null);
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        if (roomId) {

            //listen to room messages
            socket.on(RoomEvents.ADD_MESSAGE, (data: any) => {
                console.log('add message', data)
                setMessages((messages: any) => [...messages, data]);
            });

            //get picture from server
            (async () => {
                const response = await fetch(`http://localhost:3000/picture/${roomId}`);
                const data = await response.json();
                console.log(data)
                setPicture(data);
            })();

            //join room
            socket.emit('join room', roomId);
        }

        return () => {
            socket.emit('leave room', roomId);
            socket.off('room message');
            socket.off(RoomEvents.ADD_MESSAGE);
        }
    }, [roomId])

    function handleMessage(ev: any) {
        const _message = ev.target.value;
        console.log(ev)
        if (ev.code === 'Enter') {
            socket.emit('add message',{message: _message, roomId});
            setMessages((messages: any) => [...messages, _message]);
        }
    }

    return (
        <div>
            <h1>Room {roomId}</h1>
            <Link to="/"><button>Back</button></Link>
            {picture ? <div className="picture"><img src={picture.url} alt={picture.title} /></div> : null}
            <h2>Messages</h2>
            {messages.map((message, index) => <p key={index}>{message}</p>)}
            <input type="text" onKeyUp={handleMessage} />
        </div>
    )
}

export default Room