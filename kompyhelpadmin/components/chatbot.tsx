"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Salom! 👋 Men KompyHelp AI yordamchisiman. Sizga kompyuter muammolari, texnik yordam va boshqa savollar bo'yicha yordam bera olaman. Sizga qanday yordam kerak?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      })

      const result = await response.json()

      setTimeout(() => {
        if (result.success) {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: result.response,
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botMessage])
        } else {
          const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "Kechirasiz, xatolik yuz berdi. Iltimos, qayta urinib ko'ring. 😔",
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, errorMessage])
        }
        setIsTyping(false)
      }, 1500)
    } catch (error) {
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Server bilan bog'lanishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring. 🔄",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickReplies = [
    "💻 Kompyuter muammosi",
    "🌐 Internet ulanish",
    "💰 Narxlar haqida",
    "📞 Aloqa ma'lumotlari",
    "🚨 Shoshilinch yordam",
  ]

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
  }

  // Close chat function
  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group relative"
            size="icon"
          >
            {/* Sparkle effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="h-4 w-4 text-white/60 absolute top-2 right-2 animate-pulse" />
              <Sparkles className="h-3 w-3 text-white/40 absolute bottom-3 left-3 animate-pulse delay-300" />
            </div>

            <MessageCircle className="h-7 w-7 text-white transition-transform duration-300 group-hover:rotate-12" />

            {/* Notification badge */}
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xs text-white font-bold">{unreadCount > 9 ? "9+" : unreadCount}</span>
              </div>
            )}
          </Button>

          {/* Floating text */}
          <div className="absolute bottom-20 right-0 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Yordam kerakmi? 💬
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          {/* Close Button - Alohida va ko'zga tashlanadigan */}
          <div className="absolute -top-3 -right-3 z-10">
            <Button
              onClick={closeChat}
              className="h-10 w-10 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg border-2 border-white transition-all duration-300 hover:scale-110"
              size="icon"
              title="Chatni yopish"
            >
              <X className="h-5 w-5 font-bold" />
            </Button>
          </div>

          <Card
            className={`w-80 sm:w-96 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border border-purple-500/30 shadow-2xl backdrop-blur-xl transition-all duration-500 ${
              isMinimized ? "h-16" : "h-[24rem] sm:h-[28rem]"
            } flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white p-4 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
              </div>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-white/30">
                    <AvatarFallback className="bg-gradient-to-br from-purple-400 to-indigo-500 text-white">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      KompyHelp AI
                      <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-purple-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Onlayn • Tezkor javob</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {/* Minimize/Maximize Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0 transition-all duration-300"
                    title={isMinimized ? "Kattalashtirish" : "Kichraytirish"}
                  >
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Content */}
            {!isMinimized && (
              <CardContent className="flex-1 p-0 flex flex-col">
                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
                      >
                        <div
                          className={`flex items-start gap-2 max-w-[85%] ${
                            message.sender === "user" ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          <Avatar className="w-8 h-8 border-2 border-purple-500/30">
                            <AvatarFallback
                              className={`${
                                message.sender === "user"
                                  ? "bg-gradient-to-br from-blue-500 to-purple-600"
                                  : "bg-gradient-to-br from-purple-500 to-indigo-600"
                              } text-white`}
                            >
                              {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </AvatarFallback>
                          </Avatar>

                          <div
                            className={`rounded-2xl p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                              message.sender === "user"
                                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg"
                                : "bg-gradient-to-br from-slate-800 to-slate-700 text-gray-200 border border-purple-500/30 shadow-lg"
                            }`}
                          >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                            <p className="text-xs opacity-70 mt-2">
                              {message.timestamp.toLocaleTimeString("uz-UZ", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-start gap-2">
                          <Avatar className="w-8 h-8 border-2 border-purple-500/30">
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-gray-200 border border-purple-500/30 rounded-2xl p-3">
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin text-purple-400" />
                              <span className="text-sm">Yozmoqda...</span>
                              <div className="flex gap-1">
                                <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" />
                                <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-100" />
                                <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-200" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Quick Replies */}
                {messages.length <= 2 && (
                  <div className="p-3 border-t border-purple-500/20 bg-gradient-to-r from-slate-800/50 to-purple-900/20">
                    <p className="text-xs text-gray-400 mb-2 font-medium">💡 Tezkor savollar:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <Badge
                          key={reply}
                          variant="outline"
                          className="cursor-pointer border-purple-500/40 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 px-2 py-1 text-xs"
                          onClick={() => handleQuickReply(reply)}
                        >
                          {reply}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-purple-500/20 bg-gradient-to-r from-slate-800/30 to-purple-900/10">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Xabar yozing..."
                      className="bg-slate-800/50 border-purple-500/30 text-white placeholder:text-gray-500 text-sm rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
                      size="sm"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Enter tugmasini bosing</span>
                    <span className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                      Xavfsiz ulanish
                    </span>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
