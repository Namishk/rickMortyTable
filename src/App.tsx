import { useEffect, useState } from "react"
import client from "./axiosClient"
import TableComponent from "./components/table/TableComponent"
import { Character } from "./components/table/columns"
import Modal from "./components/Modal"
import { useAppDispatch } from "./app/hooks"
import { closeDetailsDialog } from "./features/details/detailsSlice"
import { useSelector } from "react-redux"
import { RootState } from "./app/store"

function App() {
  const [data, setData] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    client.get(`/?page=${page}`).then((res) => setData(res.data.results))
  }, [page])
  const dispatch = useAppDispatch()
  let modalOpen = useSelector((state: RootState) => state.details.ModalOpen)
  console.log(modalOpen)
  return (
    <div className="App">
      <TableComponent tableData={data} />
      <button onClick={(e) => (page > 1 ? setPage(page - 1) : null)}>
        Prev Page
      </button>{" "}
      {page} <button onClick={(e) => setPage(page + 1)}>Next Page</button>
      {modalOpen && (
        <Modal>
          <button
            onClick={() => {
              dispatch(closeDetailsDialog())
            }}
          >
            CLOSE
          </button>
        </Modal>
      )}
    </div>
  )
}

export default App
