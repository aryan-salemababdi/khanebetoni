import { Box } from "@mui/material";
import Banner from "@/components/module/Banner/Banner";
import AboutUs from "@/components/module/AboutUs/AboutUs";
import Projects from "@/components/module/Projects/Projects";

const LandingPage = () => {


  return (
    <>
      <Box>
        <Banner />
      </Box>
      <Box m="20px 0px">
        <AboutUs />
        <Projects />
      </Box>
    </>
  );
};

export default LandingPage;
