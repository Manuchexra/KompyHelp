// app/admin/dashboard/page.tsx
"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users, FileText, Database, MessageSquare } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <DashboardCard 
          title="Foydalanuvchilar" 
          value="1,234" 
          change="+12% from last month" 
          icon={Users}
        />
        <DashboardCard 
          title="So'rovlar" 
          value="568" 
          change="+8% from last month" 
          icon={FileText}
        />
        <DashboardCard 
          title="Maqolalar" 
          value="245" 
          change="+15 new this week" 
          icon={Database}
        />
        <DashboardCard 
          title="Fikrlar" 
          value="89" 
          change="5 new today" 
          icon={MessageSquare}
        />
      </div>

      {/* Qo'shimcha statistikalar va widgetlar */}
    </div>
  )
}

function DashboardCard({ title, value, change, icon: Icon }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500">{change}</p>
      </CardContent>
    </Card>
  )
}