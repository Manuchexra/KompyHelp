"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, Search, BookOpen, HelpCircle, ArrowLeft, Eye, Calendar } from "lucide-react"

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const articles = [
    {
      id: 1,
      title: "How to Speed Up Your Computer",
      description: "Learn effective methods to improve your computer's performance",
      category: "Performance",
      views: 1250,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Virus Removal Guide",
      description: "Step-by-step guide to remove viruses and malware",
      category: "Security",
      views: 980,
      date: "2024-01-12",
    },
    {
      id: 3,
      title: "Windows Update Troubleshooting",
      description: "Fix common Windows update issues",
      category: "Windows",
      views: 750,
      date: "2024-01-10",
    },
    {
      id: 4,
      title: "Network Connection Problems",
      description: "Diagnose and fix internet connectivity issues",
      category: "Network",
      views: 650,
      date: "2024-01-08",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "How much does computer repair cost?",
      answer: "Our diagnostic fee is $50, which is applied toward any repair. Most common repairs range from $100-300.",
      category: "Pricing",
    },
    {
      id: 2,
      question: "Do you offer remote support?",
      answer:
        "Yes, we provide remote support for software issues. We can connect to your computer securely to diagnose and fix problems.",
      category: "Services",
    },
    {
      id: 3,
      question: "How long does a typical repair take?",
      answer:
        "Most repairs are completed within 24-48 hours. Complex issues may take longer, and we'll keep you informed of progress.",
      category: "Timeline",
    },
    {
      id: 4,
      question: "Do you work on Mac computers?",
      answer: "Yes, we service both Windows PCs and Mac computers. Our technicians are certified on both platforms.",
      category: "Services",
    },
  ]

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
              <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/knowledge-base" className="text-purple-400">
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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Base</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions and browse our comprehensive guides to solve your IT problems quickly and
              efficiently.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800/50 border-purple-800/30 text-white placeholder-gray-400 focus:border-purple-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 border-purple-800/30">
              <TabsTrigger
                value="articles"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="faqs" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <HelpCircle className="h-4 w-4 mr-2" />
                FAQs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Eye className="h-4 w-4 mr-1" />
                          {article.views}
                        </div>
                      </div>
                      <CardTitle className="text-white hover:text-purple-400 transition-colors cursor-pointer">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="faqs" className="mt-8">
              <div className="space-y-6">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} className="bg-gray-800/50 border-purple-800/30 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">{faq.category}</Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you solve any IT problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Support
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                Submit a Ticket
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
