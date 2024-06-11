"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"
import animationsImageReveal from "@/animations/image/reveal"
import animationsImageParallax from "@/animations/image/parallax"

import styles from "./TextHero.module.scss"


const TextHero = ({ text, layout = "default", image = false, video = false }) => {

    // Elements
    const sectionEl = useRef(null)
    const textEl = useRef(null)
    const locationEl = useRef(null)
    const imageEl = useRef(null)
    const overlayEl = useRef(null)

    // Animations
    useGSAP(() => {
        if(image || video) {
            animationsImageReveal(sectionEl.current, overlayEl.current, true)
            animationsImageParallax(sectionEl.current, imageEl.current)
        }

        if(layout === "homepage") {
            opacityAndTransformY(sectionEl.current, locationEl.current, 50, 1, 0.125, .35)
        }

        opacityAndTransformY(sectionEl.current, textEl.current, 25, 1, 0.25)
    })

    // Render Default layout
    if(layout === "default") {
        return (
            <div ref={ sectionEl } className={ `${styles.text} ${image || video ? styles.text__alt : ""}` }>
                { image && (
                    <div className={ styles.text__image }>
                        <div ref={ overlayEl } className={ styles.text__image__overlay }></div>
                        <Image
                            ref={ imageEl }
                            src="/images/gifs/gif-testimonials.webp"
                            alt="Merci à mes clients de la confiance qu'ils ont pu apporté à mes services de développement web."
                            width={ 150 }
                            height={ 100 }
                            priority={ false }
                            className={ styles.text__image__inner }
                        />
                    </div>
                ) }
                { video && (
                    <figure className={ styles.text__image }>
                        <div ref={ overlayEl } className={ styles.text__image__overlay }></div>
                        <video 
                            ref={ imageEl }
                            className={ styles.text__image__inner } 
                            src="/videos/video-biscarrosse.mp4"
                            autoPlay
                            loop
                            muted
                        >
                        </video>
                    </figure>
                ) }
                <p 
                    ref={ textEl } 
                    className={ `${styles.text__inner} text--regular` }
                >
                    { text }
                </p>
            </div>
        )
    }

    // Render Homepage layout
    if(layout === "homepage") {
        return (
            <div ref={ sectionEl } className={ styles.text }>
                <p
                    ref={ locationEl }
                    className={ `${styles.text__inner} ${styles.text__location} text--regular text--opacity` }
                >
                    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2 22 2C10.9543 2 2 10.9543 2 22C2 33.0457 10.9543 42 22 42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M14 22C14 29.8041 16.666 36.7748 20.856 41.4768C21.0016 41.6417 21.1784 41.7734 21.3753 41.8634C21.5722 41.9535 21.7849 42 22 42C22.2151 42 22.4278 41.9535 22.6247 41.8634C22.8216 41.7734 22.9984 41.6417 23.144 41.4768C27.334 36.7748 30 29.8041 30 22C30 14.1959 27.334 7.22519 23.144 2.52317C22.9984 2.35825 22.8216 2.22661 22.6247 2.13655C22.4278 2.0465 22.2151 2 22 2C21.7849 2 21.5722 2.0465 21.3753 2.13655C21.1784 2.22661 21.0016 2.35825 20.856 2.52317C16.666 7.22519 14 14.1959 14 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3.5 15H40.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3.5 29H40.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className={ styles.text__location__inner }>Biscarrosse, FR</span>
                </p>
                <p 
                    ref={ textEl } 
                    className={ `${styles.text__inner} text--regular` }
                >
                    { text }
                </p>
            </div>
        )
    }
}

export default TextHero