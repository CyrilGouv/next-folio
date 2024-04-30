import Hero from "@/components/Blocks/Hero/Hero"
import AllTestimonials from "@/components/Blocks/Testimonials/AllTestimonials"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "testimonials"

    return (
        <>
            <Hero page={ page } withText={ true } />
            <AllTestimonials />
            <Footer />
        </>
    ) 
}

export default page