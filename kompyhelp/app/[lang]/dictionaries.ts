import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  uz: () => import("./dictionaries/uz.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!["en", "uz", "ru"].includes(locale)) {
    locale = "en" // Default to English if invalid locale
  }
  return dictionaries[locale as "en" | "uz" | "ru"]()
}
