import { useEffect, useState } from 'react'

export function WithoutDeps() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // setCount(count + 1)
    console.log('Count:', count)
  }, [count]) // При каждом изменении count

  return <button onClick={() => setCount(count + 1)}>Click</button>
}

// Интеренсо!
// вызовет бесконечный цикл рендеринга если внутри него вызвать setState
// Если добавить второе состояние, то при его изменении будет отрабатывать useEffect
