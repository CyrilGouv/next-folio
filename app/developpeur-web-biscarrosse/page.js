import Intro from "@/components/Blocks/Intro/Intro"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import Footer from "@/components/Layout/Footer/Footer"
import HeroSentence from "@/components/Blocks/Hero/HeroSentence"
import SectionColumns from "@/components/Blocks/Section/SectionColumns"


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
            <HeroSentence 
                page={ page } 
                title="Développeur web indépendant à Biscarrosse dans les Landes depuis 2018, spécialiste en création de sites internet et en développement front-end." 
                text="En tant qu'indépendant passionné et développeur web depuis plusieurs années, je m'engage à concevoir des sites internet accueillants, performants et adaptés à vos besoins." 
            />
            <Intro page={ page } />
            <SectionColumns layout="light" />
            <SectionLists type="approaches" />
            <Footer />
        </>
    ) 
}

export default page