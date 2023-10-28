import { useState } from "react"
import CharacterTable from "./components/table/CharacterTable"
import TableComponent from "./components/table/TableComponent"
import { useSelector } from "react-redux"
import { RootState } from "./app/store"
import FavouriteTable from "./components/table/FavouriteTable"

export enum TableState {
  character = "character",
  favourite = "favourite",
}
function App() {
  const [tableState, setTableState] = useState<TableState>(TableState.character)

  const favouriteCharacterData = useSelector(
    (state: RootState) => state.favourite.favourites,
  )
  return (
    <div className="App">
      <div className="flex justify-center mt-10 gap-3">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={(e) => setTableState(TableState.character)}
        >
          Character Table
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={(e) => setTableState(TableState.favourite)}
        >
          Favourite Table
        </button>
      </div>
      {tableState === TableState.character ? (
        <CharacterTable />
      ) : (
        <FavouriteTable />
      )}
    </div>
  )
}

export default App
