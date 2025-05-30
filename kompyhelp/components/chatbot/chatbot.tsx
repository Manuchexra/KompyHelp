"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Send, X, MessageCircle, Bot, User } from "lucide-react"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

type ChatbotProps = {
  lang: string
  dict: any
}

export function Chatbot({ lang, dict }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0) {
      const greeting =
        "Salom! Men KompyHelp virtual yordamchisiman. Kompyuter ta'mirlash, texnik xizmat ko'rsatish yoki mahsulotlarimiz haqida savollaringiz bo'lsa, menga murojaat qiling."

      setMessages([
        {
          id: "greeting",
          content: greeting,
          role: "assistant",
          timestamp: new Date(),
        },
      ])
    }
  }, [messages.length])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await simulateResponse(input, lang)

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error getting chatbot response:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Kechirasiz, xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      setIsLoading(false)
    }
  }

  // Handle pressing Enter to send a message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 z-50"
        size="icon"
        aria-label="Chatbotni ochish"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 w-[350px] sm:w-[400px] h-[500px] bg-background border rounded-lg shadow-xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-medium">KompyHelp Yordamchi</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                aria-label="Chatbotni yopish"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <Avatar className={`h-8 w-8 ${message.role === "user" ? "bg-blue-100" : "bg-purple-100"}`}>
                        <AvatarFallback
                          className={
                            message.role === "user" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                          }
                        >
                          {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 text-sm ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.content}
                        <div
                          className={`text-xs mt-1 ${
                            message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="h-8 w-8 bg-purple-100">
                        <AvatarFallback className="bg-purple-100 text-purple-600">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-3 bg-muted flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        <span className="ml-2 text-sm text-muted-foreground">Yozmoqda...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Savolingizni yozing..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-center text-muted-foreground">
                Kompyuter ta'mirlash va texnik xizmat ko'rsatish bo'yicha savollar uchun
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Helper function to format time
function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

// Simulate chatbot response based on user input
async function simulateResponse(input: string, lang: string): Promise<string> {
  const normalizedInput = input.toLowerCase()

  // Common responses in Uzbek (default)
  const responses: Record<string, string> = {
    greeting: "Salom! Sizga qanday yordam bera olaman?",
    pricing:
      "Kompyuter ta'mirlash narxlari muammoning murakkabligiga qarab 50,000 so'mdan boshlanadi. Aniq narx uchun diagnostika kerak bo'ladi.",
    hours: "Biz har kuni 9:00 dan 18:00 gacha ishlaymiz. Dam olish kunlari: yakshanba.",
    location: "Bizning manzilimiz: Toshkent shahri, Chilonzor tumani, 19-mavze, 36-uy.",
    services:
      "Biz quyidagi xizmatlarni taqdim etamiz: kompyuter ta'mirlash, viruslarni tozalash, ma'lumotlarni tiklash, tarmoq sozlash, dasturiy ta'minot o'rnatish va yangilash.",
    warranty: "Barcha ta'mirlash ishlarimiz 30 kunlik kafolat bilan ta'minlanadi.",
    contact:
      "Bizga +998 90 123 45 67 raqamiga qo'ng'iroq qilishingiz yoki info@kompyhelp.uz elektron pochtasiga xabar yuborishingiz mumkin.",
    appointment:
      "Ta'mirlash uchun oldindan yozilish uchun +998 90 123 45 67 raqamiga qo'ng'iroq qiling yoki veb-saytimizda onlayn buyurtma bering.",
    slow_computer:
      "Kompyuteringiz sekin ishlayotgan bo'lsa, quyidagi sabablari bo'lishi mumkin: viruslar, xotira yetishmasligi, qattiq diskdagi muammolar yoki eskirgan dasturiy ta'minot. Diagnostika uchun bizga murojaat qiling.",
    virus:
      "Kompyuteringizda virus bo'lsa, darhol internetdan uzib qo'ying va bizga murojaat qiling. Biz viruslarni tozalash va ma'lumotlaringizni himoya qilish uchun yordam beramiz.",
    data_recovery:
      "Ma'lumotlarni tiklash xizmati mavjud, lekin natija kafolatlanmaydi. Imkon qadar tezroq murojaat qilish muhim.",
    default:
      "Savolingiz uchun rahmat. Batafsilroq ma'lumot olish uchun bizga +998 90 123 45 67 raqamiga qo'ng'iroq qiling yoki info@kompyhelp.uz elektron pochtasiga xabar yuboring.",
  }

  // Check for keywords in the input and return appropriate response
  if (/salom|hello|привет|hi|hey/i.test(normalizedInput)) {
    return responses.greeting
  } else if (/narx|price|цен|qancha|how much|сколько/i.test(normalizedInput)) {
    return responses.pricing
  } else if (/soat|hour|время|work|ish|работа/i.test(normalizedInput)) {
    return responses.hours
  } else if (/manzil|address|where|qayer|где|адрес/i.test(normalizedInput)) {
    return responses.location
  } else if (/xizmat|service|услуг/i.test(normalizedInput)) {
    return responses.services
  } else if (/kafolat|warranty|гарант/i.test(normalizedInput)) {
    return responses.warranty
  } else if (/contact|aloqa|связ|phone|telefon|телефон/i.test(normalizedInput)) {
    return responses.contact
  } else if (/appointment|yozil|запис/i.test(normalizedInput)) {
    return responses.appointment
  } else if (/slow|sekin|медленн/i.test(normalizedInput)) {
    return responses.slow_computer
  } else if (/virus|вирус/i.test(normalizedInput)) {
    return responses.virus
  } else if (/data|recovery|ma'lumot|tiklash|данн|восстанов/i.test(normalizedInput)) {
    return responses.data_recovery
  }

  return responses.default
}
