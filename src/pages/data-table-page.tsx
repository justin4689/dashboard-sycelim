"use client"

import { useEffect, useState } from "react"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export default function DataTablePage() {
  const [data, setData] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        const result = await new Promise<Payment[]>((resolve) => {
          setTimeout(() => {
            resolve([
              { id: "a1b2c3d4", amount: 150, status: "pending", email: "alice@example.com" },
              { id: "e5f6g7h8", amount: 200, status: "processing", email: "bob@example.com" },
              { id: "i9j0k1l2", amount: 300, status: "success", email: "carol@example.com" },
              { id: "m3n4o5p6", amount: 250, status: "failed", email: "dan@example.com" },
              { id: "q7r8s9t0", amount: 180, status: "pending", email: "eva@example.com" },
              { id: "u1v2w3x4", amount: 220, status: "processing", email: "frank@example.com" },
              { id: "y5z6a7b8", amount: 275, status: "success", email: "grace@example.com" },
              { id: "c9d0e1f2", amount: 190, status: "pending", email: "harry@example.com" },
              { id: "g3h4i5j6", amount: 210, status: "processing", email: "irene@example.com" },
              { id: "k7l8m9n0", amount: 320, status: "pending", email: "jack@example.com" },
              { id: "o1p2q3r4", amount: 170, status: "processing", email: "kate@example.com" },
              { id: "s5t6u7v8", amount: 230, status: "success", email: "liam@example.com" },
              { id: "w9x0y1z2", amount: 310, status: "pending", email: "mia@example.com" },
              { id: "a3b4c5d6", amount: 260, status: "processing", email: "nick@example.com" },
              { id: "e7f8g9h0", amount: 280, status: "processing", email: "olivia@example.com" },
              { id: "i1j2k3l4", amount: 240, status: "success", email: "paul@example.com" },
              { id: "m5n6o7p8", amount: 195, status: "failed", email: "quinn@example.com" },
              { id: "q9r0s1t2", amount: 205, status: "pending", email: "rose@example.com" },
              { id: "u3v4w5x6", amount: 300, status: "processing", email: "steve@example.com" },
              { id: "y7z8a9b0", amount: 285, status: "success", email: "tina@example.com" }
            ])
          }, 500)
        })
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-10 px-8">
      <DataTable columns={columns} data={data} />
    </div>
  )
}