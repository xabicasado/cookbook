import styled from 'styled-components'

export const ToggleSectionStyled = styled.section`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`
ToggleSectionStyled.displayName = 'ToggleSectionStyled'

export const ToggleLabelStyled = styled.label`
  cursor: pointer;

  position: relative;
  border-radius: ${({ theme }) => theme?.borderRadius?.full};
  background-color: ${({ theme }) => theme?.colors?.secondary};

  width: 40px;
  height: 20px;

  &:after {
    content: '';
    position: absolute;

    width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme?.borderRadius?.full};
    background-color: ${({ theme }) => theme?.colors?.invertedText};

    top: 1px;
    left: 1px;

    transition: all 0.3s ease;
  }
`
ToggleLabelStyled.displayName = 'ToggleLabelStyled'

export const ToggleStyled = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;

  /*
  &:focus {}
  */

  &:checked + ${ToggleLabelStyled}:after {
    left: 20px;
  }

  &:checked + ${ToggleLabelStyled} {
    background-color: ${({ theme }) => theme?.colors?.primary};
  }
`
ToggleStyled.displayName = 'ToggleStyled'

export const IconStyled = styled.span`
  /* z-index */
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  & * {
    color: ${({ theme }) => theme?.colors?.invertedText};
    font-size: ${({ theme }) => theme?.fontSize?.d};
  }
`
IconStyled.displayName = 'IconStyled'

/* TODO Improve styling */
export const LabelStyled = styled.label`
  cursor: pointer;
  padding-inline: ${({ theme }) => theme?.spacing?.s};
`
LabelStyled.displayName = 'LabelStyled'
