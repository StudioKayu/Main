import { Link } from "react-router-dom";
import { useState } from "react";
import SKlogo from "../assets/Logo.svg";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b px-8 py-4 flex items-center text-slate-800">
      <div className="flex-1">
        <Link to="/" className="font-bold text-xl tracking-tight ml-15">
          Studio<span className="text-amber-600">Kayu</span>
        </Link>
      </div>

      <div className="flex gap-8 justify-center items-center font-semibold text-sm uppercase tracking-wide">
        <Link
          to="/promo"
          className="flex items-center gap-2 hover:text-amber-600 transition"
        >
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          Promo
        </Link>
        <Link to="/product" className="hover:text-amber-600 transition">
          Product Terlaris
        </Link>
        <Link to="/product" className="hover:text-amber-600 transition">
          Studio Mebel Partner
        </Link>
      </div>

      <div className="flex-1 flex justify-end gap-6">
        <Link to="/login">
          <button className="text-xs font-bold text-white bg-[#020617] px-6 py-2 rounded-full hover:opacity-90 transition">
            LOGIN
          </button>
        </Link>

        <Link to="/register">
          <button className="text-xs font-bold bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition">
            SIGN UP
          </button>
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 w-full">
      <div className="flex items-stretch ml-25">
        <img src="/photo/hp.png" alt="" className="w-[125px] ml-15" />
        <div className="flex flex-col ml-20 mt-5">
          <p className="font-bold text-lg">Aplikasi Studio Mebel</p>
          <p className="max-w-[290px] mt-3">
            StudioMebel memudahkan Anda menemukan mebel berkualitas untuk rumah
            dan kantor, lengkap dengan inspirasi desain dan penawaran menarik
          </p>
          <div className="bg-white border-2 border-black rounded-xl w-[170px] h-[30px] mt-5 mb-5">
            <p className="text-black text-center text-[12px] font-semibold mt-1">
              Download di Android
            </p>
          </div>
          <div className="bg-white border-2 border-black rounded-xl w-[170px] h-[30px] mt-[-10px] mb-5">
            <p className="text-black text-center text-[12px] font-semibold mt-1">
              Download di Ios
            </p>
          </div>
        </div>

        <div className="ml-35 mt-5 max-w-[400px]">
          <p className="font-bold text-lg mb-5">Tautan Yang Berguna</p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Karier
            </p>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Berita
            </p>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Saran
            </p>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Bantuan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Promo() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* STYLE SIDEBAR (PERSIS LOGIN) */}
      <style>{`
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
      `}</style>

      <Header />

      {/* SIDEBAR + LOGO (PERSIS LOGIN) */}
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

      {/* CONTENT PROMO (TIDAK DIUBAH) */}
      <div className="pt-32 px-16 pb-16">
        <h1 className="text-3xl font-bold">Penawaran & Promo</h1>
        <p className="text-gray-500 mt-2 mb-10">Tersedia di online dan toko</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-yellow-300 p-6 rounded-xl">
            <h2 className="text-xl font-bold">Promo Murah</h2>
            <p>Harga hemat, kualitas hebat</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm">
              Lihat promo
            </button>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-xl">
            <h2 className="text-xl font-bold">Promo Akhir Pekan</h2>
            <p>Harga spesial untuk keluarga</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm">
              Lihat promo
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-4">Hanya tersedia online</h2>
        <div className="bg-orange-300 p-6 rounded-xl max-w-xl">
          <h3 className="font-bold">Voucher Rp100.000</h3>
          <p>Belanja minimum tertentu</p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm">
            Lihat promo
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
