"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Wifi, HardDrive, Shield, Clock } from "lucide-react"
import Link from "next/link"

type KnowledgeBaseProps = {
  lang: string
  dict: any
}

// Sample knowledge base articles
const articles = {
  troubleshooting: [
    {
      id: "bsod",
      title: "How to fix Blue Screen of Death",
      description: "Learn how to troubleshoot and fix the Blue Screen of Death (BSOD) error in Windows.",
      category: "troubleshooting",
      views: 1245,
    },
    {
      id: "slow-computer",
      title: "Why is my computer running slow?",
      description: "Discover common reasons for computer slowdowns and how to speed up your system.",
      category: "troubleshooting",
      views: 987,
    },
    {
      id: "wifi-issues",
      title: "Troubleshooting Wi-Fi connectivity issues",
      description: "Step-by-step guide to diagnose and fix common Wi-Fi connection problems.",
      category: "troubleshooting",
      views: 756,
    },
    {
      id: "printer-not-working",
      title: "Printer not working? Try these solutions",
      description: "Common printer problems and their solutions explained in simple steps.",
      category: "troubleshooting",
      views: 632,
    },
  ],
  hardware: [
    {
      id: "replace-laptop-battery",
      title: "How to replace laptop battery",
      description: "Step-by-step guide on how to safely replace your laptop battery.",
      category: "hardware",
      views: 843,
    },
    {
      id: "upgrade-ram",
      title: "Upgrading your computer's RAM",
      description: "Learn how to choose and install additional RAM to improve your computer's performance.",
      category: "hardware",
      views: 721,
    },
    {
      id: "ssd-upgrade",
      title: "SSD upgrade guide",
      description: "How to upgrade from a traditional hard drive to an SSD for better performance.",
      category: "hardware",
      views: 689,
    },
  ],
  networking: [
    {
      id: "home-network",
      title: "How to set up a home network",
      description: "Learn how to set up and secure your home network for optimal performance.",
      category: "networking",
      views: 912,
    },
    {
      id: "wifi-range",
      title: "Extending your Wi-Fi range",
      description: "Tips and solutions for extending your Wi-Fi coverage throughout your home.",
      category: "networking",
      views: 765,
    },
    {
      id: "network-security",
      title: "Securing your home network",
      description: "Essential steps to protect your home network from unauthorized access and threats.",
      category: "networking",
      views: 654,
    },
  ],
  maintenance: [
    {
      id: "pc-cleaning",
      title: "How to properly clean your PC",
      description: "Learn the right way to clean your computer inside and out for better performance and longevity.",
      category: "maintenance",
      views: 876,
    },
    {
      id: "windows-updates",
      title: "Managing Windows updates",
      description: "How to properly manage Windows updates to keep your system secure and running smoothly.",
      category: "maintenance",
      views: 732,
    },
    {
      id: "data-backup",
      title: "Data backup best practices",
      description: "Essential strategies for backing up your important data to prevent loss.",
      category: "maintenance",
      views: 645,
    },
  ],
}

export function KnowledgeBase({ lang, dict }: KnowledgeBaseProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter articles based on search query and active tab
  const filteredArticles = Object.values(articles)
    .flat()
    .filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeTab === "all" || article.category === activeTab
      return matchesSearch && matchesCategory
    })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "troubleshooting":
        return <Shield className="h-4 w-4" />
      case "hardware":
        return <HardDrive className="h-4 w-4" />
      case "networking":
        return <Wifi className="h-4 w-4" />
      case "maintenance":
        return <Clock className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={dict.knowledgeBase?.searchPlaceholder || "Search articles..."}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="all">{dict.knowledgeBase?.allCategories || "All"}</TabsTrigger>
          <TabsTrigger value="troubleshooting" className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            {dict.knowledgeBase?.troubleshooting || "Troubleshooting"}
          </TabsTrigger>
          <TabsTrigger value="hardware" className="flex items-center gap-1">
            <HardDrive className="h-4 w-4" />
            {dict.knowledgeBase?.hardware || "Hardware"}
          </TabsTrigger>
          <TabsTrigger value="networking" className="flex items-center gap-1">
            <Wifi className="h-4 w-4" />
            {dict.knowledgeBase?.networking || "Networking"}
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {dict.knowledgeBase?.maintenance || "Maintenance"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          {filteredArticles.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      {getCategoryIcon(article.category)}
                      <span className="capitalize">{article.category}</span>
                      <span className="ml-auto flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {article.views}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href={`/${lang}/knowledge-base/${article.id}`}>
                        {dict.knowledgeBase?.readMore || "Read more"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">
                {dict.knowledgeBase?.noResults || "No articles found matching your search."}
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium mb-2">
          {dict.knowledgeBase?.cantFind || "Can't find what you're looking for?"}
        </h3>
        <p className="text-muted-foreground mb-4">
          {dict.knowledgeBase?.contactUs || "Contact our support team for personalized assistance."}
        </p>
        <Button asChild>
          <Link href={`/${lang}/contact`}>{dict.knowledgeBase?.contactSupport || "Contact Support"}</Link>
        </Button>
      </div>
    </div>
  )
}
