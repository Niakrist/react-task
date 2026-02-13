import { useEffect, useRef } from 'react'

export const useEventListener = (event, handler, target = window) => {
  const savedHandler = useRef(null)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const targetEl = target && 'current' in target ? target.current : target
    if (!targetEl?.addEventListener) return

    const eventListener = e => savedHandler.current(e)
    targetEl.addEventListener(event, eventListener)
    return () => targetEl.removeEventListener(event, eventListener)
  }, [event, target])
}
