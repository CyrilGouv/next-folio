"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import animationsImageReveal from "@/animations/image/reveal"
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
    const yearEl = useRef(null)

    // Animations
    useGSAP(() => {
        // Reveal
        animationsImageReveal(figureEl.current, revealEl.current)
        opacityAndTransformY(figcaptionEl.current, titleEl.current, 15, 0.85, 0.25)
        opacityAndTransformY(figcaptionEl.current, yearEl.current, 25, 0.85, 0.425)

        // Parallax on scroll
        animationsImageParallax(figureEl.current, imgEl.current)
    })

    return (
        <li className={ styles.card }>
            <Link
                onMouseOver={ () => setIsActive(true) }
                onMouseLeave={ () => setIsActive(false) }
                href={ `/realisations/${slug}` }
                className={ styles.card__link }
            >   
                <figure ref={ figureEl } className={ styles.card__figure }>
                    <div ref={ revealEl } className={ styles.card__figure__reveal }></div>
                    <Image 
                        ref={ imgEl }
                        src={ image }
                        alt={ `Projet crée par Cyril Gouv - ${title}` }
                        fill
                        priority={ false }
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className={ styles.card__image }
                    />
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
                <p ref={ yearEl } className={ `${styles.card__year} text--medium` }>
                    <span className={ styles.card__year__inner }>
                        <span className="text--opacity" data-text={ `(${year})` }>({ year })</span>
                    </span>
                </p>
            </figcaption>
        </li>
    )
}

export default CardProject