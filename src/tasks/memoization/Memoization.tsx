// Компонент перерендеривается при каждом клике, хотя дочерние элементы не изменяются.

import React, { useState } from 'react'

function Item({ name }: { name: string }) {
  console.log('rendering item:', name)
  return <li>{name}</li>
}

const List = React.memo(({ items }: { items: string[] }) => {
  return (
    <ul>
      {items.map(item => (
        <Item key={item} name={item} />
      ))}
    </ul>
  )
})

export default function MyApp() {
  const [count, setCount] = useState(0)
  const items = React.useMemo(() => ['Apple', 'Banana', 'Orange'], [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <List items={items} />
    </div>
  )
}

// 1. Обернуть в useMemo  или вынести за компонент
// const items = React.useMemo(() => ['Apple', 'Banana', 'Orange'], [])
// 2 Обернуть List в React.memo
