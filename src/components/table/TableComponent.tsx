import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Character,
  CharacterColumns,
  FavouriteCharacterColumns,
} from "./columns"
import { useState } from "react"
import { TableState } from "../../App"

export default function TableComponent({
  tableData,
  tableType,
}: {
  tableData: Character[]
  tableType: TableState
}) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [nameSearch, setNameSearch] = useState<string>("")
  const characterTable = useReactTable({
    columns: CharacterColumns,
    data: tableData,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const favouriteTable = useReactTable({
    columns: FavouriteCharacterColumns,
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
      <form className="flex justify-center mt-10 gap-3">
        <label htmlFor="name">Search Character : </label>{" "}
        <input
          className="border border-black rounded-md "
          placeholder="Name of Character"
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </form>
      <table className="table-auto w-1/2 mx-auto my-4">
        <thead className="text-center">
          {(tableType === TableState.character
            ? characterTable
            : favouriteTable
          )
            .getHeaderGroups()
            .map((headerGroup) => (
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
        <tbody className="text-center">
          {(tableType === TableState.character
            ? characterTable
            : favouriteTable
          )
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
