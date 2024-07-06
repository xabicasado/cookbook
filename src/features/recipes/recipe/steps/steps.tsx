import { StepsListStyled } from './steps.styled'
import type { StepsProps } from './types'

export function Steps(props: StepsProps) {
  const { steps } = props
  return (
    <section>
      <h3>Elaboración</h3>

      <StepsListStyled>
        {steps.map((step, index) => (
          <li key={index}>
            {index + 1}. {step?.description}
          </li>
        ))}
      </StepsListStyled>
    </section>
  )
}
