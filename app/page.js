import Hero from "@/components/Blocks/Hero/Hero"
import CoverParallax from "@/components/Blocks/Cover/CoverParallax"


export default function Home() {

  const page = "homepage"

  return (
    <>
      <Hero page={ page } />
      <CoverParallax />
    </>
  );
}
