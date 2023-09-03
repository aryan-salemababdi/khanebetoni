"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LevelCards from "./LevelCards";

const LevelStart = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    useTransform:false,
    autoplay: false,
    arrows: false,
    initialSlide: 0,
    cssEase: 'linear',
    rtl: false,
    responsive: [
        {
            breakpoint: 1024, // width to change options
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                initialSlide: 1,
                infinite: true,
                centerMode:false,
            }
        }
    ]
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
          <Slider {...settings}>
            <div>
              <LevelCards
                img="/images/step1.png"
                title="مرحله اول"
                desc="دریافت نقشه و فایل های اولیه سازه از کارفرما برای بررسی های اولیه"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step2.png"
                title="مرحله دوم"
                desc="بررسی فایل های اولیه سازه و بررسی امکان بهینه بتن، تیرچه و آرماتور"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step3.png"
                title="مرحله سوم"
                desc="ارائه حدود میزان بهینگی سازه و همچنین دستمزد اجرا به کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step4.png"
                title="مرحله چهارم"
                desc="ارائه برنامه زمانبندی اجرا و همچنین لیست کامل تمام مصالح مورد نیاز سازه به تفکیک طبقات"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step5.png"
                title="مرحله پنجم"
                desc="انجام بهینگی سازه و ارائه نقشه اجرایی جدید به صورت رایگان و گرفتن تایید در صورت تمایل کارفرما"
              />
            </div>
            <div>
              <LevelCards
                img="/images/step6.jpg"
                title="مرحله ششم"
                desc="عقد قرارداد،انجام خرید بخش اول مصالح سازه ( درصورت تمایل کارفرما ) و اجرای پروژه"
              />
            </div>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default LevelStart;
