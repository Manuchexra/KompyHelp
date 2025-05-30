import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Users, Award, Target, ArrowLeft, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">KompyHelp</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-purple-400">
                About
              </Link>
              <Link href="/knowledge-base" className="text-gray-300 hover:text-purple-400 transition-colors">
                Knowledge Base
              </Link>
              <Link href="/shop" className="text-gray-300 hover:text-purple-400 transition-colors">
                Shop
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-600/30">About KompyHelp</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Trusted
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                IT Partner
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Since 2020, KompyHelp has been providing exceptional IT support and computer solutions to businesses and
              individuals. We're passionate about technology and committed to solving your problems efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To provide reliable, efficient, and affordable IT support that empowers our clients to focus on what
                  they do best. We believe technology should work for you, not against you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the leading IT support provider in our region, known for exceptional service, innovative
                  solutions, and building lasting relationships with our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-white">John Smith</CardTitle>
                <CardDescription className="text-purple-300">Lead Technician</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  10+ years of experience in computer repair and network administration. Certified in multiple
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-white">Sarah Johnson</CardTitle>
                <CardDescription className="text-purple-300">Security Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Expert in cybersecurity and data protection. Helps businesses secure their digital assets and prevent
                  threats.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-white">Mike Davis</CardTitle>
                <CardDescription className="text-purple-300">Customer Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Dedicated to providing excellent customer service and ensuring client satisfaction with every
                  interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Reliability</h3>
              <p className="text-gray-300">You can count on us to deliver consistent, dependable service every time.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expertise</h3>
              <p className="text-gray-300">Our team stays current with the latest technologies and best practices.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
              <p className="text-gray-300">We provide clear communication and honest pricing with no hidden fees.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">We embrace new technologies to provide better solutions for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust KompyHelp for their IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/knowledge-base">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                Browse Knowledge Base
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/20 bg-black/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Monitor className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-semibold text-white">KompyHelp</span>
            </div>
            <div className="text-gray-400 text-sm">© 2024 KompyHelp. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
