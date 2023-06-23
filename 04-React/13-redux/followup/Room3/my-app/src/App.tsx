
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { useAppSelector } from "./app/hooks"
import { selectImages } from "./features/images/imagesSlice"
import AddImage from "./features/images/addImage"
import { Key, ReactElement, JSXElementConstructor, ReactNode } from "react"

interface Image {
  title: string;
  url: string;
}


function App() {
  const images: Image[] = useAppSelector(selectImages)
  return (
    <div className="App">
      <header className="App-header">
        <AddImage />
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
      {images.map((image) =>{
        return (
          <div className="image">
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
