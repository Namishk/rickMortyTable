import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import Modal from "./Modal"
import { RootState } from "../../app/store"
import { closeDetailsDialog } from "../../features/details/detailsSlice"
import {
  favouriteModalClose,
  favouriteModalOpen,
  removeFavourite,
} from "../../features/favourite/favouriteSlice"
import { Character } from "../table/columns"

export default function FavouriteModal() {
  const dispatch = useAppDispatch()
  let modalOpen = useSelector((state: RootState) => state.favourite.modalOpen)
  let removeFavouriteID = useSelector(
    (state: RootState) => state.favourite.removeFavourite,
  )
  let Data = useSelector((state: RootState) => state.favourite.favourites)
  let modalData = Data.filter((entry: Character) => {
    console.log(
      entry,
      removeFavouriteID,
      entry.id === removeFavouriteID,
      "SOMEDATA",
    )
    return entry.id === removeFavouriteID
  })[0]
  console.log(modalOpen, removeFavouriteID, Data, modalData, "modalData")
  if (!modalOpen) return null
  return (
    <Modal>
      <h1 className="mt-10 text-center font-semibold text-2xl">
        Character Details
      </h1>
      <div className="flex gap-4 justify-center items-center mt-7">
        {/* @ts-ignore */}
        <img src={modalData.image} className="min-h-[18rem]" />
        <div className=" text-lg flex flex-col gap-4">
          <div>
            <span>Name: </span>
            {modalData.name}
          </div>
          <div>
            {" "}
            <span>Species: </span>
            {modalData.species}
          </div>
          <div>
            {" "}
            <span>Origin: </span>
            {/* @ts-ignore */}
            {modalData.origin.name}
          </div>
          <div>
            {" "}
            <span>Status: </span>
            {modalData.status}
          </div>
          {/* @ts-ignore */}
          <div>
            {" "}
            <span>Gender: </span>
            {/* @ts-ignore */}
            {modalData.gender}
          </div>
          <div>
            {" "}
            <span>Location: </span>
            {/* @ts-ignore */}
            {modalData.location.name}
          </div>
        </div>
      </div>
      <div className="float-right my-4">
        <button
          className="mx-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={(e) => dispatch(favouriteModalClose())}
        >
          CLOSE
        </button>
        <button
          className="mx-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={(e) => {
            dispatch(removeFavourite(removeFavouriteID))
            dispatch(favouriteModalClose())
          }}
        >
          Remove from Favourites
        </button>
      </div>
    </Modal>
  )
}
