import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useGlobalContext } from "../context";
import Contact from "./Contact";
import Services from "./Services";

export default function Home() {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
}
