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
                <Link to="/Product_Terlaris" className="hover:text-amber-600 transition">
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
const PromoAp = () => {
    const scrollToContent = () => {
        const element = document.getElementById('stats-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className='bg-white'>
            <Header />
            <>

                <div className='flex justify-center  flex-col items-start ml-40'>
                    <div className='w-auto h-auto flex items-center justify-center  text-center mt-40 '>
                        <img src="/photo/bann1.png" alt="" />
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center  text-center mt-10 mb-5'>
                        <img src="/photo/bann2.png" alt="" />
                    </div>
                    <div className='w-120 h-auto flex items-center justify-center  text-center mt-10 mb-5'>
                        <img src="/photo/kecil.png" alt="" />
                    </div>
                </div>

                <div className='flex  flex-col items-start justify-start text-start mt-20  ml-40'>
                    <p className='font-semibold text-2xl'>Home Furnishing weekend offer</p>
                    <p className='font-1/2semibold text-xl mt-10'>Syarat dan ketentuan:</p>
                    <ul className="list-disc pl-6 mt-5">
                        <li>Promo berlaku untuk pembelian di toko atau online (www.StudioKayu.co.id, aplikasi StudioKayu Indonesia, pemesanan via WA).​</li>
                        <li>Selama persediaan masih ada.​ Untuk produk furniture potongan harga diberikan di keranjang belanja.</li>
                        <li>Kebijakan pengembalian 90 hari tidak berlaku untuk pembelian produk promosi lebih dari 6 unit/artikel/transaksi.​</li>
                        <li>StudioKayu berhak untuk mengubah atau menghentikan promosi tanpa pemberitahuan sebelumnya.</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start text-start mt-20  ml-40'>
                    <p className='font-semibold text-2xl'>Studio Kayu weekend offer</p>
                    <p className='font-1/2semibold text-xl mt-10'>Syarat dan ketentuan:</p>
                    <ul className="list-disc pl-6 mt-5">
                        <li>Hanya tersedia untuk pembelian di tempat.​​</li>
                        <li>Selama persediaan masih ada. </li>
                        <li>Berhak untuk mengubah atau menghentikan promosi tanpa pemberitahuan sebelumnya.​</li>
                    </ul>
                    <details className="mt-10 border-b pb-4 group">
                        <summary className="cursor-pointer font-semibold flex justify-between items-center list-none text-2xl">
                            Cara Mendapatkan Harga Khusus IKEA Family
                            <span className="transition-transform group-open:rotate-180">
                                ▼
                            </span>
                        </summary>

                        <div className="mt-4 text-gray-600 text-sm space-y-2">
                            <p>1. Daftar menjadi member IKEA Family.</p>
                            <p>2. Login melalui website atau aplikasi.</p>
                            <p>3. Gunakan kartu member saat transaksi.</p>
                        </div>
                    </details>

                </div>
            </>
            <Footer />
        </section>
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
export default PromoAp;