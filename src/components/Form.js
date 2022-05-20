import { useState } from "react"

export default function Form() {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true
    }
  )

  console.log(formData)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
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
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      {/* htmlFor added for cleaner code and clarity */}
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
    </form>
  )
}
