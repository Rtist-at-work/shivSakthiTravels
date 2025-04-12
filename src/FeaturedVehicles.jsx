import { useState } from "react";
import sedan from "./assets/etios_liva.png";
import dezire from "./assets/sedan_dezire.jpg";
import suv from "./assets/innova.jpg";
import crysta from "./assets/crysta.jpg";
import tempo from "./assets/tempo_traveller.jpg";
import coach from "./assets/coach.jpg";
import miniBus from "./assets/mini_bus.jpg";
import bus from "./assets/bus.jpg";
import etiosLiva from "./assets/etios_liva.png";
import tataBolt from "./assets/tata_bolt.jpg";
import indica from "./assets/indica.jpg";
import indigo from "./assets/indigo.jpg";
import zest from "./assets/zest.jpg";
import xcent from "./assets/xcent.jpg";
import etios from "./assets/etios.png";
import baleno from "./assets/baleno.jpg";
import innova from "./assets/innova.jpg";
import tavera from "./assets/tavera.jpg";
import xylo from "./assets/xylo.jpg";
import eco from "./assets/eco.jpg";
import innovaCrysta from "./assets/innova_crysta.jpg";
import crance from "./assets/kia_crance.jpg";
import ertiga from "./assets/ertiga.jpg";
import glanza from './assets/glanza.jpg'

const FeaturedVehicles = () => {
  const vehicles = [
    { name: "Mini", img: sedan, tagline: "Comfort & Style 🚘" },
    { name: "Sedan", img: dezire, tagline: "Comfort & Style 🚘" },
    { name: "SUV", img: suv, tagline: "Powerful & Spacious 🚙" },
    { name: "Luxury", img: crysta, tagline: "Premium Experience ✨" },
    { name: "Tempo Traveller", img: tempo, tagline: "Premium Experience ✨" },
    { name: "Coach", img: coach, tagline: "Premium Experience ✨" },
    { name: "Mini Bus", img: miniBus, tagline: "Ideal for Groups 🚌" },
    { name: "Bus", img: bus, tagline: "Ideal for Groups 🚌" },
  ];

  const subVehicles = {
    Mini: [
      { name: "Etios Liva", img: etiosLiva },
      { name: "Tata Bolt", img: tataBolt },
      { name: "Indica", img: indica },
      { name: "Indigo", img: indigo },
    ],
    Sedan: [
      { name: "Dzire Tours", img: dezire },
      { name: "Tata Zest", img: zest },
      { name: "Hyundai Xcent", img: xcent },
      { name: "Etios", img: etios },
      { name: "Glanza", img: glanza },
      { name: "Baleno", img: baleno },
      { name: "Wagon R", img: dezire },
    ],
    SUV: [
      { name: "Innova", img: innova },
      { name: "Tavera", img: tavera },
      { name: "Xylo", img: xylo },
      { name: "Eco", img: eco },
    ],
    Luxury: [
      { name: "Innova Crysta", img: innovaCrysta },
      { name: "Kia Crance", img: crance },
      { name: "Ertiga", img: ertiga },
    ],
  };

  const [popUp, setPopUp] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setPopUp(true);
  };

  const VehicleList = ({ onCardClick }) => (
    <section className="flex flex-wrap justify-center gap-6 px-6">
      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="w-54 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => onCardClick(vehicle.name)}
        >
          <img
            src={vehicle.img}
            alt={vehicle.name}
            className="w-[270px] h-[150px] object-cover rounded-md mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">{vehicle.name}</h3>
          <p className="text-gray-600">{vehicle.tagline}</p>
        </div>
      ))}
    </section>
  );

  return (
    <section
      id="vehicles"
      className="relative py-12 bg-gray-100 text-center overflow-hidden min-h-[400px]"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Our Featured Vehicles
      </h2>

      <VehicleList onCardClick={handleCardClick} />

      {/* Popup Overlay */}
      <div
        className={`absolute inset-0 z-50 bg-white bg-opacity-95 p-6 transition-all duration-300 ease-in-out ${
          popUp
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-600"
          onClick={() => setPopUp(false)}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {selectedCategory} Vehicles
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-6">
  {subVehicles[selectedCategory]?.map((sub, idx) => (
    <div
      key={idx}
      className="w-54 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
    >
      <img
        src={sub.img}
        alt={sub.name}
        className="w-[270px] h-[150px] object-cover rounded-md mx-auto"
      />
      <h3 className="text-lg font-semibold mt-2">{sub.name}</h3>
      <p className="text-gray-600">Comfort & Style 🚘</p> {/* Optional tagline */}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default FeaturedVehicles;
