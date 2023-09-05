"use client"
import { NextPage } from "next";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


interface ILevelCards {
  img: string;
  title: string;
  desc: string;
}

const LevelCards:NextPage<ILevelCards> = ({
    img,
    title,
    desc
}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 360, height:360,margin:{md:"0px 5px", sm:"0px 5px", xs:"0px 50px"} }}>
        <CardMedia
          sx={{ height: 180 }}
          image={img}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="right"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="right">
           {desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LevelCards;
