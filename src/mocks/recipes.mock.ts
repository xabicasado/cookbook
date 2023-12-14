import { type RecipeType } from '@/types/recipe.types'

const recipesMock: RecipeType[] = [
  {
    id: 1,
    title: 'Almejas a la marinera',
    slug: 'almejas-a-la-marinera',
    ingredients: [
      {
        emoji: '🦪',
        quantity: '1',
        measurement: 'puñado',
        name: 'almejas',
      },
      {
        emoji: '🧅',
        quantity: '1',
        name: 'cebolla',
      },
      {
        emoji: '🧄',
        quantity: '5',
        measurement: 'dientes',
        name: 'ajo',
      },
      {
        emoji: ' 🫒',
        name: 'aceite de oliva',
      },
      {
        emoji: '🌾',
        quantity: '1',
        measurement: 'cucharada',
        name: 'harina de trigo',
      },
      {
        emoji: '🍾',
        quantity: '130',
        measurement: 'ml',
        name: 'vino blanco',
      },
      {
        emoji: '💧',
        quantity: '1',
        measurement: 'vaso',
        name: 'agua',
      },
      {
        emoji: '🧂',
        name: 'sal',
      },
      {
        emoji: '🌿',
        name: 'perejil',
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
          'Cuando transparente la cebolla, añade a la sartén los dientes de ajo',
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
    id: 2,
    title: 'Batido de aguacate y plátano',
    slug: 'batido-de-aguacate-y-platano',
    // duration: 120,
    // level: 1,
    ingredients: [
      {
        emoji: '🥑',
        quantity: '1/2',
        name: 'aguacate',
      },
      {
        emoji: '🍌',
        quantity: '1',
        name: 'plátano',
        details: 'pequeño',
      },
      {
        emoji: '🍏',
        quantity: '1/4',
        name: 'manzana',
      },
      {
        emoji: '🥛',
        quantity: '3/4',
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
        duration: 120,
      },
    ],
    tips: [
      'Si eres un poco goloso puedes añadir una cucharadita de miel al batido. Añádela junto con el resto de ingredientes antes de batir los ingredientes.',
      'Puedes añadir un par de hielos si quieres que te salga el batido fresquito.',
    ],
  },
]

export default recipesMock
