// Отсутствие мемоизации в useCallback
//Child ререндерится каждый раз, хотя обёрнут в memo, потому что handleClick — новая функция каждый раз.

import React, { useCallback, useState } from 'react'

export function MyUseCallback() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    return () => {
      console.log('clicked')
    }
  }, [])

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>count: {count}</button>
      <Child onClick={handleClick} />
    </>
  )
}

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('render child')
  return <button onClick={onClick}>Click</button>
})
