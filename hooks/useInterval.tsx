import { useRef, useEffect } from 'react'

export function useInterval(callback: () => void, delay) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback?.current()
    }

    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
