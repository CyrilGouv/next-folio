"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import animationsCoverReveal from "@/animations/cover/reveal"
import animationsImageParallax from "@/animations/image/parallax"
import animationsCoverMove from "@/animations/cover/move"
import { aboutCoverFirstImage, aboutCoverLastImage } from "@/data/content"

import styles from "./CoverColumns.module.scss"


const CoverColumns = () => {

    const revealFirstEl = useRef(null)
    const revealLastEl = useRef(null)
    const sectionEl = useRef(null)
    const firstImageEl = useRef(null)
    const lastFigureEl = useRef(null)

    useGSAP(() => {
        animationsCoverReveal([revealFirstEl.current, revealLastEl.current])
        animationsImageParallax(sectionEl.current, firstImageEl.current)
        animationsCoverMove(sectionEl.current, lastFigureEl.current)
    })

    return (
        <section ref={ sectionEl } className={ styles.cover }>
            <div className={ styles.cover__left }>
                <figure className={ styles.cover__left__figure }>
                    <div ref={ revealFirstEl } className={ styles.cover__reveal }></div>
                    <Image 
                        ref={ firstImageEl }
                        className={ styles.cover__left__img } 
                        src={ aboutCoverFirstImage.img }
                        alt={ aboutCoverFirstImage.alt }
                        fill
                        priority={ false }
                        sizes="62vw"
                    />
                </figure>
            </div>
            <div className={ styles.cover__right }>
                <figure ref={ lastFigureEl } className={ styles.cover__right__figure }>
                    <div ref={ revealLastEl } className={ styles.cover__reveal }></div>
                    <Image 
                        className={ styles.cover__right__img } 
                        src={ aboutCoverLastImage.img }
                        alt={ aboutCoverLastImage.alt }
                        fill
                        priority={ false }
                        sizes="16vw"
                    />
                </figure>
            </div>
        </section>
    )
}

export default CoverColumns