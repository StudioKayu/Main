// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ini file yang ada di screenshot kamu
import Tambahin_keranjang from './pages/Tambahin_keranjang';

function App() {
  return (
    <Router>
      <Routes>
        {/* Setting utama: localhost:5173/ akan menampilkan Home.tsx */}
        <Route path="/" element={<Home />} />
        <Route path="/Tambahin_keranjang" element={<Tambahin_keranjang />} />

      </Routes>
    </Router>
  );
}

export default App;