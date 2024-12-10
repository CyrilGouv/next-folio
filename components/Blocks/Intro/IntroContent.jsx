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
    const introText = useRef(null)
    const introCta = useRef(null)

    // Animations
    useGSAP(() => {
        if(page === "homepage") {
            opacityAndTransformY(introText.current.children[0], introText.current.children[0], 5, 0.85, 0.5, 0.5)
            opacityAndTransformY(introText.current.children[1], introText.current.children[1], 5, 0.85, 0.5, 0.5)
            opacityAndTransformY(introCta.current, introCta.current, 5, 0.85, 0.5)
        }

        if(page === "about") {
            opacityAndTransformY(introText.current.children[0], introText.current.children[0], 5, 0.85, 0.5, 0.5)
            opacityAndTransformY(introText.current.children[1], introText.current.children[1], 5, 0.85, 0.5, 0.5)
        }

        if(page === "services") {
            opacityAndTransformY(introText.current.children[1], introText.current.children[1], 5, 0.85, 0.5, 0.5)
            opacityAndTransformY(introText.current.children[2], introText.current.children[2], 5, 0.85, 0.5, 0.5)
            opacityAndTransformY(introCta.current, introCta.current, 5, 0.85, 0.5)
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
                        <h3 className={ styles.intro__content__title } aria-label="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je suis spécialisé dans la création de sites internet à Biscarrosse. Mon expertise et mon expérience me permettent d’offrir des solutions interactives et uniques adaptées à votre audience locale et au-delà. Chaque projet est une opportunité de concevoir une expérience qui reflète fidèlement votre marque tout en engageant vos clients de manière authentique.">
                            <TextReveal text="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je suis spécialisé dans la création de sites internet à Biscarrosse." />
                        </h3>

                        <div ref={ introText }>
                            <p className={ styles.intro__content__text }>
                                Mon expertise et mon expérience me permettent d’offrir des solutions interactives et uniques adaptées à votre audience locale et au-delà. Chaque projet est une opportunité de concevoir une expérience qui reflète fidèlement votre marque tout en engageant vos clients de manière authentique.
                            </p>
                            <p className={ styles.intro__content__text }>
                                En travaillant ensemble, je transformerai vos idées en réalités numériques percutantes. De la conception à la réalisation, je m’engage à fournir des solutions sur mesure qui non seulement répondent à vos besoins, mais surpassent vos attentes. Si vous cherchez un professionnel pour la création de votre site internet à Biscarrosse, contactez-moi pour donner vie à votre projet.
                            </p>
                        </div>

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
                    <div className={ `${styles.intro__content} ${styles.intro__content__first}  ${styles.intro__content__about}` }>
                        <div>
                            <Tags text="missions" position="relative" animations={{ delay: .25 }} />
                        </div>

                        <div className={ styles.intro__content__wrapper }>
                            <h3 className={ styles.intro__content__title } aria-label="Chaque projet est une opportunité unique où je mets en œuvre mon savoir-faire et ma créativité pour proposer des solutions modernes et efficaces.">
                                <TextReveal text="Chaque projet est une opportunité unique où je mets en œuvre mon savoir-faire et ma créativité pour proposer des solutions modernes et efficaces." />
                            </h3>

                            <div ref={ introText }>
                                <p className={ styles.intro__content__text }>
                                    Que vous soyez une entreprise locale à Biscarrosse ou un client à distance, mon objectif est de traduire vos idées en réalisations numériques concrètes.
                                </p>
                                <p className={ styles.intro__content__text }>
                                    Installé à Biscarrosse, je combine expertise technique et sensibilité esthétique pour offrir des créations sur-mesure. Du design visuel à la performance technique, chaque étape est réalisée avec minutie pour garantir une expérience utilisateur optimale. Ma démarche allie professionnalisme, passion et innovation pour répondre aux attentes les plus exigeantes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={ `${styles.intro__content} ${styles.intro__content__last}` }>
                        <div>
                            <Tags text="technologies" position="relative" animations={{ delay: .25 }} />
                        </div>

                        <div className={ styles.intro__content__wrapper }>
                            <h3 className={ styles.intro__content__title } aria-label="Pour mener à bien votre projet de site internet ou de développement web, je m'appuie sur un ensemble de technologies modernes et performantes :">
                                <TextReveal text="Pour mener à bien votre projet de site internet ou de développement web, je m'appuie sur un ensemble de technologies modernes et performantes :" />
                            </h3>
                            
                            <Technos />

                            <Cta 
                                ctaText="Vous avez un projet web en tête ? Ne cherchez plus ! Contactez-moi dès aujourd'hui et laissez-moi transformer votre vision en réalité. Ensemble, nous pouvons créer un site web qui correspond parfaitement à vos besoins et dépasse vos attentes."
                                btnText="Prendre contact"
                                btnLink="/contact"
                                fullWidth={ true }
                                layout="dark"
                            />
                        </div>
                    </div>
                </>
            )
            return (
                <div className={ styles.intro__content }>
                    <div>
                        <Tags text="à propos" position="relative" animations={{ delay: .25 }} />
                    </div>
                    <div className={ styles.intro__content__wrapper }>
                        <h3 className={ styles.intro__content__title } aria-label="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je suis spécialisé dans la création de sites internet à Biscarrosse. Mon expertise et mon expérience me permettent d’offrir des solutions interactives et uniques adaptées à votre audience locale et au-delà. Chaque projet est une opportunité de concevoir une expérience qui reflète fidèlement votre marque tout en engageant vos clients de manière authentique.">
                            <TextReveal text="Que vous ayez besoin d'aide en stratégie, web design, développement ou création d'applications, je suis spécialisé dans la création de sites internet à Biscarrosse." />
                        </h3>

                        <div ref={ introText }>
                            <p className={ styles.intro__content__text }>
                                Mon expertise et mon expérience me permettent d’offrir des solutions interactives et uniques adaptées à votre audience locale et au-delà. Chaque projet est une opportunité de concevoir une expérience qui reflète fidèlement votre marque tout en engageant vos clients de manière authentique.
                            </p>
                            <p className={ styles.intro__content__text }>
                                En travaillant ensemble, je transformerai vos idées en réalités numériques percutantes. De la conception à la réalisation, je m’engage à fournir des solutions sur mesure qui non seulement répondent à vos besoins, mais surpassent vos attentes. Si vous cherchez un professionnel pour la création de votre site internet à Biscarrosse, contactez-moi pour donner vie à votre projet.
                            </p>
                        </div>

                        <div 
                            ref={ introCta } 
                            className={ styles.intro__content__cta }
                        >
                            <Button text="En savoir plus" path="/developpeur-web-biscarrosse" />
                        </div>
                    </div>
                </div>
            )

        case "services":
            return (
                <div className={ styles.intro__content }>
                    <div>
                        <Tags text="à propos" position="relative" animations={{ delay: .25 }} />
                    </div>
                    <div ref={ introText } className={ styles.intro__content__wrapper }>
                        { content.map((item, idx) => {
                            if (idx === 0) {
                                return (
                                    <h3 key={ idx } className={ styles.intro__content__title } aria-label={ item }>
                                        <TextReveal text={ item } />
                                    </h3>
                                )
                            } else {
                                return (
                                    <p key={ idx } className={ styles.intro__content__text }>
                                        { item }
                                    </p>

                                )
                            }
                        }) }

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