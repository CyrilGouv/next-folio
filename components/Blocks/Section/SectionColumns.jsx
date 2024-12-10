"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { aboutCoverLastImage } from "@/data/content"
import Tags from "@/components/UI/Elements/Tags/Tags"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import Button from "@/components/UI/Elements/Button/Button"
import TitleIntro from "@/components/UI/Elements/Title/TitleIntro"
import animationsSectionParallax from "@/animations/section/parallax"
import animationsSectionOverlay from "@/animations/section/opacity"
import animationsImageReveal from "@/animations/image/reveal"
import animationsImageParallax from "@/animations/image/parallax"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./SectionColumns.module.scss"


const SectionColumns = ({ layout = "dark" }) => {

    // References
    const sectionEl = useRef(null)
    const sectionOverlayEl = useRef(null)
    const textEl = useRef(null)
    const imgEl = useRef(null)
    const revealImgEl = useRef(null)
    const imgInnerEl = useRef(null)
    const btnEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsSectionParallax(sectionEl.current)
        animationsSectionOverlay(sectionEl.current, sectionOverlayEl.current)
        opacityAndTransformY(textEl.current, textEl.current, 5, 0.85, 0.5, 0.65)
        animationsImageReveal(imgEl.current, revealImgEl.current)
        animationsImageParallax(imgEl.current, imgInnerEl.current)
        opacityAndTransformY(btnEl.current, btnEl.current, 5, 0.85, 0.5, 1)
    })

    // Render
    return (
        <section ref={ sectionEl } className={ `${styles.section} ${layout === "light" ? styles.section__light : ""}` }>
            <div ref={ sectionOverlayEl } className={ styles.overlay }></div>
            <div className="container">
                <div className={ styles.section__wrapper }>
                    <div className={ styles.section__content }>
                        <Tags layout={ layout } text="Pourquoi ?" position="relative" />

                        <h3 className={ `${styles.section__content__title} pt--xSmall` } aria-label="Confier votre projet web à un freelance comme moi, c’est opter pour un accompagnement personnalisé, réactif, et économique. Voici pourquoi je suis le partenaire idéal pour votre réussite digitale :">
                            <TextReveal text="Confier votre projet web à un freelance comme moi, c’est opter pour un accompagnement personnalisé, réactif, et économique." />
                        </h3>

                        <p ref={ textEl } className={ styles.section__content__text }>
                            En tant qu’indépendant, je suis flexible et réactif, m’ajustant à vos contraintes et à vos délais tout en offrant une disponibilité accrue pour des échanges fluides et une collaboration de proximité. Travailler avec un freelance, c’est aussi profiter d’un interlocuteur unique et d’une relation de confiance, loin des structures complexes des agences. Polyvalent et à l’écoute, je mets en œuvre des technologies modernes comme WordPress et JAMstack pour répondre à vos défis techniques et stratégiques, tout en vous proposant des tarifs compétitifs grâce à des frais réduits.
                        </p>
                        
                        <div  ref={ btnEl } className={ styles.section__content__btn }>
                            <Button text="Voir les témoignages clients" path="/temoignages" layout={ layout } />
                        </div>
                    </div>

                    <figure ref={ imgEl } className={ styles.section__img }>
                        <div ref={ revealImgEl } className={ styles.section__img__reveal }></div>
                        <Image 
                            ref={ imgInnerEl }
                            className={ styles.section__img__inner } 
                            src={ aboutCoverLastImage.img }
                            alt={ aboutCoverLastImage.alt }
                            fill
                            priority
                            sizes="42vw, (min-width: 640px) 32.75vw"
                        />
                    </figure>
                </div>

                <TitleIntro text="Mon objectif est de vous fournir un projet web efficace, économique et parfaitement aligné avec vos ambitions digitales." />
            </div>
        </section>
    )
}

export default SectionColumns