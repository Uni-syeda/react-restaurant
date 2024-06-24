import React, { useEffect, useState } from "react";

function Signup({ user, setUser }) {
  const [signupFormData, setSignupFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const signupForm = (e) => {
    e.preventDefault();
    console.log("this method ran");
    fetch(`http://localhost:8080/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signupFormData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.statusCode === 200) {
          setUser(result.data);
        } else {
          throw new ErrorEvent(result.error.message);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setSignupFormData((prevData) => ({
        ...prevData,
        email: e.target.value,
      }));
    }
    if (e.target.name === "email") {
      setSignupFormData((prevData) => ({
        ...prevData,
        email: e.target.value,
      }));
    }
    if (e.target.name === "password") {
      setSignupFormData((prevData) => ({
        ...prevData,
        password: e.target.value,
      }));
    }
  };
  console.log(signupFormData);
  return (
    <div>
      <div className="container">
        <div className="center">
          <h2>Signup Account</h2>
          <form action="#" onSubmit={signupForm}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={signupFormData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupFormData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupFormData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Create Account</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
