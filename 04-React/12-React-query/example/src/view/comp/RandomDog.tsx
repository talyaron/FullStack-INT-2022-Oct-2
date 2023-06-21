import { useState, useEffect} from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export function RandomDog() {
  // Access the client
  const queryClient = useQueryClient()
  const [image, setImage] = useState('')
  // Queries
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['dogs'], queryFn: getRandomDogImage })
  console.log(data, isLoading, isError, error)

  useEffect(() => {
    setImage(data)
  },[data])
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
    </div>
  )
}

async function getRandomDogImage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  return data.message
}

