// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ini file yang ada di screenshot kamu

function App() {
  return (
    <Router>
      <Routes>
        {/* Setting utama: localhost:5173/ akan menampilkan Home.tsx */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;