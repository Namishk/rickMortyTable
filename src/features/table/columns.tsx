import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

export type Character = {
  id: number
  name: string
  status: string
  species: string
  details: number
  favourite: boolean
}

const columnHelper = createColumnHelper<Character>()

export const Columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("species", {
    header: "Species",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("details", {
    header: "Details",
    cell: ({ row, getValue }) => {
      return <button onClick={(e) => console.log(row.original)}>Details</button>
    },
  }),
  columnHelper.accessor("favourite", {
    header: "Favourite",
    cell: ({ row, getValue }) => {
      return (
        <button onClick={(e) => console.log(row.original)}>favourite</button>
      )
    },
  }),
]
