import Hero from "@/components/Blocks/Hero/Hero"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"
import Intro from "@/components/Blocks/Intro/Intro"
import FeaturedProjects from "@/components/Blocks/Projects/FeaturedProjects"


export default function Home() {

  const page = "homepage"

  return (
    <>
      <Hero page={ page } />
      <CoverParallax />
      <Intro page={ page } />
      <FeaturedProjects />
    </>
  );
}
