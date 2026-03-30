'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export const useScreenWakeLock = () => {
  const [isActive, setIsActive] = useState(false)
  const sentinelRef = useRef<WakeLockSentinel | null>(null)

  const requestScreenWakeLock = useCallback(async () => {
    if (!('wakeLock' in navigator)) return

    try {
      const lock = await navigator.wakeLock.request('screen')

      lock.onrelease = () => {
        setIsActive(false)
        sentinelRef.current = null
      }

      sentinelRef.current = lock
      setIsActive(true)
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error(`${error.name}, ${error.message}`)
      else console.error('Wake Lock request failed')
    }
  }, [])

  const releaseScreenWakeLock = useCallback(async () => {
    if (sentinelRef.current) {
      await sentinelRef.current.release()
      sentinelRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => {
      releaseScreenWakeLock()
    }
  }, [releaseScreenWakeLock])

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (
        sentinelRef.current !== null &&
        document.visibilityState === 'visible'
      )
        await requestScreenWakeLock()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [requestScreenWakeLock])

  return { isActive, requestScreenWakeLock, releaseScreenWakeLock }
}
