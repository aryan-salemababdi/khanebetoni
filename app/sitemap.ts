export default async function sitemap() {
    const staticRoutes = ["", "/project", "/contactus"];
    const projectRoutes = await fetch("https://khanebetoni-api.vercel.app/projects");
    const data = await projectRoutes.json();

    const routes = staticRoutes.map((route:any) => ({
        url: `https://www.khanebetoni.com${route}`,
        lastModified: new Date().toString(),
    }));

    const projects = data.map((project:any) => ({
        url: `https://www.khanebetoni.com/project/${project.id}`,
        lastModified: new Date().toString(),
    }));

    return [...routes, ...projects]
}