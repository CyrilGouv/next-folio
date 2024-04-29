import Hero from "@/components/Blocks/Hero/Hero"
import CoverColumns from "@/components/Blocks/Cover/CoverColumns"
import Intro from "@/components/Blocks/Intro/Intro"
import SectionLists from "@/components/Blocks/SectionLists/SectionLists"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "about"

    return (
        <>
            <Hero page={ page } />
            <CoverColumns />
            <Intro page={ page } />
            <SectionLists type="approaches" />
            <Footer />
        </>
    ) 
}

export default page