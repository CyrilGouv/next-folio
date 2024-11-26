import HeroSentence from "@/components/Blocks/Hero/HeroSentence"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"
import Intro from "@/components/Blocks/Intro/Intro"
import FeaturedProjects from "@/components/Blocks/Projects/FeaturedProjects"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import FeaturedTestimonials from "@/components/Blocks/Testimonials/FeaturedTestimonials"
import Footer from "@/components/Layout/Footer/Footer"

import { getServiceBySlug } from "@/utils/services/getServiceBySlug"
import { services } from "@/data/services"


export async function generateMetadata({ params }) {

    // fetch data
    const service = getServiceBySlug(params)

    return {
      title: service.pageTitle,
      description: service.pageTitle,
      openGraph: {
        title: service.pageTitle,
        description: service.pageTitle,
        images: ["/images/seo/cyrilgouv-01.png"]
      },
    }
}


export default async function SingleService({ params }) {

    const page = "services"
    const { pageTitle, localisation, titleOpacity, aboutText } = getServiceBySlug(params)

    return (
        <>
            <HeroSentence 
                page={ page } 
                title={ pageTitle } 
                localisation={ localisation }
            />
            <CoverParallax />
            <Intro 
                page={ page } 
                title={ titleOpacity }
                content={ aboutText } 
            />
            <FeaturedProjects />
            <TextParallax text="Make you shine" layout="section" />
            <SectionLists type="services" />
            <FeaturedTestimonials />
            <Footer />
        </>
    )
}


export const generateStaticParams = async () => {
    return services
}