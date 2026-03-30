export type DraggableListProps = {
  listItems: string[]
  setListItems: (items: string[]) => void
  label?: string
  onChange?: (value: string, index: number) => void
  onDelete?: (index: number) => void
}
