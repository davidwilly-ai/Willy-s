export interface ShakeMacros {
  protein: number
  carbs: number
  fat: number
  kcal: number
}

export interface ShakeDef {
  id: string
  name: string[]
  flavor: string
  pricePerDay: number
  macros: ShakeMacros
  accentColor: string
  ingredients: { icon: string; label: string; note: string }[]
}

// ── Base ingredient macros ──────────────────────────────────────────────────
const magerquark500: ShakeMacros = { protein: 60, carbs: 28, fat: 2, kcal: 455 }
const wheyScoop: ShakeMacros    = { protein: 25, carbs: 3,  fat: 1, kcal: 120 }
const isoclearScoop: ShakeMacros = { protein: 27, carbs: 1, fat: 0, kcal: 110 }

function addMacros(a: ShakeMacros, b: ShakeMacros): ShakeMacros {
  return {
    protein: a.protein + b.protein,
    carbs:   a.carbs   + b.carbs,
    fat:     a.fat     + b.fat,
    kcal:    a.kcal    + b.kcal,
  }
}

function mulMacros(m: ShakeMacros, n: number): ShakeMacros {
  return { protein: m.protein * n, carbs: m.carbs * n, fat: m.fat * n, kcal: m.kcal * n }
}

// ── Shared configurator constants (re-exported for ShakeConfigurator) ───────
export const BASE_MACROS = magerquark500  // { protein:60, carbs:28, fat:2, kcal:455 }
export const SCOOP_PRICE = 1.50
export const BASE_PRICE  = 5.50

// ── Shake definitions ───────────────────────────────────────────────────────
// Double Willy = Magerquark 500g + 2× Whey Vanilla + Creatine 5g
// Price: BASE_PRICE(5.50) + 1 extra scoop(1.50) + creatine(0.50) = 7.50€
const doubleWillyMacros = addMacros(magerquark500, mulMacros(wheyScoop, 2))
// → { protein:110, carbs:34, fat:4, kcal:695 }

// Pacific = Magerquark 500g + 2× ISOclear Peach + Creatine 5g
// Price: BASE_PRICE(5.50) + 1 extra ISOclear(1.80) + creatine(0.50) = 7.80€
const pacificMacros = addMacros(magerquark500, mulMacros(isoclearScoop, 2))
// → { protein:114, carbs:30, fat:2, kcal:675 }

// Panama = Magerquark 500g + 2× Whey Salted Caramel + Creatine 5g
// Price: BASE_PRICE(5.50) + 1 extra Whey(1.50) + creatine(0.50) = 7.50€
const panamaMacros = addMacros(magerquark500, mulMacros(wheyScoop, 2))
// → { protein:110, carbs:34, fat:4, kcal:695 }

export const SHAKES: ShakeDef[] = [
  {
    id: 'double-willy',
    name: ['DOUBLE', 'WILLY'],
    flavor: 'Vanilla',
    pricePerDay: 7.50,
    macros: doubleWillyMacros,
    accentColor: '#FF4D4D',
    ingredients: [
      { icon: '🥛', label: '500g low-fat quark', note: 'Base protein — high DIAAS score' },
      { icon: '💪', label: '2 Scoops Whey Vanilla', note: 'ESN / More Nutrition' },
      { icon: '⚡', label: 'Creatine 5g', note: 'Performance & strength' },
    ],
  },
  {
    id: 'pacific',
    name: ['PACIFIC'],
    flavor: 'ISOclear Peach',
    pricePerDay: 7.80,
    macros: pacificMacros,
    accentColor: '#FFB84D',
    ingredients: [
      { icon: '🥛', label: '500g low-fat quark', note: 'Base protein — high DIAAS score' },
      { icon: '🍑', label: '2 Scoops ISOclear Peach', note: 'ESN / More Nutrition — ultra pure' },
      { icon: '⚡', label: 'Creatine 5g', note: 'Performance & strength' },
    ],
  },
  {
    id: 'panama',
    name: ['PANAMA'],
    flavor: 'Whey Caramel',
    pricePerDay: 7.50,
    macros: panamaMacros,
    accentColor: '#00FFC6',
    ingredients: [
      { icon: '🥛', label: '500g low-fat quark', note: 'Base protein — high DIAAS score' },
      { icon: '💪', label: '2 Scoops Whey Caramel', note: 'ESN / More Nutrition' },
      { icon: '⚡', label: 'Creatine 5g', note: 'Performance & strength' },
    ],
  },
]

export const DOUBLE_WILLY = SHAKES[0]
export const PACIFIC      = SHAKES[1]
export const PANAMA       = SHAKES[2]
