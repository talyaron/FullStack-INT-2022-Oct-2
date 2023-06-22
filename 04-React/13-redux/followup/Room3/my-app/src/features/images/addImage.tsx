
import { useAppDispatch } from '../../app/hooks'
import { addImage } from './imagesSlice'




const addImages = () => {
    const dispatch = useAppDispatch()

const handleAddImage = (e: any) => {
        e.preventDefault()
        const title = e.target.title.value;
        const url = e.target.url.value;
        console.log(url, title)
        const payload = {url, title};
        dispatch(addImage(payload))
}

  return (
    <div>
      <form onSubmit={handleAddImage}>
        <input type="text" name="title" placeholder='title'/>
        <input type="text" name="url" placeholder='image url'/>
        <input type="submit" value="ADD" />
      </form>
    </div>
  )
}

export default addImages
