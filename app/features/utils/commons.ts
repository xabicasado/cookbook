import * as emoji from 'node-emoji'
import translate from 'translate'

export const anonymousFunction = () => ({})

export const disableScroll = () => {
  if (typeof window != 'undefined' && window.document) {
    document.body.style.overflow = 'hidden'
  }
}

export const enableScroll = () => (document.body.style.overflow = 'unset')

export const gcd = (a: number, b: number): number => {
  if (b < 0.0000001) return a
  return gcd(b, Math.floor(a % b))
}

export const decimalToFraction = (n: number): string => {
  const MAX_DENOMINATOR: number = 8

  const tol = 1e-7
  if (Math.abs(Math.round(n) - n) < tol) return Math.round(n).toString()

  let denominator: number = MAX_DENOMINATOR
  let numerator: number = Math.round(n * denominator)

  const divisor = gcd(numerator, denominator)

  numerator /= divisor
  denominator /= divisor

  if (denominator === 1 || numerator === 0) return numerator.toString()

  const wholePart = Math.floor(numerator / denominator)
  const fracPart = numerator % denominator

  const wholeStr = wholePart ? `${wholePart}` : ''
  const fracStr = fracPart ? `${fracPart}/${denominator}` : ''
  const concatStr = wholePart && fracPart ? ' y ' : ''

  return `${wholeStr}${concatStr}${fracStr}`
}

export const cleanSearchString = (s: string): string =>
  s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export const setTitleFormat = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

export const slugify = (s: string, separator: string = '-'): string =>
  s
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator) // separator

export const pauseFunction = async (delay: number): Promise<unknown> =>
  await new Promise((resolve) => setTimeout(resolve, delay))

export const getEmojiFromWord = async (word: string) =>
  emoji.get(await translate(word, { from: 'es', to: 'en' })) ?? '▫️'
