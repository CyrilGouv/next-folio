"use client"

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"

import styles from "./CoverParallax.module.scss"
import animationsCoverReveal from "@/animations/cover/reveal"
import animationsCoverParallax from "@/animations/cover/parallax"


const CoverParallax = () => {

    // Elements
    const section = useRef(null)
    const revealEl = useRef(null)
    const firstLine = useRef(null)
    const middleLine = useRef(null)
    const lastLine = useRef(null)

    // States
    const [windowHeight, setWindowHeight] = useState(window?.innerHeight || 0)

    // Hooks
    useGSAP(() => {
        animationsCoverReveal(revealEl.current)
        animationsCoverParallax(windowHeight, section.current, firstLine.current, middleLine.current, lastLine.current)
    })

    useEffect(() => {
        window.addEventListener("resize", watchWindowHeight)

        return () => {
            window.removeEventListener("resize", watchWindowHeight)
        }
    }, [])

    // Callbacks
    const watchWindowHeight = () => {
        setWindowHeight(window.innerHeight)
    }

    return (
        <section ref={ section } className={ styles.cover }>
            <div ref={ revealEl } className={ styles.cover__reveal }></div>
            <div className={ styles.cover__wrapper }>
                <div ref={ firstLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/6.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/1.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/2.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/3.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
                <div ref={ middleLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/4.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/5.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/6.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/2.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/1.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
                <div ref={ lastLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/7.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/8.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/9.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/gallery/7.jpg" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default CoverParallax