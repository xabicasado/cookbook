import type { StepsProps } from './types'

import { ListSection, PageSection } from '@/features/layout'

export function Steps({ steps }: StepsProps) {
  return (
    <PageSection title="Elaboración">
      <ListSection size="large">
        {steps.map((step, index) => (
          <li key={index + 1}>
            {index + 1}. {step?.description}
          </li>
        ))}
      </ListSection>
    </PageSection>
  )
}
