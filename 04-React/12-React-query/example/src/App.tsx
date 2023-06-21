
import './App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RandomDog } from './view/comp/RandomDog'

const queryClient = new QueryClient()

function App() {
  try {

    return (
      <QueryClientProvider client={queryClient}>
        <RandomDog />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    )
  } catch (error: any) {
    return (<h2>{error.message}</h2>)

  }
}

export default App
