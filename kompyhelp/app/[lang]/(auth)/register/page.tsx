// 📁 app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "INDIVIDUAL",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (value: string) => {
    setForm({ ...form, role: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Parol mosligini tekshirish
    if (form.password !== form.confirmPassword) {
      setError("Parollar mos kelmadi");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: "uz" }),
      });

      let result = null;
      try {
        result = await res.json();
      } catch (err) {
        setError("Server noto'g'ri formatda javob berdi");
        setLoading(false);
        return;
      }

      if (!res.ok || !result.success) {
        setError(result.message || "Ro'yxatdan o'tishda xatolik yuz berdi");
        setLoading(false);
        return;
      }

      // Muvaffaqiyatli ro'yxatdan o'tish
      setSuccess(true);
      
      // 2 soniyadan keyin asosiy sahifaga yo'naltirish
      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (err: any) {
      console.error("Registration error:", err);
      setError("Tarmoq xatosi yuz berdi. Iltimos, qayta urinib ko'ring");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            KompyHelp - Ro'yxatdan o'tish
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Hisobingizni yarating va xizmatlarimizdan foydalanishni boshlang
          </CardDescription>
        </CardHeader>

        <CardContent>
          {success ? (
            <Alert className="mb-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <AlertDescription>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-green-500 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Ro'yxatdan o'tish muvaffaqiyatli yakunlandi! Siz asosiy sahifaga yo'naltirilmoqdasiz...
                </div>
              </AlertDescription>
            </Alert>
          ) : error ? (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}

          {!success && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">To'liq ismingiz</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ism Familiya"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Elektron pochta</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Parol</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Kamida 8 ta belgi"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Parolni qayta kiriting"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Hisob turi</Label>
                <RadioGroup
                  defaultValue="INDIVIDUAL"
                  value={form.role}
                  onValueChange={handleRoleChange}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="INDIVIDUAL" id="individual" />
                    <Label htmlFor="individual">Shaxsiy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="BUSINESS" id="business" />
                    <Label htmlFor="business">Biznes</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Jo'natilmoqda...
                  </>
                ) : (
                  "Ro'yxatdan o'tish"
                )}
              </Button>
            </form>
          )}
        </CardContent>

        {!success && (
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hisobingiz bormi?{" "}
              <Link href="/login" className="text-purple-600 hover:underline dark:text-purple-400">
                Tizimga kirish
              </Link>
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}