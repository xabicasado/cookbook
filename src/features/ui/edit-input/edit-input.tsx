import {
  EditInputStyled,
  LabelStyled,
  SubTextStyled,
} from './edit-input.styled'
import { type EditInputProps } from './types'

export function EditInput(props: EditInputProps) {
  const {
    name,
    label,
    content,
    subText,
    placeholder,
    onChange,
    required = false,
    type = 'text',
  } = props

  // TODO show password
  // const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false)

  return (
    <>
      {label != null && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <EditInputStyled
        key={name}
        id={name}
        name={name}
        onChange={onChange}
        value={content}
        placeholder={placeholder}
        required={!!required}
        type={type}
      />

      {/* TODO Delete gap */}
      {subText != null && <SubTextStyled>{subText}</SubTextStyled>}
    </>
  )
}
