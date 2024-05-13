"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import animationsTitlePage from "@/animations/title/page"
import animationsTitleArrow from "@/animations/title/arrow"
import animationsImageParallax from "@/animations/image/parallax"
import animationsImageReveal from "@/animations/image/reveal"

import styles from "./TitlePage.module.scss"


const TitlePage = ({ page }) => {

    // Elements
    const firstLine = useRef(null)
    const lastLine = useRef(null)
    const imageEl = useRef(null)
    const overlayEl = useRef(null)

    // Animations
    useGSAP(() => {
        
        animationsTitlePage(firstLine.current, lastLine.current)
        

        if(page === "testimonials" || page === "contact" || page === "mentions") {
            animationsTitleArrow(lastLine.current)
        }

        if(page === "contact" || page === "testimonials") {
            animationsImageReveal(firstLine.current, overlayEl.current, true)
            animationsImageParallax(firstLine.current, imageEl.current)
        }
    })

    switch(page) {
        case "homepage":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Créativité</span>
                    </span>
                    <span ref={ lastLine } className={ styles.title__line }>
                        <span className={ `${styles.title__line__word} text--opacity` }>&</span>
                        <span className={ styles.title__line__word }>Innovation</span>
                    </span>
                </h1>
            )
        
        case "works":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Portfolio</span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt} ${styles.title__line__push}` }>
                    <span className={ `${styles.title__line__word} ${styles.title__line__sub} text--opacity` }><sub>©</sub></span>
                        <span className={ styles.title__line__word }>18-24</span>
                    </span>
                </h1>
            )

        case "about":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Design</span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt} ${styles.title__line__push}` }>
                        <span className={ `${styles.title__line__word} text--opacity` }>&</span>
                        <span className={ styles.title__line__word }>Code</span>
                    </span>
                </h1>
            )

        case "testimonials":
            return (
                <h1 className={ styles.title }>
                    <span className={ `${styles.title__line} ${styles.title__line__split}` }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Avis</span>
                        <span className={ styles.title__line__right }>
                            <figure className={ styles.title__line__image }>
                                <div ref={ overlayEl } className={ styles.title__line__image__overlay }></div>
                                <Image
                                    ref={ imageEl }
                                    src="/images/gifs/gif-testimonial.webp"
                                    alt="Merci à mes clients de la confiance qu'ils ont pu apporté à mes services de développement web."
                                    fill={ true }
                                    sizes="300"
                                    priority={ false }
                                    className={ styles.title__line__image__inner }
                                />
                            </figure>
                        </span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt} ${styles.title__line__push}` }>
                        <svg className={ styles.title__line__arrow } version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g transform="translate(8 6) rotate(45) translate(-5 -5)" stroke="#797979" strokeWidth="1.5">
                            <polyline points="2.306 0 9.9927 0 9.9927 7.6867"/>
                            <path d="m9.9927 0-9.9927 9.9927"/>
                            </g>
                            </g>
                        </svg>
                        <span className={ styles.title__line__word }>Clients</span>
                    </span>
                </h1>
            )

        case "contact":
            return (
                <h1 className={ styles.title }>
                    <span className={ `${styles.title__line} ${styles.title__line__split}` }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Let's</span>
                        <span className={ styles.title__line__right }>
                            <figure className={ styles.title__line__image }>
                                <div ref={ overlayEl } className={ styles.title__line__image__overlay }></div>
                                <video 
                                    ref={ imageEl }
                                    className={ styles.title__line__image__inner } 
                                    src="/videos/video-biscarrosse.mp4"
                                    autoPlay
                                    loop
                                    muted
                                >
                                </video>
                            </figure>
                        </span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt} ${styles.title__line__push}` }>
                        <svg className={ styles.title__line__arrow } version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g transform="translate(8 6) rotate(45) translate(-5 -5)" stroke="#797979" strokeWidth="1.5">
                            <polyline points="2.306 0 9.9927 0 9.9927 7.6867"/>
                            <path d="m9.9927 0-9.9927 9.9927"/>
                            </g>
                            </g>
                        </svg>
                        <span className={ styles.title__line__word }>Talk !</span>
                    </span>
                </h1>
            )

        case "mentions":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Mentions</span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt}` }>
                        <svg className={ styles.title__line__arrow } version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g transform="translate(8 6) rotate(45) translate(-5 -5)" stroke="#797979" strokeWidth="1.5">
                            <polyline points="2.306 0 9.9927 0 9.9927 7.6867"/>
                            <path d="m9.9927 0-9.9927 9.9927"/>
                            </g>
                            </g>
                        </svg>
                        <span className={ styles.title__line__word }>Légales</span>
                    </span>
                </h1>
            )
            
    }
  
}

export default TitlePage