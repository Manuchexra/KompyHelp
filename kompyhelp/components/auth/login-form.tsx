"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().email("Noto'g'ri email formati").min(1, "Email kiritilishi shart"),
  password: z.string().min(6, "Parol kamida 6 belgidan iborat bo'lishi kerak")
})

export function LoginForm({ dict }: { dict: any }) {
  const { login } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setError(null)

    try {
      await login(values.email, values.password)
    } catch (error) {
      setError(
        error instanceof Error 
          ? error.message 
          : "Tizimga kirishda xatolik yuz berdi. Iltimos, qayta urunib ko'ring."
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6 max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Kirish</h1>
      
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Elektron pochta</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="lazyclub024@gmail.com" 
                    type="email"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parol</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    placeholder="••••••" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Kirilmoqda...
              </>
            ) : (
              "Kirish"
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        <a 
          href="/forgot-password" 
          className="text-muted-foreground hover:text-primary underline underline-offset-4"
        >
          Parolni unutdingizmi?
        </a>
      </div>
      
      <div className="text-center text-sm">
        <span>Hisobingiz yo'qmi? </span>
        <a 
          href="/register" 
          className="text-primary underline underline-offset-4"
        >
          Ro'yxatdan o'tish
        </a>
      </div>
    </div>
  )
}