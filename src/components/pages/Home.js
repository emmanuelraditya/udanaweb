import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Investation from "../Investation";
import Membantu from "../Membantu";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <Investation />
      <Cards />
      <Membantu />
      <Footer />
    </>
  );
}

export default Home;
