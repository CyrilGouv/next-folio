import Hero from "@/components/Blocks/Hero/Hero"
import AllProjects from "@/components/Blocks/Projects/AllProjects"
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
  title: "Réalisations • Cyril Gouv",
  description: "Découvrez l'étendue de mon savoir-faire à travers ces récentes collaborations clients détaillées.",
  openGraph: {
    title: "Réalisations • Cyril Gouv",
    description: "Découvrez l'étendue de mon savoir-faire à travers ces récentes collaborations clients détaillées.",
    images: ["/images/seo/cyrilgouv-02.png"]
  }
}

export default function Portfolio() {

  const page = "works"

  return (
    <>
      <Hero page={ page } withText={ true } />
      <AllProjects />
      <Footer />
    </>
  )
}