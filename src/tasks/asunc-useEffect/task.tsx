// Ошибка с async в useEffect
import React, { useEffect, useState } from 'react'

const task = () => {
  const [data, setData] = useState([])
  useEffect(async () => {
    const res = await fetch('/api/data')
    const data = await res.json()
    setData(data)
  }, [])

  return <div></div>
}

// useEffect не поддерживает async-функции напрямую.
