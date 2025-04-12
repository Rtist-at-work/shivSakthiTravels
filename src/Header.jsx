import headerBanner from "./assets/banner.jpeg";
import logo from "./assets/logo_1.png";

const Header = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="h-24 w-full absolute top-0 bg-black/30 backdrop-blur-md z-50 text-white text-base sm:text-sm xsm:text-xs flex flex-row justify-around items-center">
      <div className="overflow-hidden h-full w-36"> {/* Increased from w-24 to w-32 */}
  <img src={logo} className="h-full w-full object-contain" /> {/* Ensure proper scaling */}
</div>

        <div className="w-[90%] h-full flex flex-row justify-around items-center">
          <a href="#booking" className="hover:underline">
            Booking
          </a>
          <a href="#tarrifs" className="hover:underline">
            Tarrifs
          </a>
          <a href="#about" className="hover:underline">
            Aboust Us
          </a>
          <a href="#vehicles" className="hover:underline">
            Vehicles List
          </a>
        </div>
      </div>

      {/* Background Image with Right Curve */}
      <img
        src={headerBanner}
        alt="Banner"
        className="h-full w-full object-cover clip-right-curve"
      />

      {/* Glass Text Section */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-black/30 backdrop-blur-md p-10 flex flex-col justify-center rounded-l-full shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug animated-text ">
          Explore the World with <br />
          ShivSakthi Travels <span className="text-white">🌍</span>
        </h1>
        <div className="text-lg text-white mt-6 text-end space-y-2">
          <p className="animate-bounce duration-1000 delay-300">
            📞 +91 7695811933
          </p>
          <p>✉️ shivsakthitravels7@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
