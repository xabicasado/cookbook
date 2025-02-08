import type { TipsProps } from './types'

import { ListSection, PageSection } from '@/features/layout'

export function Tips({ tips }: TipsProps) {
  return (
    <PageSection>
      <ListSection>
        {tips.map((tip, index) => (
          <li key={index}>💡 {tip}</li>
        ))}
      </ListSection>
    </PageSection>
  )
}
