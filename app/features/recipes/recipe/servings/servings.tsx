import { useMemo } from 'react'

import { useServingsContext } from '../../servings-provider'
import { ServingsDisplayStyled, ServingsStyled } from './servings.styled'

import { PageSection } from '@/app/features/layout'
import { Button } from '@/app/features/ui'

export function Servings() {
  const { currentServings, addServing, removeServing } = useServingsContext()

  const hasReachedMin = useMemo(() => !(currentServings > 1), [currentServings])

  return (
    <PageSection title="Raciones">
      <ServingsStyled>
        <Button
          size="small"
          justify="start"
          beforeIcon="remove"
          onClick={removeServing}
          disabled={hasReachedMin}
        />

        <ServingsDisplayStyled>{currentServings}</ServingsDisplayStyled>

        <Button
          size="small"
          justify="start"
          beforeIcon="add"
          onClick={addServing}
        />
      </ServingsStyled>
    </PageSection>
  )
}
