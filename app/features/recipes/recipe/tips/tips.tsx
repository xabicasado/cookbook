import type { TipsProps } from './types'

import { ListSection, PageSection } from '@/app/features/layout'

export function Tips({ tips }: TipsProps) {
  return (
    <PageSection>
      <ListSection size="large">
        {tips.map((tip, index) => (
          <li key={index}>💡 {tip}</li>
        ))}
      </ListSection>
    </PageSection>
  )
}
