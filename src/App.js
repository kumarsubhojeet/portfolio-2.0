import React from "react";

import Intro from "./Components/Intro";
import About from "./Components/About";
import Education from "./Components/Education";
import Projcts from "./Components/Projects.jsx";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Tech from "./Components/Tech"

const App = () => {
  AOS.init({
    offset: 300,
    duration: 800,
  });
  return (
    <div className="home">
      <Intro />

      <div data-aos="fade-right">
        <About />
      </div>

      <div data-aos="zoom-in-up">
        <Education />
      </div>

      <Tech/>

      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <Projcts />
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1100"
      >
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
