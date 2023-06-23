import { ImageType } from "./imageSlice"
import "./style.scss"
import Image from "./Image"

interface Props {
  images: ImageType[]
}

const Images = ({ images }: Props) => {
  return (
    <div className="imgContainer">
      {images.map((img) => (
        <Image key={img.id} img={img} />
      ))}
    </div>
  )
}

export default Images
