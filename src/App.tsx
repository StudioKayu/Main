import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Tambahin_keranjang from "./pages/Tambahin_keranjang";
import Register from "./pages/Register";
import Promo from "./pages/Promo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tambahin_keranjang" element={<Tambahin_keranjang />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
    </Router>
  );
}

export default App;
