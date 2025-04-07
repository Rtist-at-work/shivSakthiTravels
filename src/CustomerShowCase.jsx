import { FaGlobeAmericas, FaUserShield, FaThumbsUp, FaDollarSign } from "react-icons/fa";

const CustomerShowCase = () => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all">
          <FaGlobeAmericas className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Worldwide Destinations</h3>
          <p className="text-gray-600 mt-2">
            Explore the best locations around the globe with hassle-free bookings.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all">
          <FaUserShield className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Safe & Secure Travel</h3>
          <p className="text-gray-600 mt-2">
            Your safety is our top priority. Travel with peace of mind.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all">
          <FaThumbsUp className="text-4xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Top-Rated Services</h3>
          <p className="text-gray-600 mt-2">
            Highly recommended by our happy travelers. Your satisfaction is guaranteed!
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all">
          <FaDollarSign className="text-4xl text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Affordable Pricing</h3>
          <p className="text-gray-600 mt-2">
            Get the best deals at unbeatable prices for your dream vacations.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CustomerShowCase;
