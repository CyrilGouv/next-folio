import Hero from "@/components/Blocks/Hero/Hero"
import Footer from "@/components/Layout/Footer/Footer"


export default function Portfolio() {

    const page = "homepage"
  
    return (
      <>
        <Hero page={ page } />
        <Footer />
      </>
    );
  }