import * as React from 'react'
import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

function A() {
  console.log('A')
  return <B />
}

function B() {
  console.log('B')
  return <C />
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A state={state} />
      <D />
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)

// React рендерит компоненты:
// Сверху вниз по дереву
// Глубиной (полностью завершает ветку перед следующей)
// Синхронно (все console.log будут до обновления DOM)
// useEffect выполняется ПОСЛЕ завершения рендера и обновления DOM! 🚀

// App  1️⃣ Первый рендер
// A    2️⃣
// B    3️⃣
// C    4️⃣
// D    5️⃣
// App  6️⃣ Повторный рендер
// A    7️⃣
// B    8️⃣
// C    9️⃣
// D    🔟
