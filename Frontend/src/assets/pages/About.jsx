export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Student_Support
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Student_Support</strong> is a platform designed to help students
          and working professionals easily find reliable <strong>Mess and Hostel </strong>
          services near their location.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Finding a good place to stay and eat in a new city can be stressful.
          Our goal is to simplify this process by providing verified listings,
          transparent pricing, and location-based search.
        </p>

        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          What We Offer
        </h2>

        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-6">
          <li>Verified Mess and Hostel listings</li>
          <li>Affordable options for every budget</li>
          <li>Location-based search for nearby services</li>
          <li>Secure login and user access</li>
          <li>Easy navigation and clean UI</li>
        </ul>

        <h2 className="text-2xl font-semibold text-violet-700 mb-4">
          Our Vision
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          To become a trusted platform where students and professionals can
          confidently choose the best accommodation and food services without
          hassle or confusion.
        </p>

      </div>
    </div>
  );
}
