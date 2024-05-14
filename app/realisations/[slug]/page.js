import HeroProject from "@/components/Blocks/Hero/HeroProject"
import IntroProject from "@/components/Blocks/Intro/IntroProject"
import Footer from "@/components/Layout/Footer/Footer"
import { getProjectBySlug } from "@/utils/projects/getProjectBySlug"
import { projects } from "@/data/projects"
import CoverProject from "@/components/Blocks/Cover/CoverProject"


export default async function SinglePortfolio({ params }) {

    const { name, year, industry, description, gallery } = await getProjectBySlug(params)

    return (
        <>
            <HeroProject 
                title={ name } 
                year={ year }
                industry={ industry }
            />
            <IntroProject description={ description } />
            <CoverProject 
                image={ gallery[0] } 
                altText={ `Projet : ${name} créé en ${year}` }
            />
            <Footer />
        </>
    )
}


export const generateStaticParams = async () => {
    return projects
}