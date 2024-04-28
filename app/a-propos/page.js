import Hero from "@/components/Blocks/Hero/Hero"
import CoverColumns from "@/components/Blocks/Cover/CoverColumns"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "about"

    return (
        <>
            <Hero page={ page } withText={ true } />
            <CoverColumns />
            <Footer />
        </>
    ) 
}

export default page