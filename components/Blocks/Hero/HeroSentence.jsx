import TitlePageDefault from "@/components/UI/Elements/Title/TitlePageDefault"
import TextHero from "@/components/UI/Elements/Text/TextHero"

import { homepageHeroText } from "@/data/content"

import styles from "./HeroSentence.module.scss"


const HeroSentence = ({ page, title, localisation, text }) => {

    return (
        <section className={ styles.hero }>
            <div className="container">
                <div className={ styles.hero__wrapper }>
                    <div className={ styles.hero__title }>
                        <TextHero 
                            text={ text } 
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