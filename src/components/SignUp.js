import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    joinedNewsletter: true
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }
  // console.log(formData)

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirmation) {
      console.log("passwords match")
    } else {
      console.log("passwords do not match")
      return
    }

    if (formData.joinedNewsletter) {
      console.log("you joined the newsletter")
    }
  }

  return (
    <div className="sign-up-body">
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="sign-up-form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="sign-up-form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="sign-up-form--input"
            name="passwordConfirmation"
            onChange={handleChange}
            value={formData.passwordConfirmation}
          />

          <div className="sign-up-form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="joinedNewsletter"
              onChange={handleChange}
              checked={formData.joinedNewsletter}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button
            className="sign-up-form--submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
