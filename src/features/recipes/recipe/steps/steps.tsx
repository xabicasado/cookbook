import type { StepsProps } from './types'

import { ListSection, PageSection } from '@/features/layout'

// import { ScrollWatcher } from '@/features/ui'

export function Steps({ steps }: StepsProps) {
  return (
    <PageSection title="Elaboración">
      {/* <ScrollWatcher /> */}
      <ListSection>
        {steps.map((step, index) => (
          <li key={index + 1}>
            {index + 1}. {step?.description}
          </li>
        ))}
      </ListSection>
    </PageSection>
  )
}
