import Hero from "@/components/Blocks/Hero/Hero"
import Contact from "@/components/Blocks/Contact/Contact"
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
    title: "Contact • Cyril Gouv",
    description: "Même si vous avez simplement besoin de renseignements ou de conseils, je prendrai le temps de vous fournir une réponse pertinente et adaptée à vos besoins.",
    openGraph: {
      title: "Contact • Cyril Gouv",
      description: "Même si vous avez simplement besoin de renseignements ou de conseils, je prendrai le temps de vous fournir une réponse pertinente et adaptée à vos besoins.",
      images: ["/images/seo/cyrilgouv-05.png"]
    }
}

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