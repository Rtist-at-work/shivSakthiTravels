

const TravelTips = () => {
 
  const tips = [
    { title: "Top Destinations", description: "Explore the best travel spots for a perfect vacation." },
    { title: "Safety Tips", description: "Stay safe while traveling with our expert safety guidelines." },
    { title: "Budget Travel Hacks", description: "Save money on your trips with these cost-cutting strategies." },
    { title: "Packing Essentials", description: "Don't forget these must-have items for a smooth journey." },
  ];

  return (
    <div className="relative py-12 bg-gray-50 text-center overflow-hidden">

      <h2 className="relative text-3xl font-bold text-gray-800 mb-6">Travel Tips & Guides ✈️</h2>
      <div className="relative grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tips.map((tip, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">{tip.title}</h3>
            <p className="text-gray-700 mt-2">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;