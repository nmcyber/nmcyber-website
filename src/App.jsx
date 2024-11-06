import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import About from "./components/About/About";
import Home from "./components/Hero/Home";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/Contact/ContactUs";
import './index.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/nmcyber-website" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
