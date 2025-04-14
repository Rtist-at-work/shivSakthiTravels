import { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import BookingFlow from "./BookingFlow";
import CustomerShowCase from "./CustomerShowCase";
import FeaturedVehicles from "./FeaturedVehicles";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Serivces";
import Tariffs from "./Tarrifs";
import TravelTips from "./TravelTips";
import axios from "axios";

function App() {
  const [tarrifs, setTarrifs] = useState([]);
  const baseURL =
  import.meta.env.MODE === "production"
    ? "https://www.shivsakthitravels.com"
    : "http://localhost:5000";


  const getTarrifs = async () => {
    try {
      const res = await axios.get(`${baseURL}/tariffs`);
      console.log(res);
      if (res.status === 200) setTarrifs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTarrifs();
  }, []);
  return (
    <div className=" relative h-screen w-screen">
      <Header />
      {/* <TravelTips/> */}
      <BookingFlow />
      <Tariffs tarrifs={tarrifs} />
      <AboutUs />
      <Services />
      {/* <CustomerShowCase/> */}
      <FeaturedVehicles />

      <Footer />
    </div>
  );
}

export default App;
