import { ImageType } from "./imageSlice"
import { useAppDispatch } from "../../app/hooks"
import { removeImage, updateUrl } from "./imageSlice"
import { useState, FormEvent } from "react"

interface Props {
  img: ImageType
}

const Image = ({ img }: Props) => {
  const [newImgUrl, setNewImgUrl] = useState("")
  const dispatch = useAppDispatch()
  const handleImageDelete = (e: any) => {
    const targetImg = e.target
    dispatch(removeImage(targetImg.id))
  }

  const handleImgChange = (e: FormEvent<HTMLFormElement>, imgId: number) => {
    e.preventDefault()
    dispatch(updateUrl({ newImgUrl, imgId }))
    setNewImgUrl("")
  }
  return (
    <div>
      <img
        onDoubleClick={(e) => handleImageDelete(e)}
        id={String(img.id)}
        src={img.imgUrl}
        alt={img.alt}
      />
      <form onSubmit={(e) => handleImgChange(e, img.id)}>
        <input
          value={newImgUrl}
          onChange={(e) => setNewImgUrl(e.target.value)}
          type="text"
          placeholder="New img url"
        />
      </form>
    </div>
  )
}

export default Image
