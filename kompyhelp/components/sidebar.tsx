"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useAuth } from "@/components/auth/auth-provider"
import { useCart } from "@/components/shop/cart-context"
import {
  Menu,
  X,
  Sun,
  Moon,
  User,
  Home,
  Info,
  BookOpen,
  Mail,
  LogIn,
  UserPlus,
  LayoutDashboard,
  Settings,
  LogOut,
  Sparkles,
  ShoppingBag,
} from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ShoppingCartButton } from "@/components/shop/shopping-cart"

type SidebarProps = {
  lang: string
  dict: any
}

export function Sidebar({ lang, dict }: SidebarProps) {
  const { user } = useAuth()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { items } = useCart()

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => {
    return pathname === `/${lang}${path}`
  }

  const navItems = [
    { name: dict.navigation?.home || "Bosh sahifa", path: "", icon: Home },
    { name: dict.navigation?.about || "Mahsulotlar", path: "/about", icon: Info },
    { name: dict.navigation?.knowledgeBase || "Xizmatlar", path: "/knowledge-base", icon: BookOpen },
    { name: "Do'kon", path: "/shop", icon: ShoppingBag },
    { name: dict.navigation?.contact || "Aloqa", path: "/contact", icon: Mail },
  ]

  // Animation variants
  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-16 border-b bg-white dark:bg-gray-950 flex items-center px-4 shadow-sm dark:shadow-purple-900/20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mr-2 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30"
        >
          <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </Button>
        <Link href={`/${lang}`} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <Sparkles className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-transparent bg-clip-text text-xl font-bold">
              KompyHelp
            </span>
          </motion.div>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <ShoppingCartButton label={dict.shop?.cart || "Savat"} />
          <LanguageSwitcher currentLang={lang} />
        </div>
      </header>

      {/* Sidebar for Desktop */}
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className="fixed hidden md:flex flex-col h-screen w-64 border-r bg-white dark:bg-gray-950 z-30 shadow-lg dark:shadow-purple-900/20 dark:border-purple-900/20"
      >
        <div className="p-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/50 dark:to-gray-950">
          <motion.div variants={logoVariants} className="mb-8">
            <Link href={`/${lang}`} className="flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-transparent bg-clip-text text-2xl font-bold">
                KompyHelp
              </span>
            </Link>
          </motion.div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  href={`/${lang}${item.path}`}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105",
                    isActive(item.path)
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300",
                  )}
                >
                  {item.icon && (
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <item.icon
                        className={cn(
                          "h-5 w-5",
                          isActive(item.path)
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-500 dark:text-gray-400",
                        )}
                      />
                    </motion.div>
                  )}
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Savatcha tugmasi */}
          <motion.div variants={itemVariants} className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <ShoppingCartButton label={dict.shop?.cart || "Savat"} />
          </motion.div>
        </div>

        <div className="mt-auto p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
          {user ? (
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center gap-3 px-3 py-2 mb-2 bg-purple-50 dark:bg-purple-900/20 rounded-md"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white">
                  {user.name?.charAt(0) || <User className="h-4 w-4" />}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{user.name}</span>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href={`/${lang}/dashboard`}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                >
                  <LayoutDashboard className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  {dict.common?.dashboard || "Dashboard"}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href={`/${lang}/profile`}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                >
                  <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  {dict.common?.profile || "Profile"}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href={`/${lang}/logout`}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                >
                  <LogOut className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  {dict.common?.logout || "Logout"}
                </Link>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href={`/${lang}/service-request`} className="w-full">
                  <Button className="w-full justify-start gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    {dict.common?.requestService || "Xizmat so'rash"}
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href={`/${lang}/login`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-900 dark:text-purple-300 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105"
                  >
                    <LogIn className="h-4 w-4" />
                    {dict.common?.login || "Kirish"}
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link href={`/${lang}/register`} className="w-full">
                  <Button className="w-full justify-start gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white dark:from-purple-500 dark:to-indigo-500 dark:hover:from-purple-600 dark:hover:to-indigo-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                    <UserPlus className="h-4 w-4" />
                    {dict.common?.register || "Ro'yxatdan o'tish"}
                  </Button>
                </Link>
              </motion.div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
          >
            <LanguageSwitcher currentLang={lang} />
            {mounted && (
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: mobileMenuOpen ? 0 : -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-0 h-full w-64 bg-white dark:bg-gray-950 shadow-xl dark:shadow-purple-900/20"
        >
          <div className="p-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/50 dark:to-gray-950">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <Link href={`/${lang}`} className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Sparkles className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 text-transparent bg-clip-text text-2xl font-bold">
                  KompyHelp
                </span>
              </Link>
            </motion.div>

            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`/${lang}${item.path}`}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300",
                      isActive(item.path)
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && (
                      <item.icon
                        className={cn(
                          "h-5 w-5",
                          isActive(item.path)
                            ? "text-purple-600 dark:text-purple-400"
                            : "text-gray-500 dark:text-gray-400",
                        )}
                      />
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobil savatcha tugmasi */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
            >
              <ShoppingCartButton label={dict.shop?.cart || "Savat"} />
            </motion.div>
          </div>

          <div className="mt-auto p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
            {user ? (
              <div className="space-y-1">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-3 px-3 py-2 mb-2 bg-purple-50 dark:bg-purple-900/20 rounded-md"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white">
                    {user.name?.charAt(0) || <User className="h-4 w-4" />}
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{user.name}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Link
                    href={`/${lang}/dashboard`}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LayoutDashboard className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    {dict.common?.dashboard || "Dashboard"}
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Link
                    href={`/${lang}/profile`}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    {dict.common?.profile || "Profile"}
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <Link
                    href={`/${lang}/logout`}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 text-gray-600 dark:text-gray-300 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogOut className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    {dict.common?.logout || "Logout"}
                  </Link>
                </motion.div>
              </div>
            ) : (
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link href={`/${lang}/service-request`} className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full justify-start gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md">
                      <Sparkles className="h-4 w-4" />
                      {dict.common?.requestService || "Xizmat so'rash"}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link href={`/${lang}/login`} className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-900 dark:text-purple-300 dark:hover:bg-purple-900/30"
                    >
                      <LogIn className="h-4 w-4" />
                      {dict.common?.login || "Kirish"}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Link href={`/${lang}/register`} className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full justify-start gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white dark:from-purple-500 dark:to-indigo-500 dark:hover:from-purple-600 dark:hover:to-indigo-600 shadow-md">
                      <UserPlus className="h-4 w-4" />
                      {dict.common?.register || "Ro'yxatdan o'tish"}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
            >
              <LanguageSwitcher currentLang={lang} />
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
            </motion.div>
          </div>
        </motion.aside>
      </div>
    </>
  )
}
