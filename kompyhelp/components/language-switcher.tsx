"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

type LanguageSwitcherProps = {
  lang: string
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true)

    // Check if there's a saved language preference
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferredLanguage")

      // If there's a saved language and it's different from current, redirect
      if (savedLang && savedLang !== lang) {
        const newPath = pathname?.replace(`/${lang}/`, `/${savedLang}/`)
        if (newPath) {
          router.push(newPath)
        }
      }
    }
  }, [])

  const switchLanguage = (newLang: string) => {
    if (typeof window !== "undefined") {
      // Save the selected language to localStorage
      localStorage.setItem("preferredLanguage", newLang)
    }

    // Navigate to the same page but with different language
    if (pathname) {
      const newPath = pathname.replace(`/${lang}/`, `/${newLang}/`)
      router.push(newPath)
    }
  }

  const languages = [
    { code: "en", name: "English" },
    { code: "uz", name: "O'zbekcha" },
    { code: "ru", name: "Русский" },
  ]

  // Get current language name
  const currentLanguage = languages.find((l) => l.code === lang)?.name || "Language"

  // Don't render the dropdown until after hydration to avoid mismatch
  if (!isMounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <Globe className="h-5 w-5" />
        <span className="sr-only">Toggle language</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline-block">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={
              lang === language.code ? "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" : ""
            }
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
