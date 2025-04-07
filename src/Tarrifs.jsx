import { useState } from "react";
import "./index.css";

const Tariffs = () => {
  const [isLocal, setIsLocal] = useState(true);

  const vehicles = [
    { name: "Eco", seats: 4 },
    { name: "Sedan", seats: 4 },
    { name: "Tavera", seats: 7 },
    { name: "Xilo", seats: 7 },
    { name: "Innova", seats: 7 },
    { name: "Tempo Traveller", seats: 12 },
    { name: "Coach", seats: 30 },
    { name: "Mini Bus", seats: 20 },
  ];

  const getLocalTariff = (vehicleName, type) => {
    const localTariff = {
      "Eco": { first20: 300, additional: 12 },
      "Sedan": { first20: 400, additional: 14 },
      "Tavera": { first20: 500, additional: 16 },
      "Xilo": { first20: 500, additional: 16 },
      "Innova": { first20: 600, additional: 18 },
      "Tempo Traveller": { first20: 900, additional: 22 },
      "Coach": { first20: 1500, additional: 28 },
      "Mini Bus": { first20: 1200, additional: 25 },
    };
    return localTariff[vehicleName]?.[type];
  };

  const getOutstationPrice = (district, vehicleName) => {
    const basePrice = {
      "Mini" : 10,
      "Eco": 10,
      "Sedan": 12,
      "Tavera": 14,
      "Xilo": 14,
      "Innova": 15,
      "Tempo Traveller": 18,
      "Coach": 22,
      "Mini Bus": 20,
    };
    return basePrice[vehicleName] * (district.length + 10);
  };

  const districts = [
    "Chennai", "Vellore", "Pondicherry", "Tiruvannamalai", "Salem", "Erode",
    "Coimbatore", "Trichy", "Thanjavur", "Pazhani", "Theni", "Dindigul",
  ];

  return (
    <section id="tarrifs" className="relative w-full py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4 dimlight">Tariff Details</h2>

      {/* Switch */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsLocal(true)}
          className={`px-6 py-2 rounded-l-full text-white font-medium ${
            isLocal ? "bg-blue-600" : "bg-gray-400"
          }`}
        >
          Local Tariff
        </button>
        <button
          onClick={() => setIsLocal(false)}
          className={`px-6 py-2 rounded-r-full text-white font-medium ${
            !isLocal ? "bg-blue-600" : "bg-gray-400"
          }`}
        >
          Outstation Tariff
        </button>
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="w-full border-collapse border border-gray-300 text-center bg-white shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 border">{isLocal ? "Tariff Type" : "District"}</th>
              <th className="p-3 border">{isLocal ? "KM Range" : "KMs"}</th>
              {vehicles.map((vehicle, index) => (
                <th key={index} className="p-3 border">{vehicle.name}</th>
              ))}
            </tr>
            <tr className="bg-blue-100 text-gray-800 font-medium">
              <td className="p-2 border" colSpan={2}>Seating Capacity</td>
              {vehicles.map((vehicle, index) => (
                <td key={index} className="p-2 border">{vehicle.seats} Seater</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLocal ? (
              <>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border font-semibold">First 20 KMs</td>
                  <td className="p-3 border">0 - 20 KM</td>
                  {vehicles.map((vehicle, i) => (
                    <td key={i} className="p-3 border">₹{getLocalTariff(vehicle.name, "first20")}</td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border font-semibold">Additional KM</td>
                  <td className="p-3 border">After 20 KM</td>
                  {vehicles.map((vehicle, i) => (
                    <td key={i} className="p-3 border">₹{getLocalTariff(vehicle.name, "additional")}</td>
                  ))}
                </tr>
              </>
            ) : (
              districts.map((district, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border font-semibold">{district}</td>
                  <td className="p-3 border">{(index + 1) * 10} km</td>
                  {vehicles.map((vehicle, i) => (
                    <td key={i} className="p-3 border">₹{getOutstationPrice(district, vehicle.name)}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Tariffs;
