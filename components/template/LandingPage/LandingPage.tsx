import { Box } from "@mui/material";
import Banner from "@/components/module/Banner/Banner";
import AboutUs from "@/components/module/AboutUs/AboutUs";
import OurWork from "@/components/module/Projects/OurWork";
import Contactus from "@/components/module/ContactUs/Contactus";
import LevelStart from "@/components/module/LevelStart/LevelStart";
import WorkWithUs from "@/components/module/WorkWithUs/WorkWithUs";




const LandingPage = () => {
  
  return (
    <>
      <Box>
        <Banner />
      </Box>
      <Box m="20px 0px">
        <AboutUs />
        <LevelStart />
        <WorkWithUs />
        <OurWork />
        <Contactus />
      </Box>
    </>
  );
};

export default LandingPage;
