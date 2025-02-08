'use client'

import styled, { css } from 'styled-components'

const selectedStyles = css`
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
`

const todayStyles = css`
  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.primary};
`

export const WeekDayPickerStyled = styled.section`
  display: flex;
  /* display: grid; */
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme?.spacing?.s};
  /* flex-wrap: wrap; */
  /* overflow: auto; */
`
WeekDayPickerStyled.displayName = 'WeekDayPickerStyled'

export const WeekStyled = styled.ul`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme?.spacing?.s};
`
WeekStyled.displayName = 'WeekStyled'

export const DayStyled = styled.li<{ isSelected?: boolean; isToday?: boolean }>`
  cursor: pointer;

  /* TODO Revisar el currentDay mas alto */

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* flex-wrap: wrap; */
  row-gap: ${({ theme }) => theme?.spacing?.xs};

  ${({ isSelected }) => (isSelected ?? false) && selectedStyles}
  ${({ isToday }) => (isToday ?? false) && todayStyles}

  /* min-width: ${({ theme }) => theme?.spacing?.l}; */
  padding-block: ${({ theme }) => theme?.spacing?.s};
  padding-inline: ${({ theme }) => theme?.spacing?.sm};

  border-radius: ${({ theme }) => theme?.borderRadius?.full};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
DayStyled.displayName = 'DayStyled'
