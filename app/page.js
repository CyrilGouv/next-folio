import Hero from "@/components/Blocks/Hero/Hero"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"
import Intro from "@/components/Blocks/Intro/Intro"
import FeaturedProjects from "@/components/Blocks/Projects/FeaturedProjects"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/Section/SectionLists"
import FeaturedTestimonials from "@/components/Blocks/Testimonials/FeaturedTestimonials"
import Footer from "@/components/Layout/Footer/Footer";


export const metadata = {
  title: "Cyril Gouv • Développeur front-end freelance",
  description: "Créateur de sites et applications web sur-mesure dédiée à votre performance, votre visibilité et votre notoriété depuis 2018 à Biscarrosse.",
  openGraph: {
    title: "Cyril Gouv • Développeur front-end freelance",
    description: "Créateur de sites et applications web sur-mesure dédiée à votre performance, votre visibilité et votre notoriété depuis 2018 à Biscarrosse.",
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
