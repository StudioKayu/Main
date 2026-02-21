// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tambahin_keranjang from "./pages/Tambahin_keranjang";
import Promo from "./pages/Promo";
import Product_Terlaris from "./pages/Product_Terlaris";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tambahin_keranjang" element={<Tambahin_keranjang />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Product_Terlaris" element={<Product_Terlaris />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
