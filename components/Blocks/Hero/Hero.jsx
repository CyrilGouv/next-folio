import TitlePage from "@/components/UI/Elements/Title/TitlePage"
import TextHero from "@/components/UI/Elements/Text/TextHero"
import { homepageHeroText, projectsHeroText, aboutHeroText, testimonialsHeroText, contactHeroText, contactHeroConfirmationText, contactHeroErrorText } from "@/data/content"

import styles from "./Hero.module.scss"


const Hero = ({ page, withText = false, className = null }) => {

  const textHero = page === "homepage" ? homepageHeroText 
                    : page === "works" ? projectsHeroText 
                    : page === "about" ? aboutHeroText 
                    : page === "testimonials" ? testimonialsHeroText 
                    : page === "contact" ? contactHeroText 
                    : page === "confirmation" ? contactHeroConfirmationText 
                    : page === "error" ? contactHeroErrorText 
                    : ""

  return (
    <section className={ `${styles.hero} ${className ? styles[className] : ""}` }>
        <div className="container">
            <div className={ styles.hero__wrapper }>
                <div className={ styles.hero__title }>
                    { withText && page !== "homepage" && (
                      <TextHero text={ textHero } />
                    ) }
                    { withText && page === "homepage" && (
                      <TextHero text={ textHero } layout={ page } />
                    ) }
                    <TitlePage page={ page } />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero