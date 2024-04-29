import Hero from "@/components/Blocks/Hero/Hero"
import CoverColumns from "@/components/Blocks/Cover/CoverColumns"
import Intro from "@/components/Blocks/Intro/Intro"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "about"

    return (
        <>
            <Hero page={ page } />
            <CoverColumns />
            <Intro page={ page } />
            <Footer />
        </>
    ) 
}

export default page