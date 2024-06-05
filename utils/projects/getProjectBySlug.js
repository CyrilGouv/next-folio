import { projects } from "@/data/projects"

export function getProjectBySlug(params) {
    const project = projects.filter(project => project.slug === params.slug)
    return project[0]
}