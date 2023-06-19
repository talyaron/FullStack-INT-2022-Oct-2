import { useState } from 'react'
import './App.css'
import Popup from './view/comp/popup/Popup'
import Warning from './view/comp/popup/Warning'
import LittlePigi from './view/comp/popup/LittlePigi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React + Vite</h1>
      <Popup>
        <Warning />
        <LittlePigi />
      </Popup>
    </div>
  )
}

export default App
