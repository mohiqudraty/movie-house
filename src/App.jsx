import { Routes, Route } from "react-router-dom";
import Navbar from "/src/components/NavBar.jsx";
import Footer from "/src/components/Footer.jsx";
import Home from "/src/pages/Home.jsx";
import Movies from "/src/pages/Movies.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<p className="p-10">404 — Page not found</p>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}