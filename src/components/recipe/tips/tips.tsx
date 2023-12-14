import { type TipType } from '@/types/recipe.types'
import {
  RecipeSectionStyled,
  RecipeSectionContentStyled,
} from '../recipe.styled'

type TipsProps = {
  title?: string
  tips?: TipType[]
}

export function Tips(props: TipsProps) {
  const { tips } = props
  return (
    <RecipeSectionStyled>
      {tips != null && (
        <>
          <h3>Tips</h3>
          <RecipeSectionContentStyled>
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>💡 {tip}</li>
              ))}
            </ul>
          </RecipeSectionContentStyled>
        </>
      )}
    </RecipeSectionStyled>
  )
}
