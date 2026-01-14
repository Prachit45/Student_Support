import { useNavigate } from "react-router-dom";

import messImg from "../../images/Mess4.jpg";
import hostelImg from "../../images/Hostel1.png";
import reviewImg from "../../images/Review.png";
import supportImg from "../../images/Support.png";

export default function Cards() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleExploreMess = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/listings/mess");
    }
  };

  const handleExploreHostel = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/listings/hostel");
    }
  };

  return (
    <div className="m-8 lg:m-20">
      <h2 className="text-center text-5xl font-bold text-orange-400 mb-10">
        Explore Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* CARD 1 : MESS */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <img src={messImg} alt="Mess" className="w-full h-48 object-cover rounded-xl mb-4" />

          <h3 className="text-2xl font-semibold text-violet-700 mb-2">
            Quality Mess
          </h3>

          <p className="text-gray-700">
            Enjoy freshly prepared, hygienic meals from top-rated mess services near your area.
          </p>

          <button
            onClick={handleExploreMess}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Explore Mess
          </button>
        </div>

        {/* CARD 2 : HOSTEL */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <img src={hostelImg} alt="Hostel" className="w-full h-48 object-cover rounded-xl mb-4" />

          <h3 className="text-2xl font-semibold text-violet-700 mb-2">
            Comfortable Hostels
          </h3>

          <p className="text-gray-700">
            Choose from verified hostels offering comfort, security, and convenience for every budget.
          </p>

          <button
            onClick={handleExploreHostel}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Explore Hostel
          </button>
        </div>

        {/* CARD 3 : REVIEWS */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <img src={reviewImg} alt="Reviews" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold text-violet-700 mb-2">Genuine Reviews</h3>
          <p className="text-gray-700">
            Read honest feedback from students and employees to make confident choices.
          </p>
        </div>

        {/* CARD 4 : SUPPORT */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <img src={supportImg} alt="Support" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold text-violet-700 mb-2">24/7 Support</h3>
          <p className="text-gray-700">
            Our support team is always available to help you with booking or service queries.
          </p>
        </div>

      </div>
    </div>
  );
}
