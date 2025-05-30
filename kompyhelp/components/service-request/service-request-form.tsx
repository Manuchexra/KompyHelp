"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { toast } from "@/components/ui/use-toast"

// Schema for form validation
const serviceRequestSchema = z.object({
  serviceType: z.string({
    required_error: "serviceTypeRequired",
  }),
  deviceType: z.string({
    required_error: "deviceTypeRequired",
  }),
  description: z.string().min(10, {
    message: "descriptionMinLength",
  }),
  preferredDate: z.date({
    required_error: "dateRequired",
  }),
  address: z.string().min(5, {
    message: "addressMinLength",
  }),
  phoneNumber: z.string().min(9, {
    message: "phoneMinLength",
  }),
})

type ServiceRequestFormProps = {
  lang: string
  dict: {
    serviceRequest: {
      title: string
      description: string
      serviceType: string
      deviceType: string
      problemDescription: string
      preferredDate: string
      phoneNumber: string
      address: string
      submit: string
      submitting: string
      successMessage: string
      errorMessage: string
      selectService: string
      selectDevice: string
      selectDate: string
      descriptionPlaceholder: string
      addressPlaceholder: string
      repair: string
      maintenance: string
      upgrade: string
      software: string
      network: string
      desktop: string
      laptop: string
      server: string
      printer: string
      other: string
      validationMessages: Record<string, string>
    }
  }
}

export function ServiceRequestForm({ lang, dict }: ServiceRequestFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof serviceRequestSchema>>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      description: "",
      address: "",
      phoneNumber: "",
    },
  })

  async function onSubmit(values: z.infer<typeof serviceRequestSchema>) {
    setIsSubmitting(true)

    try {
      // Mock API call
      console.log("Submitting service request:", values)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: dict.serviceRequest.successMessage || "Request submitted!",
        description: "Our team will contact you soon.",
      })
      
      router.push(`/${lang}/confirmation`)
    } catch (error) {
      toast({
        title: dict.serviceRequest.errorMessage || "Error!",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Function to get localized validation message
  const getValidationMessage = (key: string) => {
    return dict.serviceRequest.validationMessages?.[key] || 
      `Validation error: ${key}` // Fallback message
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{dict.serviceRequest.title}</CardTitle>
        <CardDescription>{dict.serviceRequest.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Service Type Field */}
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.serviceRequest.serviceType}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={dict.serviceRequest.selectService} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="repair">{dict.serviceRequest.repair}</SelectItem>
                        <SelectItem value="maintenance">{dict.serviceRequest.maintenance}</SelectItem>
                        <SelectItem value="upgrade">{dict.serviceRequest.upgrade}</SelectItem>
                        <SelectItem value="software">{dict.serviceRequest.software}</SelectItem>
                        <SelectItem value="network">{dict.serviceRequest.network}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage>
                      {form.formState.errors.serviceType?.message && 
                        getValidationMessage(form.formState.errors.serviceType.message)}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Device Type Field */}
              <FormField
                control={form.control}
                name="deviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.serviceRequest.deviceType}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={dict.serviceRequest.selectDevice} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="desktop">{dict.serviceRequest.desktop}</SelectItem>
                        <SelectItem value="laptop">{dict.serviceRequest.laptop}</SelectItem>
                        <SelectItem value="server">{dict.serviceRequest.server}</SelectItem>
                        <SelectItem value="printer">{dict.serviceRequest.printer}</SelectItem>
                        <SelectItem value="other">{dict.serviceRequest.other}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage>
                      {form.formState.errors.deviceType?.message && 
                        getValidationMessage(form.formState.errors.deviceType.message)}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Description Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dict.serviceRequest.problemDescription}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={dict.serviceRequest.descriptionPlaceholder}
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.description?.message && 
                      getValidationMessage(form.formState.errors.description.message)}
                  </FormMessage>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Preferred Date Field */}
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>{dict.serviceRequest.preferredDate}</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>{dict.serviceRequest.selectDate}</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage>
                      {form.formState.errors.preferredDate?.message && 
                        getValidationMessage(form.formState.errors.preferredDate.message)}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.serviceRequest.phoneNumber}</FormLabel>
                    <FormControl>
                      <Input placeholder="+998 90 123 45 67" {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.phoneNumber?.message && 
                        getValidationMessage(form.formState.errors.phoneNumber.message)}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Address Field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dict.serviceRequest.address}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={dict.serviceRequest.addressPlaceholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.address?.message && 
                      getValidationMessage(form.formState.errors.address.message)}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {dict.serviceRequest.submitting}
                </>
              ) : (
                dict.serviceRequest.submit
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}