import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import Bookings from "../pages/Bookings";
import Flights from "../pages/Flights";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
const RouterDom = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="flights" element={<Flights />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default RouterDom;
