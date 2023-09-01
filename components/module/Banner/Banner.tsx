"use client";
import { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useRouter as useNextRouter } from "next/navigation";

type Router = ReturnType<typeof useNextRouter>;

const Banner = () => {
  const router: Router = useNextRouter();

  const [backgroundImageIndex, setBackgroundImageIndex] = useState<number>(0);
  const [scroll, setScroll] = useState<number>(0);

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
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroller = (value:number) => {
    window.scrollTo({
        top: value,
        behavior: "smooth",
    })
}

  console.log(scroll);
  
  const mystyle = {
    backgroundImage: `url(images/image${arrayImage[backgroundImageIndex]}.png)`,
    margin: "0px",
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "all 0.2s linear",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    color: "#fff",
  };
  

  return (
    <>
      <div style={mystyle}>
        <Typography
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          mt={1}
          mx={1}
        >
          خانه بتنی
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          mt={1}
          mx={1}
        >
          بهینه، مهندسی بساز
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h6"
          textAlign="center"
          mt={1}
          mx={1}
        >
          با افتخار، پیشرو در ارائه محصولات بتن آرمه با کیفیت برای ساخت آینده
          بهتر و پایدار
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={()=>{
              scroller(1600)
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="right"
              color="white"
            >
              پروژه های ما
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={()=>{
              scroller(650)
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="right"
              color="white"
            >
              بیانیه ماموریت
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={()=>{
              scroller(2716)
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="right"
              color="white"
            >
              ارتباط با ما
            </Typography>
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Banner;
