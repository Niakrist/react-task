import { useState, useEffect, type ReactNode } from 'react'

interface IUser {
  id: number
  name: string
}

function UserList() {
  const { users, loading, error } = useFetch()

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <List>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </List>
      )}
    </div>
  )
}

export default UserList

function fetchUsers(): Promise<IUser[]> {
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

export const useFetch = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true
    const fetchUsersData = async () => {
      setLoading(true)
      setError(null)
      try {
        const data: IUser[] = await fetchUsers()
        if (isMounted) {
          setUsers(data)
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error : new Error(String(error)))
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }
    fetchUsersData()

    return () => {
      isMounted = false
    }
  }, [])

  return { users, loading, error }
}

export const List = ({ children }: { children: ReactNode }) => {
  return <ul>{children}</ul>
}

export const UserItem = ({ user }: { user: IUser }) => {
  return <li>{user.name}</li>
}
