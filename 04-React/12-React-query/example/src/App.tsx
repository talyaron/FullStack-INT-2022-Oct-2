
import './App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RandomDog } from './view/comp/RandomDog'
import { Link, Outlet } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  try {

    return (
      <QueryClientProvider client={queryClient}>
        <h1>Cats and Dogs</h1>
        <Link to="/dogs"><button>A random Dog</button></Link>
        <Link to="/cats"><button>A random Cat</button></Link>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    )
  } catch (error: any) {
    return (<h2>{error.message}</h2>)

  }
}

export default App
