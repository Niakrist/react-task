import React, { useState } from 'react'

const data = [
  { id: 1, item: 'item 1' },
  { id: 2, item: 'item 2' },
  { id: 3, item: 'item 3' }
]

const Item = ({ item }: { item: { id: number; item: string } }) => {
  return <li>{item.item}</li>
}

// List для отрисовки нужен один, а item-ы могут быть разными
const List = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>
}

export const DropDown = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <button onClick={() => setIsShow(prev => !prev)}>toggle</button>
      {isShow && (
        <List>
          {data.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </List>
      )}
    </div>
  )
}
