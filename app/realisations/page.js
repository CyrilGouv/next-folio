import Hero from "@/components/Blocks/Hero/Hero"
import AllProjects from "@/components/Blocks/Projects/AllProjects"
import Footer from "@/components/Layout/Footer/Footer"


export default function Portfolio() {

  const page = "works"

  return (
    <>
      <Hero page={ page } />
      <AllProjects />
      <Footer />
    </>
  )
}