import { useState, useEffect } from 'react'

export function useKeyboard() {
  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  })

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          setKeys((keys) => ({ ...keys, forward: true }))
          break
        case 'KeyS':
        case 'ArrowDown':
          setKeys((keys) => ({ ...keys, backward: true }))
          break
        case 'KeyA':
        case 'ArrowLeft':
          setKeys((keys) => ({ ...keys, left: true }))
          break
        case 'KeyD':
        case 'ArrowRight':
          setKeys((keys) => ({ ...keys, right: true }))
          break
      }
    }

    const handleKeyUp = (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          setKeys((keys) => ({ ...keys, forward: false }))
          break
        case 'KeyS':
        case 'ArrowDown':
          setKeys((keys) => ({ ...keys, backward: false }))
          break
        case 'KeyA':
        case 'ArrowLeft':
          setKeys((keys) => ({ ...keys, left: false }))
          break
        case 'KeyD':
        case 'ArrowRight':
          setKeys((keys) => ({ ...keys, right: false }))
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return keys
}