import ProjectsPage from '@/components/template/ProjectsPage/ProjectsPage'


const Projects = async () => {
    const res = await fetch("https://khanebetoni-api.vercel.app/projects",{
        cache: "force-cache",
    })
    const data = await res.json();
  return (
    <>
    <ProjectsPage data = {data} />
    </>
  )
}

export default Projects