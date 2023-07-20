import React, { useEffect } from 'react'
import { io } from 'socket.io-client';
import './App.css';
import { Link } from 'react-router-dom';


export const socket = io('http://localhost:3000');

const App = () => {
  const [message, setMessage] = React.useState('No message');
  const [pictures, setPictures] = React.useState([]);

  function handleMessage(ev: any) {
    const _message = ev.target.value;
    socket.emit('message', _message);
    setMessage(_message);
  }

  useEffect(() => {
    socket.on('message', (data: any) => {
      setMessage(data);
    });

    //get pictures from server
    (async () => {
      const response = await fetch('http://localhost:3000/pictures');
      const data = await response.json();
      console.log(data)
      setPictures(data);
    })();
  }, [])


  return (
    <div>
      <h2>{message}</h2>
      <h1>Socket</h1>
      <input type="text" onInput={handleMessage} />

      <h2>Rooms</h2>
      {pictures.map((picture: any) => {
        return (
          <Link to={`/room/${picture.id}`}>
          <div className='picture'>
            <h3>{picture.title}</h3>
            <img src={picture.url} alt={picture.name} />
          </div>
          </Link>
        )
      })
      }
    </div>
  )
}

export default App