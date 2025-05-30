"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Package, Calendar, BarChart } from "lucide-react"
import Link from "next/link"

type AdminDashboardProps = {
  lang: string
  dict: any
}

export function AdminDashboard({ lang, dict }: AdminDashboardProps) {
  const { user } = useAuth()

  if (!user || (user.role !== "ADMIN" && user.role !== "TECHNICIAN")) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Card>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have permission to access this page</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/uz/dashboard`}>
              <Button>{dict.common.dashboard}</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{dict.admin.dashboard || "Admin Dashboard"}</h2>
          <p className="text-muted-foreground">
            {dict.common.welcome || "Welcome"}, {user.name}
          </p>
        </div>
        <Link href={`/uz/admin/service-requests`}>
          <Button>{dict.admin.requests || "All Requests"}</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.admin.users || "Users"}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.admin.inventory || "Inventory"}</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.admin.scheduler || "Scheduler"}</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0 appointments scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.admin.analytics || "Analytics"}</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0 reports generated</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests">{dict.admin.requests || "Requests"}</TabsTrigger>
          <TabsTrigger value="technicians">{dict.admin.technicians || "Technicians"}</TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{dict.admin.requests || "All Requests"}</CardTitle>
              <CardDescription>
                {dict.admin.requestsDescription || "View and manage all repair requests"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>{dict.admin.noRequests || "There are no repair requests yet"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="technicians" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{dict.admin.technicians || "Technicians"}</CardTitle>
              <CardDescription>{dict.admin.techniciansDescription || "View and manage technicians"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>{dict.admin.noTechnicians || "There are no technicians yet"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
