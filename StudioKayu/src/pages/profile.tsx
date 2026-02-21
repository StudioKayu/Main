
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
    return (
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
    <div className=' flex flex-row justify-beetween gap-20 mt-10'>
        <p className='font-semibold text-2xl'>My Profile</p>
        <p>Stephen Wijaya Utama</p>

    </div>

  </div>
</section>
    );
};
export default Profile;