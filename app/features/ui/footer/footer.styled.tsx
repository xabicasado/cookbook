'use client'

import styled from 'styled-components'

export const FooterStyled = styled.footer`
  /* margin-top: 1rem; */
  /* margin-top: auto; */
  /* width: 100%; */

  /* position: fixed;
  bottom: 0; */

  min-height: 3rem;
  background-color: ${({ theme }) => theme?.colors?.fourth};
  /* overflow: hidden; */
  text-align: center;
  color: ${({ theme }) => theme?.colors?.invertedText};
`
FooterStyled.displayName = 'FooterStyled'
