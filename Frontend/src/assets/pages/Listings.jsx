import { useNavigate } from "react-router-dom";

import mess1 from "./../images/mess1.png";
import mess2 from "./../images/mess2.png";
import host1 from "./../images/host1.png";
import host2 from "./../images/host2.png";

const listings = [
  {
    id: 1,
    name: "Shree Mess",
    type: "Mess",
    location: "Narhe, Pune",
    price: "₹2500 / month",
    image: mess1,
  },
  {
    id: 2,
    name: "Sai Hostel",
    type: "Hostel",
    location: "Katraj, Pune",
    price: "₹6000 / month",
    image: host1,
  },
  {
    id: 3,
    name: "Om Mess",
    type: "Mess",
    location: "Karve Nagar, Pune",
    price: "₹2800 / month",
    image: mess2,
  },
  {
    id: 4,
    name: "Royal Hostel",
    type: "Hostel",
    location: "Warje, Pune",
    price: "₹7000 / month",
    image: host2,
  },
];

export default function Listings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Mess & Hostel Listings
      </h1>

      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition w-[260px] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-violet-700">
                {item.name}
              </h2>

              <p className="text-sm text-gray-600">
                <b>Type:</b> {item.type}
              </p>

              <p className="text-sm text-gray-600">
                <b>Location:</b> {item.location}
              </p>

              <p className="text-base font-bold text-gray-800 mt-2">
                {item.price}
              </p>

              <button
                onClick={() => navigate(`/details/${item.id}`)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
