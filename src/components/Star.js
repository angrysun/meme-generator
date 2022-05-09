export default function Star(props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
  return (
    <img
      src={`../images/${starIcon}`}
      alt="star"
      className="card--favorite"
      onClick={props.handleClick}
    />
  )
}
