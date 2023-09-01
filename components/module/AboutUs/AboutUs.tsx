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
              پروژه های ساختمانی خود را به ما پسپارید
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body1"
              sx={{ margin: "10px 0px" }}
            >
              بیش از پنج سال سابقه در صنعت بتن آرمه
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              شرکت خانه بتنی، با تجربه‌ای بیش از پنج سال در صنعت ساخت و ساز، به
              عنوان یکی از رهبران در تأمین و تولید بتن ارمه با کیفیت و
              استانداردهای بین‌المللی شناخته می‌شود. ما با بهره‌گیری از
              تکنولوژی‌های پیشرفته، تیمی متخصص و تعهد به کیفیت، به ارائه‌ی
              محصولاتی متناسب با نیازهای مشتریان در پروژه‌های مختلف می‌پردازیم.
              از بتن‌های مقاوم تا محصولات ویژه برای سازه‌های بلند، ما به ارائه‌ی
              راه‌حل‌های سازنده و پایدار برای صنعت ساخت و ساز متعهدیم. هدف ما
              ارتقاء کیفیت ساخت‌وساز و ایجاد ارتباطی قوی با مشتریان است تا با
              همکاری و همراهی، پروژه‌هایی استثنایی و با ارزش افزوده بالا را به
              اتمام برسانیم
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
                تماس با ما
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
