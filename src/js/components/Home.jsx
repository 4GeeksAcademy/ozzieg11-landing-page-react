import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardsSection from "./CardsSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardsSection />
      <Footer />
    </>
  );
}

export default Home;