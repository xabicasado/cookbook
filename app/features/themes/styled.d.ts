import 'styled-components'

import { type theme } from '@/app/features/themes/theme-provider'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme extends Theme {}
}
