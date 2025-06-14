import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Internship from "./Components/Internship/Internship";
import Design from "./Components/Design/Design";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Project />
      <Design />
      <Contact />
    </div>
  );
};

export default App;
