import boxes from "../boxes"
import { useState } from "react"

export default function Box() {
  const [boxesArray, setBoxesArray] = useState(boxes)
}
