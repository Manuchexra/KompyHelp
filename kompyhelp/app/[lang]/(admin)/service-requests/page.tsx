// app/admin/service-requests/page.tsx
"use client"

import { useEffect, useState } from "react"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { ServiceRequest } from "@/types"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function ServiceRequestsPage() {
  const [requests, setRequests] = useState<ServiceRequest[]>([])
  const [loading, setLoading] = useState(true)

  const fetchRequests = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/service-requests')
      const data = await response.json()
      setRequests(data)
    } catch (error) {
      console.error("So'rovlarni yuklashda xatolik:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Xizmat So'rovlari</h1>
        <Button variant="outline" onClick={fetchRequests} disabled={loading}>
          {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Yangilash"}
        </Button>
      </div>
      
      <DataTable columns={columns} data={requests} />
    </div>
  )
}