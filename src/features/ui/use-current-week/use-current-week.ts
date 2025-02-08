'use client'

import { useMemo, useState } from 'react'

import type { Day, Week } from './types'
import {
  MILLISECONDS_PER_DAY,
  MILLISECONDS_PER_WEEK,
} from './use-current-week.constants'

export const useCurrentWeek = () => {
  const today = new Date()
  const daysToMonday = today.getDay() === 0 ? 6 : today.getDay() - 1

  const [currentWeekStart, setCurrentWeekStart] = useState<number>(
    today.getTime() - daysToMonday * MILLISECONDS_PER_DAY
  )

  const isItToday = (date: Date): boolean =>
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate() &&
    today.getFullYear() === date.getFullYear()

  const getDay = (date: Date): Day => ({
    dayInMilliseconds: date.getTime(),
    monthDay: date.getDate(),
    weekDay: date.getDay(),
    year: date.getFullYear(),
    isToday: isItToday(date),
  })

  const getPreviousWeek = () =>
    setCurrentWeekStart(currentWeekStart - MILLISECONDS_PER_WEEK)

  const getNextWeek = () =>
    setCurrentWeekStart(currentWeekStart + MILLISECONDS_PER_WEEK)

  const currentWeek = useMemo(
    (): Week =>
      [...Array(7).keys()].map((i) =>
        getDay(new Date(currentWeekStart + i * MILLISECONDS_PER_DAY))
      ),
    [currentWeekStart, getDay]
  )

  return {
    currentWeek,
    getPreviousWeek,
    getNextWeek,
  }
}
