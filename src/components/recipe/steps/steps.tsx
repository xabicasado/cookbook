import { type StepType } from '@/types/recipe.types'
import {
  RecipeSectionStyled,
  RecipeSectionContentStyled,
} from '../recipe.styled'

type StepsProps = {
  title?: string
  steps: StepType[]
}

export function Steps(props: StepsProps) {
  const { steps } = props
  return (
    <RecipeSectionStyled>
      <h3>Elaboración</h3>
      <RecipeSectionContentStyled>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              {index + 1}. {step?.description}
            </li>
          ))}
        </ul>
      </RecipeSectionContentStyled>
    </RecipeSectionStyled>
  )
}
