import { useEffect } from 'react'

function Example({ isEnabled }: { isEnabled: boolean }) {
  useEffect(() => {
    if (isEnabled) {
      console.log('Enabled')
    }
  }, [isEnabled])

  return <div>Hello</div>
}
