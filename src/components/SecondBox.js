import { useState } from "react"

export default function SecondBox(props) {
  const [OnOff, setOnOff] = useState(props.on)
  const toggleBox = () => setOnOff(!OnOff)

  const styles = {
    backgroundColor: OnOff ? "#222222" : "transparent"
  }

  return (
    <div style={styles} className="box" onClick={toggleBox}></div>
  )
}
