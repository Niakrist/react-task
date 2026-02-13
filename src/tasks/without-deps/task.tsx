// useEffect без deps

import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // setCount(count + 1)
    console.log('Count:', count)
  }) // 🔄 Рендер → эффект → setState → рендер → эффект → ..

  return <button onClick={() => setCount(count + 1)}>Click</button>
}
// Интеренсо!
// вызовет бесконечный цикл рендеринга если внутри него вызвать setState
