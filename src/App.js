import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Charcoal from "./Components/ProductDescription/Charcoal";
import Cashew from "./Components/ProductDescription/Cashew";
import Cocoa from "./Components/ProductDescription/Cocoa";
import Seasame from "./Components/ProductDescription/Seasame";
import Sheabutter from "./Components/ProductDescription/Sheabutter";
import Ginger from "./Components/ProductDescription/Ginger";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/charcoal" element={<Charcoal />} />
        <Route path="/cashew" element={<Cashew />} />
        <Route path="/cocoa" element={<Cocoa />} />
        <Route path="/seasame" element={<Seasame />} />
        <Route path="/sheaButter" element={<Sheabutter />} />
        <Route path="/ginger" element={<Ginger />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
