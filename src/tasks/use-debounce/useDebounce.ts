import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number): T => {
  const [delayValue, setDelayValue] = useState(value)

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDelayValue(value)
    }, delay)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, delay])

  return delayValue
}
