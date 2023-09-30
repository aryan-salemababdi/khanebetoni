"use client";
import { Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter as useNextRouter } from "next/navigation";

type Router = ReturnType<typeof useNextRouter>;

const AboutUs = () => {
  const router: Router = useNextRouter();
  return (
    <>
      <Container>
        <Grid container justifyContent="center" spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              flexDirection: "column",
              textAlign: { md: "right", sm: "right", xs: "right" },
            }}
          >
            <Typography color="#EA6B00" fontWeight="bold" variant="h6">
              درباره ما
            </Typography>
            <Typography fontWeight="bold" variant="h3">
              اجرای سازه خود را به ما بسپارید
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              مجموعه خانه بتنی یک مجموعه متشکل از مهندسان عمران و فارغ التحصیلان
              دانشگاه های برتر ایران است، که خدمت آن اجرای حرفه ای و مهندسی سازه
              های بتن آرمه با رویکرد تسلط بر طراحی و بهینه سازی سازه های بتن
              آرمه می باشد
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{ margin: "10px 0px" }}
              onClick={() => {
                router.push("/contactus");
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
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
          >
           <Image
              src="/images/aboutus.png"
              alt="aboutus"
              layout="responsive"
              width={400}
              height={500}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
