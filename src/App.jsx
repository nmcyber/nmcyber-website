import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import Navbar1 from "./components/navbar/Header2";
import Home from "./components/Hero/Home";
import About from "./components/About/About";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/Contact/ContactUs";
import "./index.css";
import NotFound from "./pages/NotFound";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Navbar1 />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='#about' element={<About />} />
        <Route path='#solutions' element={<Solutions />} />
        <Route path='#contact' element={<ContactUs />} />
        <Route path='/404' element={ <NotFound /> } />
        <Route path='/sitemap' element={ <Sitemap /> } />
        <Route path='/privacy-policy' element={ <PrivacyPolicy /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
