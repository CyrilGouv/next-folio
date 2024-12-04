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
                        <p className={ styles.intro__content__text } aria-label="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je suis spécialisé dans la création de sites internet à Biscarrosse. Mon expertise et mon expérience me permettent d’offrir des solutions interactives et uniques adaptées à votre audience locale et au-delà. Chaque projet est une opportunité de concevoir une expérience qui reflète fidèlement votre marque tout en engageant vos clients de manière authentique.">
                            <TextReveal text="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je suis spécialisé dans la création de sites internet à Biscarrosse. Mon expertise et mon expérience me permettent d’offrir des solutions interactives et uniques adaptées à votre audience locale et au-delà. Chaque projet est une opportunité de concevoir une expérience qui reflète fidèlement votre marque tout en engageant vos clients de manière authentique." />
                        </p>
                        <p className={ styles.intro__content__text } aria-label="En travaillant ensemble, je transformerai vos idées en réalités numériques percutantes. De la conception à la réalisation, je m’engage à fournir des solutions sur mesure qui non seulement répondent à vos besoins, mais surpassent vos attentes. Si vous cherchez un professionnel pour la création de votre site internet à Biscarrosse, contactez-moi pour donner vie à votre projet.">
                            <TextReveal text="En travaillant ensemble, je transformerai vos idées en réalités numériques percutantes. De la conception à la réalisation, je m’engage à fournir des solutions sur mesure qui non seulement répondent à vos besoins, mais surpassent vos attentes. Si vous cherchez un professionnel pour la création de votre site internet à Biscarrosse, contactez-moi pour donner vie à votre projet." />
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
                            <Button text="En savoir plus" path="/developpeur-web-biscarrosse" />
                        </div>
                    </div>
                </div>
            )
        
        case "about":
            return (
                <>
                    <div className={ `${styles.intro__content} ${styles.intro__content__first}` }>
                        <div className={ styles.intro__content__wrapper }>
                            <h2 className={ `${styles.intro__content__text} ${styles.intro__content__title}` }  aria-label="Avec passion et expertise, je conçois des sites internet professionnels et sur-mesure pour répondre à vos besoins.">
                                <TextReveal text="Avec passion et expertise, je conçois des sites internet professionnels et sur-mesure pour répondre à vos besoins." />
                            </h2>
                            <p className={ styles.intro__content__text } aria-label="En tant qu'indépendant passionné et développeur web depuis plusieurs années, je m'engage à concevoir des sites internet accueillants, performants et adaptés à vos besoins. Chaque projet est une opportunité unique où je mets en œuvre mon savoir-faire et ma créativité pour proposer des solutions modernes et efficaces. Que vous soyez une entreprise locale à Biscarrosse ou un client à distance, mon objectif est de traduire vos idées en réalisations numériques concrètes.">
                                <TextReveal text="En tant qu'indépendant passionné et développeur web depuis plusieurs années, je m'engage à concevoir des sites internet accueillants, performants et adaptés à vos besoins. Chaque projet est une opportunité unique où je mets en œuvre mon savoir-faire et ma créativité pour proposer des solutions modernes et efficaces. Que vous soyez une entreprise locale à Biscarrosse ou un client à distance, mon objectif est de traduire vos idées en réalisations numériques concrètes." />
                            </p>
                            <p className={ styles.intro__content__text } aria-label="Installé à Biscarrosse, je combine expertise technique et sensibilité esthétique pour offrir des créations sur-mesure. Du design visuel à la performance technique, chaque étape est réalisée avec minutie pour garantir une expérience utilisateur optimale. Ma démarche allie professionnalisme, passion et innovation pour répondre aux attentes les plus exigeantes.">
                                <TextReveal text="Installé à Biscarrosse, je combine expertise technique et sensibilité esthétique pour offrir des créations sur-mesure. Du design visuel à la performance technique, chaque étape est réalisée avec minutie pour garantir une expérience utilisateur optimale. Ma démarche allie professionnalisme, passion et innovation pour répondre aux attentes les plus exigeantes." />
                            </p>
                        </div>
                    </div>

                    <div className={ `${styles.intro__content} ${styles.intro__content__last}` }>
                        <div>
                            <Tags text="technologies" position="relative" animations={{ delay: .25 }} />
                        </div>

                        <div className={ styles.intro__content__wrapper }>
                            <h3 className={ styles.intro__content__text } aria-label="Pour mener à bien votre projet de site internet ou de développement web, je m'appuie sur un ensemble de technologies modernes et performantes :">
                                <TextReveal text="Pour mener à bien votre projet de site internet ou de développement web, je m'appuie sur un ensemble de technologies modernes et performantes :" />
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
                            <Button text="En savoir plus" path="/developpeur-web-biscarrosse" />
                        </div>
                    </div>
                </div>
            )
    }
}

export default IntroContent