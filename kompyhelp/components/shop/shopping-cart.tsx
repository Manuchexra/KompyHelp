"use client"

import { useState, useEffect } from "react"
import { useCart } from "./cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Plus, Minus, X, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function ShoppingCartButton({ label }: { label: string }) {
  const { totalItems } = useCart()
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative p-2">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs bg-purple-600 text-white">{totalItems}</Badge>
          )}
          <span className="sr-only">{label}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <CartContent />
      </SheetContent>
    </Sheet>
  )
}

function CartContent() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart()

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <ShoppingBag className="h-16 w-16 text-gray-400" />
        <h3 className="text-xl font-medium">Savatingiz bo'sh</h3>
        <p className="text-gray-500 text-center">
          Mahsulotlarni ko'rish va savatga qo'shish uchun do'kon sahifasiga o'ting
        </p>
        <Button asChild className="mt-4">
          <a href="/uz/shop">Do'konga o'tish</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>Savat ({totalItems} mahsulot)</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-auto py-4">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center space-x-4 border-b pb-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium truncate">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.price.toLocaleString()} so'm</p>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Kamaytrish</span>
                </Button>

                <span className="w-8 text-center">{item.quantity}</span>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Ko'paytirish</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">O'chirish</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Oraliq jami:</span>
          <span>{totalPrice.toLocaleString()} so'm</span>
        </div>
        <div className="flex justify-between font-medium text-lg mb-4">
          <span>Jami:</span>
          <span>{totalPrice.toLocaleString()} so'm</span>
        </div>

        <div className="space-y-2">
          <Button className="w-full">Buyurtma berish</Button>
          <Button variant="outline" className="w-full" onClick={clearCart}>
            Savatni tozalash
          </Button>
        </div>
      </div>
    </div>
  )
}
