import TitlePage from "@/components/UI/Elements/Title/TitlePage"
import TextHero from "@/components/UI/Elements/Text/TextHero"
import { testimonialsHeroText, contactHeroText } from "@/data/content"

import styles from "./Hero.module.scss"


const Hero = ({ page, withText = false }) => {

  const textHero = page === "testimonials" ? testimonialsHeroText : page === "contact" ? contactHeroText : ""

  return (
    <section className={ styles.hero }>
        <div className="container">
            <div className={ styles.hero__wrapper }>
                <div className={ styles.hero__title }>
                    { withText && page !== "contact" && (
                      <TextHero text={ textHero } />
                    ) }
                    { withText && page === "contact" && (
                      <TextHero text={ textHero } avatar={ true } />
                    ) }
                    <TitlePage page={ page } />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero