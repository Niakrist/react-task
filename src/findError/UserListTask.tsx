// Задача на собеседование
// Необходимо найти и исправить все ошибки. Компонент должен выводить на экран список пользователей
import React, { useState, useEffect } from 'react'

function fetchUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ])
    }, 1000)
  })
}

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(async () => {
    setLoading(true)
    try {
      const response = await fetchUsers()
      const data = response.json()

      users.push(...data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList
