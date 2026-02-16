import { Link } from "react-router-dom";
import { useState } from "react";
import loginIllustration from "../assets/imglogin.svg";
import SKlogo from "../assets/Logo.svg";

export default function Register() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* STYLE KHUSUS REGISTER */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
        }

        .login-page {
          min-height: 100vh;
          padding-top: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-card {
          display: flex;
          gap: 40px;
          padding: 48px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 32px;
          width: 90%;
          max-width: 820px;
          flex-wrap: wrap;
        }

        .illustration {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8fafc;
          border-radius: 24px;
          padding: 24px;
        }

        .illustration img {
          width: 100%;
          max-width: 380px;
          height: auto;
        }

        .login-form {
          flex: 1;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .login-form label {
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }

        .required {
          color: red;
        }

        .login-form input,
        .login-form textarea {
          padding: 16px 22px;
          border-radius: 999px;
          border: 1px solid #ddd;
          font-size: 14px;
          outline: none;
          width: 100%;
          resize: none;
        }

        .login-form textarea {
          border-radius: 20px;
          min-height: 90px;
        }

        .login-form input:focus,
        .login-form textarea:focus {
          border-color: #f59e0b;
        }

        .login-form button {
          margin-top: 12px;
          padding: 14px;
          border-radius: 999px;
          border: none;
          background: #020617;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
        }

        .login-form button:hover {
          opacity: 0.9;
        }

        .register {
          font-size: 12px;
          margin-top: 12px;
          color: #555;
        }

        .register span {
          color: #3b82f6;
          cursor: pointer;
        }

        .sidebar-button {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid #e5e5e5;
          background: #fff;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-button:hover {
          background: #f1f5f9;
        }

        .sidebar-wrapper {
          position: fixed;
          top: 88px;
          left: 16px;
          z-index: 40;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sidebar-logo {
          width: 86px;
          height: 86px;
          object-fit: contain;
        }

        .sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.4);
          z-index: 80;
        }

        .sidebar-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          height: 100vh;
          background: #fff;
          color: #000;
          z-index: 90;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .sidebar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-top img {
          width: 88px;
          height: auto;
        }

        .sidebar-content {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .sidebar-content h3 {
          font-size: 18px;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .sidebar-content a {
          color: #000;
          text-decoration: none;
          font-size: 14px;
        }

        .sidebar-content a:hover {
          color: #f59e0b;
        }

        .sidebar-bottom {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sidebar-bottom a {
          text-align: center;
          padding: 12px;
          border-radius: 999px;
          font-weight: bold;
          text-decoration: none;
        }

        .sidebar-login {
          background: #020617;
          color: #fff;
        }

        .sidebar-register {
          border: 1px solid #020617;
          color: #020617;
        }

        @media (max-width: 576px) {
          .login-card {
            flex-direction: column;
            padding: 32px;
            margin: 0 16px;
          }
        }
      `}</style>

      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b px-8 py-4 flex items-center text-slate-800">
        <div className="flex-1">
          <Link to="/" className="font-bold text-xl tracking-tight ml-15">
            Studio<span className="text-amber-600">Kayu</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-end gap-6">
          <Link
            to="/login"
            className="text-xs font-bold text-white bg-[#020617] px-6 py-2 rounded-full"
          >
            LOGIN
          </Link>

          <Link
            to="/register"
            className="text-xs font-bold bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition"
          >
            SIGN UP
          </Link>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div className="sidebar-wrapper">
        <button className="sidebar-button" onClick={() => setOpenMenu(true)}>
          ☰
        </button>
        <img src={SKlogo} alt="Studio Kayu Logo" className="sidebar-logo" />
      </div>

      {openMenu && (
        <>
          <div className="sidebar-overlay" onClick={() => setOpenMenu(false)} />
          <aside className="sidebar-menu">
            <div className="sidebar-top">
              <button
                className="sidebar-button"
                onClick={() => setOpenMenu(false)}
              >
                ☰
              </button>
              <img src={SKlogo} alt="Studio Kayu Logo" />
            </div>

            <div className="sidebar-content">
              <h3>MENU</h3>
              <Link to="/promo">Promo</Link>
              <Link to="/produk-terlaris">Produk Terlaris</Link>
              <Link to="/desain-interior">Layanan Desain Interior</Link>
              <Link to="/partner">Studio Kayu Partner</Link>
            </div>

            <div className="sidebar-bottom">
              <Link to="/login" className="sidebar-login">
                Masuk
              </Link>
              <Link to="/register" className="sidebar-register">
                Daftar
              </Link>
            </div>
          </aside>
        </>
      )}

      {/* REGISTER CONTENT */}
      <div className="login-page">
        <div className="login-card">
          <div className="illustration">
            <img src={loginIllustration} alt="register" />
          </div>

          <form className="login-form">
            <label>Nama</label>
            <input type="text" placeholder="Nama lengkap" />

            <label>Email</label>
            <input type="email" placeholder="Email aktif" />

            <label>Password</label>
            <input type="password" placeholder="••••••••" />

            <label>Re-enter Password</label>
            <input type="password" placeholder="••••••••" />

            <label>Address</label>
            <textarea placeholder="Alamat lengkap" />

            <button type="submit">Daftar</button>

            <p className="register">
              Sudah punya akun?{" "}
              <Link to="/login">
                <span>Login here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
