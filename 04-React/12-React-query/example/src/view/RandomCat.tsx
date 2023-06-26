import {useEffect, useState} from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getRandomDogImage } from './comp/RandomDog'

const RandomCat = () => {
    const [image, setImage] = useState('')
 
    const { data:data2 } = useQuery({ queryKey: ['dogs'], queryFn: getRandomDogImage })
    console.log(data2)
  
    useEffect(() => {
        setImage(data2)
    
    },[data2])
   
  
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['cats'], queryFn: getRandomCatImage })
    console.log(data, isLoading, isError, error)
    return (
        <div>
            <div>RandomCat</div>
            <Link to='/dogs'><button>Dog</button></Link>
            {data?<img src={data} alt="A Random Cat" />:<p>Loading...</p>}
            {data?<img src={image} alt="A Random Doc" />:<p>Loading...</p>}
        </div>
    )
}

export default RandomCat;

async function getRandomCatImage(): Promise<string> {
    try {
        const data = await axios.get('https://api.thecatapi.com/v1/images/search');
        console.log(data)
        const {url} = data.data[0];
        console.log(data.data[0].url)
        // if (!url) throw new Error('No url');
        return url
    } catch (error) {
        return Promise.reject(error)
    }
}