"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Typography, Box, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { NextPage } from "next";

interface IOurWorks {
  data: {
    id: number;
    title: string;
    master: string;
    startTime: string;
    featuredImage: string;
    allImages: string[];
    area: number;
    roof: number;
    typeRoof: string;
    sidewaysBarSystem: string;
    weightArmature1: number | null;
    weightArmature2: number | null;
  }[];
}

const OurWorks: NextPage<IOurWorks> = ({ data }) => {
  const router = useRouter();

  return (
    <Box m="100px 0px">
      <Typography
        textAlign="center"
        color="#EA6B00"
        fontWeight="bold"
        variant="h6"
      >
        کار های ما
      </Typography>
      <Typography
        sx={{ margin: "20px 0px" }}
        textAlign="center"
        color="black"
        fontWeight="bold"
        variant="h3"
      >
        پروژه های خانه بتن
      </Typography>
      <Grid
        container
        display="grid"
        gridAutoColumns="auto"
        gridTemplateColumns={{
          md: "repeat(3,1fr)",
          xs: "repeat(1,1fr)",
        }}
        p={2}
      >
        {data.map((item: any) => (
          <Grid m={1} item key={item.id}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image={item.featuredImage}
                title={item.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="right"
                >
                  {item.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="right"
                >
                  {item.master}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  textAlign="right"
                >
                 وضعیت پروژه : {item.endTime}
                </Typography>
                <Button
                  size="small"
                  onClick={() => {
                    router.push(`/project/${item.id}`);
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ whiteSpace: "pre-wrap" }}
                  >
                    مشاهده جزئیات
                  </Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="warning"
          onClick={() => router.push("/project")}
          sx={{ margin: "20px 0px" }}
        >
          <Typography fontWeight="bold" variant="h6" textAlign="right">
            پروژه ها
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default OurWorks;
