import { useState } from "react"

export default function Form() {
  const [firstName, setFirstName] = useState("")

  function handleChange(event) {
    console.log(event)
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
    </form>
  )
}
