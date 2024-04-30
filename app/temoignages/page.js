import Hero from "@/components/Blocks/Hero/Hero"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "testimonials"

    return (
        <>
            <Hero page={ page } withText={ true } />
            <Footer />
        </>
    ) 
}

export default page