import { FaCar, FaRoute, FaHandshake, FaClock } from "react-icons/fa";

const Services = () => {
  return (
    <div className="text-center py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Why Choose ShivSakthi Travels?
      </h2>
      <p className="text-gray-600 mb-8">
        We provide the best travel experience with affordable pricing and
        reliable service.
      </p>

      {/* Service Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
        <div className="flex flex-col items-center">
          <FaCar className="text-4xl text-blue-500" />
          <p className="mt-2 text-gray-700">Well-Maintained Vehicles</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRoute className="text-4xl text-green-500" />
          <p className="mt-2 text-gray-700">Customizable Routes</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHandshake className="text-4xl text-orange-500" />
          <p className="mt-2 text-gray-700">Trusted Service</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-4xl text-red-500" />
          <p className="mt-2 text-gray-700">24/7 Support</p>
        </div>
      </div>

      {/* Call to Action */}
      <button
        onClick={() => {
          document
            .getElementById("booking")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-blue-600 text-white px-6 py-3 animate-wiggle rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Book Your Ride Now
      </button>
    </div>
  );
};

export default Services;
