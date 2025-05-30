import { type NextRequest, NextResponse } from "next/server"
import { mockKnowledgeBase } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")
    const category = searchParams.get("category")

    let filteredArticles = [...mockKnowledgeBase]

    // Filter by category
    if (category) {
      filteredArticles = filteredArticles.filter((article) => article.category === category)
    }

    // Search in title and content
    if (search) {
      const searchLower = search.toLowerCase()
      filteredArticles = filteredArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.content.toLowerCase().includes(searchLower) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
      )
    }

    return NextResponse.json({
      success: true,
      articles: filteredArticles,
      total: filteredArticles.length,
    })
  } catch (error) {
    console.error("Knowledge base error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const articleData = await request.json()

    // Validate required fields
    if (!articleData.title || !articleData.content || !articleData.category) {
      return NextResponse.json(
        {
          success: false,
          error: "Sarlavha, kontent va kategoriya talab qilinadi",
        },
        { status: 400 },
      )
    }

    // Create new article
    const newArticle = {
      id: (mockKnowledgeBase.length + 1).toString(),
      title: articleData.title,
      content: articleData.content,
      category: articleData.category,
      tags: articleData.tags || [],
      createdAt: new Date().toISOString(),
    }

    // Add to mock database
    mockKnowledgeBase.push(newArticle)

    return NextResponse.json({
      success: true,
      article: newArticle,
      message: "Maqola muvaffaqiyatli yaratildi",
    })
  } catch (error) {
    console.error("Create article error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
