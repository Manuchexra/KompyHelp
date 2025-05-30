"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface TicketFormProps {
  onSubmit?: (data: any) => void
  onCancel?: () => void
}

export function TicketForm({ onSubmit, onCancel }: TicketFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    phone: "",
    issue: "",
    description: "",
    priority: "",
    device: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Transform form data to match API structure
      const ticketData = {
        title: formData.issue,
        description: formData.description,
        priority: formData.priority,
        category: formData.device || "other",
        userId: "1", // Default user ID for demo purposes
      }

      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Muvaffaqiyat!",
          description: "Tiket muvaffaqiyatli yaratildi",
        })

        if (onSubmit) {
          onSubmit(result.ticket)
        }

        // Reset form
        setFormData({
          user: "",
          email: "",
          phone: "",
          issue: "",
          description: "",
          priority: "",
          device: "",
        })
      } else {
        toast({
          title: "Xatolik!",
          description: result.error || "Tiket yaratishda xatolik yuz berdi",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Xatolik!",
        description: "Server bilan bog'lanishda xatolik yuz berdi",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Yangi Tiket Yaratish</CardTitle>
        <CardDescription>Texnik yordam so'rovi uchun ma'lumotlarni to'ldiring</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="user">To'liq ism *</Label>
              <Input
                id="user"
                value={formData.user}
                onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                placeholder="Ismingizni kiriting"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon raqam</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="issue">Muammo sarlavhasi *</Label>
            <Input
              id="issue"
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
              placeholder="Qisqacha muammo tavsifi"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Muhimlik darajasi *</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Muhimlik darajasini tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Past</SelectItem>
                  <SelectItem value="medium">O'rta</SelectItem>
                  <SelectItem value="high">Yuqori</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="device">Qurilma turi *</Label>
              <Select value={formData.device} onValueChange={(value) => setFormData({ ...formData, device: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Qurilma turini tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desktop">Desktop kompyuter</SelectItem>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="mobile">Telefon/Planshet</SelectItem>
                  <SelectItem value="other">Boshqa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Batafsil tavsif</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Muammo haqida batafsil ma'lumot bering..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Tiket Yaratish
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Bekor qilish
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
