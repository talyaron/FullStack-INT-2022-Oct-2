import { useState, useEffect} from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Link } from 'react-router-dom';

export function RandomDog() {
  // Access the client
  const queryClient = useQueryClient()
  const [image, setImage] = useState('')
  // Queries
  const { data:data2, isLoading, isError, error } = useQuery({ queryKey: ['dogs'], queryFn: getRandomDogImage })
  console.log(data2, isLoading, isError, error)

  useEffect(() => {
    setImage(data2)
  },[data2])
  // Mutations
  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })

  return (
    <div>
      <h1>Test</h1>
      {!isLoading && image? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}
      <Link to='/cats'><button>Cats</button></Link>
    </div>
  )
}

export async function getRandomDogImage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  return data.message
}

