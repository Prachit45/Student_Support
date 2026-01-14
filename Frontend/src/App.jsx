import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Layout/Navbar";
import Hero from "./assets/components/Home/Hero";
import Cards from "./assets/components/Home/Cards";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Listings from "./assets/pages/Listings";
import Details from "./assets/pages/Details";
import ProtectedRoute from "./assets/pages/ProtectedRoute";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ PROTECTED */}
        <Route
          path="/listings/:type"
          element={
            <ProtectedRoute>
              <Listings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/details/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
