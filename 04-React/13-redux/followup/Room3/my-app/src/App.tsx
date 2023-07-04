
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
