"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

type FAQItem = {
  question: string
  answer: string
  category: string
}

type FAQSectionProps = {
  dict: any
  lang: string
}

export function FAQSection({ dict, lang }: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "Kompyuter ta'mirlash xizmati qancha vaqt oladi?",
      answer:
        "Kompyuter ta'mirlash vaqti muammoning murakkabligiga bog'liq. Oddiy muammolar 1-2 soat ichida hal qilinishi mumkin, murakkab muammolar esa 1-3 kun talab qilishi mumkin. Diagnostika jarayonidan so'ng, biz sizga aniq vaqt jadvalini taqdim etamiz.",
      category: "repair",
    },
    {
      question: "Ta'mirlash xizmatlariga kafolat beriladi?",
      answer:
        "Ha, barcha ta'mirlash xizmatlarimiz 90 kunlik kafolat bilan ta'minlanadi. Agar shu davr ichida xuddi shu muammo qayta yuzaga kelsa, biz bepul ta'mirlashni amalga oshiramiz.",
      category: "repair",
    },
    {
      question: "Uyga tashrif xizmati mavjudmi?",
      answer:
        "Ha, biz uyga tashrif xizmatini taqdim etamiz. Mutaxassislarimiz belgilangan vaqtda sizning uyingizga yoki ofisizga tashrif buyurishadi. Bu xizmat uchun qo'shimcha to'lov mavjud.",
      category: "service",
    },
    {
      question: "Qanday to'lov usullari mavjud?",
      answer:
        "Biz naqd pul, bank kartasi, Click, Payme va boshqa elektron to'lov tizimlarini qabul qilamiz. Biznes mijozlar uchun hisob-faktura orqali to'lov ham mavjud.",
      category: "payment",
    },
    {
      question: "Ma'lumotlarim xavfsizligi qanday ta'minlanadi?",
      answer:
        "Mijozlarimizning ma'lumotlari xavfsizligi bizning asosiy ustuvorligimizdir. Biz barcha ma'lumotlarni shifrlash va xavfsiz saqlash protokollaridan foydalanamiz. Ta'mirlash jarayonida, sizning ruxsatingizsiz hech qanday ma'lumotlar ko'rib chiqilmaydi yoki nusxalanmaydi.",
      category: "security",
    },
    {
      question: "Kompyuterim virusdan tozalash uchun qancha vaqt ketadi?",
      answer:
        "Virusdan tozalash odatda 2-4 soat vaqt oladi, lekin bu virusning turi va darajasiga bog'liq. Ba'zi hollarda, tizimni to'liq qayta o'rnatish talab qilinishi mumkin, bu holda jarayon 1-2 kun davom etishi mumkin.",
      category: "repair",
    },
    {
      question: "Kompyuterimni tezlashtirish uchun nima qilishim kerak?",
      answer:
        "Kompyuteringizni tezlashtirish uchun bir necha usullar mavjud: keraksiz dasturlarni o'chirish, xotirani tozalash, viruslardan tekshirish, SSD diskka o'tish yoki RAM xotirani oshirish. Biz kompyuteringizni tekshirib, eng samarali yechimni taklif qilamiz.",
      category: "performance",
    },
    {
      question: "Biznes uchun IT xizmatlar narxi qanday?",
      answer:
        "Biznes IT xizmatlar narxi kompaniyangiz ehtiyojlariga va tizimingiz hajmiga bog'liq. Biz har bir mijoz uchun individual narx taklif qilamiz. Bepul konsultatsiya uchun biz bilan bog'laning.",
      category: "business",
    },
    {
      question: "Qanday qilib xizmat so'rovini yuborishim mumkin?",
      answer:
        "Xizmat so'rovini yuborish uchun saytimizda ro'yxatdan o'ting, keyin 'Xizmat so'rash' tugmasini bosing. Muammoni tavsiflang va qulay vaqtni tanlang. Shuningdek, +998 71 123-45-67 raqamiga qo'ng'iroq qilib ham so'rov yuborishingiz mumkin.",
      category: "service",
    },
    {
      question: "Kompyuter qismlarini almashtirish xizmati bormi?",
      answer:
        "Ha, biz kompyuter qismlarini almashtirish xizmatini taqdim etamiz. Bizda keng turdagi original qismlar mavjud: protsessorlar, xotira modullari, qattiq disklar, SSD, video kartalar va boshqalar.",
      category: "repair",
    },
    {
      question: "Operatsion tizimni o'rnatish qancha turadi?",
      answer:
        "Operatsion tizimni o'rnatish narxi tizim turiga va qo'shimcha dasturlar soniga bog'liq. Windows o'rnatish 150,000 so'mdan, macOS o'rnatish 200,000 so'mdan, Linux o'rnatish 100,000 so'mdan boshlanadi.",
      category: "pricing",
    },
    {
      question: "Ma'lumotlarni tiklash xizmati kafolatli?",
      answer:
        "Ma'lumotlarni tiklash murakkab jarayon bo'lib, natija kafolati 100% bo'lmaydi. Biroq, bizning muvaffaqiyat darajamiz 85% dan yuqori. Biz avval diagnostika o'tkazib, qanday ma'lumotlarni tiklash mumkinligini aniqlaymiz va keyin xizmat narxini taklif qilamiz.",
      category: "data",
    },
    {
      question: "Tarmoq o'rnatish xizmati nimalarni o'z ichiga oladi?",
      answer:
        "Bizning tarmoq o'rnatish xizmatimiz quyidagilarni o'z ichiga oladi: tarmoq loyihasini ishlab chiqish, kabellarni o'tkazish, tarmoq uskunalarini o'rnatish va sozlash, Wi-Fi qamrovini optimallash, xavfsizlik tizimlarini o'rnatish va foydalanuvchilarni o'qitish.",
      category: "network",
    },
    {
      question: "Kompyuter ta'mirlash uchun qanday kafolat beriladi?",
      answer:
        "Barcha ta'mirlash ishlarimiz 3 oylik kafolat bilan ta'minlanadi. Agar shu davr ichida ta'mirlangan qism bilan bog'liq muammo yuzaga kelsa, biz bepul ta'mirlashni amalga oshiramiz.",
      category: "repair",
    },
    {
      question: "Shoshilinch ta'mirlash xizmati mavjudmi?",
      answer:
        "Ha, biz shoshilinch ta'mirlash xizmatini taqdim etamiz. Bu xizmat uchun qo'shimcha to'lov mavjud, lekin biz muammoni imkon qadar tezroq hal qilishga harakat qilamiz, ko'pincha shu kunning o'zida.",
      category: "service",
    },
  ]

  // Filter FAQ items based on search query and category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(faqItems.map((item) => item.category)))]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
            Tez-tez so'raladigan savollar
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Kompyuter ta'mirlash va IT xizmatlar haqida eng ko'p so'raladigan savollarga javoblar
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative">
            <Input
              type="text"
              placeholder="Savol yoki kalit so'z kiriting..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-purple-200 focus:border-purple-500 dark:border-purple-800 dark:focus:border-purple-600"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer text-sm capitalize ${
                activeCategory === category
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/30"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "Barcha" : category}
            </Badge>
          ))}
        </div>

        {filteredFAQs.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <AccordionItem value={`item-${index}`} className="border-purple-200 dark:border-purple-800/30">
                    <AccordionTrigger className="text-left font-medium text-purple-800 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-200 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">
              Hech qanday natija topilmadi. Boshqa so'rov bilan urinib ko'ring.
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-100 dark:border-purple-800/30">
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
              Savolingizga javob topa olmadingizmi?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Bizning mutaxassislarimiz sizning barcha savollaringizga javob berishga tayyor
            </p>
            <div className="flex justify-center">
              <a
                href={`tel:+998712345678`}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
              >
                +998 71 234-56-78
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
