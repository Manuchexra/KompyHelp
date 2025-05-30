"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Calendar, FileText, User, PlusCircle } from "lucide-react"
import Link from "next/link"

type CustomerDashboardProps = {
  lang: string
  dict: any
}

export function CustomerDashboard({ lang, dict }: CustomerDashboardProps) {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Card>
          <CardHeader>
            <CardTitle>Not Authenticated</CardTitle>
            <CardDescription>Please login to view your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/uz/login`}>
              <Button>{dict.common.login}</Button>
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
          <h2 className="text-2xl font-bold">{dict.customer.profile}</h2>
          <p className="text-muted-foreground">
            {dict.common.welcome}, {user.name}
          </p>
        </div>
        <Link href={`/uz/service-request`}>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            {dict.customer.newRequest}
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.customer.myRequests}</CardTitle>
            <Laptop className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.customer.appointments}</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.customer.knowledgeBase}</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0 articles viewed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{dict.customer.feedback}</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">+0 feedback submitted</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests">{dict.customer.myRequests}</TabsTrigger>
          <TabsTrigger value="appointments">{dict.customer.appointments}</TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{dict.customer.myRequests}</CardTitle>
              <CardDescription>
                {dict.customer.requestsDescription || "View and manage your repair requests"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>{dict.customer.noRequests || "You don't have any repair requests yet"}</p>
                <Link href={`/uz/service-request`}>
                  <Button variant="outline" className="mt-4">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {dict.customer.newRequest}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{dict.customer.appointments}</CardTitle>
              <CardDescription>
                {dict.customer.appointmentsDescription || "View and manage your appointments"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>{dict.customer.noAppointments || "You don't have any appointments yet"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
