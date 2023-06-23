import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import {addImage} from "./imagesSlice"

const AddImages = () => {
    const dispatch = useAppDispatch()
    const handleAddImage = (e:any)=>{
        e.preventDefault()
        const target = e.target as typeof e.target &{
            url: {value: string}
            title: {value: string}
        }
        const url = target.url.value
        const title = target.title.value
        console.log(url,title)

        const payload = {url,title};
        dispatch(addImage(payload))
    }


  return (
    <div>
        <form onSubmit={handleAddImage}>
            <input type="text" name="url" placeholder='image url' />
            <input type="text" name="title" placeholder='title' />
            <input type="submit" value="ADD" />
        </form>
    </div>  )
}

export default AddImages