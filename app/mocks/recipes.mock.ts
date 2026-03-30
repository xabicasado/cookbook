// TODO Check this import
import { compareByTitle } from '@/app/features/recipes/recipe/recipe.utils'

import type { Recipe } from '@/src/entities/models/recipe'

// https://jsonformatter.curiousconcept.com/
const recipesMock: Recipe[] = [
  {
    id: '1',
    title: 'Almejas a la marinera',
    slug: 'almejas-a-la-marinera',
    servings: 4,
    ingredients: [
      {
        emoji: '🦪',
        quantity: 1,
        measurement: 'puñado',
        name: 'almejas',
      },
      {
        emoji: '🧅',
        quantity: 1,
        name: 'cebolla',
      },
      {
        emoji: '🧄',
        quantity: 5,
        measurement: 'dientes',
        name: 'ajo',
      },
      {
        emoji: '🫒',
        name: 'aceite de oliva',
        isCommon: true,
      },
      {
        emoji: '🌾',
        quantity: 1,
        measurement: 'cucharada',
        name: 'harina de trigo',
        isCommon: true,
      },
      {
        emoji: '🍾',
        quantity: 130,
        measurement: 'ml',
        name: 'vino blanco',
      },
      {
        emoji: '💧',
        quantity: 1,
        measurement: 'vaso',
        name: 'agua',
        isCommon: true,
      },
      {
        emoji: '🌿',
        name: 'perejil',
      },
      {
        emoji: '🧂',
        name: 'sal',
        isCommon: true,
      },
    ],
    steps: [
      {
        description:
          'Sumerge las almejas en agua con un poquito de sal al menos 2 horas, cambiando el agua cada 30 minutos o al menos un par de veces. Descarta las almejas abiertas o rotas.',
      },
      {
        description: 'Pica la cebolla y los dientes de ajo.',
      },
      {
        description:
          'Pocha a fuego medio-alto (nivel 6 sobre 9) la cebolla con sal en una sartén con un buen chorro de aceite.',
      },
      {
        description:
          'Cuando transparente la cebolla, añade a la sartén los dientes de ajo.',
      },
      {
        description:
          'Una vez dorados, añade a lo anterior una cucharada de harina y remueve para integrar y que no se queme durante 1 o 2 minutos.',
      },
      {
        description:
          'Añade el vasito de vino blanco y remueve para que se mezcle, dando vueltas a la sartén agarrando por el mango.',
      },
      {
        description:
          'Añade un vaso de agua y corrige al gusto, según la densidad que quieras que tenga la salsa.',
      },
      {
        description:
          'Cuando se mezcle añade las almejas y el perejil bien picado. Prueba la salsa y corrige de sal.',
      },
      {
        description:
          'Espera a que la salsa empiece a burbujear. En ese momento pon la tapa a la sartén y cocina 4 o 5 minutos más. Deberían estar perfectamente abiertas y listas para servir.',
      },
    ],
  },
  {
    id: '2',
    title: 'Batido de aguacate y plátano',
    slug: 'batido-de-aguacate-y-platano',
    servings: 1,
    // duration: 120,
    // level: 1,
    ingredients: [
      {
        emoji: '🥑',
        quantity: 0.5,
        name: 'aguacate',
      },
      {
        emoji: '🍌',
        quantity: 1,
        name: 'plátano',
        details: 'pequeño',
      },
      {
        emoji: '🍏',
        quantity: 0.25,
        name: 'manzana',
      },
      {
        emoji: '🥛',
        quantity: 0.75,
        measurement: 'taza',
        name: 'bebida de almendra',
        alternative: 'bebida de avena',
      },
    ],
    steps: [
      {
        description: 'Corta el aguacate y extrae la carne.',
      },
      {
        description: 'Pela el plátano y la manzana.',
      },
      {
        description:
          'En el vaso de la batidora agrega la leche y vierte todos los ingredientes que acabas de cortar. Tritura muy bien y sirve en vaso.',
        duration: 2 * 60,
      },
    ],
    tips: [
      'Si eres un poco goloso puedes añadir una cucharadita de miel al batido. Añádela junto con el resto de ingredientes antes de batir los ingredientes.',
      'Puedes añadir un par de hielos si quieres que te salga el batido fresquito.',
    ],
  },
  {
    id: '3',
    title: 'Bacalao al pil-pil',
    slug: 'bacalao-al-pil-pil',
    source: 'Bacalao La Vasca',
    servings: 8,
    ingredients: [
      {
        emoji: '🐟',
        quantity: 2,
        measurement: 'kg',
        name: 'bacalao',
      },
      {
        emoji: '🫒',
        quantity: 0.75,
        measurement: 'l',
        name: 'aceite',
        details: 'de 1ª de acidez',
        recommendation: 'aceite La Gitana',
        isCommon: true,
      },
      {
        emoji: '🧄',
        quantity: 3,
        measurement: 'cabezas',
        name: 'ajo',
      },
    ],
    steps: [
      {
        description:
          'Pon el bacalao a remojo unas 30 horas con tres cambios de agua. Desescama y quita las espinas en el segundo remojo.',
        duration: 30 * 60 * 60,
      },
      {
        description:
          'Fríe los ajos en el aceite a fuego lento. Sácalos una vez dorados y deja enfriar el aceite.',
      },
      {
        description:
          'Saca las tajadas del agua y seca bien con un paño, coloca en la cazuela de barro con la piel hacia arriba y menea en frío, dejando reposar unos diez minutos.',
        duration: 10 * 60,
      },
      {
        description:
          'Pon la cazuela a fuego lento hasta que pil-pilee un poco. Saca y deja reposar. Cuando el aceite esté templado, vuelve a poner al fuego y así dos o tres veces más.',
      },
      {
        description:
          'Una vez el tenedor entra sin forzar en las tajadas, ya se puede menear la cazuela en sentido giratorio para empezar a sacar la gelatina.',
      },
      {
        description:
          'Para acabar de sacar la gelatina, vuelve a poner la cazuela al fuego hasta que pil-pilee y saca. Deja reposar un poco y menea.',
      },
    ],
    tips: [
      'Cuanto más se tarde en sacar la gelatina, mejor sabor cogerá el bacalao y la salsa.',
    ],
  },
]

export default recipesMock?.sort(compareByTitle)
