import axios from 'axios'
import { useQuery } from 'react-query'

export default function App() {

  const { 
    isLoading, 
    error, 
    data 
  } = useQuery('dogs', () => axios('https://random.dog/woof.json'))

  const response = data && data.status === 200 && data.data
  const url = response && response.url

  return (
    <div className='App'>
      {isLoading && (
        <h1>Loading...</h1>
      )}
      {error && (
        <h1>Error: {error.message}</h1>
      )}
      {url && (
        <img 
          src={url} 
          alt='Dog'
          width='800px'
          height='800px' />
      )}
    </div>
  )
}
