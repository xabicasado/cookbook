export const anonymousFunction = () => ({})

// TODO Import to context and calculate async
export const decimalToFraction = (n: number): string =>
  [...Array(1000).keys()]
    .flatMap((i) =>
      [...Array(1000).keys()].map((j) => [
        i + 1,
        j + 1,
        (i + 1) / (j + 1),
        Math.abs((i + 1) / (j + 1) - n),
      ])
    )
    .sort((a, b) => a[3] - b[3])[0]
    .slice(0, 2)
    .join('/')

export const cleanSearchString = (s: string): string =>
  s
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFD')
    .toLowerCase()
    .trim()

export const slugify = (s: string, separator: string = '-'): string =>
  s
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator) // separator
