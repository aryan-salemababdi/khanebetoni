"use client";
import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";

const WorkWithUs = () => {
  return (
    <div>
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
              مزایای همکاری با ما
            </Typography>
            <Typography fontWeight="bold" variant="h3">
              شما می توانید با ما همکاری کنید
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              حضور یک مهندس عمران و متخصص سازه و مسلط به قوانین نظارت •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              بررسی محاسباتی سازه اولیه و بهینه کردن مصرف میلگرد، بتن، تیرچه و
              ... در صورت امکان •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              ارائه مشاوره های فنی و مهندسی به کارفرما، جهت کاهش هزینه ها و
              بهینه شدن سازه •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              تکیه بر دانش فنی و علم سازه ای مهندسین عمران فارغ التحصیل گرایش
              سازه از بهترین دانشگاه های مطرح کشور •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              اجرای اصولی و مهندسی سازه •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              داشتن پرسنل اجرایی با تجربه •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              کنترل ترکیبات افزودنی لازم برای بتن و همچنین کنترل کیفیت مصالح به
              روش مهندسی •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              تعامل با مهندس ناظر معرفی شده از سوی سازمان نظام مهندسی •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              مدیریت تامین مصالحی نظیر بتن، میلگرد، تیرچه و یونولیت با مناسب
              ترین قیمت و بهترین کیفیت •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              مدیریت زمان ساخت سازه •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              انجام آزمایش های بتن و میلگرد و ارائه برگ آزمایش •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              انجام فورجینگ در مواردی که انجام آن منجر به بهینگی سازه می شود •
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              فراغت کارفرماازاجرای سازه (کارفرما، پروژه را پس از گودبرداری تحویل
              می دهد و پس از اتمام اسکلت تحویل می گیرد) •
            </Typography>
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
              src="/images/workwithus.png"
              alt="aboutus"
              layout="responsive"
              width={400}
              height={500}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WorkWithUs;
