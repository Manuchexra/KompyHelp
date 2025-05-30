"use client"

import { UserSidebar } from "@/components/user-sidebar"
import { TicketForm } from "@/components/ticket-form"

export default function NewTicketPage() {
  return (
    <div className="min-h-screen bg-[#0e0e1a]">
      <UserSidebar />
      <div className="lg:pl-64 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">Yangi So'rov Yaratish</h1>
            <p className="text-gray-400">Texnik yordam uchun yangi so'rov yuboring</p>
          </div>
          <TicketForm
            onSubmit={(data) => {
              console.log("Yangi tiket:", data)
              // API ga yuborish logikasi
            }}
            onCancel={() => window.history.back()}
          />
        </div>
      </div>
    </div>
  )
}
