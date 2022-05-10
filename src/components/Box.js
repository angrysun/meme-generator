import boxes from "../boxes"
import { useState } from "react"
import SecondBox from "./SecondBox"

export default function Box(props) {
  const [boxesArray, setBoxesArray] = useState(boxes)

  const toggleBox = (id) => { console.log(id) }

  const boxElements = boxesArray.map(box => (
    <SecondBox
      key={box.id}
      id={box.id}
      on={box.on}
      handleClick={toggleBox}
    />
  ))

  return (
    <main>
      {boxElements}
    </main>
  )
}
