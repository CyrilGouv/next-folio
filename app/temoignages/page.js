import Hero from "@/components/Blocks/Hero/Hero"
import HeroSentence from "@/components/Blocks/Hero/HeroSentence"
import AllTestimonials from "@/components/Blocks/Testimonials/AllTestimonials"
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
    title: "Témoignages — Cyril Gouv",
    description: "Qu’est-ce que mes clients disent de moi ? Parce qu'au bout du compte, c’est leur avis qui compte le plus.",
    openGraph: {
      title: "Témoignages — Cyril Gouv",
      description: "Qu’est-ce que mes clients disent de moi ? Parce qu'au bout du compte, c’est leur avis qui compte le plus.",
      images: ["/images/seo/cyrilgouv-04.png"]
    },
    alternates: {
    canonical: '/temoignages',
  },
}

const page = () => {

    const page = "testimonials"

    return (
        <>
            <HeroSentence 
                page={ page } 
                title="Qu’est-ce que mes clients disent de mon travail ? Parce qu'au bout du compte, c’est leur avis qui compte toujours le plus pour moi." 
                text="Découvrez les témoignages de mes clients et voyez comment mon travail a fait la différence pour leur projet web." 
            />
            {/* <Hero page={ page } withText={ true } /> */}
            <AllTestimonials />
            <Footer />
        </>
    ) 
}

export default page