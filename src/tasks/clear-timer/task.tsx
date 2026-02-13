import { useEffect } from 'react'

function ClearTimer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('tick')
    }, 1000)
  }, [])

  return <div>Running...</div>
}
