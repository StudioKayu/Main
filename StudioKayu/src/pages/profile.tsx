
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { Camera } from "lucide-react";


const Profile = () => {

    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const scrollToContent = () => {
        const element = document.getElementById('stats-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [showPassword, setShowPassword] = useState(false);

    const password = "StephenWijayaUtama123";

    const visiblePart = password.slice(-5); // 5 karakter terakhir
    const hiddenPart = "*".repeat(password.length - 5);

    const displayedPassword = showPassword
        ? hiddenPart + visiblePart
        : "*".repeat(password.length);
    return (
        <>
            <section className="flex bg-gray-100 min-h-[900px] justify-start items-center">

                <div className="bg-white w-[450px] h-[700px] rounded-3xl flex flex-col items-center ml-40 mb-10">

                    {/* Foto Container */}
                    <div className="relative mt-20">
                        <img
                            src={image || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                        />

                        {/* Icon Kamera */}
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition shadow-md"
                        >
                            <Camera size={18} className="text-white" />
                        </div>

                        {/* Hidden Input */}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setImage(URL.createObjectURL(file));
                                }
                            }}
                            className="hidden"
                        />
                    </div>

                    {/* Nama */}
                    <p className="mt-4 font-semibold text-center">
                        Stephen Wijaya Utama
                    </p>
                    <div className="flex flex-col mt-20 w-full items-center justify-center">
                        <details className="group  w-[400px] bg-white rounded-2xl shadow-md p-6 transition-all duration-300">

                            <summary className="cursor-pointer font-semibold flex justify-between items-center text-2xl list-none">
                                <span>My Profile</span>
                                <span className="transition-transform duration-300 group-open:rotate-180 text-gray-500">
                                    ▼
                                </span>
                            </summary>

                            <div className="mt-6 space-y-4 text-gray-700">

                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-medium text-gray-500">Name</p>
                                    <p className="font-semibold">Stephen Wijaya Utama</p>
                                </div>

                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-medium text-gray-500">Status</p>
                                    <p className="text-green-600 font-medium">Active Member</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-medium text-gray-500">Greeting</p>
                                    <p className="font-medium">Halo 👋</p>
                                </div>

                            </div>

                        </details>

                    </div>
                    <div className="flex flex-col mt-5 w-full items-center justify-center">
                        <details className="group  w-[400px] bg-white rounded-2xl shadow-md p-6 transition-all duration-300">

                            <summary className="cursor-pointer font-semibold flex justify-between items-center text-2xl list-none">
                                <span>Password</span>
                                <span className="transition-transform duration-300 group-open:rotate-180 text-gray-500">
                                    ▼
                                </span>
                            </summary>

                            <div className="mt-6 space-y-4 text-gray-700">

                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-medium text-gray-500">Gmail</p>
                                    <p className="text-green-600 font-medium">stephenwijaya@gmail.com</p>
                                </div>

                                <div className="flex justify-between items-center border-b pb-2">
                                    <p className="font-medium text-gray-500">Password</p>

                                    <div className="flex items-center gap-3">
                                        <p className="font-semibold tracking-wider">
                                            {displayedPassword}
                                        </p>

                                        <button
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </details>

                    </div>

                    <div className="flex flex-col mt-5 w-full items-center justify-center">
                        <div className=' flex w-[400px] bg-white rounded-2xl shadow-md p-6 transition-all duration-300 text-2xl font-semibold justify-between'>
                            Logout
                            <span className="transition-transform duration-300 group-open:rotate-180 text-gray-500">

                            </span>
                        </div>


                    </div>
                </div>
                <div className='gap-6 flex flex-col items-start justify-start mt-[-30px] '>
                    <div className='bg-white w-[700px] h-[300px] rounded-3xl flex flex-col items-center ml-10'>
                        <h2 className='text-2xl font-semibold mt-8 mb-6'>Riwayat Pembelian</h2>
                        {/* Konten akan ditambahkan di sini */}
                    </div>
                    <div className='bg-white w-[700px] h-[300px] rounded-3xl flex flex-col items-center ml-10 '>
                        <h2 className='text-2xl font-semibold mt-8 mb-6'>Riwayat Pembelian</h2>
                        {/* Konten akan ditambahkan di sini */}
                    </div>
                </div>

            </section>

        </>
    );

};
export default Profile;