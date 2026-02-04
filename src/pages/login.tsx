function Login() {
  return (
    <>
      {/* logo luar sidebar */}

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
