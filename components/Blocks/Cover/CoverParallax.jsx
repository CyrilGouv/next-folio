"use client"

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import animationsCoverReveal from "@/animations/cover/reveal"
import animationsCoverParallax from "@/animations/cover/parallax"
import animationsCoverScale from "@/animations/cover/scale"

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
        animationsCoverScale(windowHeight, section.current, wrapperEl.current)
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
                        <img className={ styles.cover__image } src="/images/projects/yamitsu/yamitsu-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/cheval-dor/desktop/cheval-dor.com-03.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lesgitesdelalumineuse/desktop/lesgitesdelalumineuse.fr-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/ajprestigescars/desktop/ajprestigescars.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/ajprestigescars/desktop/ajprestigescars.com-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/yamitsu/yamitsu-07.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/cheval-dor/desktop/cheval-dor.com-03.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lesgitesdelalumineuse/desktop/lesgitesdelalumineuse.fr-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/ajprestigescars/desktop/ajprestigescars.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/yamitsu/yamitsu-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
                <div ref={ middleLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/cheval-dor/desktop/cheval-dor.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/myfitmetz/desktop/myfitmetz-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/idealpack/desktop/idealpack-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/yamitsu/yamitsu-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lefeenomenedurecrutement/desktop/lefeenomenedurecrutement.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/cheval-dor/desktop/cheval-dor.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/myfitmetz/desktop/myfitmetz-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/idealpack/desktop/idealpack-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/yamitsu/yamitsu-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lefeenomenedurecrutement/desktop/lefeenomenedurecrutement.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
                <div ref={ lastLine } className={ styles.cover__line }>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/cabinetslconsulting/desktop/cabinetslconsulting.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lesgitesdelalumineuse/desktop/lesgitesdelalumineuse.fr-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/idealpack/desktop/idealpack-08.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/ajprestigescars/desktop/ajprestigescars.com-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/idealpack/desktop/idealpack-08.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lesgitesdelalumineuse/desktop/lesgitesdelalumineuse.fr-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/ajprestigescars/desktop/ajprestigescars.com-03.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/cabinetslconsulting/desktop/cabinetslconsulting.com-01.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lefeenomenedurecrutement/desktop/lefeenomenedurecrutement.com-05.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                    <figure className={ styles.cover__figure }>
                        <img className={ styles.cover__image } src="/images/projects/lesgitesdelalumineuse/desktop/lesgitesdelalumineuse.fr-02.webp" alt="Présentation d'un site réalisé pour un client" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default CoverParallax