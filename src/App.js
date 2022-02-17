import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import PSC from "./components/PhotoshopComposites";
import InDesign from "./components/InDesign";
import Clothing from "./components/Clothing";
import Logos from "./components/Logos";
import DigitalIllustrations from "./components/DigitalIllustrations";
import Code from "./components/Code";
import CustomFooter from "./components/Footer";

const data = [
  {
    id: 1,
    img: "badge1.png",
    question: "Pokemon: Indigo League - Which Pokemon did Ash catch first?",
    answer: "caterpie",
  },
  {
    id: 2,
    img: "badge2.png",
    question:
      "Pokemon: Indigo League - Which Pokemon did Ash's rival Gary choose as his starter Pokemon?",
    answer: "squirtle",
  },
  {
    id: 3,
    img: "badge3.png",
    question:
      "Pokemon: Indigo League - How many episodes are featured within the first season of Pokemon: Indigo League?",
    answer: "82",
  },
  {
    id: 4,
    img: "badge4.png",
    question:
      "Pokemon: Indigo League - What's the # of the episode that Dragonite first appears in?",
    answer: "13",
  },
  {
    id: 5,
    img: "badge5.png",
    question:
      "Pokemon: Indigo League - How many Pokemon (including evolutions) did Team Rocket train?",
    answer: "8",
  },
  {
    id: 6,
    img: "badge6.png",
    question: "Pokemon: Indigo League - How many Eevee brothers are there?",
    answer: "3",
  },
  {
    id: 7,
    img: "badge7.png",
    question:
      "Pokemon: Indigo League - Generation 1 - How many Pokemon always remain at their base evolution and don't evolve?",
    answer: "11",
  },
  {
    id: 8,
    img: "badge8.png",
    question:
      "Out of the first 386 Pokemon - how many of them are of type dragon?",
    answer: "13",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/*react changes - Switch is now Routes - component is now element - element={<element/>} */}
          <Route exact path="/webportfolio2022" element={<Home />} />
          <Route exact path="/photoshopcomposites" element={<PSC />} />
          <Route exact path="/indesign" element={<InDesign />} />
          <Route exact path="/clothing" element={<Clothing />} />
          <Route exact path="/logos" element={<Logos />} />
          <Route
            exact
            path="/digitalillustrations"
            element={<DigitalIllustrations />}
          />

          <Route exact path="/code" element={<Code data={data} />} />
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;
