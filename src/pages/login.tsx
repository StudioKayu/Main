import Logo from "../assets/logo-studiokayu.svg";

function Login() {
  return (
    <>
      {/* logo luar sidebar */}
      <img src={Logo} alt="Studio Kayu" className="login-logo" />

      <div className="login-page">
        <div className="login-card">
          <h2>Login</h2>

          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Masuk</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
