import { Counter } from "./features/counter/Counter"
import { useState } from "react"
import "./App.css"
import Images from "./features/images/Images"
import { ImageType } from "./features/images/imageSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectImages } from "./features/images/imageSlice"
import { addImage } from "./features/images/imageSlice"
import { FormEvent } from "react"

const initImage: ImageType = {
  id: 0,
  imgUrl: "",
  alt: "",
}

function App() {
  const [newImgUrl, setNewImgUrl] = useState("")
  const [newImgAlt, setNewImgAlt] = useState("")

  const images: ImageType[] = useAppSelector(selectImages)

  const dispatch = useAppDispatch()

  const addNewImage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = images.length + 1
    const newImage = {
      id,
      imgUrl: newImgUrl,
      alt: newImgAlt,
    }
    dispatch(addImage(newImage))
    setNewImgAlt("")
    setNewImgUrl("")
  }

  return (
    <div className="App">
      <a
        className="src"
        href="https://amazing-creature.blogspot.com/2015/10/funny-animals-of-week-30-october-2015.html"
      >
        image src
      </a>
      <form onSubmit={(e) => addNewImage(e)}>
        <input
          type="text"
          placeholder="image url"
          value={newImgUrl}
          onChange={(e) => setNewImgUrl((prev) => (prev = e.target.value))}
        />
        <input
          type="text"
          placeholder="image description"
          value={newImgAlt}
          onChange={(e) => setNewImgAlt((prev) => (prev = e.target.value))}
        />
        <input type="submit" value="add" />
      </form>
      <Images images={images} />
      <p>double click to delete image</p>
      {/* <Counter /> */}
    </div>
  )
}

export default App
