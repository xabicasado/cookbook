import { RecipeSubtitle } from '../recipe.styled'
import { type StepType } from '@/types/recipe.types'

type StepsProps = {
  title?: string
  steps: StepType[]
}

export function Steps(props: StepsProps) {
  const { steps } = props
  return (
    <>
      <RecipeSubtitle>Elaboración</RecipeSubtitle>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            {index + 1}. {step?.description}
          </li>
        ))}
      </ul>
    </>
  )
}
