import { ServingsDisplayStyled, ServingsStyled } from './servings.styled'
import type { ServingsProps } from './types'

import { PageSection } from '@/features/layout'
import { Button } from '@/features/ui'

export function Servings({
  currentServings,
  setCurrentServings,
}: ServingsProps) {
  const handleRemoveServing = () =>
    currentServings > 1 && setCurrentServings(currentServings - 1)

  const handleAddServing = () => setCurrentServings(currentServings + 1)

  return (
    <PageSection title="Raciones">
      <ServingsStyled>
        <Button
          size="small"
          justify="start"
          beforeIcon="remove"
          onClick={handleRemoveServing}
          disabled={!(currentServings > 1)}
        />

        <ServingsDisplayStyled>{currentServings}</ServingsDisplayStyled>

        <Button
          size="small"
          justify="start"
          beforeIcon="add"
          onClick={handleAddServing}
        />
      </ServingsStyled>
    </PageSection>
  )
}
