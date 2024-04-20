import { useState } from 'react'
import ModalDialog from './components/dialog/ModalDialog'

function App() {
  const [modal, setModal] = useState(false)

  const modalClosed = (data: string | undefined) => {
    console.log(data)
    setModal(false)
  }
  return (
    <>
      <button onClick={() => setModal(true)}>Open modal</button>
      <ModalDialog openModal={modal} closeModal={modalClosed}>
        <p>This is modals content</p>
      </ModalDialog>
    </>
  )
}

export default App
