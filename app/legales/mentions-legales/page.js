import Hero from "@/components/Blocks/Hero/Hero"
import Legales from "@/components/Blocks/Legales/Legales";
import Footer from "@/components/Layout/Footer/Footer"


export const metadata = {
  title: "Mentions Légales — Cyril Gouv",
  description: "En vertu de l’Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé dans cet article l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.",
  openGraph: {
    title: "Mentions Légales — Cyril Gouv",
    description: "En vertu de l’Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé dans cet article l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi."
  }
}

export default function Mentions() {

  const page = "mentions"

  return (
    <>
      <Hero page={ page } />
      <Legales />
      <Footer />
    </>
  );
}
