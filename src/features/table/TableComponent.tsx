import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Character, Columns } from "./columns"
import { useState } from "react"

export default function TableComponent({
  tableData,
}: {
  tableData: Character[]
}) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [nameSearch, setNameSearch] = useState<string>("")
  const table = useReactTable({
    columns: Columns,
    data: tableData,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
  return (
    <>
      <form>
        <label htmlFor="name"></label>
        <input
          placeholder="NAME"
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </form>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.filter((row) => {
              if (nameSearch.toLowerCase() === "") {
                return true
              }
              return row.original.name
                .toLowerCase()
                .includes(nameSearch.toLowerCase())
            })
            .map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
