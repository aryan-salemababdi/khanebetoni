import React from "react";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  const res = await fetch("http://localhost:4003/projects", {
    cache: "force-cache",
  });

  const data = await res.json();

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
            <Link href={`/project/${item.title}`}>
              <Image
                src={item.featuredImage}
                alt={item.title}
                width={300}
                height={300}
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
