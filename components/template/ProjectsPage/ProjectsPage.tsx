"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface IProject {
  data: {
    id: number;
    title: string;
    master: string;
    startTime: string;
    endTime: string;
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

const ProjectsPage: NextPage<IProject> = ({ data }) => {
  const router = useRouter();

  return (
    <div style={{ height: "100%", margin: "100px 0px" }}>
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
    </div>
  );
};

export default ProjectsPage;
