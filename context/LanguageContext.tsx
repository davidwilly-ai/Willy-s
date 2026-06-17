'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'de'

// ─── Translation strings ───────────────────────────────────────────────────
const en = {
  // Navbar
  nav_product: 'Product',
  nav_science: 'Science',
  nav_configurator: 'Configurator',
  nav_story: 'Story',
  nav_signature: 'Signature',
  nav_build: 'BUILD',
  nav_gyms: 'For Gyms',

  // Hero
  hero_tagline: 'Fresh high-protein shakes. Mixed inside your gym.',
  hero_sub: 'Made with low-fat quark, whey or isoclear, and optional creatine.',
  hero_cta_primary: 'Build Your Shake',
  hero_cta_secondary: 'Signature Shakes',
  hero_cta_gyms: 'For Gym Owners',
  hero_stat_protein: 'Protein',
  hero_stat_kcal: 'Kcal',
  hero_scroll: 'scroll',

  // Signature Product
  sig_label: 'Signature Product',
  sig_daily_cost: 'Daily Cost',
  sig_best_value: 'BEST VALUE PER SERVING',
  sig_nutrition_label: 'Nutrition Facts / per Serving',
  sig_total_protein: 'Total Protein',
  sig_ing_1_note: 'Base protein — high DIAAS score',
  sig_ing_2_note: 'ESN / More Nutrition',
  sig_ing_3_note: 'Performance & strength',
  sig_ing_3_label: 'Creatine 5g',

  // Science
  sci_label: 'Backed by Science',
  sci_not_hype: 'NOT HYPE.',
  sci_body: "Every ingredient in Willy's stack is grounded in peer-reviewed research. We don't follow trends — we follow the data.",
  sci_stat_notes: ['ISSN optimal range', 'evidence-based dose', 'per serving'],
  sci_read: 'Read paper',
  sci_watch: 'Watch',
  sci_editorial_intro: 'A deep-dive into the research behind the stack.',
  sci_disclaimer: "All nutritional claims are based on published peer-reviewed literature. Individual results may vary. Willy's does not provide medical advice.",

  // Configurator
  conf_protein_type: '// Protein Type',
  conf_flavor: '// Flavor',
  conf_label: 'Core Feature',
  conf_tagline: '> configure your stack. live macros. real results.',
  conf_addons: '// Add-Ons',
  conf_liquid: '// Liquid',
  conf_consistency: '// Consistency',
  conf_extra_scoops: '// Extra Scoops (+1.50€ each)',
  conf_thin: 'Thin',
  conf_thick: 'Thick',
  conf_your_stack: '// Your Stack',
  conf_base_included: 'Base (always included)',
  conf_addons_label: 'Add-Ons',
  conf_live_macros: '// Live Macros',
  conf_total_price: 'Total Price',
  conf_order: 'Order',
  conf_your_shake: 'YOUR SHAKE',
  conf_extra_scoops_label: 'EXTRA SCOOPS',

  // Product Palette
  palette_label: 'Product Palette',
  palette_add_to_stack: 'Add to Stack',

  // Heritage
  her_label: 'Our Story',
  her_p1: "Every protein shake brand tells you they're different. Most of them are not. Willy's started from a simple observation: the best fuel is simple, honest, and effective.",
  her_p2: "We took what works — high-quality protein from low-fat quark, premium whey from trusted partners like ESN and More Nutrition — and built something repeatable. Something you can stack every day.",
  her_p3: "No hype. No marketing tricks. Just a clean shake that David Willy and the people around him actually use — every day.",
  her_pillar_1: 'Real Training Needs',
  her_pillar_1_body: "Willy's wasn't built in a marketing office. It was built around a real training schedule, real recovery demands, and the frustration of overpriced supplements that don't deliver.",
  her_pillar_2: 'No Filler. No Hype.',
  her_pillar_2_body: "500g low-fat quark. Whey. Creatine. That's the stack. No proprietary blends, no mystery doses. What goes in is exactly what's on the label.",
  her_pillar_3: 'Performance, Proven.',
  her_pillar_3_body: "Every component is backed by the International Society of Sports Nutrition consensus position. If the evidence doesn't support it, it doesn't go in the shake.",
  her_stmt_1: '"The gym doesn\'t lie. Neither do we."',
  her_stmt_2: '"Built from the ground up. Shaken, not sponsored."',
  her_stmt_3: '"Results, not rhetoric."',
  her_origin: "Willy's — Mössingen, Germany",

  // Stuttgart
  stut_label: 'Home Base',
  stut_body: "Willy's is rooted in Stuttgart — a city known for precision engineering, innovation, and athletic culture. From the heart of Baden-Württemberg, we mix fresh protein shakes right inside fitness studios.",
  stut_coords: '48.7775° N, 9.1760° E',
  stut_location: 'Königsplatz, Stuttgart',
  stut_region: 'Baden-Württemberg, Germany',

  // Founder
  found_label: 'The Founder',
  found_age: '20 years old.',
  found_bio: 'Passionate about sport and personal growth. I find peace and balance through training — and I want to make it easier for like-minded people to pursue that same passion.',
  found_linkedin: 'Connect on LinkedIn',
  found_role: 'Founder & Creator',

  // Quotes
  quotes_label: 'Fuel Your Mind',

  // Gym Owners
  gym_label: 'For Gym Owners',
  gym_headline: 'Offer your members something they actually want after training.',
  gym_sub: "Willy's operates inside your studio — fresh shakes, transparent ingredients, no effort on your end.",
  gym_benefit_1_title: 'Additional revenue',
  gym_benefit_1_body: 'You receive a share of every shake sold. No upfront costs, no logistics to manage.',
  gym_benefit_2_title: 'Better member experience',
  gym_benefit_2_body: 'Post-workout nutrition available on-site. Members stay longer and come back more often.',
  gym_benefit_3_title: 'Freshly mixed, not packaged',
  gym_benefit_3_body: 'No shelf products. Every shake is made on the spot with visible, honest ingredients.',
  gym_benefit_4_title: 'Low operational effort',
  gym_benefit_4_body: 'We bring the equipment, handle preparation, and keep the area clean. You just provide the space.',
  gym_cta: 'Get in touch',
  gym_cta_sub: 'We will get back to you within 48 hours.',

  // Footer
  foot_navigate: 'Navigate',
  foot_partners: 'Partners',
  foot_rights: "© 2025 Willy's GmbH — All rights reserved",

  // Cookie
  cookie_title: 'Cookie Notice',
  cookie_body: 'We use cookies to enhance your experience, analyze site traffic, and serve personalized content.',
  cookie_learn: 'Learn more',
  cookie_hide: 'Hide details',
  cookie_reject: 'Reject',
  cookie_accept: 'Accept All',
  cookie_essential: 'Essential',
  cookie_analytics: 'Analytics',
  cookie_marketing: 'Marketing',
  cookie_ess_desc: 'Required for basic functionality',
  cookie_ana_desc: 'Helps us improve the experience',
  cookie_mar_desc: 'Personalized content & ads',

  // Neon switch
  neon_on: 'NEON ON',
  neon_off_label: 'NEON OFF',
} as const

export type TKey = keyof typeof en

// Allow DE translations to use any string (not bound to en's exact literal types)
type TranslationDict = {
  [K in TKey]: typeof en[K] extends readonly string[] ? readonly string[] : string
}

const de: TranslationDict = {
  nav_product: 'Produkt',
  nav_science: 'Wissenschaft',
  nav_configurator: 'Konfigurator',
  nav_story: 'Geschichte',
  nav_signature: 'Signature',
  nav_build: 'STARTEN',
  nav_gyms: 'Für Gyms',

  hero_tagline: 'Frische Protein-Shakes. Direkt in deinem Fitnessstudio.',
  hero_sub: 'Mit Magerquark, Whey oder Isoclear – und optional Kreatin.',
  hero_cta_primary: 'Shake zusammenstellen',
  hero_cta_secondary: 'Signature Shakes',
  hero_cta_gyms: 'Für Fitnessstudios',
  hero_stat_protein: 'Protein',
  hero_stat_kcal: 'Kkal',
  hero_scroll: 'scrollen',

  sig_label: 'Signature Produkt',
  sig_daily_cost: 'Tageskosten',
  sig_best_value: 'BESTES PREIS-LEISTUNGS-VERHÄLTNIS',
  sig_nutrition_label: 'Nährwerte / pro Portion',
  sig_total_protein: 'Protein gesamt',
  sig_ing_1_note: 'Basisprotein — hoher DIAAS-Score',
  sig_ing_2_note: 'ESN / More Nutrition',
  sig_ing_3_note: 'Leistung & Kraft',
  sig_ing_3_label: 'Kreatin 5g',

  sci_label: 'Wissenschaftlich belegt',
  sci_not_hype: 'KEIN HYPE.',
  sci_body: "Jede Zutat im Willy's Stack basiert auf peer-reviewed Forschung. Wir folgen keinen Trends — wir folgen den Daten.",
  sci_stat_notes: ['ISSN optimaler Bereich', 'evidenzbasierte Dosis', 'pro Portion'],
  sci_read: 'Studie lesen',
  sci_watch: 'Ansehen',
  sci_editorial_intro: 'Ein tiefer Einblick in die Forschung hinter dem Stack.',
  sci_disclaimer: "Alle Nährwertangaben basieren auf veröffentlichten wissenschaftlichen Studien. Individuelle Ergebnisse können variieren. Willy's bietet keine medizinische Beratung.",

  conf_protein_type: '// Proteinart',
  conf_flavor: '// Geschmack',
  conf_label: 'Kernfunktion',
  conf_tagline: '> Stack konfigurieren. Live-Makros. Echte Ergebnisse.',
  conf_addons: '// Zusätze',
  conf_liquid: '// Flüssigkeit',
  conf_consistency: '// Konsistenz',
  conf_extra_scoops: '// Extra Scoops (+1.50€ je Scoop)',
  conf_thin: 'Dünn',
  conf_thick: 'Dick',
  conf_your_stack: '// Dein Stack',
  conf_base_included: 'Basis (immer enthalten)',
  conf_addons_label: 'Zusätze',
  conf_live_macros: '// Live-Makros',
  conf_total_price: 'Gesamtpreis',
  conf_order: 'Bestellen',
  conf_your_shake: 'DEIN SHAKE',
  conf_extra_scoops_label: 'EXTRA SCOOPS',

  palette_label: 'Produktpalette',
  palette_add_to_stack: 'Zum Stack',

  her_label: 'Unsere Geschichte',
  her_p1: "Jede Protein-Marke behauptet, anders zu sein. Die meisten sind es nicht. Willy's entstand aus einer einfachen Erkenntnis: Das beste Fuel ist simpel, ehrlich und effektiv.",
  her_p2: "Wir haben genommen, was funktioniert — hochwertiges Protein aus Magerquark, Premium-Whey von vertrauenswürdigen Partnern wie ESN und More Nutrition — und daraus etwas Reproduzierbares gebaut.",
  her_p3: "Kein Hype. Keine Marketing-Tricks. Nur ein sauberer Shake, den David Willy und sein Umfeld täglich verwenden.",
  her_pillar_1: 'Echte Trainingsbedürfnisse',
  her_pillar_1_body: "Willy's wurde nicht im Marketingbüro entwickelt. Es entstand aus echten Trainingsplänen, echten Erholungsanforderungen und der Frustration über überteuerte Supplements.",
  her_pillar_2: 'Kein Füllstoff. Kein Hype.',
  her_pillar_2_body: "500g Magerquark. Whey. Kreatin. Das ist der Stack. Keine proprietären Mischungen, keine mysteriösen Dosierungen. Was drin ist, steht auf dem Etikett.",
  her_pillar_3: 'Leistung, belegt.',
  her_pillar_3_body: "Jede Komponente wird durch die Konsensposition der International Society of Sports Nutrition gestützt. Wenn die Evidenz fehlt, kommt es nicht in den Shake.",
  her_stmt_1: '"Das Gym lügt nicht. Wir auch nicht."',
  her_stmt_2: '"Von Grund auf gebaut. Geschüttelt, nicht gesponsert."',
  her_stmt_3: '"Ergebnisse, keine Rhetorik."',
  her_origin: "Willy's — Mössingen, Deutschland",

  stut_label: 'Heimatbasis',
  stut_body: "Willy's hat seine Wurzeln in Stuttgart — einer Stadt bekannt für Präzision, Innovation und sportliche Kultur. Aus dem Herzen Baden-Württembergs mixen wir frische Protein-Shakes direkt in Fitnessstudios.",
  stut_coords: '48,7775° N, 9,1760° O',
  stut_location: 'Königsplatz, Stuttgart',
  stut_region: 'Baden-Württemberg, Deutschland',

  found_label: 'Der Gründer',
  found_age: '20 Jahre alt.',
  found_bio: 'Leidenschaftlich für Sport und persönliches Wachstum. Ich finde Ruhe und Balance durch das Training — und ich möchte es Gleichgesinnten leichter machen, dieser Leidenschaft nachzugehen.',
  found_linkedin: 'Auf LinkedIn verbinden',
  found_role: 'Gründer & Creator',

  quotes_label: 'Mentale Stärke',

  // Gym Owners
  gym_label: 'Für Fitnessstudios',
  gym_headline: 'Biete deinen Mitgliedern etwas, das sie nach dem Training wirklich wollen.',
  gym_sub: "Willy's arbeitet direkt in deinem Studio — frische Shakes, transparente Zutaten, kein Aufwand für dich.",
  gym_benefit_1_title: 'Zusätzliche Einnahmen',
  gym_benefit_1_body: 'Du erhältst einen Anteil an jedem verkauften Shake. Keine Vorabkosten, keine Logistik.',
  gym_benefit_2_title: 'Bessere Mitgliedererfahrung',
  gym_benefit_2_body: 'Post-Workout-Ernährung vor Ort. Mitglieder bleiben länger und kommen öfter zurück.',
  gym_benefit_3_title: 'Frisch gemischt, nicht abgepackt',
  gym_benefit_3_body: 'Kein Regalprodukt. Jeder Shake wird mit sichtbaren, ehrlichen Zutaten frisch zubereitet.',
  gym_benefit_4_title: 'Minimaler Aufwand',
  gym_benefit_4_body: 'Wir bringen das Equipment, übernehmen die Zubereitung und halten den Bereich sauber. Du stellst nur den Platz.',
  gym_cta: 'Kontakt aufnehmen',
  gym_cta_sub: 'Wir melden uns innerhalb von 48 Stunden.',

  foot_navigate: 'Navigation',
  foot_partners: 'Partner',
  foot_rights: "© 2025 Willy's GmbH — Alle Rechte vorbehalten",

  cookie_title: 'Cookie-Hinweis',
  cookie_body: 'Wir verwenden Cookies, um deine Erfahrung zu verbessern, den Traffic zu analysieren und personalisierte Inhalte anzuzeigen.',
  cookie_learn: 'Mehr erfahren',
  cookie_hide: 'Details ausblenden',
  cookie_reject: 'Ablehnen',
  cookie_accept: 'Alle akzeptieren',
  cookie_essential: 'Essenziell',
  cookie_analytics: 'Analytik',
  cookie_marketing: 'Marketing',
  cookie_ess_desc: 'Für grundlegende Funktionalität erforderlich',
  cookie_ana_desc: 'Hilft uns, die Erfahrung zu verbessern',
  cookie_mar_desc: 'Personalisierte Inhalte & Anzeigen',

  neon_on: 'NEON AN',
  neon_off_label: 'NEON AUS',
}

export const translations = { en, de }

// ─── Context ───────────────────────────────────────────────────────────────
interface LanguageCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TKey) => string
}

const LanguageContext = createContext<LanguageCtx>({
  lang: 'en',
  setLang: () => {},
  t: (key) => en[key] as string,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = (key: TKey): string => (translations[lang][key] ?? en[key]) as string
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useT = () => useContext(LanguageContext)
