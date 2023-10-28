import { useEffect, useState } from "react"
import client from "./axiosClient"
import TableComponent from "./features/table/TableComponent"
import { Character } from "./features/table/columns"

// const defaultData: Character[] = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
//   {
//     id: 1,
//     name: "Ricky asd",
//     status: "Alive",
//     species: "Human",
//     details: 1,
//   },
// ]

function App() {
  const [data, setData] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    client.get(`/?page=${page}`).then((res) => setData(res.data.results))
  }, [page])

  return (
    <div className="App">
      <TableComponent tableData={data} />
      <button onClick={(e) => (page > 0 ? setPage(page - 1) : null)}>
        Prev Page
      </button>{" "}
      {page} <button onClick={(e) => setPage(page + 1)}>Next Page</button>
    </div>
  )
}

export default App
