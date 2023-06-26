import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectImages, selectStatus } from '../../features/images/imagesSlice'
import ImageCard from '../comp/ImageCard'
import { getRandomDogAync } from '../../features/images/imagesAPI'
import Loader from '../comp/Loader'

const ViewImages = () => {
    const dispatch = useAppDispatch();
    const images = useAppSelector(selectImages);
    const status = useAppSelector(selectStatus);

function handleGetRandomImage(){
    dispatch(getRandomDogAync())
}

    return (
        <div>
            <h1>ViewImages</h1>
            <button onClick={handleGetRandomImage}>Get Random Image</button>
            {status === 'loading' && <Loader/>}
            <Link to='/add'><button>ADD Images</button></Link>
            {images.map((image) => <ImageCard key={image.id} image={image} />)}
        </div>
    )
}

export default ViewImages