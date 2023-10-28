import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import Modal from "./Modal"
import { RootState } from "../../app/store"
import { closeDetailsDialog } from "../../features/details/detailsSlice"

export default function DetailsModal() {
  const dispatch = useAppDispatch()
  let modalOpen = useSelector((state: RootState) => state.details.ModalOpen)
  let modalData = useSelector((state: RootState) => state.details.characterInfo)
  console.log(modalData)
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
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-4 float-right"
        onClick={(e) => dispatch(closeDetailsDialog())}
      >
        CLOSE
      </button>
    </Modal>
  )
}
