"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import animationsImageReveal from "@/animations/image/reveal"
import Tags from "../Elements/Tags/Tags"
import animationsImageParallax from "@/animations/image/parallax"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./CardProject.module.scss"


const CardProject = ({ title, slug, image, year, layout }) => {

    // States
    const [isActive, setIsActive] = useState(false)

    // Elements
    const figureEl = useRef(null)
    const revealEl = useRef(null)
    const figcaptionEl = useRef(null)
    const imgEl = useRef(null)
    const titleEl = useRef(null)

    // Animations
    useGSAP(() => {
        // Reveal
        animationsImageReveal(figureEl.current, revealEl.current)
        opacityAndTransformY(figcaptionEl.current, titleEl.current, 15, 0.85, 0.25)

        // Parallax on scroll
        animationsImageParallax(figureEl.current, imgEl.current)
    })

    return (
        <li className={ styles.card }>
            <Link
                onMouseOver={ () => setIsActive(true) }
                onMouseLeave={ () => setIsActive(false) }
                href={ `/realisations/${slug}` }
                className={ `${styles.card__link} ${isActive ? styles.card__link__active : ""}` }
            >   
                <figure ref={ figureEl } className={ styles.card__figure }>
                    <div ref={ revealEl } className={ styles.card__figure__reveal }></div>
                    
                    <Tags text={ year } isActive={ isActive } />
                    <Image 
                        ref={ imgEl }
                        src={ image }
                        alt={ `Projet crée par Cyril Gouv - ${title}` }
                        fill
                        priority={ false }
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className={ styles.card__image }
                    />

                    <span className={ styles.card__circle }>
                        <span className={ styles.card__circle__inner }></span>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="#121212" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z" fill="inherit"></path>
                        </svg>
                    </span>
                </figure>
            </Link>

            <figcaption 
                ref={ figcaptionEl }
                className={ `${styles.card__figcaption} ${isActive ? styles.card__figcaption__active : ""}` }
            >
                { layout === "featured" && (
                    <h4 ref={ titleEl } className={ `${styles.card__title} text--large` }>
                        <span className={ styles.card__title__inner }>
                            <span data-text={ title }>{ title }</span>
                        </span>
                    </h4>
                ) }
                { layout === "default" && (
                    <h2 ref={ titleEl } className={ `${styles.card__title} text--large` }>
                        <span className={ styles.card__title__inner }>
                            <span data-text={ title }>{ title }</span>
                        </span>
                    </h2>
                ) }
            </figcaption>
        </li>
    )
}

export default CardProject