// app/admin-dashboard/page.tsx
"use client"

import ProtectedRoute from "@/components/protected-route"
import AdminDashboard from "@/components/admin/admin-dashboard"

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  )
}