import "./Login.css";

function Login() {
  return (
    <div className="login-form lato-regular">
      <h2 className="text-center lato-bold">Sign In</h2>
      <label htmlFor="" className="login-child">
        Username
        <input type="text" className="login-input" />
      </label>

      <label htmlFor="" className="login-child">
        Password
        <input type="text" className="login-input" />
      </label>

      <input
        type="submit"
        value="LOGIN"
        className="login-child login-button lato-bold"
      />
      <p className="login-message">Login status here.</p>
    </div>
  );
}

export default Login;
