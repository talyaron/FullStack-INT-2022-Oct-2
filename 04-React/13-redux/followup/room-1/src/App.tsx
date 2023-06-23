import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import AddImages from "./features/images/AddImage"
import { useAppSelector } from "./app/hooks"
import { selectImages } from "./features/images/imagesSlice"

function App() {
  const images = useAppSelector(selectImages) 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddImages />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <div className="images">
      {images.map((image) => {
        return (
          <div className="image" key={image.id}>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App
