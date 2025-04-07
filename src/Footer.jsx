import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 flex items-center gap-2"><FaPhone /> +91 98765 43210</p>
          <p className="mt-1 flex items-center gap-2"><FaEnvelope /> contact@shivsakthitravels.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Tariffs</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-2 bg-blue-600 rounded-full"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-pink-500 rounded-full"><FaInstagram /></a>
            <a href="#" className="p-2 bg-blue-400 rounded-full"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ShivSakthi Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
