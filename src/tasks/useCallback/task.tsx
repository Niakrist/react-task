// Отсутствие мемоизации в useCallback
//Child ререндерится каждый раз, хотя обёрнут в memo, потому что handleClick — новая функция каждый раз.

import React from 'react'

function Parent() {
  const handleClick = () => {
    console.log('clicked')
  }

  return <Child onClick={handleClick} />
}

const Child = React.memo(({ onClick }) => {
  console.log('render child')
  return <button onClick={onClick}>Click</button>
})
