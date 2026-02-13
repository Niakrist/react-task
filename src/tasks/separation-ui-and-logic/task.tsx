import { useEffect, useState } from 'react'

// Задача: вынеси загрузку данных в кастомный хук, чтобы UI был "тупым
function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser)
  }, [])

  if (!user) return <p>Loading...</p>

  return <div>Hello, {user.name}</div>
}
