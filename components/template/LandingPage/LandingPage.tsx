"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "@/components/module/Banner/Banner";
import AboutUs from "@/components/module/AboutUs/AboutUs";

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
      <Box>
        <Banner image={`images/image${arrayImage[backgroundImageIndex]}.png`} />
      </Box>
      <Box m="20px 0px">
        <AboutUs />
      </Box>
    </>
  );
};

export default LandingPage;
