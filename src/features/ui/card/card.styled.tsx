'use client'

import styled from 'styled-components'

export const CardStyled = styled.article<{
  justify: string
}>`
  cursor: pointer;

  /* TODO vertical layout with img */
  /* https://www.youtube.com/watch?v=cf-J4ffMBfo */

  /* box-shadow: ${({ theme }) => theme?.boxShadows?.level1}
    ${({ theme }) => theme?.colors?.primary}; */

  padding-block: ${({ theme }) => theme?.spacing?.m};
  padding-inline: ${({ theme }) => theme?.spacing?.l};

  display: flex;
  flex-direction: column;
  ${({ justify }) => justify === 'center' && `align-items: center;`}
  ${({ justify }) => justify !== undefined && `justify-content: ${justify};`}

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

export const SubtitleStyled = styled.span`
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-size: ${({ theme }) => theme?.fontSize?.m};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
SubtitleStyled.displayName = 'SubtitleStyled'

export const DetailsStyled = styled.span`
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-size: ${({ theme }) => theme?.fontSize?.s};
  font-weight: ${({ theme }) => theme?.fontWeight?.medium};

  /* TODO Review to make all items of same height */
  min-height: ${({ theme }) => theme?.spacing?.l};

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
DetailsStyled.displayName = 'DetailsStyled'
