"use client"
import { useState, useEffect } from "react";
import Banner from "@/components/module/Banner/Banner";

const LandingPage = () => {

  const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);

  const arrayImage = [1, 2];

  function updateBackgroundImage() {
    backgroundImageIndex > 0
      ? setBackgroundImageIndex(0)
      : setBackgroundImageIndex(backgroundImageIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(updateBackgroundImage, 4000);
    return () => clearInterval(interval);
  });

  return (
    <>
    <div style={{position:"absolute",top:"0"}}>
      <Banner image={`images/image${arrayImage[backgroundImageIndex]}.png`} />
      </div>
    </>
  );
};

export default LandingPage;
