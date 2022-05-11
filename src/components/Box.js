import boxes from "../boxes"
import { useState } from "react"
import SecondBox from "./SecondBox"

export default function Box(props) {
  const [boxesArray, setBoxesArray] = useState(boxes)

  const toggleBox = (id) => {
    setBoxesArray(prevBoxes => {
      const newBoxes = []
      for(let i = 0; i < prevBoxes.length; i++) {
        const currentBox = prevBoxes[i]
        if (currentBox.id === id) {
          const updatedBoxes = {
            ...currentBox,
            on: !currentBox.on
          }
          newBoxes.push(updatedBoxes)
        } else {
          newBoxes.push(updatedBoxes)
        }
      }
      return newBoxes
    })
  }

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
