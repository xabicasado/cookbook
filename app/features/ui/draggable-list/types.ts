// import { ChangeEvent } from 'react'

export type DraggableListProps = {
  listItems: string[]
  setListItems: (items: string[]) => void
  label?: string
  // onChange?: (event: ChangeEvent<HTMLTextAreaElement>, index: number) => void
  // onDelete?: (index: number) => void
}
