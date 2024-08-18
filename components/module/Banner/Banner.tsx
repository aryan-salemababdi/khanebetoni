"use client";
import { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useRouter as useNextRouter } from "next/navigation";
type Router = ReturnType<typeof useNextRouter>;

const Banner = () => {
  const router: Router = useNextRouter();

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

  const scroller = (value: number) => {
    window.scrollTo({
      top: value,
      behavior: "smooth",
    });
  };

  const mystyle = {
    backgroundImage: `url(/images/image${arrayImage[backgroundImageIndex]}.webp)`,
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
          color="black"
          mt={1}
          mx={1}
        >
          خانه بتنی
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h4"
          textAlign="center"
          color="black"
          mt={1}
          mx={1}
        >
          بهینه، مهندسی بساز
        </Typography>
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(2,2fr)",
          }}
        >
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(1500);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
              color="white"
            >
              مراحل پیش از شروع اجرا
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(650);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
              color="white"
            >
              درباره ما
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(2988);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
              color="white"
            >
              پروژه های ما
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(2040);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
              color="white"
            >
              مزایای همکاری
            </Typography>
          </Button>
          <div></div>
          <Button
            variant="contained"
            color="warning"
            sx={{ margin: "10px 10px" }}
            onClick={() => {
              scroller(5546);
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
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