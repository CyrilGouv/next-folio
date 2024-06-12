"use client"

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import animationsCoverReveal from "@/animations/cover/reveal"
import animationsCoverParallax from "@/animations/cover/parallax"

import styles from "./CoverParallax.module.scss"


const CoverParallax = () => {

    // Elements
    const section = useRef(null)
    const revealEl = useRef(null)
    const wrapperEl = useRef(null)
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
            <div ref={ wrapperEl } className={ styles.cover__wrapper }>
                <div ref={ firstLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-07.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-06.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-03.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-04.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line1/cover-line1-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
                <div ref={ middleLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line2/cover-line2-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line2/cover-line2-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line2/cover-line2-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line2/cover-line2-03.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line2/cover-line2-04.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line2/cover-line2-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
                <div ref={ lastLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-06.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-03.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-04.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/cover/line3/cover-line3-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default CoverParallax