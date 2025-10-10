import "./App.css";
import logo from "./assets/therapy_center_logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contacts from "./Pages/Contacts";
import Design from "./Pages/Design";
import FormDesign from "./Pages/FormDesign";
function App() {
  return (
    <Router basename="/info-key">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="design" element={<Design />} />
          <Route path="form-design" element={<FormDesign />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
