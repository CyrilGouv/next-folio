import HeroProject from "@/components/Blocks/Hero/HeroProject"
import IntroProject from "@/components/Blocks/Intro/IntroProject"
import CoverProject from "@/components/Blocks/Cover/CoverProject"
import TechnosProject from "@/components/Blocks/Section/TechnosProject"
import TestimonialProject from "@/components/Blocks/Testimonials/TestimonialProject"
import Footer from "@/components/Layout/Footer/Footer"
import { getProjectBySlug } from "@/utils/projects/getProjectBySlug"
import { projects } from "@/data/projects"


export default async function SinglePortfolio({ params }) {

    const { name, year, industry, description, gallery, technologies, testimonial } = await getProjectBySlug(params)

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
            <TechnosProject technos={ technologies } />
            { testimonial && (
                <TestimonialProject testimonial={ testimonial } />
            ) }
            <Footer />
        </>
    )
}


export const generateStaticParams = async () => {
    return projects
}