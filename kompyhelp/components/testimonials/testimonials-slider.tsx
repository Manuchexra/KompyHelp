"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"

type Testimonial = {
  id: number
  name: string
  location: string
  avatar: string
  rating: number
  text: string
  service: string
}

type TestimonialsSliderProps = {
  dict: any
  lang: string
}

export function TestimonialsSlider({ dict, lang }: TestimonialsSliderProps) {
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Oybek Toshmatov",
      location: "Tashkent",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Xizmat juda tez bo'ldi. Juda mamnunman. Kompyuterim endi yangiday ishlayapti.",
      service: "Laptop Repair",
    },
    {
      id: 2,
      name: "Aziza Karimova",
      location: "Samarqand",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Admin panel juda qulay, biznesim uchun ayni muddao. Barcha xodimlarim uchun IT yordamni bir joydan olish juda qulay.",
      service: "Business IT Support",
    },
    {
      id: 3,
      name: "Dmitriy Petrov",
      location: "Tashkent",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Профессиональный сервис с отличным обслуживанием клиентов. Рекомендую всем.",
      service: "Data Recovery",
    },
    {
      id: 4,
      name: "Gulnora Saidova",
      location: "Bukhara",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      text: "Kompyuterim tez ta'mirlandi va narxi ham juda qulay. Rahmat!",
      service: "Virus Removal",
    },
    {
      id: 5,
      name: "Akmal Yusupov",
      location: "Namangan",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Juda professional xizmat. Kompyuterim avvalgidan ham yaxshi ishlayapti.",
      service: "Hardware Upgrade",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  // Get visible testimonials (current and next two)
  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
    const result = []

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }

    return result
  }

  const [visibleItems, setVisibleItems] = useState<Testimonial[]>([])

  useEffect(() => {
    setVisibleItems(getVisibleTestimonials())

    const handleResize = () => {
      setVisibleItems(getVisibleTestimonials())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex, testimonials])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative py-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-purple-600 dark:bg-purple-400 w-6" : "bg-purple-200 dark:bg-purple-800"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card className="h-full bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900/20">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-purple-700 dark:text-purple-300">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">{testimonial.text}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
                    {testimonial.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
