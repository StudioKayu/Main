import { Link } from 'react-router-dom';

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


const Promo = () => {
    return (
        <>
            <section className=" bg-white overflow-x-hidden">
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
            <section className="-ml-20 mt-10">
                <div className="max-w-[1200px] mx-auto px-4">
                    <p className="text-5xl font-semibold">
                        Penawaran Promo
                    </p>
                </div>
                <div className="w-full max-w-[1200px] mx-auto px-4 mt-20 mb-20 ">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>
                <div className='flex justify-start items-start flex-col gap-6 max-w-[1200px] mx-auto px-4'>
                    <p className='flex justify-start items-start font-bold  text-3xl'>Tersedia di online dan toko</p>
                    <p className='text-slate-600 text-xl'>Jangan lewatkan kesempatan miliki perabot rumah baru dengan harga lebih terjangkau selama periode promo.</p>
                </div>

                {/* Container Utama */}
                <div className="max-w-[1200px] mx-auto px-6 mt-20 mb-20">

                    {/* Grid untuk Banner */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-12 w-[1000px]">

                        {/* Banner 1 */}
                        <div className="flex flex-col items-start">
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
                                <img
                                    src="/photo/ban_1.png"
                                    alt="Banner 1"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay dekoratif (opsional) */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className='w-[200px] h-[40px] bg-black rounded-xl mt-8 flex justify-center items-center'>
                                <p className='text-white text-sm'>Lihat Selengkapnya</p>
                            </div>
                        </div>

                        {/* Banner 2 */}
                        <div className="flex flex-col items-start">
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
                                <img
                                    src="/photo/ban_1.png"
                                    alt="Banner 2"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay dekoratif (opsional) */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className='w-[200px] h-[40px] bg-black rounded-xl mt-8 flex justify-center items-center'>
                                <p className='text-white text-sm'>Lihat Selengkapnya</p>
                            </div>
                        </div>

                    </div>
                </div>
                  <div className="w-full max-w-[1200px]  mx-auto mt-20 mb-20  ">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>
            </section>
             {/* SEKARANG SECTION INI BERADA DI DALAM RETURN */}
            <section className="-ml-20 mt-10">
                
                <div className='flex justify-start items-start flex-col gap-6 max-w-[1200px] mx-auto px-4'>
                    <p className='flex justify-start items-start font-bold  text-3xl'>Hanya Tersedia Online</p>
                    <p className='text-slate-600 text-xl'>Nikmati potongan harga spesial yang hanya berlaku untuk waktu terbatas. Klik link di bio sekarang sebelum kehabisan!"</p>
                </div>

                {/* Container Utama */}
                <div className="max-w-[1200px] mx-auto px-6 mt-20 mb-20">

                    {/* Grid untuk Banner */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-12 w-[1000px]">

                        {/* Banner 1 */}
                        <div className="flex flex-col items-start">
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
                                <img
                                    src="/photo/ban_1.png"
                                    alt="Banner 1"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay dekoratif (opsional) */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className='w-[200px] h-[40px] bg-black rounded-xl mt-8 flex justify-center items-center'>
                                <p className='text-white text-sm'>Lihat Selengkapnya</p>
                            </div>
                        </div>

                        {/* Banner 2 */}
                        <div className="flex flex-col items-start">
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
                                <img
                                    src="/photo/ban_1.png"
                                    alt="Banner 2"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay dekoratif (opsional) */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className='w-[200px] h-[40px] bg-black rounded-xl mt-8 flex justify-center items-center'>
                                <p className='text-white text-sm'>Lihat Selengkapnya</p>
                            </div>
                        </div>

                    </div>
                </div>
                  <div className="w-full max-w-[1200px] mx-auto px-4 mt-20 mb-20 ">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>
            </section>
             <section className="-ml-20 mt-10">
                
                <div className='flex justify-start items-start flex-col gap-6 max-w-[1200px] mx-auto px-4'>
                    <p className='flex justify-start items-start font-bold  text-3xl'>Promo bank dan finansial</p>
                    <p className='text-slate-600 text-xl'>Belanja lebih hemat, dapatkan cashback/e-voucher dengan metode pembayaran tertentu.</p>
                </div>

                {/* Container Utama */}
                <div className="max-w-[1200px] mx-auto px-6 mt-20 mb-20">

                    {/* Grid untuk Banner */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-12 w-[1000px]">

                        {/* Banner 1 */}
                        <div className="flex flex-col items-start">
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
                                <img
                                    src="/photo/ban_1.png"
                                    alt="Banner 1"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay dekoratif (opsional) */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className='w-[200px] h-[40px] bg-black rounded-xl mt-8 flex justify-center items-center'>
                                <p className='text-white text-sm'>Lihat Selengkapnya</p>
                            </div>
                        </div>

                        {/* Banner 2 */}
                        <div className="flex flex-col items-start">
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl w-full">
                                <img
                                    src="/photo/ban_1.png"
                                    alt="Banner 2"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay dekoratif (opsional) */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className='w-[200px] h-[40px] bg-black rounded-xl mt-8 flex justify-center items-center'>
                                <p className='text-white text-sm'>Lihat Selengkapnya</p>
                            </div>
                        </div>

                    </div>
                </div>
                  <div className="w-full max-w-[1200px] mx-auto px-4 mt-20 mb-20 ">
                    <div className="h-[1px] bg-black w-full"></div>
                </div>
                <div className="flex justify-start items-start flex-col gap-6 max-w-[1200px] mx-auto px-4">
                    <p className="text-slate-700">Sempurnakan momen akhir tahun dengan berbagai pilihan mebel dan aksesori berkualitas dari StudioMebel. Nikmati Year End Sale 2025 dengan potongan harga hingga 70% untuk ratusan produk pilihan yang siap mempercantik rumah dan kantor Anda.</p>
                </div>
            <Footer/>
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

                    <div className=' flex gap-2'>
                        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mt-10 flex justify-center items-center p-3 cursor-pointer hover:opacity-90 transition'>
                            <img
                                src="/photo/whatsapp.png"
                                alt="WhatsApp"
                                className="w-6 h-6 sm:w-32 md:w-40 object-contain"
                            />

                        </div>
                        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mt-10 flex justify-center items-center p-3 cursor-pointer hover:opacity-90 transition'>
                            <img
                                src="/photo/whatsapp.png"
                                alt="WhatsApp"
                                className="w-28 sm:w-32 md:w-40 h-auto object-contain"
                            />

                        </div>
                        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mt-10 flex justify-center items-center p-3 cursor-pointer hover:opacity-90 transition'>
                            <img
                                src="/photo/whatsapp.png"
                                alt="WhatsApp"
                                className="w-28 sm:w-32 md:w-40 h-auto object-contain"
                            />

                        </div>

                        <div className='bg-white rounded-[50%] w-[40px] h-[40px] mt-10 flex justify-center items-center p-3 cursor-pointer hover:opacity-90 transition'>
                            <img
                                src="/photo/whatsapp.png"
                                alt="WhatsApp"
                                className="w-28 sm:w-32 md:w-40 h-auto object-contain"
                            />

                        </div>


                    </div>

                </div>
                <div className='ml-45 mt-5 max-w-400'>
                    <p className='text-white font-bold text-lg mb-5'>Lokasi Kami</p>
                    <p className='text-gray-300 hover:text-white cursor-pointer transition-colors'>Araya, Malang</p>
                </div>
            </div>

        </footer>
    );
};

export default Promo;