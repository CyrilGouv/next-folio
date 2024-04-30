import Hero from "@/components/Blocks/Hero/Hero"
import Contact from "@/components/Blocks/Contact/Contact"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "contact"

    return (
        <>
            <Hero page={ page } withText={ true } />
            <Contact />
            <Footer />
        </>
    ) 
}

export default page