import type { ReactNode } from 'react'

export default async function RecipesLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
