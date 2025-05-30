"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTheme } from "next-themes"
import {
  Menu,
  X,
  Home,
  Info,
  BookOpen,
  Mail,
  User,
  LogIn,
  LogOut,
  Settings,
  Sun,
  Moon,
  LayoutDashboard,
  Sparkles,
  Phone,
} from "lucide-react"

type MobileNavProps = {
  lang: string
  dict: any
}

export function MobileNav({ lang, dict }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const isActive = (path: string) => {
    return pathname === `/${lang}${path}`
  }

  const navItems = [
    { name: dict.navigation?.home || "Bosh sahifa", path: "", icon: Home },
    { name: dict.navigation?.about || "Biz haqimizda", path: "/about", icon: Info },
    { name: dict.navigation?.services || "Xizmatlar", path: "/services", icon: BookOpen },
    { name: dict.navigation?.contact || "Aloqa", path: "/contact", icon: Mail },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-background border-r z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href={`/${lang}`} className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Sparkles className="h-5 w-5 text-primary mr-2" />
                    <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                      KompyHelp
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-grow p-4 space-y-1">
                  {navItems.map((item, i) => (
                    <motion.div key={item.path} custom={i} variants={itemVariants}>
                      <Link
                        href={`/${lang}${item.path}`}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.path)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div custom={navItems.length} variants={itemVariants}>
                    <Link
                      href={`/${lang}/knowledge-base`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive("/knowledge-base")
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <BookOpen className="h-5 w-5" />
                      {dict.navigation?.knowledgeBase || "Bilimlar bazasi"}
                    </Link>
                  </motion.div>

                  <div className="pt-4 mt-4 border-t">
                    <motion.div custom={navItems.length + 1} variants={itemVariants}>
                      <Link
                        href={`/${lang}/service-request`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Phone className="h-5 w-5" />
                        {dict.common?.requestService || "Xizmat so'rash"}
                      </Link>
                    </motion.div>
                  </div>
                </nav>

                {/* User Section */}
                <div className="p-4 border-t">
                  {user ? (
                    <div className="space-y-2">
                      <motion.div custom={navItems.length + 2} variants={itemVariants}>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted">
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            {user.name?.charAt(0) || <User className="h-4 w-4" />}
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div custom={navItems.length + 3} variants={itemVariants}>
                        <Link
                          href={`/${lang}/dashboard`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <LayoutDashboard className="h-5 w-5" />
                          {dict.common?.dashboard || "Dashboard"}
                        </Link>
                      </motion.div>

                      <motion.div custom={navItems.length + 4} variants={itemVariants}>
                        <Link
                          href={`/${lang}/profile`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Settings className="h-5 w-5" />
                          {dict.common?.profile || "Profile"}
                        </Link>
                      </motion.div>

                      <motion.div custom={navItems.length + 5} variants={itemVariants}>
                        <Link
                          href={`/${lang}/logout`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <LogOut className="h-5 w-5" />
                          {dict.common?.logout || "Logout"}
                        </Link>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <motion.div custom={navItems.length + 2} variants={itemVariants}>
                        <Link
                          href={`/${lang}/login`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <LogIn className="h-5 w-5" />
                          {dict.common?.login || "Kirish"}
                        </Link>
                      </motion.div>

                      <motion.div custom={navItems.length + 3} variants={itemVariants}>
                        <Link
                          href={`/${lang}/register`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <User className="h-5 w-5" />
                          {dict.common?.register || "Ro'yxatdan o'tish"}
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t flex items-center justify-between">
                  <LanguageSwitcher currentLang={lang} />
                  {mounted && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
