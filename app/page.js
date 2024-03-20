import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Shop from "@/components/Shop/Shop";
import Steps from "@/components/Steps/Steps";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function App() {
  return (
    <>
      <title>Argon | Improve your gaming performance.</title>
      <div className="wrapper">
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <Shop></Shop>
        <Steps></Steps>
        <FAQ></FAQ>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
