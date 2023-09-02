import ProjectDetails from "@/components/module/ProjectDetails/ProjectDetails";
import { Typography, Box } from "@mui/material";
import { NextPage } from "next";

type UserIdParams = {
  params: { projectId: string };
};

const ProjectId: NextPage<UserIdParams> = async ({ params }) => {
  const res = await fetch("https://khanebetoni-api.vercel.app/projects", {
    cache: "force-cache",
  });

  const data = await res.json();
  const index = data.findIndex((item: any) => item.id.toString() === params.projectId);
  
  return (
    <Box sx={{height: "100%"}}>
      {data[index] ? (
        <ProjectDetails data={data[index]} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography fontWeight="bold" variant="h5">
            پروژه مورد نظر یافت نشد
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProjectId;
