"use client";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LevelCards from "./LevelCards";

const LevelStart = () => {
  const [pageWidth, setPageWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    useTransform: false,
    autoplay: false,
    arrows: false,
    initialSlide: 0,
    cssEase: "linear",
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Box m="100px 0px">
      <Typography
        textAlign="center"
        color="#EA6B00"
        fontWeight="bold"
        variant="h6"
        margin="50px 0px"
      >
        مراحل پیش از شروع اجرا
      </Typography>
      <Container>
        <Box justifyContent="center">
          <Typography
            textAlign="center"
            color="black"
            fontWeight="bold"
            variant="h6"
            margin="50px 0px"
          >
            در صورتی که سازه توسط تیم خانه بتنی طراحی نشده باشد
          </Typography>
          <Slider {...settings}>
            <div>
              <LevelCards
                img="/images/step1.webp"
                title="مرحله اول"
                desc="دریافت نقشه و فایل های اولیه سازه از کارفرما برای بررسی های اولیه"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step2.webp"
                title="مرحله دوم"
                desc="بررسی فایل های اولیه سازه و بررسی امکان بهینه کردن مصرف بتن، تیرچه و آرماتور"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step3.webp"
                title="مرحله سوم"
                desc="ارائه حدود میزان بهینگی سازه و همچنین دستمزد اجرا به کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step6.webp"
                title="مرحله چهارم"
                desc="عقد قرارداد"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step5.webp"
                title="مرحله پنجم"
                desc="انجام بهینگی سازه وارائه نقشه اجرایی جدید(به صورت رایگان) و گرفتن تایید از محاسب قبلی ( در صورت تمایل کارفرما و تایید محاسب قبلی )"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step4.webp"
                title="مرحله ششم"
                desc="ارائه برنامه زمانبندی اجرا و همچنین لیست کامل تمام مصالح مورد نیاز سازه به تفکیک طبقات"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step7.webp"
                title="مرحله هفتم"
                desc="انجام خرید بخش اول مصالح سازه ( در صورت تمایل کارفرما )"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step8.webp"
                title="مرحله هشتم"
                desc="شروع اجرا"
              />
            </div>
            {pageWidth >= 1024 ? <div></div> : ""}
          </Slider>
        </Box>
        <Box justifyContent="center">
          <Typography
            textAlign="center"
            color="black"
            fontWeight="bold"
            variant="h6"
            margin="50px 0px"
          >
            در صورتی که سازه توسط تیم خانه بتنی طراحی شده باشد
          </Typography>
          <Slider {...settings}>
            <div>
              <LevelCards
                img="/images/step7.webp"
                title="مرحله اول"
                desc="دریافت نقشه های معماری از کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step12.webp"
                title="مرحله دوم"
                desc="ارائه مشاوره های فنی در خصوص انتخاب سیستم باربرجانبی، نوع سقف، نوع مصالح دیوار و ... به کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step13.webp"
                title="مرحله سوم"
                desc="انجام طراحی اولیه و ارائه حدود وزنی آرماتور و حدود حجمی بتن به کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step6.webp"
                title="مرحله چهارم"
                desc="عقد قرارداد"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step5.webp"
                title="مرحله پنجم"
                desc="انجام طراحی بهینه سازه ( به صورت رایگان ) با در نظر گرفتن منافع کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step4.webp"
                title="مرحله ششم"
                desc="ارائه نقشه های اجرایی و مدارک محاسبات سازه به کارفرما ( سه هفته پس از گرفتن نقشه های معماری )، جهت گرفتن برگه محاسبات و گرفتن جواز"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step17.webp"
                title="مرحله هفتم"
                desc="ارائه برنامه زمان بندی اجرا و همچنین لیست کامل تمام مصالح مورد نیاز سازه به تفکیک طبقات"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step18.webp"
                title="مرحله هشتم"
                desc="انجام خرید بخش اول مصالح سازه ( در صورت تمایل کارفرما ) "
              />
            </div>
            <div>
              <LevelCards
                img="/images/step8.webp"
                title="مرحله نهم"
                desc="شروع اجرا پس از محیا شدن شرایط اجرا سازه توسط کارفرما"
              />
            </div>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default LevelStart;
