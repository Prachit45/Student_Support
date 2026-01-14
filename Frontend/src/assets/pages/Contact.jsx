import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now just show confirmation
    alert("Thank you for contacting us! We will get back to you soon.");

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Have questions about mess or hostel services? We’re here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold text-violet-700">
              Get in Touch
            </h2>

            <p>
              📧 <strong>Email:</strong> support@studentsupport.com
            </p>

            <p>
              📞 <strong>Phone:</strong> +91 90495 85968
            </p>

            <p>
              📍 <strong>Location:</strong> Pune, Maharashtra
            </p>

            <p className="mt-4">
              Our support team is available <strong>24/7</strong> to assist you
              with any queries related to mess and hostel services.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
