"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { ProductCard, type Product } from "../shop/product-card"

// Sample products data
const products: Product[] = [
  {
    id: "1",
    name: "Intel Core i7-12700K",
    price: 4500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "processors",
    inStock: true,
  },
  {
    id: "2",
    name: "AMD Ryzen 9 5900X",
    price: 4200000,
    image: "/placeholder.svg?height=300&width=300",
    category: "processors",
    inStock: true,
  },
  {
    id: "3",
    name: "Corsair Vengeance RGB Pro 32GB",
    price: 1800000,
    image: "/placeholder.svg?height=300&width=300",
    category: "memory",
    inStock: true,
  },
  {
    id: "4",
    name: "G.Skill Trident Z RGB 16GB",
    price: 950000,
    image: "/placeholder.svg?height=300&width=300",
    category: "memory",
    inStock: false,
  },
  {
    id: "5",
    name: "Samsung 970 EVO Plus 1TB",
    price: 1200000,
    image: "/placeholder.svg?height=300&width=300",
    category: "storage",
    inStock: true,
  },
  {
    id: "6",
    name: "WD Black SN850 2TB",
    price: 2100000,
    image: "/placeholder.svg?height=300&width=300",
    category: "storage",
    inStock: true,
  },
  {
    id: "7",
    name: "NVIDIA GeForce RTX 3080",
    price: 8500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "graphics",
    inStock: false,
  },
  {
    id: "8",
    name: "AMD Radeon RX 6800 XT",
    price: 7200000,
    image: "/placeholder.svg?height=300&width=300",
    category: "graphics",
    inStock: true,
  },
  {
    id: "9",
    name: "Logitech G Pro X Keyboard",
    price: 1500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    inStock: true,
  },
  {
    id: "10",
    name: "Razer DeathAdder V2 Pro",
    price: 850000,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    inStock: true,
  },
  {
    id: "11",
    name: 'ASUS ROG Swift PG279QM 27"',
    price: 5500000,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    inStock: true,
  },
  {
    id: "12",
    name: "Seagate Barracuda 4TB HDD",
    price: 750000,
    image: "/placeholder.svg?height=300&width=300",
    category: "storage",
    inStock: true,
  },
]

// Default translations in case dictionary is missing
const defaultTranslations = {
  title: "Computer Parts & Accessories",
  subtitle: "Browse our selection of high-quality computer parts and accessories",
  searchPlaceholder: "Search products...",
  addToCart: "Add to Cart",
  addedToCart: "Added to Cart",
  outOfStock: "Out of Stock",
  noProducts: "No products found",
  tryDifferent: "Try a different search term or category",
  resetFilters: "Reset Filters",
  categories: {
    all: "All Products",
    processors: "Processors",
    memory: "Memory",
    storage: "Storage",
    graphics: "Graphics Cards",
    accessories: "Accessories",
  },
  cart: {
    title: "Your Cart",
    empty: "Your cart is empty",
    startShopping: "Start Shopping",
    total: "Total",
    checkout: "Checkout",
    continueShopping: "Continue Shopping",
    remove: "Remove",
    items: "items",
  },
}

export function ShopPage({ dictionary }: { dictionary: any }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Safely access dictionary with fallbacks
  const shopDict = dictionary?.shop || defaultTranslations

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "all" || product.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{shopDict.title}</h1>
          <p className="text-gray-500">{shopDict.subtitle}</p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="search"
            placeholder={shopDict.searchPlaceholder}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start sm:justify-center">
          <TabsTrigger value="all">{shopDict.categories?.all || "All Products"}</TabsTrigger>
          <TabsTrigger value="processors">{shopDict.categories?.processors || "Processors"}</TabsTrigger>
          <TabsTrigger value="memory">{shopDict.categories?.memory || "Memory"}</TabsTrigger>
          <TabsTrigger value="storage">{shopDict.categories?.storage || "Storage"}</TabsTrigger>
          <TabsTrigger value="graphics">{shopDict.categories?.graphics || "Graphics Cards"}</TabsTrigger>
          <TabsTrigger value="accessories">{shopDict.categories?.accessories || "Accessories"}</TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">{shopDict.noProducts}</h3>
          <p className="text-gray-500 mb-4">{shopDict.tryDifferent}</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setActiveCategory("all")
            }}
          >
            {shopDict.resetFilters}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} dictionary={shopDict} />
          ))}
        </div>
      )}
    </div>
  )
}
