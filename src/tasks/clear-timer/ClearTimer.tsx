import { useEffect } from 'react'

export function ClearTimer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('tick')
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return <div>Running...</div>
}
