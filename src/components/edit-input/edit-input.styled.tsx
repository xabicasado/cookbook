'use client'

import styled from 'styled-components'

export const EditInputStyled = styled.textarea`
  border: 0.15rem solid ${({ theme }) => theme?.colors?.text};
  border-radius: ${({ theme }) => theme?.borderRadius?.l};
  font-family: ${({ theme }) => theme?.fonts?.quicksand};
  font-size: ${({ theme }) => theme?.fontSize?.l};
  /* margin: 0.5em 0; */
  padding: 12px 24px;
  resize: none;
  width: 100%;

  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    /* outline-width: 0; */

    border-color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: ${({ theme }) => theme.boxShadows.level1};

    transition: border-color 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
  }
`
EditInputStyled.displayName = 'EditInputStyled'

export const LabelStyled = styled.label`
  cursor: pointer;
  font-size: ${({ theme }) => theme?.fontSize?.h3};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};
`
LabelStyled.displayName = 'displayName'
