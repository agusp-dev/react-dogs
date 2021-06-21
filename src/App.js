import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState({})

  useEffect( () => {

    const fetchData = async () => {
      setData(null)
      setError(false)
      setLoading(true)
      try {
        const response = await axios('https://random.dog/woof.json')
        setData(response.data) 
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {isLoading && (
        <h1>Loading...</h1>
      )}
      {error && (
        <h1>Error: {error}</h1>
      )}
      {data && (
        <img 
          src={data.url} 
          alt='Dog'
          width='800px'
          height='800px' />
      )}
    </div>
  )
}
