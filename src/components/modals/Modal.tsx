import { ReactNode } from "react"
import { createPortal } from "react-dom"

export default function Modal({
  children,
}: {
  children: ReactNode
}): ReactNode {
  return createPortal(
    <>
      <div className="absolute top-0 z-40 h-screen w-screen bg-black opacity-70"></div>
      <div className="absolute top-0 z-50 h-screen w-screen text-black flex justify-center items-center">
        <div className=" bg-white px-4 lg:min-w-[40%] lg:min-h-[20rem] rounded-lg shadow-xl min-w-[80%] md:min-h-[10rem] min-h-[8rem]">
          {children}
        </div>
      </div>
    </>,
    document.body,
  )
}
