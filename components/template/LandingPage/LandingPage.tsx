import { Box } from "@mui/material";
import Banner from "@/components/module/Banner/Banner";
import AboutUs from "@/components/module/AboutUs/AboutUs";
import OurWork from "@/components/module/Projects/OurWork";

const LandingPage = () => {


  return (
    <>
      <Box>
        <Banner />
      </Box>
      <Box m="20px 0px">
        <AboutUs />
        <OurWork />
      </Box>
    </>
  );
};

export default LandingPage;
