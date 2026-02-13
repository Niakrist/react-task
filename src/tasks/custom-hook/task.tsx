// Вынеси повторяющуюся логику в кастомный хук
// Задача: избавиться от копипасты и сделать хук useIntervalCounter.

import { useEffect, useState } from 'react'

function TimerComponent() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCount1(c => c + 1), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setCount2(c => c + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {count1} / {count2}
    </div>
  )
}
