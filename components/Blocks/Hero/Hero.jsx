import TitlePage from "@/components/UI/Elements/Title/TitlePage"
import TextHero from "@/components/UI/Elements/Text/TextHero"
import { testimonialsHeroText } from "@/data/content"

import styles from "./Hero.module.scss"


const Hero = ({ page, withText = false }) => {

  const textHero = page === "testimonials" ? testimonialsHeroText : ""

  return (
    <section className={ styles.hero }>
        <div className="container">
            <div className={ styles.hero__wrapper }>
                <div className={ styles.hero__title }>
                    { withText && (
                      <TextHero text={ textHero } />
                    ) }
                    <TitlePage page={ page } />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero