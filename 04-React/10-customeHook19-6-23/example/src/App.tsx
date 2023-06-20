import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useDog from './hooks/useDog'

function App() {
  const [count, setCount] = useState(0)
  const {dog, error, loading} = useDog();
console.log(dog)
  return (
    <>
      {!loading?<div>
        {dog?<img src={`${dog}`}/>:null}
       </div>:<div>loading...</div>}
    </>
  )
}

export default App
