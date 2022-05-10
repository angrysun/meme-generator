export default function SecondBox(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "none"
  }

  return (
    <div style={styles} className="box"></div>
  )
}
