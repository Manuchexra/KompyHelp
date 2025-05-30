// app/admin/users/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Search, Plus, MoreVertical, ArrowUpDown, Check, X } from "lucide-react"
import AdminLayout from "../layout"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
  lastLogin: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // API dan foydalanuvchilarni yuklash
    const fetchUsers = async () => {
      try {
        // Bu joyda haqiqiy API so'rovini qo'yishingiz kerak
        const mockUsers: User[] = [
          { id: "1", name: "Ali Valiyev", email: "ali@example.com", role: "Admin", status: "active", lastLogin: "2023-05-15 10:30" },
          { id: "2", name: "Dilshod Rajabov", email: "dilshod@example.com", role: "User", status: "active", lastLogin: "2023-05-14 15:45" },
          { id: "3", name: "Otabek Ismoilov", email: "otabek@example.com", role: "Editor", status: "inactive", lastLogin: "2023-05-10 09:20" },
          { id: "4", name: "Shaxzod Qodirova", email: "shaxzod@example.com", role: "User", status: "active", lastLogin: "2023-05-15 08:10" },
          { id: "5", name: "Kamola Nurmatova", email: "kamola@example.com", role: "User", status: "inactive", lastLogin: "2023-05-05 14:30" },
        ]
        setUsers(mockUsers)
      } catch (error) {
        console.error("Foydalanuvchilarni yuklab bo'lmadi:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleStatus = (userId: string) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: user.status === "active" ? "inactive" : "active" }
        : user
    ))
  }

  return (
    <AdminLayout>
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Foydalanuvchilar Boshqaruvi</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Yangi foydalanuvchi
          </Button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Foydalanuvchi qidirish..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filtr</Button>
            <Button variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Saralash
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ism</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Holat</TableHead>
                <TableHead>Oxirgi kirish</TableHead>
                <TableHead className="text-right">Harakatlar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    Yuklanmoqda...
                  </TableCell>
                </TableRow>
              ) : filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    Hech qanday foydalanuvchi topilmadi
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status === "active" ? (
                          <>
                            <Check className="mr-1 h-3 w-3" />
                            Faol
                          </>
                        ) : (
                          <>
                            <X className="mr-1 h-3 w-3" />
                            Nofaol
                          </>
                        )}
                      </span>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Tahrirlash</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleStatus(user.id)}>
                            {user.status === "active" ? "Nofaollashtirish" : "Faollashtirish"}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            O'chirish
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Jami {filteredUsers.length} foydalanuvchi
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Oldingi</Button>
            <Button variant="outline">Keyingi</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}