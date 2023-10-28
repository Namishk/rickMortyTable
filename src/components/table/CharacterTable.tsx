import { useEffect, useState } from "react"
import DetailsModal from "../modals/DetailsModal"
import TableComponent from "./TableComponent"
import client from "../../axiosClient"
import { Character } from "./columns"
import { TableState } from "../../App"

export default function CharacterTable() {
  const [data, setData] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    client.get(`/?page=${page}`).then((res) => setData(res.data.results))
  }, [page])
  return (
    <>
      <TableComponent tableType={TableState.character} tableData={data} />
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
      <DetailsModal />
    </>
  )
}
