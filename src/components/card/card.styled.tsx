import styled from 'styled-components'

export const CardContainerStyled = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  /* background-color: ${({ theme }) => theme?.colors?.third}; */
  /* background-color: ${({ theme }) => theme?.colors?.fourth}; */

  text-align: center;

  /* https://htmlcolorcodes.com/color-picker/ */
  /* background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme?.colors?.primaryA},
    ${({ theme }) => theme?.colors?.primaryC},
  ); */

  border-radius: ${({ theme }) => theme?.borderRadius?.l};

  /* margin: 0.5em 0; */
  margin-bottom: 0.5em;

  /* div {
    &:not(:first-child) {
      margin-top: 20px;
    }
  } */

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
`
CardContainerStyled.displayName = 'CardContainerStyled'

export const TitleStyled = styled.h3`
  color: ${({ theme }) => theme?.colors?.invertedText};
  font-weight: ${({ theme }) => theme?.fontWeight?.semiBold};
`
TitleStyled.displayName = 'TitleStyled'

export const IngredientsContainerStyled = styled.div`
  padding-top: 0.5rem;
`
IngredientsContainerStyled.displayName = 'IngredientsContainerStyled'
