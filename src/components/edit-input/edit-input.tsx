import { EditInputStyled, LabelStyled } from './edit-input.styled'
import {
  RecipeSectionStyled,
  RecipeSectionContentStyled,
} from '@/components/recipe/recipe.styled'
type EditInputProps = {
  id: string
  label: string
  content?: string
}

export function EditInput(props: EditInputProps) {
  const { id, label, content } = props

  return (
    <RecipeSectionStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <RecipeSectionContentStyled>
        <EditInputStyled key={id} id={id}>
          {content}
        </EditInputStyled>
      </RecipeSectionContentStyled>
    </RecipeSectionStyled>
  )
}
