export default function SecondBox(props) {
  // const [OnOff, setOnOff] = useState(props.on)
  // const toggleBox = () => setOnOff(!OnOff)

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <div
      style={styles}
      className="box"
      onClick={props.toggleBox}
    >
    </div>
  )
}
