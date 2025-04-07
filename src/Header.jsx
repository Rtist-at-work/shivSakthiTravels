import headerBanner from "./assets/banner.jpeg";

const Header = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div className="h-24 w-full absolute top-0 bg-black/30 backdrop-blur-md z-50 text-white text-lg flex flex-row justify-around items-center">
        <div className="h-full w-[10%]"></div>
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
      {/* Background Image with curve on right */}
      <img
        src={headerBanner}
        alt="Banner"
        className="h-full w-full object-cover clip-right-curve"
      />

      {/* Text Glass Section */}
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
