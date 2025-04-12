import { useState } from "react";
import "./index.css";

const Tariffs = ({ tarrifs }) => {
  const [isLocal, setIsLocal] = useState(true);

  const localData = tarrifs.find(t => t.type === "local")?.tariffs || [];
  const outstationData = tarrifs.find(t => t.type === "outstation")?.districts || [];

  // Dynamically collect all vehicle types
  const vehicleNames = Array.from(new Set([
    ...localData.flatMap(item => Object.keys(item.rates || {})),
    ...outstationData.flatMap(item => Object.keys(item.rates || {}))
  ]));

  const getSeats = (vehicle) => {
    const seatsMap = {
      "Eco": 4, "Mini": 4, "Sedan": 4, "Tavera": 7, "Xilo": 7,
      "Innova": 7, "Tempo Traveller": 12, "Coach": 30, "Mini Bus": 20
    };
    return seatsMap[vehicle] || "-";
  };

  return (
    <section id="tarrifs" className="relative w-full py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4 dimlight">Tariff Details</h2>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsLocal(true)}
          className={`px-6 py-2 rounded-l-full text-white font-medium ${isLocal ? "bg-blue-600" : "bg-gray-400"}`}
        >
          Local Tariff
        </button>
        <button
          onClick={() => setIsLocal(false)}
          className={`px-6 py-2 rounded-r-full text-white font-medium ${!isLocal ? "bg-blue-600" : "bg-gray-400"}`}
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
              {vehicleNames.map((vehicle, index) => (
                <th key={index} className="p-3 border">{vehicle}</th>
              ))}
            </tr>
            <tr className="bg-blue-100 text-gray-800 font-medium">
              <td className="p-2 border" colSpan={2}>Seating Capacity</td>
              {vehicleNames.map((vehicle, index) => (
                <td key={index} className="p-2 border">{getSeats(vehicle)} Seater</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLocal ? (
              localData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 border font-semibold">{item.range}</td>
                  <td className="p-3 border">{item.km}</td>
                  {vehicleNames.map((vehicle, i) => (
                    <td key={i} className="p-3 border">
                      ₹{item.rates[vehicle]?.price || "-"}<br />
                      <small className="text-gray-500">+₹{item.rates[vehicle]?.additional || 0}/km</small>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              outstationData.map((district, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 border font-semibold">{district.name}</td>
                  <td className="p-3 border">{district.km} km</td>
                  {vehicleNames.map((vehicle, i) => (
                    <td key={i} className="p-3 border">
                      ₹{district.rates[vehicle]?.price || "-"}<br />
                      <small className="text-gray-500">Wait ₹{district.rates[vehicle]?.waitingCharges || 0}</small>
                    </td>
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
