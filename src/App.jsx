import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import BookingFlow from "./BookingFlow";
import Tariffs from "./Tarrifs";
import AboutUs from "./AboutUs";
import Services from "./Serivces";
import FeaturedVehicles from "./FeaturedVehicles";
import Footer from "./Footer";

function App() {
  const [tarrifs, setTarrifs] = useState([]);

  const baseURL = location.hostname === 'localhost'
  ? 'http://localhost:5000/api'
  : 'https://shivsakthitravels.com/api';


  const getTarrifs = async () => {
    try {
      const res = await axios.get(`${baseURL}/tariffs`);
      if (res.status === 200) {
        if (Array.isArray(res.data)) {
          setTarrifs(res.data);
        } else {
          setTarrifs([res.data]);
        }
      }
    } catch (err) {
      console.error("Error fetching tariffs:", err);
    }
  };

  useEffect(() => {
    getTarrifs();
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <BookingFlow />
      <Tariffs tarrifs={tarrifs} />
      <AboutUs />
      <Services />
      <FeaturedVehicles />
      <Footer />
    </div>
  );
}

export default App;
