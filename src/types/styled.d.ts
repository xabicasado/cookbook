import 'styled-components'
import { type theme } from '@/themes/theme-provider'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
