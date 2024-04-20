import { ReactNode, useEffect, useRef } from 'react'
import './ModalDialog.css'

type CloseHandler = (data: string | undefined) => void
const ModalDialog = ({ openModal, closeModal, children }:
  { openModal: boolean; closeModal: CloseHandler; children: ReactNode }) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal()
    }
  }, [openModal])

  const handleModalClose = () => {
    ref.current?.close('Hello Gabriel')
    closeModal(ref.current?.returnValue)
  }

  return (
    <>
      <dialog ref={ref} onCancel={handleModalClose}>
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        {children}
      </dialog>
    </>
  )
}

export default ModalDialog
