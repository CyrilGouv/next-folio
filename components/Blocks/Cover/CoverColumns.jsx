"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import animationsCoverReveal from "@/animations/cover/reveal"
import animationsImageParallax from "@/animations/image/parallax"
import { aboutCoverFirstImage, aboutCoverLastImage } from "@/data/content"

import styles from "./CoverColumns.module.scss"


const CoverColumns = () => {

    const revealFirstEl = useRef(null)
    const revealSecondEl = useRef(null)
    const revealThirdEl = useRef(null)
    const revealLastEl = useRef(null)
    const firstRowEl = useRef(null)
    const secondRowEl = useRef(null)
    const firstImageEl = useRef(null)
    const secondImageEl = useRef(null)
    const thirdImageEl = useRef(null)
    const lastImageEl = useRef(null)

    useGSAP(() => {
        animationsCoverReveal([revealFirstEl.current, revealSecondEl.current, revealThirdEl.current, revealLastEl.current])
        animationsImageParallax(firstRowEl.current, firstImageEl.current)
        animationsImageParallax(firstRowEl.current, secondImageEl.current)
        animationsImageParallax(firstRowEl.current, thirdImageEl.current)
        animationsImageParallax(secondRowEl.current, lastImageEl.current)
    })

    return (
        <section className={ styles.cover }>
            <div className="container">
                <div ref={ firstRowEl } className={ styles.cover__wrapper }>
                    <figure className={ styles.cover__img }>
                        <div ref={ revealFirstEl } className={ styles.cover__reveal }></div>
                        <Image 
                            ref={ firstImageEl }
                            className={ styles.cover__img__inner } 
                            src={ aboutCoverFirstImage.img }
                            alt={ aboutCoverFirstImage.alt }
                            fill
                            priority={ false }
                            sizes="62vw"
                        />
                    </figure>
                    <figure className={ styles.cover__img }>
                        <div ref={ revealSecondEl } className={ styles.cover__reveal }></div>
                        <Image 
                            ref={ secondImageEl }
                            className={ styles.cover__img__inner } 
                            src={ aboutCoverFirstImage.img }
                            alt={ aboutCoverFirstImage.alt }
                            fill
                            priority={ false }
                            sizes="62vw"
                        />
                    </figure>
                    <figure className={ styles.cover__img }>
                        <div ref={ revealThirdEl } className={ styles.cover__reveal }></div>
                        <Image 
                            ref={ thirdImageEl }
                            className={ styles.cover__img__inner } 
                            src={ aboutCoverLastImage.img }
                            alt={ aboutCoverLastImage.alt }
                            fill
                            priority={ false }
                            sizes="62vw"
                        />
                    </figure>
                </div>

                <div ref={ secondRowEl } className={ styles.cover__wrapper }>
                    <figure className={ styles.cover__img }>
                        <div ref={ revealLastEl } className={ styles.cover__reveal }></div>
                        <Image 
                            ref={ lastImageEl }
                            className={ styles.cover__img__inner } 
                            src={ aboutCoverFirstImage.img }
                            alt={ aboutCoverFirstImage.alt }
                            fill
                            priority={ false }
                            sizes="62vw"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default CoverColumns