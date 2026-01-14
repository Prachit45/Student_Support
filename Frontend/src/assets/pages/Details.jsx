import { useParams } from "react-router-dom";

import mess1 from "./../images/mess1.png";
import mess2 from "./../images/mess2.png";
import host1 from "./../images/host1.png";
import host2 from "./../images/host2.png";

const detailsData = [
  {
    id: 1,
    name: "Shree Mess",
    type: "Mess",
    location: "Narhe, Pune",
    price: "₹2500 / month",
    image: mess1,
    description: "Pure veg mess with hygienic food and home-style meals.",
    lat: 18.4575,
    lng: 73.8508,
  },
  {
    id: 2,
    name: "Sai Hostel",
    type: "Hostel",
    location: "Katraj, Pune",
    price: "₹6000 / month",
    image: host1,
    description: "Boys hostel with WiFi, security, and comfortable rooms.",
    lat: 18.4474,
    lng: 73.8596,
  },
  {
    id: 3,
    name: "Om Mess",
    type: "Mess",
    location: "Karve Nagar, Pune",
    price: "₹2800 / month",
    image: mess2,
    description: "Affordable mess with healthy food and good hygiene.",
    lat: 18.4897,
    lng: 73.8213,
  },
  {
    id: 4,
    name: "Royal Hostel",
    type: "Hostel",
    location: "Warje, Pune",
    price: "₹7000 / month",
    image: host2,
    description: "Premium hostel with AC rooms and 24/7 security.",
    lat: 18.4865,
    lng: 73.8003,
  },
];

export default function Details() {
  const { id } = useParams();
  const item = detailsData.find((x) => x.id === Number(id));

  if (!item) {
    return <p className="text-center text-xl mt-10">Details not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-violet-700">
            {item.name}
          </h1>

          <p className="text-gray-600 mt-2">
            <b>Type:</b> {item.type}
          </p>

          <p className="text-gray-600">
            <b>Location:</b> {item.location}
          </p>

          <p className="text-gray-800 font-bold mt-2">
            {item.price}
          </p>

          <p className="text-gray-700 mt-4">
            {item.description}
          </p>

          {/* GOOGLE MAP */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-xl"
              src={`https://maps.google.com/maps?q=${item.lat},${item.lng}&z=15&output=embed`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
