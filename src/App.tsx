import { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Logo from "./assets/logo-studiokayu.svg";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
          <header className="sidebar-header">
            <div className="sidebar-title">Menu</div>
            <img src={Logo} alt="Studio Kayu" className="sidebar-logo" />
          </header>

          <div className="sidebar-menu">
            <ul>
              <li>
                <Link to="/">Promo</Link>
              </li>
              <li>
                <Link to="/produk-terlaris">Produk Terlaris</Link>
              </li>
              <li>
                <Link to="/layanan-desain">Layanan Desain Interior</Link>
              </li>
              <li>
                <Link to="/diskon">Diskon 70%</Link>
              </li>
              <li>
                <Link to="/ikea-family">IKEA Family</Link>
              </li>

              <li className="menu-auth-wrapper">
                <Link to="/login" className="menu-auth">
                  Masuk / Daftar
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <main className={`content ${sidebarOpen ? "blurred" : ""}`}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
