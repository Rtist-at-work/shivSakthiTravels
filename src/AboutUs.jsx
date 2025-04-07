const AboutUs = () => {
    return (
      <section id='about' className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?travel,nature"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">About ShivSakthi Travels</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At ShivSakthi Travels, we believe in making journeys memorable.  
              With our **trusted vehicles** and **expert drivers**, we ensure a safe and comfortable experience for every traveler.  
              Whether it's a family trip, business travel, or adventure tour, we've got you covered.
            </p>
            <p className="mt-4 text-gray-600">
              We offer a variety of **vehicle options** at competitive rates, ensuring the best travel experience across Tamil Nadu and beyond.
            </p>
  
            {/* Call to Action */}
            <div className="mt-6">
              <a
                href="/services"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  