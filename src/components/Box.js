import boxes from "../boxes"
import { useState } from "react"
import SecondBox from "./SecondBox"

export default function Box(props) {
  const [boxesArray, setBoxesArray] = useState(boxes)

  const toggleBox = (id) => {
    setBoxesArray(prevBoxes => {
      return prevBoxes.map((box) => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
    // setBoxesArray(prevBoxes => {
    //   const newBoxes = []
    //   for(let i = 0; i < prevBoxes.length; i++) {
    //     const currentBox = prevBoxes[i]
    //     if (currentBox.id === id) {
    //       const updatedBox = {
    //         ...currentBox,
    //         on: !currentBox.on
    //       }
    //       newBoxes.push(updatedBox)
    //     } else {
    //       newBoxes.push(currentBox)
    //     }
    //   }
    //   return newBoxes
    // })
  }

  const boxElements = boxesArray.map(box => (
    <SecondBox
      key={box.id}
      on={box.on}
      handleClick={() => toggleBox(box.id)}
    />
  ))

  return (
    <main>
      {boxElements}
    </main>
  )
}
