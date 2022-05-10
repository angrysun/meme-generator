import boxes from "../boxes"
import { useState } from "react"
import SecondBox from "./SecondBox"

export default function Box(props) {
  const [boxesArray, setBoxesArray] = useState(boxes)

  const boxElements = boxesArray.map(box => (
    <SecondBox key={box.id} on={box.on} />
  ))

  return (
    <main>
      {boxElements}
    </main>
  )
}
