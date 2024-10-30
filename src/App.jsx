import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/Header";
import About from "./components/About/About";
import Home from "./components/Hero/Home";
import Solutions from "./components/Solutions/Solutions";

function App() {
  return (
    <Router>
      <Header />
      <Routes className= "">
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
