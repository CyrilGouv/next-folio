import Hero from "@/components/Blocks/Hero/Hero"
import Footer from "@/components/Layout/Footer/Footer"


const page = () => {

    const page = "about"

    return (
        <>
            <Hero page={ page } withText={ true } />
            <Footer />
        </>
    ) 
}

export default page