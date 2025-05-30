"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Computer, Phone, Mail, MapPin, Clock, MessageSquare, Send, Users, Headphones, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    priority: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Show success message
        alert("Xabaringiz muvaffaqiyatli yuborildi!")

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          priority: "",
        })
      } else {
        alert(result.error || "Xabar yuborishda xatolik yuz berdi")
      }
    } catch (error) {
      alert("Server bilan bog'lanishda xatolik yuz berdi")
      console.error("Form submission error:", error)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "Tezkor yordam uchun qo'ng'iroq qiling",
      value: "+998 90 123 45 67",
      action: "Qo'ng'iroq qilish",
      available: "24/7",
      color: "text-green-400",
      bgColor: "bg-green-900/20",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Batafsil so'rovlar uchun email yuboring",
      value: "info@kompyhelp.uz",
      action: "Email yuborish",
      available: "24 soat ichida javob",
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Onlayn chat orqali tezkor yordam",
      value: "Hozir mavjud",
      action: "Chat boshlash",
      available: "9:00 - 22:00",
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
    {
      icon: MapPin,
      title: "Ofis",
      description: "Bizning ofisimizga tashrif buyuring",
      value: "Toshkent, Chilonzor tumani",
      action: "Manzilni ko'rish",
      available: "Dush-Juma 9:00-18:00",
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
  ]

  const officeHours = [
    { day: "Dushanba - Juma", time: "9:00 - 18:00", status: "Ochiq" },
    { day: "Shanba", time: "10:00 - 16:00", status: "Ochiq" },
    { day: "Yakshanba", time: "Yopiq", status: "Yopiq" },
    { day: "Shoshilinch yordam", time: "24/7", status: "Har doim" },
  ]

  const team = [
    {
      name: "Sardor Usmonov",
      role: "Bosh Texnik",
      phone: "+998 90 111 11 11",
      email: "sardor@kompyhelp.uz",
      speciality: "Hardware, Network",
    },
    {
      name: "Aziza Rahimova",
      role: "Software Mutaxassisi",
      phone: "+998 90 222 22 22",
      email: "aziza@kompyhelp.uz",
      speciality: "Software, Virus",
    },
    {
      name: "Malika Tosheva",
      role: "Mijozlar bilan aloqa",
      phone: "+998 90 333 33 33",
      email: "malika@kompyhelp.uz",
      speciality: "Customer Support",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-gray-200">
      {/* Header */}
      <header className="bg-[#12121e] border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Computer className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">KompyHelp</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-purple-400">
                Bosh sahifa
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-purple-400">
                Biz haqimizda
              </Link>
              <Link href="/knowledge-base" className="text-gray-300 hover:text-purple-400">
                Bilimlar bazasi
              </Link>
              <Link href="/shop" className="text-gray-300 hover:text-purple-400">
                Do'kon
              </Link>
              <Link href="/contact" className="text-purple-400">
                Aloqa
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
                  Kirish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Biz Bilan Bog'laning</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200 max-w-3xl mx-auto">
            Har qanday savol yoki yordam uchun biz bilan bog'laning. Biz sizga yordam berishga tayyormiz!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[#0e0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bog'lanish Usullari</h2>
            <p className="text-xl text-gray-400">Sizga qulay bo'lgan usulni tanlang</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-[#12121e] border-purple-900/30 hover:border-purple-500/50 transition-all text-center"
              >
                <CardHeader>
                  <div className={`p-4 rounded-lg ${method.bgColor} w-fit mx-auto`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <CardTitle className="text-white">{method.title}</CardTitle>
                  <CardDescription className="text-gray-400">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-white font-semibold">{method.value}</p>
                    <p className="text-sm text-gray-400">{method.available}</p>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">{method.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#12121e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#0e0e1a] border-purple-900/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Xabar Yuborish</CardTitle>
                <CardDescription className="text-gray-400">
                  Formani to'ldiring va biz tez orada siz bilan bog'lanamiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        To'liq ism *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ismingizni kiriting"
                        required
                        className="bg-[#12121e] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        required
                        className="bg-[#12121e] border-purple-900/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Telefon raqam
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 90 123 45 67"
                      className="bg-[#12121e] border-purple-900/30 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">
                        Mavzu *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Xabar mavzusi"
                        required
                        className="bg-[#12121e] border-purple-900/30 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority" className="text-gray-300">
                        Muhimlik darajasi
                      </Label>
                      <Select
                        value={formData.priority}
                        onValueChange={(value) => setFormData({ ...formData, priority: value })}
                      >
                        <SelectTrigger className="bg-[#12121e] border-purple-900/30 text-white">
                          <SelectValue placeholder="Tanlang" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a2e] border-purple-900/30 text-gray-200">
                          <SelectItem value="low">Past</SelectItem>
                          <SelectItem value="medium">O'rta</SelectItem>
                          <SelectItem value="high">Yuqori</SelectItem>
                          <SelectItem value="urgent">Shoshilinch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Xabar *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Xabaringizni batafsil yozing..."
                      rows={5}
                      required
                      className="bg-[#12121e] border-purple-900/30 text-white"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Xabar Yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="bg-[#0e0e1a] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-500" />
                    Ish Vaqti
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#12121e] rounded-lg">
                      <div>
                        <p className="text-white font-medium">{schedule.day}</p>
                        <p className="text-gray-400 text-sm">{schedule.time}</p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          schedule.status === "Ochiq"
                            ? "bg-green-900/30 text-green-300"
                            : schedule.status === "Har doim"
                              ? "bg-purple-900/30 text-purple-300"
                              : "bg-red-900/30 text-red-300"
                        }`}
                      >
                        {schedule.status}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Team Contacts */}
              <Card className="bg-[#0e0e1a] border-purple-900/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    Jamoa A'zolari
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {team.map((member, index) => (
                    <div key={index} className="p-4 bg-[#12121e] rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-purple-900/20 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{member.name}</h3>
                          <p className="text-purple-400 text-sm">{member.role}</p>
                          <p className="text-gray-400 text-xs mb-2">{member.speciality}</p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-300">{member.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-300">{member.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Support */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-500/50">
                <CardContent className="p-6 text-center">
                  <Headphones className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Tezkor Yordam Kerakmi?</h3>
                  <p className="text-purple-200 text-sm mb-4">
                    Shoshilinch yordam uchun bizning 24/7 qo'llab-quvvatlash xizmatimizga murojaat qiling
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">
                      <Phone className="h-4 w-4 mr-2" />
                      +998 90 123 45 67
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-purple-400 text-purple-300 hover:bg-purple-400/20"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#0e0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bizning Manzil</h2>
            <p className="text-xl text-gray-400">Ofisimizga tashrif buyuring</p>
          </div>

          <Card className="bg-[#12121e] border-purple-900/30">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">KompyHelp Ofisi</h3>
                  <p className="text-gray-400 mb-4">
                    Toshkent shahar, Chilonzor tumani
                    <br />
                    Bunyodkor ko'chasi, 1-uy
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Globe className="h-4 w-4 mr-2" />
                    Xaritada ko'rish
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a14] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Computer className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold text-white">KompyHelp</span>
              </div>
              <p className="text-gray-400">Professional kompyuter va texnik yordam xizmatlari</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Xizmatlar</h3>
              <ul className="space-y-2">
                <li>Kompyuter ta'mirlash</li>
                <li>Telefon ta'mirlash</li>
                <li>Internet sozlash</li>
                <li>Virus tozalash</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Kompaniya</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-purple-400">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-purple-400">
                    Xizmatlar
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400">
                    Aloqa
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge-base" className="hover:text-purple-400">
                    Yordam
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Aloqa</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-purple-500 mr-2" />
                  <span>+998 90 123 45 67</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-purple-500 mr-2" />
                  <span>info@kompyhelp.uz</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Toshkent, Chilonzor</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 KompyHelp. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
