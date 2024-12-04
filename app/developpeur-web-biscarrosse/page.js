import Hero from "@/components/Blocks/Hero/Hero"
import CoverColumns from "@/components/Blocks/Cover/CoverColumns"
import Intro from "@/components/Blocks/Intro/Intro"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
    title: "Développeur web indépendant à Biscarrosse — Cyril Gouv",
    description: "Développeur web indépendant à Biscarrosse depuis 2018, je suis spécialisé dans la création de sites internet, le design graphique et le développement front-end. Alliez performance et esthétique pour vos projets web.",
    openGraph: {
      title: "Développeur web indépendant à Biscarrosse — Cyril Gouv",
      description: "Développeur web indépendant à Biscarrosse depuis 2018, je suis spécialisé dans la création de sites internet, le design graphique et le développement front-end. Alliez performance et esthétique pour vos projets web.",
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