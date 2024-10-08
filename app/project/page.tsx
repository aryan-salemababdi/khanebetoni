import ProjectsPage from '@/components/template/ProjectsPage/ProjectsPage'


const Projects = async () => {
    const res = await fetch("https://khanebetoni-api-omega.vercel.app/projects",{
        cache: "no-cache",
    })
    const data = await res.json();
  return (
    <>
    <ProjectsPage data = {data} />
    </>
  )
}

export default Projects;