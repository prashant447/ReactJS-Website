import React from 'react'
import About from "./About/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import HowItsWork from "./HowItsWork/HowItsWork";
import Navbar from "./navbar/Navbar";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItsWork />

      <About />
      <Services />
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
