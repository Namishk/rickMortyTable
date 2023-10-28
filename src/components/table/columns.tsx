import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { useAppDispatch } from "../../app/hooks"
import {
  addFavourite,
  favouriteModalOpen,
} from "../../features/favourite/favouriteSlice"
import { openDetailsDialog } from "../../features/details/detailsSlice"

export type Character = {
  id: number
  name: string
  status: string
  species: string
  details: number
  favourite: boolean
}

const columnHelper = createColumnHelper<Character>()

export const CharacterColumns = [
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
      const dispatch = useAppDispatch()
      return (
        <button onClick={(e) => dispatch(openDetailsDialog(row.original))}>
          Details
        </button>
      )
    },
  }),
  columnHelper.accessor("favourite", {
    header: "Favourite",
    cell: ({ row, getValue }) => {
      const dispatch = useAppDispatch()
      console.log(row.original)
      return (
        <button
          onClick={(e) => {
            console.log(row.original)
            dispatch(addFavourite(row.original))
          }}
        >
          favourite
        </button>
      )
    },
  }),
]

export const FavouriteCharacterColumns = [
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
      const dispatch = useAppDispatch()
      return (
        <button onClick={(e) => dispatch(openDetailsDialog(row.original))}>
          Details
        </button>
      )
    },
  }),
  columnHelper.accessor("favourite", {
    header: "Favourite",
    cell: ({ row, getValue }) => {
      const dispatch = useAppDispatch()
      console.log(row.original)
      return (
        <button
          onClick={(e) => {
            console.log(row.original)
            dispatch(favouriteModalOpen(row.original))
          }}
        >
          Remove favourite
        </button>
      )
    },
  }),
]
