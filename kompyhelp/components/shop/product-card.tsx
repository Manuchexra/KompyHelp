"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "./cart-context"

export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
  dictionary: any
}

// Default translations
const defaultTranslations = {
  addToCart: "Add to Cart",
  addedToCart: "Added to Cart",
  outOfStock: "Out of Stock",
}

export function ProductCard({ product, dictionary }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  // Use dictionary values with fallbacks
  const dict = dictionary || defaultTranslations

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm px-3 py-1">
              {dict.outOfStock || "Out of Stock"}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium text-lg truncate">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg">{product.price.toLocaleString()} so'm</span>
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdded}
          variant={isAdded ? "outline" : "default"}
        >
          {isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              {dict.addedToCart || "Added to Cart"}
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              {dict.addToCart || "Add to Cart"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
