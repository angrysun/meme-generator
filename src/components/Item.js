import { useState } from "react"

export default function Item() {
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  function addItem() {
    setThingsArray(prevState => {
      return [...prevState, `Thing ${prevState.length + 1}`]
    })
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}
