import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Link to='/add'><button>ADD Images</button></Link>
      <Link to='/view'><button>View Images</button></Link>
      </header>
    </div>
  )
}

export default App
