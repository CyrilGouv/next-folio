import Hero from "@/components/Blocks/Hero/Hero"
import AllTestimonials from "@/components/Blocks/Testimonials/AllTestimonials"
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
    title: "Témoignages — Cyril Gouv",
    description: "Qu’est-ce que mes clients disent de moi ? Parce qu'au bout du compte, c’est leur avis qui compte le plus.",
    openGraph: {
      title: "Témoignages — Cyril Gouv",
      description: "Qu’est-ce que mes clients disent de moi ? Parce qu'au bout du compte, c’est leur avis qui compte le plus.",
      images: ["/images/seo/cyrilgouv-04.png"]
    }
}

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