// src/pages/Home.tsx
import { Link } from 'react-router-dom';

// 1. Buat Header di variabel terpisah agar rapi
const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b px-8 py-4 flex items-center text-slate-800">

            {/* 1. SISI KIRI (Logo) */}
            <div className="flex-1">
                <Link to="/" className="font-bold text-xl tracking-tight ml-15">
                    Studio<span className="text-amber-600">Kayu</span>
                </Link>
            </div>

            {/* 2. SISI TENGAH (Menu) */}
            <div className="flex gap-8 justify-center items-center font-semibold text-sm uppercase tracking-wide">
                <Link to="/" className="flex items-center gap-2 hover:text-amber-600 transition">
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

            {/* 3. SISI KANAN */}
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

const Home = () => {
    const scrollToContent = () => {
        const element = document.getElementById('stats-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <> {/* <-- HARUS ADA PEMBUKA FRAGMENT DI SINI */}
            <section className="min-h-screen bg-white overflow-x-hidden">
                <Header />
                <div className="flex justify-start items-center flex-1 mt-20 ml-15 gap-6">
                    <img
                        src="/photo/Logo.png"
                        alt="Logo Studio Kayu"
                        className="w-[120px] h-auto object-contain"
                    />
                    <div className="relative group ml-5">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-slate-400 group-focus-within:text-amber-500 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>

                        <input
                            type="search"
                            className="block w-full md:w-80 pl-14 pr-220 py-4 text-sm text-slate-900 border border-slate-200 rounded-full bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-slate-400"
                            placeholder="Cari kayu, furnitur..."
                            required
                        />
                    </div>
                    <div className='flex items-center gap-7'>
                        <a href=""><img src="/photo/user.png" alt="" className="w-[28px] h-auto object-contain mb-1" /></a>
                        <img src="/photo/keranjang.png" alt="" className="w-[25px] h-auto object-contain mb-1" />
                        <img src="/photo/daftar_belanja.png" alt="" className="w-[25px] h-auto object-contain mb-1" />
                    </div>
                </div>
            </section>

            {/* SEKARANG SECTION INI BERADA DI DALAM RETURN */}
            <section className="w-full flex flex-col items-center mt-[-600px]">
                {/* 1. CONTAINER BANNER (Tetap di Tengah) */}
                <div className="w-full max-w-[1200px] px-4">
                    <img
                        src="/photo/banner.png"
                        alt="Banner Studio Kayu"

                        className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                    />
                </div>

                {/* 2. CONTAINER DIV HITAM (Di bawah banner, mepet kiri) */}
                {/* Kita pakai max-w yang sama agar sejajar dengan pinggiran banner */}
                <div className="w-full max-w-[1200px] px-4 mt-6 gap-8 flex">
                    <div className='bg-white w-70 h-15 rounded-xl border-2 border-black mt-[30px] flex items-center justify-center'>
                        <p className='font-semibold text-slate-800'>Semua Product</p>
                    </div>
                    <div className='bg-white w-70 h-15 rounded-xl border-2 border-black mt-[30px] flex items-center justify-center'>
                        <p className='font-semibold text-slate-800'>Diskon 20%</p>
                    </div>
                    <div className='bg-white w-70 h-15 rounded-xl border-2 border-black mt-[30px] flex items-center justify-center'>
                        <p className='font-semibold text-slate-800'>Diskon 50%</p>
                    </div>
                    <div className='bg-white w-70 h-15 rounded-xl border-2 border-black mt-[30px] flex items-center justify-center'>
                        <p className='font-semibold text-slate-800'>Diskon 70%</p>
                    </div>
                </div>
                <div className="w-full max-w-[1200px] mx-auto px-4 mt-10">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>

                <div className='mt-5 w-full max-w-[1200px] px-4 flex ml-20'>
                    <div className='grid grid-cols-3 gap-15 flex'>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1200px] mx-auto px-4 mt-10">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>
                <div className='mt-5 w-full max-w-[1200px] px-4 flex ml-20'>
                    <div className='grid grid-cols-3 gap-15 flex'>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1200px] mx-auto px-4 mt-10">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>
                <div className='mt-5 w-full max-w-[1200px] px-4 flex ml-20'>
                    <div className='grid grid-cols-3 gap-15 flex'>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                        <div className='w-full max-w-[590px]'>
                            <img src="/photo/Lemari_kecil.png" alt="" className='mt-20' />
                            <p className=' cursor-pointer hover:underline transition-all text-2xl mt-5'>Urban Home</p>
                            <p className='text-m'>Rak Sepatu, Minimalis 100x80 cm</p>
                            <p className='text-sm line-through text-slate-400'>2.000.000</p>
                            <p className='text-lg font-bold text-red-500'>1.500.000</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10 w-full">
            <div className='flex items-stretch ml-25'>
                <img src="/photo/hp.png" alt="" className="w-[125px] ml-15 items-left justify-left flex" />
                <div className='flex flex-col  ml-20 mt-5 '>
                    <p className='text-white font-bold text-lg'>Aplikasi Studio Mebel</p>
                    <p className='max-w-[290px] mt-3'>StudioMebel memudahkan Anda menemukan mebel berkualitas untuk rumah dan kantor, lengkap dengan inspirasi desain dan penawaran menarik</p>
                    <div className='bg-white border-2 border-black rounded-xl w-[170px] h-[30px] mt-5 mb-5'>
                        <p className='text-black text-center  flex  justify-center items-center text-[12px] font-semibold mt-1'>Download di Android </p>
                    </div>
                    <div className='bg-white border-2 border-black rounded-xl w-[170px] h-[30px] mt-[-10px] mb-5'>
                        <p className='text-black text-center  flex  justify-center items-center text-[12px] font-semibold mt-1'>Download di Ios</p>
                    </div>
                </div>
                <div className='ml-35 mt-5 max-w-[400px]'>
                    {/* 1. Judul: Menggunakan col-span-2 agar tetap di atas sendirian */}
                    <p className='text-white font-bold text-lg mb-5'>Tautan Yang Berguna</p>

                    {/* 2. Container Grid untuk isi link */}
                    <div className='grid grid-cols-2 gap-x-12 gap-y-3'>
                        <p className='text-gray-300 hover:text-white cursor-pointer transition-colors'>Karier</p>
                        <p className='text-gray-300 hover:text-white cursor-pointer transition-colors'>Berita</p>
                        <p className='text-gray-300 hover:text-white cursor-pointer transition-colors'>Saran</p>
                        <p className='text-gray-300 hover:text-white cursor-pointer transition-colors'>Bantuan</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};
export default Home;