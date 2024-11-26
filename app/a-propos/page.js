import Hero from "@/components/Blocks/Hero/Hero"
import CoverColumns from "@/components/Blocks/Cover/CoverColumns"
import Intro from "@/components/Blocks/Intro/Intro"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
    title: "À propos — Cyril Gouv",
    description: "Développeur web indépendant passionné depuis 2018 et spécialiste en création de site web, design graphique et développement front-end à Biscarrosse.",
    openGraph: {
      title: "À propos — Cyril Gouv",
      description: "Développeur web indépendant passionné depuis 2018 et spécialiste en création de site web, design graphique et développement front-end à Biscarrosse.",
      images: ["/images/seo/cyrilgouv-03.png"]
    }
}

const page = () => {

    const page = "about"

    return (
        <>
            <Hero page={ page } withText={ true } />
            <CoverColumns />
            <Intro page={ page } />
            <TextParallax text="Make you shine" layout="section" />
            <SectionLists type="approaches" />
            <Footer />
        </>
    ) 
}

export default page