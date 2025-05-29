'use client'

import {
  DayStyled,
  WeekDayPickerStyled,
  WeekStyled,
} from './week-day-picker.styled'
import styled, { css } from 'styled-components'

const animationSkeletonStyles = css`
  @keyframes skeleton-loading {
    0% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.75;
    }
  }

  animation: skeleton-loading 1s linear infinite alternate;
`

const defaultSkeletonStyles = css`
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  background-color: ${({ theme }) => theme?.colors?.invertedText};
`

export const SkeletonStyled = styled(WeekDayPickerStyled)`
  z-index: ${({ theme }) => theme?.layers?.venus};
  ${animationSkeletonStyles}
`
SkeletonStyled.displayName = 'SkeletonStyled'

export const SkeletonWeekStyled = styled(WeekStyled)`
  /* column-gap: ${({ theme }) => theme?.spacing?.s}; */
  /* width: 100%; */
`
SkeletonWeekStyled.displayName = 'SkeletonWeekStyled'

export const SkeletonDayStyled = styled(DayStyled)<{
  $isSelected?: boolean
  $isToday?: boolean
}>`
  cursor: not-allowed;

  ${animationSkeletonStyles}
`
SkeletonDayStyled.displayName = 'SkeletonDayStyled'

export const MonthDayStyled = styled.span`
  /* ${defaultSkeletonStyles} */

  min-height: calc(
    ${({ theme }) => `${theme?.fontSize?.s} * ${theme?.lineHeight?.m}`}
  );

  ${animationSkeletonStyles}
`
MonthDayStyled.displayName = 'MonthDayStyled'
