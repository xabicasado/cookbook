'use client'

import styled from 'styled-components'

export const CardStyled = styled.article`
  /* TODO vertical layout with img */
  /* https://www.youtube.com/watch?v=cf-J4ffMBfo */

  /* box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
    ${({ theme }) => theme?.colors?.primary}; */

  padding-block: ${({ theme }) => theme?.spacing?.m};
  padding-inline: ${({ theme }) => theme?.spacing?.l};

  text-align: center;
  border-radius: ${({ theme }) => theme?.borderRadius?.l};

  background-color: ${({ theme }) => theme?.colors?.primary};
  /* background-color: ${({ theme }) => theme?.colors?.third}; */
  /* background-color: ${({ theme }) => theme?.colors?.fourth}; */

  /* background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme?.colors?.primaryA},
    ${({ theme }) => theme?.colors?.primaryB}
  ); */

  /* https://codepen.io/nelledejones/pen/gOOPWrK */
  /* animation: bounce-in-right 2s ease infinite; */
  /* animation: bounce-in-right 2s ease; */

  /* @keyframes bounce-in-right {
    0% {
      opacity: 0;
      transform: translateX(2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(-30px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  } */

  /* https://thoughtbot.com/blog/transitions-and-transforms */
  transition: transform 0.3s ease;
  /* transition: transform 0.3s ease; */

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`
CardStyled.displayName = 'CardStyled'

export const TitleStyled = styled.h3`
  color: ${({ theme }) => theme?.colors?.invertedText};
  /* Improved accesibility: fontWeight from semiBold to bold */
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};

  /* Only one line of title allowed */
  /* https://www.geeksforgeeks.org/how-to-apply-an-ellipsis-to-multiline-text-in-css/ */
  /* https://css-tricks.com/almanac/properties/t/text-overflow/ */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
TitleStyled.displayName = 'TitleStyled'

export const IngredientsContainerStyled = styled.div`
  /* TODO Delete after testing */
  /* background-color: salmon;
  border-radius: ${({ theme }) => theme?.borderRadius?.full}; */

  padding-block: ${({ theme }) => theme?.spacing?.s};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  column-gap: ${({ theme }) => theme?.spacing?.xs};
  row-gap: ${({ theme }) => theme?.spacing?.xs};
`
IngredientsContainerStyled.displayName = 'IngredientsContainerStyled'
