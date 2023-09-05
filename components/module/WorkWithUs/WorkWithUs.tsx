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
              direction: "rtl",
            }}
          >
            <Typography color="#EA6B00" fontWeight="bold" variant="h6">
              مزایای همکاری با ما
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              1- حضور یک مهندس عمران و متخصص سازه و مسلط به قوانین نظارت
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              2- بررسی محاسباتی سازه اولیه و بهینه کردن مصرف میلگرد، بتن، تیرچه
              و ... در صورت امکان
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
           3- ارائه مشاوره های فنی و مهندسی به کارفرما، جهت کاهش هزینه ها و
              بهینه شدن سازه
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
             4- تکیه بر دانش فنی و علم سازه ای مهندسین عمران فارغ التحصیل گرایش
              سازه از بهترین دانشگاه های مطرح کشور
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              5- اجرای اصولی و مهندسی سازه
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
             6- داشتن پرسنل اجرایی با تجربه
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
            7-  کنترل ترکیبات افزودنی لازم برای بتن و همچنین کنترل کیفیت مصالح به
              روش مهندسی
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              8- تعامل با مهندس ناظر معرفی شده از سوی سازمان نظام مهندسی
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
            9-  مدیریت تامین مصالحی نظیر بتن، میلگرد، تیرچه و یونولیت با مناسب
              ترین قیمت و بهترین کیفیت
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              10- مدیریت زمان ساخت سازه
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
             11- انجام آزمایش های بتن و میلگرد و ارائه برگ آزمایش
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              12- انجام فورجینگ در مواردی که انجام آن منجر به بهینگی سازه می شود
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
             13- فراغت کارفرماازاجرای سازه (کارفرما، پروژه را پس از گودبرداری تحویل
              می دهد و پس از اتمام اسکلت تحویل می گیرد)
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
              src="/images/workwithus.webp"
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
