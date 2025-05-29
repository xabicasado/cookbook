'use client'

import type { ChangeEvent, DragEvent} from 'react';
import { useRef } from 'react'

import type { DraggableListProps } from '../types'
import {
  DraggableListItemStyled,
  LabelStyled,
  ListItemContentStyled,
} from './draggable-list.styled'

import { ListSection } from '@/app/features/layout'
import { Button } from '@/app/features/ui'

export function DraggableList({
  listItems,
  setListItems,
  label,
}: DraggableListProps) {
  const dragItem = useRef<number | null>(null)
  const dragOverItem = useRef<number | null>(null)

  const handleDragStart = (event: DragEvent<HTMLLIElement>, index: number) =>
    (dragItem.current = index)

  const handleDragEnter = (event: DragEvent<HTMLLIElement>, index: number) =>
    (dragOverItem.current = index)

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const stepsCopy = [...listItems]

      const dragItemContent = stepsCopy[dragItem.current]
      stepsCopy.splice(dragItem.current, 1)
      stepsCopy.splice(dragOverItem.current, 0, dragItemContent)
      dragItem.current = null
      dragOverItem.current = null

      setListItems(stepsCopy)
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedItems = [...listItems]
    updatedItems[index] = event.target.value

    setListItems(updatedItems)
  }

  const handleDelete = (index: number) => {
    const updatedItems = [...listItems]
    updatedItems.splice(index, 1)

    setListItems(updatedItems)
  }

  return (
    <>
      {label && <LabelStyled>{label}</LabelStyled>}

      <ListSection size="large">
        {listItems.map((item, index) => (
          <DraggableListItemStyled
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragEnter={(event) => handleDragEnter(event, index)}
            onDragEnd={handleDragEnd}
            onDragOver={(event) => event.preventDefault()} // Needed for dragEnter
            $selected={dragItem.current === index}
          >
            {index + 1}.{' '}
            <ListItemContentStyled
              placeholder={`Describe el paso ${index + 1}`}
              value={item}
              onChange={(event) => handleChange(event, index)}
            />
            <Button primary beforeIcon="drag_handle" />
            <Button
              primary
              size="small"
              beforeIcon="delete"
              onClick={() => handleDelete(index)}
            />
          </DraggableListItemStyled>
        ))}
      </ListSection>
    </>
  )
}

// stepsList.map((step, index) => (
//   <Draggable key={index} draggableId={`step-${index}`} index={index}>
//     {(provided) => (
//       <div
//         ref={provided.innerRef}
//         {...provided.draggableProps}
//         {...provided.dragHandleProps}
//       >
//         {step}
//       </div>
//     )}
//   </Draggable>
// ));
