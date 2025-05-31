"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface UserFormProps {
  onSubmit?: (data: any) => void
  onCancel?: () => void
}

export function UserForm({ onSubmit, onCancel }: UserFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Transform form data to match API structure
      const userData = {
        name: formData.name,
        email: formData.email,
        role: formData.role.toLowerCase(),
      }

      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Muvaffaqiyat!",
          description: "Foydalanuvchi muvaffaqiyatli yaratildi",
        })

        if (onSubmit) {
          onSubmit(result.user)
        }

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
        })
      } else {
        toast({
          title: "Xatolik!",
          description: result.error || "Foydalanuvchi yaratishda xatolik yuz berdi",
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Yangi Foydalanuvchi</CardTitle>
        <CardDescription>Yangi foydalanuvchi qo'shish uchun ma'lumotlarni to'ldiring</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">To'liq ism *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ismni kiriting"
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
            <Label htmlFor="role">Rol *</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Rolni tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mijoz">Mijoz</SelectItem>
                <SelectItem value="Texnik">Texnik</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Yaratish
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
