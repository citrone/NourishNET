import { ReactNode } from "react"

import './CardHeader.css'

/**
 * Card Header Component will display the title of the card.
 * See Card component for details.
 */
const CardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="card-header">
        {children}
      </div>
    </>
  )
}

export default CardHeader
