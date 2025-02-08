export type Day = {
  dayInMilliseconds: number
  monthDay: number
  weekDay: number
  year: number
  isToday?: boolean
}

export type Week = Day[]
