import React from "react";
function Signup() {
  const SignupForm = (e) => {
    e.preventdefault();
    console.log("This method ran");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div>
      <div className="container">
        <div className="center">
          <h2>Signup Account</h2>
          <form action="#" onSubmit={SignupForm}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Create Account</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="./login.html">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
