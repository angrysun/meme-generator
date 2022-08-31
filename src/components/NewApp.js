import WindowTracker from "./WindowTracker"
import { useState } from "react"

export default function NewApp() {
  const [show, setShow] = useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="container">
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  )
}
