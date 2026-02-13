// Ошибка с async в useEffect
import React, { useEffect, useState } from 'react'

export const AsyncUseEffect = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.log(error)
        setData([])
      }
    }
    fetchData()
  }, [])

  return <div></div>
}

// useEffect не поддерживает async-функции напрямую.
