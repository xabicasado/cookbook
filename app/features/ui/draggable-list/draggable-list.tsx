'use client'

import type { ChangeEvent, DragEvent} from 'react';
import { useMemo, useState } from 'react'

import {
  DraggableListItemStyled,
  LabelStyled,
  ListItemContentStyled,
} from './draggable-list.styled'
import type { DraggableListProps } from './types'

import { ListSection } from '@/app/features/layout'
import { Button } from '@/app/features/ui'

export function DraggableList({
  listItems,
  setListItems,
  label,
}: DraggableListProps) {
  const [dragItemIndex, setDragItemIndex] = useState<number | null>(null)
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(
    null
  )
  const [isDragging, setIsDragging] = useState(false)

  const isDraggable: boolean = useMemo(
    () => listItems.length > 1,
    [listItems.length]
  )

  const enableIsDragging = (index: number) => {
    setIsDragging(true)
    setDragItemIndex(index)
  }

  const resetDragging = () => {
    setDragItemIndex(null)
    setDragOverItemIndex(null)
    setIsDragging(false)
  }

  const handleDragStart = (event: DragEvent<HTMLLIElement>, index: number) => {
    const originalElement = event.currentTarget
    const dragPreview = originalElement.cloneNode(true) as HTMLElement

    const innerContent = dragPreview.querySelector('div')

    if (innerContent) innerContent.style.visibility = 'visible'

    // dragPreview.style.position = 'fixed'
    // dragPreview.style.top = '-9999px'
    // dragPreview.style.left = '-9999px'
    document.body.appendChild(dragPreview)

    event.dataTransfer.setDragImage(dragPreview, 0, 0)

    requestAnimationFrame(() => document.body.removeChild(dragPreview))

    enableIsDragging(index)
  }

  const handleDragEnter = (event: DragEvent<HTMLLIElement>, index: number) =>
    setDragOverItemIndex(index)

  const handleDragEnd = () => {
    if (dragItemIndex === null || dragOverItemIndex === null) return

    const stepsCopy = [...listItems]

    const dragItemContent = stepsCopy[dragItemIndex]
    stepsCopy.splice(dragItemIndex, 1)
    stepsCopy.splice(dragOverItemIndex, 0, dragItemContent)

    resetDragging()

    setListItems(stepsCopy)
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
            draggable={isDraggable}
            $isDraggable={isDraggable}
            onDragStart={(event) => handleDragStart(event, index)}
            onDragEnter={(event) => handleDragEnter(event, index)}
            onDragEnd={handleDragEnd}
            onDragOver={(event) => event.preventDefault()} // Needed for dragEnter
            $selected={dragItemIndex === index}
            $isDraggingOver={dragOverItemIndex === index}
          >
            <div
              style={{
                visibility:
                  isDragging && dragItemIndex === index ? 'hidden' : 'visible',
              }}
            >
              {index + 1}.{' '}
              <ListItemContentStyled
                placeholder={`Describe el paso ${index + 1}`}
                value={item}
                onChange={(event) => handleChange(event, index)}
              />
              <Button
                primary
                size="small"
                beforeIcon="delete"
                onClick={() => handleDelete(index)}
              />
              {isDraggable && <Button primary beforeIcon="drag_indicator" />}
            </div>
          </DraggableListItemStyled>
        ))}
      </ListSection>
    </>
  )
}
