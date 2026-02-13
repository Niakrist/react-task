// Нарушение правил хуков

import { useEffect } from 'react'

function Example({ isEnabled }) {
  if (isEnabled) {
    useEffect(() => {
      console.log('Enabled')
    }, [])
  }

  return <div>Hello</div>
}
