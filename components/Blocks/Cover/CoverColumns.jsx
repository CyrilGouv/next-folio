"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import Tags from "@/components/UI/Elements/Tags/Tags"
import animationsCoverReveal from "@/animations/cover/reveal"
import animationsImageParallax from "@/animations/image/parallax"
import { aboutCoverFirstImage, aboutCoverLastImage } from "@/data/content"

import styles from "./CoverColumns.module.scss"


const CoverColumns = () => {

    const revealFirstEl = useRef(null)
    const revealSecondEl = useRef(null)
    const firstImageEl = useRef(null)
    const secondImageEl = useRef(null)

    useGSAP(() => {
        animationsCoverReveal([revealFirstEl.current, revealSecondEl.current])
        animationsImageParallax(firstImageEl.current, firstImageEl.current)
        animationsImageParallax(secondImageEl.current, secondImageEl.current)
    })

    return (
        <section className={ styles.cover }>
            <div className="container">
                <div className={ styles.cover__wrapper }>
                    <figure className={ styles.cover__img }>
                        <div ref={ revealFirstEl } className={ styles.cover__reveal }></div>
                        <Tags text="Ça, c'est moi !" />
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
                            src={ aboutCoverLastImage.img }
                            alt={ aboutCoverLastImage.alt }
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