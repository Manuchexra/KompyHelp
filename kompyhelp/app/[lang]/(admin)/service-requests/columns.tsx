// app/[lang]/(admin)/service-requests/columns.tsx
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ServiceRequest } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<ServiceRequest>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sarlavha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Holat",
  },
  {
    accessorKey: "priority",
    header: "Ahamiyati",
  },
  // Qo'shimcha ustunlar...
]