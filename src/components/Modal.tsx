import { ReactNode } from "react"
import { createPortal } from "react-dom"

export default function Modal({
  children,
}: {
  children: ReactNode
}): ReactNode {
  return createPortal(
    <>
      <div className="absolute top-0 z-40 h-screen w-screen bg-black opacity-60"></div>
      <div className="absolute top-0 z-50 h-screen w-screen text-black flex justify-center items-center">
        <div className=" bg-white lg:min-w-[50%] lg:min-h-[20rem] min-w-[80%] md:min-h-[10rem] min-h-[8rem]">
          {children}
        </div>
      </div>
    </>,
    document.body,
  )
}
