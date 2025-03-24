import { useState, useEffect } from 'react'

export function useTouchControls() {
  const [joystickAngle, setJoystickAngle] = useState(0)
  const [joystickActive, setJoystickActive] = useState(false)

  useEffect(() => {
    const touchStart = (e) => {
      setJoystickActive(true)
      updateJoystickAngle(e.touches[0])
    }

    const touchMove = (e) => {
      if (joystickActive) {
        updateJoystickAngle(e.touches[0])
      }
    }

    const touchEnd = () => {
      setJoystickActive(false)
    }

    const updateJoystickAngle = (touch) => {
      const centerX = window.innerWidth / 4
      const centerY = window.innerHeight - 100
      const angle = Math.atan2(touch.clientX - centerX, touch.clientY - centerY)
      setJoystickAngle(angle)
    }

    document.addEventListener('touchstart', touchStart)
    document.addEventListener('touchmove', touchMove)
    document.addEventListener('touchend', touchEnd)

    return () => {
      document.removeEventListener('touchstart', touchStart)
      document.removeEventListener('touchmove', touchMove)
      document.removeEventListener('touchend', touchEnd)
    }
  }, [joystickActive])

  return { joystickAngle, joystickActive }
}