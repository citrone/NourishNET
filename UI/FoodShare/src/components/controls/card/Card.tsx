import { ReactNode } from "react"

import './Card.css'

/**
 * Card Component will display content in an area like a card.
 * It will have a header that will hold the card title and a
 * body which will hold the card content.
 */
const Card = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="card">
        {children}
      </div>
    </>
  )
}

export default Card
