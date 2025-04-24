import { fr } from "./fr"
import { en } from "./en"
import { es } from "./es"
import { ar } from "./ar"
import { dj } from "./dj"

export const translations = {
  fr,
  en,
  es,
  ar,
  dj
}

export type Language = keyof typeof translations

// Langues qui s'écrivent de droite à gauche
export const rtlLanguages: Language[] = ["ar", "dj"]
