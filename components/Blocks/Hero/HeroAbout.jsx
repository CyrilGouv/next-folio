import TextUpperWide from "@/components/UI/Elements/Text/TextUpperWide"

import styles from "./HeroAbout.module.scss"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"


const HeroAbout = () => {
    return (
        <section className={ styles.hero }>
            <div className="container">
                <div className={ styles.hero__wrapper }>
                    <div className={ styles.hero__img }></div>
                    <div className={ styles.hero__title }>
                        <h1 className={ styles.hero__title__h1 }>
                            <TextReveal text="Développeur web indépendant à Biscarrosse depuis 2018, spécialiste en création de sites internet et en développement front-end." />
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroAbout