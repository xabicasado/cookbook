import * as emoji from 'node-emoji'
import translate from 'translate'

export const anonymousFunction = () => ({})

export const disableScroll = () => {
  if (typeof window != 'undefined' && window.document) {
    document.body.style.overflow = 'hidden'
  }
}

export const enableScroll = () => (document.body.style.overflow = 'unset')

export const cleanSearchString = (s: string): string =>
  s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export const setTitleFormat = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

export const pauseFunction = async (delay: number): Promise<unknown> =>
  await new Promise((resolve) => setTimeout(resolve, delay))

export const getEmojiFromWord = async (word: string) =>
  emoji.get(await translate(word, { from: 'es', to: 'en' })) ?? '▫️'

export const compareByKey =
  <T>(key: keyof T) =>
  (a: T, b: T): number => {
    if (a[key] == null && b[key] != null) return 1
    if (a[key] != null && b[key] == null) return -1
    if (a[key] == null && b[key] == null) return 0
    if (a[key]! < b[key]!) return -1
    if (a[key]! > b[key]!) return 1
    return 0
  }
