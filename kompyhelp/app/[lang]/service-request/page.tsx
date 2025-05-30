"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { toast } from "@/components/ui/use-toast"

// Forma validatsiya schemasi
const serviceRequestSchema = z.object({
  serviceType: z.string({
    required_error: "Xizmat turini tanlang",
  }),
  deviceType: z.string({
    required_error: "Qurilma turini tanlang",
  }),
  description: z.string().min(10, {
    message: "Tavsif kamida 10 ta belgidan iborat bo'lishi kerak",
  }),
  preferredDate: z.date({
    required_error: "Iltimos, afzal ko'rgan sanani tanlang",
  }),
  address: z.string().min(5, {
    message: "Manzil kamida 5 ta belgidan iborat bo'lishi kerak",
  }),
  phoneNumber: z.string()
    .min(9, {
      message: "Telefon raqami kamida 9 ta belgidan iborat bo'lishi kerak",
    })
    .regex(/^\+?\d{9,15}$/, {
      message: "Noto'g'ri telefon raqami formati",
    }),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
})

export default function ServiceRequestPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null)

  // Forma konfiguratsiyasi
  const form = useForm<z.infer<typeof serviceRequestSchema>>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      description: "",
      address: "",
      phoneNumber: "",
    },
  })

  // Geolokatsiyani olish
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation({ lat: latitude, lng: longitude })
          toast({
            title: "Lokatsiya muvaffaqiyatli olingan!",
            description: "Joylashuvingiz aniqlandi.",
          })
        },
        (error) => {
          toast({
            title: "Lokatsiya olishda xatolik",
            description: "Iltimos, brauzerda lokatsiya ruxsatini tekshiring.",
            variant: "destructive",
          })
        }
      )
    } else {
      toast({
        title: "Lokatsiya qo'llab-quvvatlanmaydi",
        description: "Sizning brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi.",
        variant: "destructive",
      })
    }
  }

  // Forma yuborilganda
  async function onSubmit(values: z.infer<typeof serviceRequestSchema>) {
    setIsSubmitting(true)

    try {
      // APIga so'rov yuborish
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          location: location,
          status: 'pending', // So'rov holati
          createdAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('So\'rov yuborishda xatolik')
      }

      // Muvaffaqiyatli xabar
      toast({
        title: "So'rov muvaffaqiyatli yuborildi!",
        description: "Mutaxassislarimiz tez orada siz bilan bog'lanishadi.",
      })
      
      // Bosh sahifaga yo'naltirish
      router.push("/")
    } catch (error) {
      // Xato xabari
      toast({
        title: "Xatolik!",
        description: "So'rov yuborishda xatolik yuz berdi. Iltimos, qayta urunib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Xizmat So'rov Formasi</CardTitle>
          <CardDescription>
            Iltimos, xizmatlarimizdan foydalanish uchun quyidagi formani to'ldiring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Xizmat turi */}
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Xizmat Turi</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Xizmat turini tanlang" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="repair">Kompyuter ta'mirlash</SelectItem>
                          <SelectItem value="maintenance">Texnik xizmat</SelectItem>
                          <SelectItem value="upgrade">Uskuna yangilash</SelectItem>
                          <SelectItem value="software">Dasturiy ta'minot</SelectItem>
                          <SelectItem value="network">Tarmoq xizmatlari</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Qurilma turi */}
                <FormField
                  control={form.control}
                  name="deviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qurilma Turi</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Qurilma turini tanlang" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="desktop">Stol kompyuteri</SelectItem>
                          <SelectItem value="laptop">Noutbuk</SelectItem>
                          <SelectItem value="server">Server</SelectItem>
                          <SelectItem value="printer">Printer</SelectItem>
                          <SelectItem value="other">Boshqa qurilma</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Muammo tavsifi */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Muammo Tavsifi</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Muammoingizni batafsil bayon qiling..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Afzal ko'rgan sana */}
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Afzal Ko'rgan Sana</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Sana tanlang</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefon raqami */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon Raqam</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+998901234567" 
                          {...field}
                          onChange={(e) => {
                            // Faqat raqam va + belgisini qabul qilish
                            const value = e.target.value.replace(/[^0-9+]/g, '')
                            field.onChange(value)
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Manzil */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Manzil</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="To'liq manzilingizni kiriting..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Lokatsiya */}
              <div className="space-y-2">
                <label>Joylashuv</label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={getCurrentLocation}
                  >
                    {location ? "Joylashuv olingan" : "Joylashuvni aniqlash"}
                  </Button>
                  {location && (
                    <span className="text-sm text-muted-foreground self-center">
                      {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Xizmat ko'rsatish joyini aniqroq belgilash uchun lokatsiyangizni yuboring
                </p>
              </div>

              {/* Yuborish tugmasi */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  "So'rovni yuborish"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}