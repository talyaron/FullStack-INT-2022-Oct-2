import React, { FC, useState } from 'react'
import { Image, deleteImage, updateImage } from '../../features/images/imagesSlice'
import { useAppDispatch } from '../../app/hooks';

interface Props {
  image: Image
}

const ImageCard: FC<Props> = ({ image }) => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);


  function handleEditImage(ev: any) {
    try {
      ev.preventDefault();

      const url = ev.target.url.value
      const name = ev.target.name.value

      if (!url || !name) throw new Error('Please enter all the fields');

      const data = { url, name, id: image.id };
      dispatch(updateImage(data))
      setIsEdit(false);

    } catch (error) {
      console.error(error)
    }

  }

  function handleDeleteImage() {
    dispatch(deleteImage(image))
  }
  return (
    <div>
      <img src={image.url} alt={image.name} />
      <p>{image.name}</p>
      {isEdit ? <form onSubmit={handleEditImage}>
        <input type="url" name="url" placeholder='image url' />
        <input type="text" name="name" placeholder='image name' />
        <input type="submit" value="ADD" />
      </form> : <button onClick={() => setIsEdit(true)}>Edit</button>}
      <button onClick={handleDeleteImage}>Delete</button>
    </div>
  )
}
export default ImageCard
