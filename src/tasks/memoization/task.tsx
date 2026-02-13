// Компонент перерендеривается при каждом клике, хотя дочерние элементы не изменяются.

import { useState } from 'react'

function Item({ name }) {
  console.log('rendering item:', name)
  return <li>{name}</li>
}

function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <Item key={item} name={item} />
      ))}
    </ul>
  )
}

export default function MyApp() {
  const [count, setCount] = useState(0)
  const items = ['Apple', 'Banana', 'Orange']

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <List items={items} />
    </div>
  )
}
