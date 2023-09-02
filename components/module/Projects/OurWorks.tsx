"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3,auto)",
            sm: "repeat(3,auto)",
            xs: "repeat(1,auto)",
          },
          justifyContent: "center",
        }}
      >
        {data.slice(0, 3).map((item: any) => (
          <Box m="0px 10px" key={item.id}>
            <Button onClick={() => router.push(`/projects/${item.title}`)}>
              <Image
                src={item.featuredImage}
                alt={item.title}
                width={300}
                height={300}
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
            </Button>
          </Box>
        ))}
      </Box>
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
