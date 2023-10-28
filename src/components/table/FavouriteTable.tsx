import { useState } from "react"
import TableComponent from "./TableComponent"
import { TableState } from "../../App"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import FavouriteModal from "../modals/FavouriteModal"
import DetailsModal from "../modals/DetailsModal"

export default function FavouriteTable() {
  const [page, setPage] = useState<number>(1)
  const favouriteCharacterData = useSelector(
    (state: RootState) => state.favourite.favourites,
  )

  return (
    <>
      <TableComponent
        tableType={TableState.favourite}
        tableData={favouriteCharacterData.slice((page - 1) * 20, page * 20)}
      />
      <div className="flex justify-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={(e) => (page > 1 ? setPage(page - 1) : null)}
        >
          Prev Page
        </button>
        <span className="text-gray-800 font-bold py-2 px-4 rounded-l">
          {" "}
          {page}{" "}
        </span>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={(e) => setPage(page + 1)}
        >
          Next Page
        </button>
      </div>
      <FavouriteModal />
      <DetailsModal />
    </>
  )
}
