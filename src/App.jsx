import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/navbar/Header";
import Navbar1 from "./components/navbar/Header2";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/Footer/Footer";
import { logPageView } from './analytics';
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./components/Contact/ContactUs";
import { SnowFall } from "./components/Xmas/Snow";
import Snowstorm from "./components/Xmas/Snowstorm";

// import SmoothScrolling from "./utils/smoothscrolling";

function App() {
  return (
    <Router>
    {/* <SmoothScrolling> */}
      {/* <Header/> */}
      <Navbar1 />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='#about' element={<About />} />
        <Route path='#solutions' element={<Solutions />} />
        <Route path='#contact' element={<ContactUs />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        {/* <Route path='/sitemap' element={<Sitemap />} /> */}
        {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
      {/* </SmoothScrolling> */}
      {/* <SnowFall /> */}
      <Snowstorm />
    </Router>
  );
}

export default App;
