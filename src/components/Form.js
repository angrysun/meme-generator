import { useState } from "react"

export default function Form() {
  const [formData, setFormData] = useState(
    { firstName: "", lastName: "" }
  )

  console.log(formData)

  function handleChange(event) {
    setFirstName(event.target.value)
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
