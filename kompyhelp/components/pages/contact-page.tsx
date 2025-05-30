"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

type ContactPageProps = {
  dict: any
  lang: string
}

export function ContactPage({ dict, lang }: ContactPageProps) {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/20 text-sm text-purple-300 mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Biz bilan bog'laning</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">
              Biz bilan bog'laning
            </h1>
            <p className="max-w-[600px] text-purple-200/80 md:text-xl">
              Savollaringiz bormi? Bizning jamoamiz sizga yordam berishga tayyor. Quyidagi forma orqali yoki
              to'g'ridan-to'g'ri bizga murojaat qiling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                  Xabar yuboring
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Formani to'ldiring va biz siz bilan tez orada bog'lanamiz
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Ismingiz
                    </label>
                    <Input
                      id="name"
                      placeholder="Ismingizni kiriting"
                      className="border-purple-200 dark:border-purple-900/50 focus:border-purple-500 dark:focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email manzilingizni kiriting"
                      className="border-purple-200 dark:border-purple-900/50 focus:border-purple-500 dark:focus:border-purple-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mavzu
                  </label>
                  <Input
                    id="subject"
                    placeholder="Xabar mavzusini kiriting"
                    className="border-purple-200 dark:border-purple-900/50 focus:border-purple-500 dark:focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Xabar
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Xabaringizni kiriting"
                    className="min-h-[150px] border-purple-200 dark:border-purple-900/50 focus:border-purple-500 dark:focus:border-purple-500"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30"
                  >
                    <Send className="mr-2 h-4 w-4" /> Yuborish
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                  Aloqa ma'lumotlari
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Bizning ofisimizga tashrif buyuring yoki quyidagi usullar orqali bog'laning
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="flex items-start space-x-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">Manzil</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      123 IT Markazi, Amir Temur ko'chasi, Toshkent, O'zbekiston
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="flex items-start space-x-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">info@kompyhelp.uz</p>
                    <p className="text-gray-500 dark:text-gray-400">support@kompyhelp.uz</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="flex items-start space-x-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-purple-900/20"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 flex items-center justify-center text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">Telefon</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">+998 90 123 45 67</p>
                    <p className="text-gray-500 dark:text-gray-400">+998 71 234 56 78</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950 p-6 rounded-lg shadow-md border border-purple-100 dark:border-purple-900/20">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Ish vaqti</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Dushanba - Juma:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Shanba:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Yakshanba:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Yopiq</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/20 text-sm text-purple-700 dark:text-purple-300 mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Bizning joylashuv</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
                Bizni toping
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bizning ofisimiz Toshkent shahrining markazida joylashgan
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-xl overflow-hidden shadow-lg shadow-purple-500/10 dark:shadow-purple-900/20 border border-purple-100 dark:border-purple-900/20"
          >
            <div className="h-[400px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 text-purple-500 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Xarita</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bu yerda interaktiv xarita bo'ladi. Haqiqiy xarita uchun Google Maps yoki boshqa xarita xizmatini
                  integratsiya qilish kerak.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
