import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogin = () => {
    navigate("/login");
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsOpen(false);
  };

  const goMess = () => {
    navigate("/listings/mess");
    setIsOpen(false);
  };

  const goHostel = () => {
    navigate("/listings/hostel");
    setIsOpen(false);
  };

  const goAbout = () => {
    navigate("/about");
    setIsOpen(false);
  };

  const goContact = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text cursor-pointer"
        >
          Student_Support
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li onClick={() => navigate("/")} className="cursor-pointer hover:text-blue-600">
            Home
          </li>

          <li onClick={goMess} className="cursor-pointer hover:text-blue-600">
            Mess
          </li>

          <li onClick={goHostel} className="cursor-pointer hover:text-blue-600">
            Hostel
          </li>

          <li onClick={goAbout} className="cursor-pointer hover:text-blue-600">
            About
          </li>

          <li onClick={goContact} className="cursor-pointer hover:text-blue-600">
            Contact
          </li>

          {!token ? (
            <button
              onClick={handleLogin}
              className="ml-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-6 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-5 px-6 pb-6 text-gray-700 font-medium">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={goMess}>Mess</li>
          <li onClick={goHostel}>Hostel</li>
          <li onClick={goAbout}>About</li>
          <li onClick={goContact}>Contact</li>

          {!token ? (
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </ul>
      )}
    </nav>
  );
}
