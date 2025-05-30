import type React from "react"
import { Inter } from "next/font/google"
import { getDictionary } from "./dictionaries"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Chatbot } from "@/components/chatbot/chatbot"
import { CartProvider } from "@/components/shop/cart-context"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "uz" }, { lang: "ru" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary("uz")

  return (
    <html lang={"uz"} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <CartProvider>
              <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
                <Sidebar lang={"uz"} dict={dict} />
                <div className="flex flex-col flex-1 md:ml-64">
                  <main className="flex-1">{children}</main>
                  <footer className="border-t py-8 bg-white dark:bg-gray-950 dark:border-purple-900/20">
                    <div className="container px-4 md:px-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-400">KompyHelp</h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Biz haqimizda
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Xizmatlar
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Narxlar
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Kontaktlar
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-400">Xizmatlar</h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Kompyuter ta'mirlash
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                IT yordam
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Ehtiyot qismlar
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Yetkazib berish
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-400">Yordam</h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Ko'p so'raladigan savollar
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Bilimlar bazasi
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Qo'llanma
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200"
                              >
                                Yordam markazi
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-400">Aloqa</h3>
                          <ul className="space-y-2">
                            <li className="text-gray-600 dark:text-gray-300">Toshkent, O'zbekiston</li>
                            <li className="text-gray-600 dark:text-gray-300">+998 90 123 45 67</li>
                            <li className="text-gray-600 dark:text-gray-300">info@kompyhelp.uz</li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                          &copy; {new Date().getFullYear()} KompyHelp. {dict.common.allRightsReserved}
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </a>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>

                {/* Chatbot komponenti - barcha sahifalarda ko'rinadi */}
                <Chatbot lang={"uz"} dict={dict} />
              </div>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
