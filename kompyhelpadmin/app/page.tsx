import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Clock,
  Star,
  Headphones,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">Professional IT Support</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sizning Ishonchli
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}
              IT Hamkoringiz
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mutaxassis kompyuter yordami, texnik yechimlar va IT xizmatlar. Sizning texnologiya muammolaringizni tez va
            samarali hal qilamiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Hoziroq Yordam Oling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/knowledge-base">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                Yechimlarni Ko'ring
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Bizning Xizmatlar</h2>
            <p className="text-gray-300 text-lg">Barcha ehtiyojlaringiz uchun keng qamrovli IT yechimlari</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <Monitor className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Kompyuter Ta'mirlash</CardTitle>
                <CardDescription className="text-gray-300">
                  Barcha turdagi kompyuterlar uchun apparat va dasturiy ta'minot muammolarini hal qilish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Apparat diagnostikasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Dastur o'rnatish
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Virus tozalash
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Xavfsizlik Yechimlari</CardTitle>
                <CardDescription className="text-gray-300">
                  Tizimlaringizni tahdidlar va zaifliklardan himoya qiling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Antivirus sozlash
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Firewall konfiguratsiyasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Ma'lumotlar zaxirasi
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Ishlash Optimizatsiyasi</CardTitle>
                <CardDescription className="text-gray-300">
                  Maksimal samaradorlik uchun tizimlaringizni tezlashtiring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Tizim tozalash
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Registry optimizatsiyasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Apparat yangilash
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nima Uchun Bizni Tanlaysiz?</h2>
            <p className="text-gray-300 text-lg">Bizning afzalliklarimiz va xizmat sifati</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tajribali Jamoa</h3>
              <p className="text-gray-300">5+ yillik tajribaga ega mutaxassislar</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Yordam</h3>
              <p className="text-gray-300">Har doim sizning xizmatingizdamiz</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Yuqori Sifat</h3>
              <p className="text-gray-300">99% mijozlar mamnuniyati</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tez Javob</h3>
              <p className="text-gray-300">15 daqiqada javob berish kafolati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Mamnun Mijozlar</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Hal Qilingan Muammolar</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Yordam Mavjud</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Muvaffaqiyat Darajasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mijozlar Fikri</h2>
            <p className="text-gray-300 text-lg">Bizning xizmatlarimiz haqida mijozlar nima deyishadi</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Kompyuterim ishlamay qolganda, KompyHelp jamoasi juda tez yordam berdi. Professional xizmat va qulay
                  narxlar!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Aziz Karimov</div>
                    <div className="text-gray-400 text-sm">Biznes egasi</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Ofisimizning barcha kompyuterlarini sozlab berishdi. Endi hamma narsa juda tez ishlaydi. Rahmat!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Malika Tosheva</div>
                    <div className="text-gray-400 text-sm">Ofis menejeri</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "24/7 yordam xizmati juda foydali. Kechqurun muammo bo'lganda ham darhol yordam berishdi."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">S</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sardor Umarov</div>
                    <div className="text-gray-400 text-sm">Dasturchi</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Biz Bilan Bog'laning</h2>
            <p className="text-gray-300 text-lg">
              IT muammolaringizni hal qilishga tayyormiz? Bugun biz bilan bog'laning!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Telefon</h3>
              <p className="text-gray-300">+998 90 123 45 67</p>
              <p className="text-gray-300">+998 91 234 56 78</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@kompyhelp.uz</p>
              <p className="text-gray-300">support@kompyhelp.uz</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Manzil</h3>
              <p className="text-gray-300">Toshkent sh., Yunusobod t.</p>
              <p className="text-gray-300">IT Park, 2-qavat</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Biz Bilan Bog'laning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/20 bg-black/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">KompyHelp</span>
              </div>
              <p className="text-gray-400 mb-4">Professional IT yordam xizmati. Sizning texnologiya hamkoringiz.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">i</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Xizmatlar</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/repair" className="hover:text-purple-400 transition-colors">
                    Kompyuter Ta'mirlash
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-purple-400 transition-colors">
                    Xavfsizlik
                  </Link>
                </li>
                <li>
                  <Link href="/services/optimization" className="hover:text-purple-400 transition-colors">
                    Optimizatsiya
                  </Link>
                </li>
                <li>
                  <Link href="/services/consultation" className="hover:text-purple-400 transition-colors">
                    Konsultatsiya
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Kompaniya</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    Biz Haqimizda
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge-base" className="hover:text-purple-400 transition-colors">
                    Bilimlar Bazasi
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-purple-400 transition-colors">
                    Do'kon
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400 transition-colors">
                    Aloqa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Yordam</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/support" className="hover:text-purple-400 transition-colors">
                    Yordam Markazi
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-purple-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                    Maxfiylik
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-purple-400 transition-colors">
                    Shartlar
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-800/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 KompyHelp. Barcha huquqlar himoyalangan.</div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Ishlab chiqildi ❤️ bilan</span>
              <Badge variant="outline" className="border-purple-600 text-purple-400">
                Toshkent, O'zbekiston
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
