import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DataTable } from "@/components/table/data-table-1"
import { DataTable2 } from "@/components/table/data-table-2"
import { schema } from "@/components/table/data-table-1"
import { z } from "zod"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"

const rawData: z.infer<typeof schema>[] = [
  { id: 1, header: "Executive Summary", type: "Executive Summary", status: "Done", target: "5", limit: "10", reviewer: "Eddie Lake" },
  { id: 2, header: "Technical Approach", type: "Technical Approach", status: "In Progress", target: "3", limit: "6", reviewer: "Assign reviewer" },
  { id: 3, header: "Design", type: "Design", status: "Not Started", target: "4", limit: "8", reviewer: "Assign reviewer" },
  { id: 4, header: "Capabilities", type: "Capabilities", status: "Done", target: "2", limit: "5", reviewer: "Jamik Tashpulatov" },
]

export default function DataTablePage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined)

  const filtered = rawData.filter((row) => {
    const matchesSearch = row.header.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter ? row.status === statusFilter : true
    return matchesSearch && matchesStatus
  })

  return (
    <div className="px-8 py-6 flex flex-col gap-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Tables</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>DataTable Examples</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label htmlFor="search">Search by header</label>
          <Input id="search" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)} className="w-56" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger id="status" className="w-40">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Done">Done</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Not Started">Not Started</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Simple DataTable 1 */}
      <h2 className="text-lg font-semibold">DataTable – Basic</h2>
      <DataTable data={filtered} />

      {/* DataTable 2 advanced */}
      <h2 className="text-lg font-semibold mt-10">DataTable – Advanced (with Drawer & Charts)</h2>
      <DataTable2 data={filtered} />
    </div>
  )
}
