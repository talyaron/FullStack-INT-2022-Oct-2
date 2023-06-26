import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectImages } from '../../features/images/imagesSlice'
import ImageCard from '../comp/ImageCard'

const ViewImages = () => {
    const images = useAppSelector(selectImages);

    return (
        <div>
            <h1>ViewImages</h1>
            <Link to='/add'><button>ADD Images</button></Link>
            {images.map((image) => <ImageCard key={image.id} image={image} />)}
        </div>
    )
}

export default ViewImages