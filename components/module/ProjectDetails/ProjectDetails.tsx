"use client";
import { NextPage } from "next";
import Image from "next/image";
import { Typography, Box, Grid, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProjectDetails {
  data: {
    id: number;
    title: string;
    master: string;
    services: string | null;
    startTime: string;
    featuredImage: string;
    allImages: string[];
    area: number;
    roof: number;
    typeRoof: string;
    cheangeRoof: boolean;
    sidewaysBarSystem: string;
    weightArmature1: number | null;
    weightArmature2: number | null;
  };
}

const ProjectDetails: NextPage<IProjectDetails> = ({ data }) => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    useTransform: false,
    autoplay: false,
    arrows: false,
    initialSlide: 0,
    cssEase: 'linear',
    rtl: true,
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
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          centerMode: false,
        }
      }
    ]
  };
  return (
    <Box m="150px 0px">
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
              پروژه
            </Typography>
            <Typography fontWeight="bold" variant="h3">
              {data.title}
            </Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              کارفرما : {data.master}
            </Typography>
            {
              data.services !== null && (
                <Typography
                  fontWeight="bold"
                  variant="h6"
                  sx={{ margin: "10px 0px" }}
                  color="#686868"
                >
                  خدمات خانه بتنی : {data.services}
                </Typography>
              )
            }
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              تاریخ شروع پروژه : {data.startTime}
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              مساحت : {data.area} متر مربع
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              تعداد سقف : {data.roof} سقف
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              نوع سقف : {data.typeRoof}
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              سیستم باربر جانبی : {data.sidewaysBarSystem}
            </Typography>
            {data.weightArmature1 !== null && (
              <Typography
                fontWeight="bold"
                variant="body2"
                sx={{ margin: "10px 0px" }}
                color="#686868"
              >
                وزن آرماتور طراحی اولیه برای تیر، ستون، فونداسیون و سقف :{" "}
                {data.weightArmature1} کیلوگرم برای هر متر مربع
              </Typography>
            )}
            {data.weightArmature2 !== null && (
              <Typography
                fontWeight="bold"
                variant="body2"
                sx={{ margin: "10px 0px" }}
                color="#686868"
              >

                {" "}
                وزن  آرماتور پس از باز طراحی توسط تیم خانه بتنی برای تیر، ستون،
                فونداسیون و سقف : {data.weightArmature2} کیلوگرم برای هر متر
                مربع
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            {
              data.allImages.length !== 0 ? (
                <Slider {...settings}>
                <div>
                  <Image
                    src={data.featuredImage}
                    alt={data.title}
                    width={200}
                    height={200}
                    style={{ borderRadius: "10px", margin: "0px 50px" }}
                  />
                </div>
                {data.allImages.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={200}
                      height={200}
                      style={{ borderRadius: "10px", margin: "0px 50px" }}
                    />
                  </div>
                ))}
              </Slider>
              )
              :
              <Grid
              item
              xs={12}
              sm={12}
              md={12}
              display="flex"
              justifyContent="center"
            >
                  <Image
                    src={data.featuredImage}
                    alt={data.title}
                    width={200}
                    height={200}
                    style={{ borderRadius: "10px"}}
                  />
            </Grid>
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
