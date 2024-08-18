export default async function sitemap() {
    const staticRoutes = ["", "/project", "/contactus"];
    const projectRoutes = await fetch("https://khanebetoni-api-omega.vercel.app/projects");
    const data = await projectRoutes.json();

    const routes = staticRoutes.map((route:any) => ({
        url: `https://www.khanebetoni.vercel.app${route}`,
        lastModified: new Date().toString(),
    }));

    const projects = data.map((project:any) => ({
        url: `https:///www.khanebetoni.vercel.app/project/${project.id}`,
        lastModified: new Date().toString(),
    }));

    return [...routes, ...projects]
}