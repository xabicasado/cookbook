import { TipsListStyled } from './tips.styled'
import type { TipsProps } from './types'

export function Tips(props: TipsProps) {
  const { tips } = props
  return (
    <>
      {tips != null && (
        <section>
          <TipsListStyled>
            {tips.map((tip, index) => (
              <li key={index}>💡 {tip}</li>
            ))}
          </TipsListStyled>
        </section>
      )}
    </>
  )
}
