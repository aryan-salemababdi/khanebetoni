import { NextPage } from "next";
import { Typography, Button, Divider } from "@mui/material";
import { useRouter as useNextRouter } from "next/navigation";

interface LandingProps {
  image: string;
}

type Router = ReturnType<typeof useNextRouter>;

const Banner: NextPage<LandingProps> = ({ image }) => {
  const router: Router = useNextRouter();

  const mystyle = {
    backgroundImage: `url(${image})`,
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
        <Typography fontWeight="bold" variant="h4" mt={1}>
          خانه بتنی
        </Typography>
        <Typography fontWeight="bold" variant="h4" mt={1}>
          ما مواد ساختمانی با کیفیت بالا ارائه می‌دهیم
        </Typography>
        <Typography fontWeight="bold" variant="h6" mt={1}>
        با افتخار، پیشرو در ارائه محصولات بتن و آرمه با کیفیت برای ساخت آینده بهتر و پایدار
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ margin: "10px 0px" }}
          onClick={() => {
            router.push("/projects");
          }}
        >
          <Typography fontWeight="bold" variant="h6" textAlign="right" color="white">
            پروژه های ما
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Banner;
