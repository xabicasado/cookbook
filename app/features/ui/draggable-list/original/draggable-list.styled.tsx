import styled from 'styled-components'

export const DraggableListItemStyled = styled.li<{
  $selected?: boolean
}>`
  /* border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.primary}; */

  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  border-radius: ${({ theme }) => theme?.borderRadius?.l};

  padding-block: ${({ theme }) => theme?.spacing?.sm};
  padding-inline: ${({ theme }) => theme?.spacing?.m};
  /* padding-inline: ${({ theme }) => theme?.spacing?.l}; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`
DraggableListItemStyled.displayName = 'DraggableListItemStyled'

export const LabelStyled = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'LabelStyled'

export const ListItemContentStyled = styled.textarea`
  resize: none;
  field-sizing: content;

  font-family: inherit;
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  width: 100%;
  min-height: ${({ theme }) => theme?.spacing?.xxl};

  border: ${({ theme }) => theme?.spacing?.xxs} solid
    ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.l};

  padding: ${({ theme }) => theme?.spacing?.xs};
  margin: ${({ theme }) => theme?.spacing?.xs};

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
      ${({ theme }) => theme?.colors?.primary};
  }
`
ListItemContentStyled.displayName = 'ListItemContentStyled'
