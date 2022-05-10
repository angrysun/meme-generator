import boxes from "../boxes"
import { useState } from "react"

export default function Box(props) {
  const [boxesArray, setBoxesArray] = useState(boxes)

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }

  const boxElements = boxesArray.map(box => (
    <div style={styles} className="box" key={box.id}></div>
  ))

  return (
    <main>
      {boxElements}
    </main>
  )
}
