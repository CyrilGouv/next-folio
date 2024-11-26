import Hero from "@/components/Blocks/Hero/Hero"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"
import Intro from "@/components/Blocks/Intro/Intro"
import FeaturedProjects from "@/components/Blocks/Projects/FeaturedProjects"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import FeaturedTestimonials from "@/components/Blocks/Testimonials/FeaturedTestimonials"
import Footer from "@/components/Layout/Footer/Footer";


export const metadata = {
  title: "Cyril Gouv — Création de sites internet modernes et sur-mesure à Biscarrosse",
  description: "Créateur de sites internet et d’applications web modernes et sur-mesure, dédiés à votre performance, visibilité et notoriété depuis 2018 à Biscarrosse.",
  openGraph: {
    title: "Cyril Gouv — Création de site internet modernes et sur-mesure à Biscarrosse",
    description: "Créateur de sites internet et d’applications web modernes et sur-mesure, dédiés à votre performance, visibilité et notoriété depuis 2018 à Biscarrosse.",
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
