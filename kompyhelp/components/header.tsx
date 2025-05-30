"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useAuth } from "@/components/auth/auth-provider"
import { Menu, X, ChevronDown, Sun, Moon, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCartButton } from "@/components/shop/shopping-cart"

type HeaderProps = {
  lang: string
  dict: any
}

export function Header({ lang, dict }: HeaderProps) {
  const { user } = useAuth()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === `/${lang}${path}`
  }

  const navItems = [
    { name: dict.navigation?.home || "Bosh sahifa", path: "" },
    { name: dict.navigation?.about || "Mahsulotlar", path: "/about" },
    { name: dict.navigation?.knowledgeBase || "Xizmatlar", path: "/knowledge-base" },
    { name: dict.shop?.title || "Do'kon", path: "/shop" },
    { name: dict.navigation?.contact || "Aloqa", path: "/contact" },
  ]

  // Handle service request button click
  const handleServiceRequest = () => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 w-full border-b z-40 transition-all duration-200 ${
        scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
      } dark:bg-gray-950`}
    >
      <div className="container flex h-16 items-center">
        {/* Logo and Navigation - Left aligned */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center mr-6">
            <span className="text-primary dark:text-blue-400 text-xl font-bold">KompyHelp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={`/${lang}${item.path}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary dark:text-blue-400" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side items */}
        <div className="ml-auto flex items-center gap-4">
          {/* Service Request Button - Always visible */}
          <Link
            href={user ? `/${lang}/service-request` : `/${lang}/login?redirect=/service-request`}
            onClick={handleServiceRequest}
          >
            <Button
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            >
              {dict.common?.requestService || "Xizmat so'rash"}
            </Button>
          </Link>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:flex"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Shopping Cart */}
          <ShoppingCartButton label={dict.shop?.cart || "Savat"} />

          {/* Auth Buttons & Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    <User className="h-4 w-4 mr-1" />
                    {user.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/${lang}/dashboard`}>{dict.common?.dashboard || "Dashboard"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/${lang}/profile`}>{dict.common?.profile || "Profile"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/${lang}/logout`}>{dict.common?.logout || "Logout"}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href={`/${lang}/login`}>
                  <Button variant="ghost" className="text-sm">
                    {dict.common?.login || "Kirish"}
                  </Button>
                </Link>
                <Link href={`/${lang}/register`}>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    {dict.common?.register || "Ro'yxatdan o'tish"}
                  </Button>
                </Link>
              </>
            )}
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t bg-background dark:bg-gray-950"
          >
            <div className="py-4 px-6 space-y-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={`/${lang}${item.path}`}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? "text-primary dark:text-blue-400" : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={user ? `/${lang}/service-request` : `/${lang}/login?redirect=/service-request`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-primary"
                >
                  {dict.common?.requestService || "Xizmat so'rash"}
                </Link>
              </nav>
              <div className="pt-4 border-t flex flex-col space-y-2">
                {user ? (
                  <>
                    <Link href={`/${lang}/dashboard`} onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        {dict.common?.dashboard || "Dashboard"}
                      </Button>
                    </Link>
                    <Link href={`/${lang}/profile`} onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        {dict.common?.profile || "Profile"}
                      </Button>
                    </Link>
                    <Link href={`/${lang}/logout`} onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        {dict.common?.logout || "Logout"}
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={`/${lang}/login`} onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full">
                        {dict.common?.login || "Kirish"}
                      </Button>
                    </Link>
                    <Link href={`/${lang}/register`} onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        {dict.common?.register || "Ro'yxatdan o'tish"}
                      </Button>
                    </Link>
                  </>
                )}
                <div className="flex items-center justify-between pt-2">
                  <LanguageSwitcher currentLang={lang} />
                  <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
