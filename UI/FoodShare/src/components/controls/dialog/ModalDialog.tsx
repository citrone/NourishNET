import { ReactNode, useEffect, useRef } from 'react'

import './ModalDialog.css'

/**
 * This is a callback function sent by the parent component to get data from the modal
 * @param data is the data sent back to the parent compoennt
 */
type CloseHandler = (data: string | undefined) => void

/**
 * ModalDialog component will display a dialog on the screen containing forms to enter
 * data needed on other components. It will be mainly used in CRUD operations to display
 * the form for entering data.
 * @param openModal it decides if modal will be displayed or not
 * @param closeModal callback funtion that will receive data from the modal
 * @param children ReactNode to display any other info in the dailog as required by the parent component
 */
const ModalDialog = ({ openModal, closeModal, children }: { openModal: boolean; closeModal: CloseHandler; children: ReactNode }) => {
  // store a reference to the dialog element
  const ref = useRef<HTMLDialogElement>(null)

  // when parent component changes the openModal parameter
  // the dialog will be displayed
  useEffect(() => {
    if (openModal) {
      ref.current?.showModal()
    }
  }, [openModal])

  // when the modal dialog is closed return data to the parent compoennt
  // and close the modal
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
