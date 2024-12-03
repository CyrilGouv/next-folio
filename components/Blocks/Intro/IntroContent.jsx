"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import Line from "@/components/UI/Elements/Line/Line"
import Button from "@/components/UI/Elements/Button/Button"
import Technos from "@/components/UI/Elements/Technos/Technos"
import Tags from "@/components/UI/Elements/Tags/Tags"
import Cta from "@/components/UI/Cta/Cta"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./IntroContent.module.scss"


const IntroContent = ({ page, content = null }) => {

    // Elements
    const introBottom = useRef(null)
    const introCta = useRef(null)

    // Animations
    useGSAP(() => {
        if(page === "homepage") {
            opacityAndTransformY(introBottom.current, introBottom.current, 15, 0.85, 0.65)
            opacityAndTransformY(introCta.current, introCta.current, 25, 0.85, 0.65)
        }
    })

    switch(page) {
        case "homepage":
            return (
                <div className={ styles.intro__content }>
                    <div>
                        <Tags text="à propos" position="relative" animations={{ delay: .25 }} />
                    </div>
                    <div className={ styles.intro__content__wrapper }>
                        <p className={ styles.intro__content__text } aria-label="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je possède l'expertise et l'expérience pour offrir des solutions interactives et uniques pour votre audience. Chaque projet est une opportunité de créer une expérience qui reflète fidèlement votre marque et engage vos clients de manière authentique.">
                            <TextReveal text="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je possède l'expertise et l'expérience pour offrir des solutions interactives et uniques pour votre audience. Chaque projet est une opportunité de créer une expérience qui reflète fidèlement votre marque et engage vos clients de manière authentique." />
                        </p>
                        <p className={ styles.intro__content__text } aria-label="En travaillant ensemble, je transformerai vos idées en réalités numériques percutantes. De la conception à la réalisation, je m'engage à fournir des solutions sur mesure qui non seulement répondent à vos besoins, mais surpassent vos attentes.">
                            <TextReveal text="En travaillant ensemble, je transformerai vos idées en réalités numériques percutantes. De la conception à la réalisation, je m'engage à fournir des solutions sur mesure qui non seulement répondent à vos besoins, mais surpassent vos attentes." />
                        </p>
                        <p className={ `${styles.intro__content__bottom} text--regular` }>
                            <Line />

                            <span 
                                ref={ introBottom } 
                                className={ styles.intro__content__bottom__text }
                            >
                                Faites confiance à mon savoir-faire pour améliorer votre présence en ligne et faire briller votre image de marque.
                            </span>
                        </p>

                        <div 
                            ref={ introCta } 
                            className={ styles.intro__content__cta }
                        >
                            <Button text="En savoir plus" path="/a-propos" />
                        </div>
                    </div>
                </div>
            )
        
        case "about":
            return (
                <>
                    <div className={ `${styles.intro__content} ${styles.intro__content__first}` }>
                        <div className={ styles.intro__content__wrapper }>
                            <h2 className={ `${styles.intro__content__text} ${styles.intro__content__title}` }  aria-label="En tant qu'indépendant passionné et développeur web depuis plusieurs années, je crée avec dévouement des sites internet à la fois accueillants et professionnels. Chaque projet est une nouvelle opportunité d'excellence où je mets en œuvre mon savoir-faire avec minutie et fierté, pour offrir à mes clients des réalisations à la hauteur de leurs attentes.">
                                <TextReveal text="En tant qu'indépendant passionné et développeur web depuis plusieurs années, je crée avec dévouement des sites internet à la fois accueillants et professionnels. Chaque projet est une nouvelle opportunité d'excellence où je mets en œuvre mon savoir-faire avec minutie et fierté, pour offrir à mes clients des réalisations à la hauteur de leurs attentes." />
                            </h2>
                            <p className={ styles.intro__content__text } aria-label="Fort d'un amour pour l'esthétisme, je conçois chacun de mes projets sur-mesure avec une attention particulière à la qualité sous toutes ses formes.">
                                <TextReveal text="Fort d'un amour pour l'esthétisme, je conçois chacun de mes projets sur-mesure avec une attention particulière à la qualité sous toutes ses formes." />
                            </p>
                        </div>
                    </div>

                    <div className={ `${styles.intro__content} ${styles.intro__content__last}` }>
                        <div>
                            <Tags text="technologies" position="relative" animations={{ delay: .25 }} />
                        </div>

                        <div className={ styles.intro__content__wrapper }>
                            <h3 className={ styles.intro__content__text } aria-label="Pour mener à bien votre projet, je m'appuie sur un ensemble de technologies modernes et performantes :">
                                <TextReveal text="Pour mener à bien votre projet, je m'appuie sur un ensemble de technologies modernes et performantes :" />
                            </h3>
                            
                            <Technos />

                            <Cta 
                                ctaText="Vous avez un projet web en tête ? Ne cherchez plus ! Contactez-moi dès aujourd'hui et laissez-moi transformer votre vision en réalité. Ensemble, nous pouvons créer un site web qui correspond parfaitement à vos besoins et dépasse vos attentes."
                                btnText="Prendre contact"
                                btnLink="/contact"
                                fullWidth={ true }
                            />
                        </div>
                    </div>
                </>
            )

        case "services":
            return (
                <div className={ styles.intro__content }>
                    <div>
                        <Tags text="à propos" position="relative" animations={{ delay: .25 }} />
                    </div>
                    <div className={ styles.intro__content__wrapper }>
                        { content.map((item, idx) => (
                            <p key={ idx } className={ styles.intro__content__text } aria-label={ item }>
                                <TextReveal text={ item } />
                            </p>
                        )) }
                        <p className={ `${styles.intro__content__bottom} text--regular` }>
                            <Line />

                            <span 
                                ref={ introBottom } 
                                className={ styles.intro__content__bottom__text }
                            >
                                Faites confiance à mon savoir-faire pour améliorer votre présence en ligne et faire briller votre image de marque.
                            </span>
                        </p>

                        <div 
                            ref={ introCta } 
                            className={ styles.intro__content__cta }
                        >
                            <Button text="En savoir plus" path="/a-propos" />
                        </div>
                    </div>
                </div>
            )
    }
}

export default IntroContent