import { RecipeSubtitle } from '../recipe.styled'
import { type TipType } from '@/types/recipe.types'

type TipsProps = {
  title?: string
  tips?: TipType[]
}

export function Tips(props: TipsProps) {
  const { tips } = props
  return (
    <>
      {tips != null && (
        <>
          <RecipeSubtitle>Tips</RecipeSubtitle>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>💡 {tip}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
