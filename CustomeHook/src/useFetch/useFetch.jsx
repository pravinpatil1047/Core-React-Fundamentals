import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
        setError(null)
        setContent(null)
      } catch (err) {
        setError(err)
        setData(null)
        setContent(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  useEffect(() => {
    if (loading) {
      setContent(<p>Loading...</p>)
    } else if (error) {
      setContent(<p>Error: {error.message}</p>)
    } else if (data) {
      setContent(data)
    } else {
      setContent(<p>No data available.</p>)
    }
  }, [data, loading, error])

  return { content, data }
}

export default useFetch
