import { useState } from "react"

export default function Form() {
  const [formData, setFormData] = useState(
    { firstName: "", lastName: "", email: "", comments: "" }
  )

  console.log(formData)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        // in order for onChange to work we need a name
        onChange={handleChange}
        name="firstName"
        // must set value of inputs equal to state that represents each input value
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
    </form>
  )
}
