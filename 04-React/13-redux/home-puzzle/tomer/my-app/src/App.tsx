import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import AddImages from "./features/image/AddImages"
import { useAppSelector } from "./app/hooks";
import { selectImages } from "./features/image/imageSlice";
import UpdateImageComponent from "./features/image/updateImage";
import DeleteImage from "./features/image/deleteImage";

function App() {
  const images = useAppSelector(selectImages);

  return (
    <div className="App">
      <header className="App-header">
        <AddImages />
        {images.map((image) => (
          <DeleteImage key={image.id} image={image} />
        ))}
        {images.map((image) => (
          <UpdateImageComponent key={image.id} image={image} />
        ))}
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
      </header>
    </div>
  )
}

export default App;
