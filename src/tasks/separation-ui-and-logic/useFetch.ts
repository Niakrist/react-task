import { useEffect, useState } from 'react'

interface IUser {
  name: string
}

export const useFetch = (url: string) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setUser)
  }, [])

  return user
}
