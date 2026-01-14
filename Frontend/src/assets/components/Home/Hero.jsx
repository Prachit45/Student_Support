import hostelImg from "../../images/Hostel.png";
import messImg from "../../images/Mess4.jpg";
import hostelImg2 from "../../images/Hostel1.png";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between m-8 lg:m-28 gap-10">
        
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-400">
            India's First Customized <br />
            Online Hostel & Mess Website
          </h1>

          <p className="text-xl sm:text-2xl text-violet-700 mt-6">
            Helping students and working professionals
          </p>

          <p className="text-lg text-gray-700 mt-3">
            find verified mess and hostel services near them.
          </p>

          <Link to="/login">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        <img
          src={hostelImg}
          alt="Hostel"
          className="w-64 sm:w-80 lg:w-96 rounded-2xl shadow-lg"
        />
      </div>

      {/* MESS & HOSTEL SECTION */}
      <div className="m-8 lg:m-28 text-center">
        <h2 className="text-4xl font-bold text-orange-400">
          Mess and Hostel
        </h2>

        <ul className="mt-6 text-lg text-gray-700 space-y-2">
          <li>✔ Verified mess & hostel listings</li>
          <li>✔ Location-based search</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Hygiene & quality assured</li>
        </ul>

        <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10">
          <img
            src={messImg}
            alt="Mess"
            className="w-60 sm:w-72 rounded-2xl shadow-lg hover:scale-105 transition"
          />

          <img
            src={hostelImg2}
            alt="Hostel"
            className="w-60 sm:w-72 rounded-2xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </div>
    </>
  );
}
