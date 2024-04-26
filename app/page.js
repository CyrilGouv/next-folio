import Hero from "@/components/Blocks/Hero/Hero"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"
import Intro from "@/components/Blocks/Intro/Intro"
import FeaturedProjects from "@/components/Blocks/Projects/FeaturedProjects"
import TextParallax from "@/components/UI/Elements/Text/TextParallax"
import SectionLists from "@/components/Blocks/SectionLists/SectionLists"
import FeaturedTestimonials from "@/components/Blocks/Testimonials/FeaturedTestimonials"
import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {

  const page = "homepage"

  return (
    <>
      <Hero page={ page } />
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
