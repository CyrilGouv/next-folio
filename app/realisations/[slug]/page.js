import HeroProject from "@/components/Blocks/Hero/HeroProject"
import Footer from "@/components/Layout/Footer/Footer"
import { projects } from "@/data/projects"
import { getProjectBySlug } from "@/utils/projects/getProjectBySlug"


export default async function SinglePortfolio({ params }) {

    const project = await getProjectBySlug(params)

    return (
        <>
            <HeroProject 
                title={ project.name } 
                year={ project.year }
                industry={ project.industry }
            />
            
            <Footer />
        </>
    )
}


export const generateStaticParams = async () => {
    return projects
}