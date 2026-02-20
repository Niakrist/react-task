import { useEffect, useState } from 'react'



export const useFetch = (url: string) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setUser)
  }, [])

  return user
}
