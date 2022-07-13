import React, { useCallback, useState, useEffect } from 'react'

const useFetch = apiUrl => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const fetching = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(apiUrl)
      const data = await response.json()
      setData(data.data)
      setError(undefined)
    } catch (error) {
      setError(error.toString())
    }
    setLoading(false)
  }, [apiUrl])

  useEffect(() => {
    fetching()
  }, [fetching])

  return { data, loading, error }
}

export default useFetch
