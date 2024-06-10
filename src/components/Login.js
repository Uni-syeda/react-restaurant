import React, { useEffect, useState } from "react";

function Login({ user, setUser }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  //const [allLogin, setAllLogin] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loginForm = (e) => {
    e.preventDefault();
    console.log("this method ran");
    fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginFormData),
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
    if (e.target.name === "email") {
      setLoginFormData((prevData) => ({
        ...prevData,
        email: e.target.value,
      }));
    }
    if (e.target.name === "password") {
      setLoginFormData((prevData) => ({
        ...prevData,
        password: e.target.value,
      }));
    }
  };
  console.log(loginFormData);
  return (
    <div>
      <div className="container">
        <div className="center">
          <h2>Login</h2>
          <form action="#" onSubmit={loginForm}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginFormData.email}
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
                value={loginFormData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="keep-signed-in"
                name="keep-signed-in"
                
              />
              <label htmlFor="keep-signed-in">Keep me signed in</label>
              <a href="# " className="reset-password">
                Reset password
              </a>
            </div>
            <button type="submit">Sign In</button>
          </form>
          <p className="create-account">
            Don't have an account?
            <a href="/signup">Create Your Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
