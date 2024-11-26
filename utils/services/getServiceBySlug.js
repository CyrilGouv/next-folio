import { services } from "@/data/services"

export function getServiceBySlug(params) {
    const service = services.filter(item => item.slug === params.slug)
    return service[0]
}