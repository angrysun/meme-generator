import boxes from "../boxes"
import { useState } from "react"

export default function Box() {
  const [boxesArray, setBoxesArray] = useState(boxes)

  const boxElements = boxesArray.map(box => (
    <div className="box" key={box.id}></div>
  ))

  return (
    <main>
      {boxElements}
    </main>
  )
}
