import { useEffect, useRef, useState } from 'react'

// Ошибка из-за замыкания

// Вариант 1
export function Timer() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [count])
  return <div>{count}</div>
}

// Вариант 2
export function Timer2() {
  const [count, setCount] = useState(0)
  let refInterval = useRef<number | null>(null)
  useEffect(() => {
    refInterval.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    return () => {
      if (refInterval.current) {
        clearInterval(refInterval.current)
      }
    }
  }, [count])
  return <div>{count}</div>
}

// Вариант 3
export function Timer3() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(countRef.current + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])
  return <div>{count}</div>
}
