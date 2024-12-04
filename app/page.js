import Hero from "@/components/Blocks/Hero/Hero"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"
import Intro from "@/components/Blocks/Intro/Intro"
import FeaturedProjects from "@/components/Blocks/Projects/FeaturedProjects"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import FeaturedTestimonials from "@/components/Blocks/Testimonials/FeaturedTestimonials"
import Footer from "@/components/Layout/Footer/Footer";


export const metadata = {
  title: "Création site internet Biscarrosse — Cyril Gouv, des sites modernes et sur-mesure",
  description: "Création de sites internet à Biscarrosse : offrez à votre entreprise un site moderne et sur-mesure. Boostez votre visibilité en ligne dès aujourd’hui avec Cyril Gouv.",
  openGraph: {
    title: "Création site internet Biscarrosse — Cyril Gouv, des sites modernes et sur-mesure",
    description: "Création de sites internet à Biscarrosse : offrez à votre entreprise un site moderne et sur-mesure. Boostez votre visibilité en ligne dès aujourd’hui avec Cyril Gouv.",
    images: ["/images/seo/cyrilgouv-01.png"]
  }
}

export default function Home() {

  const page = "homepage"

  return (
    <>
      <Hero page={ page } withText={ true } />
      <CoverParallax />
      <Intro page={ page } />
      <FeaturedProjects />
      <TextParallax text="Make you shine" layout="section" />
      <SectionLists type="services" />
      <FeaturedTestimonials />
      <Footer />
    </>
  );
}
