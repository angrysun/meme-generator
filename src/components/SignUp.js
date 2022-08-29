import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    joinedNewsletter: true
  })

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="sign-up-form-container">
      <form className="form" onSubmit={handleSubmit}>
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
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
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
  )
}
