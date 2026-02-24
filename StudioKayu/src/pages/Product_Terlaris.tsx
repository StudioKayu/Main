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
          to="/"
          className="flex items-center gap-2 hover:text-amber-600 transition"
        >
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          Promo
        </Link>
        <Link
          to="/Product_Terlaris"
          className="hover:text-amber-600 transition"
        >
          Product Terlaris
        </Link>
        <Link to="/product" className="hover:text-amber-600 transition">
          Studio Mebel Partner
        </Link>
      </div>
      <div className="flex-1 flex justify-end gap-6">
        <button className="text-xs font-bold text-white bg-[#020617] px-6 py-2 rounded-full hover:opacity-90 transition">
          LOGIN
        </button>
        <button className="text-xs font-bold bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

const Product_Terlaris = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const products = [
    {
      id: 1,
      name: "Kursi Kayu Jati",
      price: "Rp 1.200.000",
      image: "/photo/ban_1.png",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Meja Makan Kayu",
      price: "Rp 3.500.000",
      image: "/photo/ban_1.png",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Lemari Pakaian",
      price: "Rp 5.000.000",
      image: "/photo/ban_1.png",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Tempat Tidur Kayu",
      price: "Rp 4.800.000",
      image: "/photo/ban_1.png",
      rating: 4.9,
    },
  ];

  return (
    <>
      {/* SIDEBAR STYLES */}
      <style>{`
                .sidebar-button-pt {
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
                .sidebar-button-pt:hover { background: #f1f5f9; }
                .sidebar-wrapper-pt {
                    position: absolute;
                    top: 88px;
                    left: 16px;
                    z-index: 40;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .sidebar-overlay-pt {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,.4);
                    z-index: 80;
                }
                .sidebar-menu-pt {
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
                .sidebar-top-pt {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .sidebar-top-pt img { width: 88px; height: auto; }
                .sidebar-content-pt {
                    margin-top: 60px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 18px;
                }
                .sidebar-content-pt h3 {
                    font-size: 18px;
                    margin-bottom: 12px;
                    letter-spacing: 2px;
                }
                .sidebar-content-pt a { color: #000; text-decoration: none; font-size: 14px; }
                .sidebar-content-pt a:hover { color: #f59e0b; }
                .sidebar-bottom-pt {
                    margin-top: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .sidebar-bottom-pt a {
                    text-align: center;
                    padding: 12px;
                    border-radius: 999px;
                    font-weight: bold;
                    text-decoration: none;
                }
                .sidebar-login-pt { background: #020617; color: #fff; }
                .sidebar-register-pt { border: 1px solid #020617; color: #020617; }
            `}</style>

      {/* SIDEBAR TOGGLE BUTTON */}
      <div className="sidebar-wrapper-pt">
        <button className="sidebar-button-pt" onClick={() => setOpenMenu(true)}>
          ☰
        </button>
      </div>

      {/* SIDEBAR MENU */}
      {openMenu && (
        <>
          <div
            className="sidebar-overlay-pt"
            onClick={() => setOpenMenu(false)}
          />
          <aside className="sidebar-menu-pt">
            <div className="sidebar-top-pt">
              <button
                className="sidebar-button-pt"
                onClick={() => setOpenMenu(false)}
              >
                ☰
              </button>
              <img src={SKlogo} alt="Studio Kayu Logo" />
            </div>
            <div className="sidebar-content-pt">
              <h3>MENU</h3>
              <Link to="/promo" onClick={() => setOpenMenu(false)}>
                Promo
              </Link>
              <Link to="/produk-terlaris" onClick={() => setOpenMenu(false)}>
                Produk Terlaris
              </Link>
              <Link to="/desain-interior" onClick={() => setOpenMenu(false)}>
                Layanan Desain Interior
              </Link>
              <Link to="/partner" onClick={() => setOpenMenu(false)}>
                Studio Kayu Partner
              </Link>
            </div>
            <div className="sidebar-bottom-pt">
              <Link
                to="/login"
                className="sidebar-login-pt"
                onClick={() => setOpenMenu(false)}
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="sidebar-register-pt"
                onClick={() => setOpenMenu(false)}
              >
                Daftar
              </Link>
            </div>
          </aside>
        </>
      )}

      <section className="bg-white overflow-x-hidden">
        <Header />
        <div className="flex justify-start items-center flex-1 mt-20 ml-15 gap-6">
          <img
            src="/photo/Logo.png"
            alt="Logo Studio Kayu"
            className="w-[120px] h-auto object-contain"
          />
          <div className="relative group ml-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-slate-400 group-focus-within:text-amber-500 transition-colors"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full md:w-80 pl-14 pr-220 py-4 text-sm text-slate-900 border border-slate-200 rounded-full bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-400"
              placeholder="Cari kayu, furnitur..."
              required
            />
          </div>
          <div className="flex items-center gap-7">
            <a href="">
              <img
                src="/photo/user.png"
                alt=""
                className="w-[28px] h-auto object-contain mb-1"
              />
            </a>
            <img
              src="/photo/keranjang.png"
              alt=""
              className="w-[25px] h-auto object-contain mb-1"
            />
            <img
              src="/photo/daftar_belanja.png"
              alt=""
              className="w-[25px] h-auto object-contain mb-1"
            />
          </div>
        </div>
      </section>

      <section className="-ml-20 mt-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-5xl font-semibold">Produk Terlaris</p>
        </div>
        <div className="w-full max-w-[1200px] mx-auto px-4 mt-20 mb-20">
          <div className="h-[1px] bg-black w-full"></div>
        </div>
        <div className="flex justify-start items-start flex-col gap-6 max-w-[1200px] mx-auto px-4">
          <p className="flex justify-start items-start font-bold text-3xl">
            Pilihan Favorit Pelanggan
          </p>
          <p className="text-slate-600 text-xl">
            Produk-produk pilihan terbaik dengan kualitas premium dan harga
            bersaing.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 mt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-start group cursor-pointer"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full h-[280px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="mt-4 w-full">
                  <p className="font-semibold text-slate-900 text-lg">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-xl font-bold text-amber-600 mt-3">
                    {product.price}
                  </p>
                </div>
                <button className="w-[200px] h-[35px] bg-black rounded-xl mt-6 flex justify-center items-center hover:bg-slate-800 transition">
                  <p className="text-white text-sm">Lihat Selengkapnya</p>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 mt-20 mb-20">
          <div className="h-[1px] bg-black w-full"></div>
        </div>
      </section>
    </>
  );
};

export default Product_Terlaris;
