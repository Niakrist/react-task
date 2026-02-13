import { useEffect, useState } from 'react'

export const useIntervalCounter = (
  initialValue: number = 0,
  delay: number = 1000
) => {
  const [count, setCount] = useState(initialValue)
  useEffect(() => {
    const id = setInterval(() => setCount(count => count + 1), delay)
    return () => clearInterval(id)
  }, [])
  return count
}
