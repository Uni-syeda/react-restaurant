import React from "react";
function Login({ user, setuser }) {
  const loginForm = (e) => {
    e.preventDefault();
    console.log("this method ran");
    console.log(e.target.email.value);
    console.log(e.terget.password.value);
  };
  return (
    <div>
      <div className="container">
        <div className="center">
          <h2>Sign In</h2>
          <form action="#" onSubmit={loginForm}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="keep-signed-in"
                name="keep-signed-in"
                required
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
            <a href="./create.html">Create Your Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
