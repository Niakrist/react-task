import { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

// Задача: вынеси загрузку данных в кастомный хук, чтобы UI был "тупым
function Profile() {
  const user = useFetch('/api/user')

  if (!user) return <p>Loading...</p>

  return <div>Hello, {user.name}</div>
}
