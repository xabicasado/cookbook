import { WEEK_DAYS } from './week-day-picker.constants'
import {
  MonthDayStyled,
  SkeletonDayStyled,
  SkeletonStyled,
  SkeletonWeekStyled,
} from './week-day-picker.skeleton.styled'

import { Button } from '@/app/features/ui'

export function WeekDayPickerSkeleton() {
  return (
    <SkeletonStyled>
      <Button disabled size="small" justify="start" beforeIcon="chevron_left" />
      <SkeletonWeekStyled>
        {/* {Object.values(WEEK_DAYS).map((weekDay) => (
          <SkeletonDayStyled isSelected={true}>
            <span>{weekDay}</span>
          </SkeletonDayStyled>
        ))} */}

        <SkeletonDayStyled $isSelected={true} $isToday={true}>
          <span>{WEEK_DAYS[1]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
        <SkeletonDayStyled>
          <span>{WEEK_DAYS[2]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
        <SkeletonDayStyled>
          <span>{WEEK_DAYS[3]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
        <SkeletonDayStyled>
          <span>{WEEK_DAYS[4]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
        <SkeletonDayStyled>
          <span>{WEEK_DAYS[5]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
        <SkeletonDayStyled>
          <span>{WEEK_DAYS[6]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
        <SkeletonDayStyled>
          <span>{WEEK_DAYS[0]}</span>
          <MonthDayStyled />
        </SkeletonDayStyled>
      </SkeletonWeekStyled>
      <Button disabled size="small" justify="end" beforeIcon="chevron_right" />
    </SkeletonStyled>
  )
}
