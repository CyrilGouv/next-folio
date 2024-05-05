import Hero from "@/components/Blocks/Hero/Hero"
import Legales from "@/components/Blocks/Legales/Legales";
import Footer from "@/components/Layout/Footer/Footer"


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
