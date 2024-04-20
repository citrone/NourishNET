import { ReactNode } from "react"

import './CardBody.css'

/**
 * Card Body Component will display content in the body of the card.
 * See Card component for details.
 */
const CardBody = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="card-body">{children}</div>
    </>
  )
}

export default CardBody
