import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import { addImage } from '../../features/images/imagesSlice';

const AddImages = () => {
  const dispatch = useAppDispatch();

  function handleAddImage(ev: any) {
    try {
      ev.preventDefault()
      const url = ev.target.url.value
      const name = ev.target.name.value
      const id = `${name}-${Date.now()}-${Math.random()}}`;
      if (!url || !name) throw new Error('Please enter all the fields');

      const data = { url, name, id };
      dispatch(addImage(data));

    } catch (error) {
      console.error(error)
    }


  }
  return (
    <div>
      <h1>AddImages</h1>
      <Link to='/view'><button>View Images</button></Link>
      <form onSubmit={handleAddImage}>
        <input type="url" name="url" placeholder='image url' />
        <input type="text" name="name" placeholder='image name' />
        <input type="submit" value="ADD" />
      </form>
    </div>
  )
}

export default AddImages