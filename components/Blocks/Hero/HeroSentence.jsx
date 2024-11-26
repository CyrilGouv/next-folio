import TitlePageDefault from "@/components/UI/Elements/Title/TitlePageDefault"
import TextHero from "@/components/UI/Elements/Text/TextHero"

import { homepageHeroText } from "@/data/content"

import styles from "./HeroSentence.module.scss"


const HeroSentence = ({ page, title, localisation }) => {

    const textHero = page === "services" ? homepageHeroText : ""
    
    return (
        <section className={ styles.hero }>
            <div className="container">
                <div className={ styles.hero__wrapper }>
                    <div className={ styles.hero__title }>
                        <TextHero 
                            text={ textHero } 
                            layout="services" 
                            localisation={ localisation } 
                        />
                        <TitlePageDefault 
                            page={ page } 
                            title={ title }
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HeroSentence