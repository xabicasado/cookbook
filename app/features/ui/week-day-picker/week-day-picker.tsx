'use client'

import { useState } from 'react'

import { WEEK_DAYS } from './week-day-picker.constants'
import {
  DayStyled,
  WeekDayPickerStyled,
  WeekStyled,
} from './week-day-picker.styled'

import { Button, useCurrentWeek } from '@/app/features/ui'

/**
 * Displays a week with the week and month day for each one.
 *
 * The days are selectables and it's possible to move to the previous/next week.
 *
 * If the current day is displayed, it will be highlighted.
 */
export function WeekDayPicker() {
  // TODO useSearchParams for setting the currentWeek
  const { currentWeek, getPreviousWeek, getNextWeek } = useCurrentWeek()

  const [selectedWeekDay, setSelectedWeekDay] = useState<number>(
    currentWeek.find(({ isToday }) => isToday)?.weekDay ?? 1
  )

  const handlePreviousWeek = () => {
    getPreviousWeek()
    setSelectedWeekDay(1)
  }

  const handleNextWeek = () => {
    getNextWeek()
    setSelectedWeekDay(1)
  }

  return (
    <WeekDayPickerStyled>
      <Button
        size="small"
        justify="start"
        beforeIcon="chevron_left"
        onClick={handlePreviousWeek}
      />
      <WeekStyled>
        {currentWeek.map(({ weekDay, monthDay, isToday }) => {
          return (
            <DayStyled
              key={weekDay}
              $isSelected={weekDay === selectedWeekDay}
              $isToday={isToday}
              onClick={() => setSelectedWeekDay(weekDay)}
            >
              <span>{WEEK_DAYS[weekDay]}</span>
              <span>{monthDay}</span>
            </DayStyled>
          )
        })}
      </WeekStyled>
      <Button
        size="small"
        justify="end"
        beforeIcon="chevron_right"
        onClick={handleNextWeek}
      />
    </WeekDayPickerStyled>
  )
}
