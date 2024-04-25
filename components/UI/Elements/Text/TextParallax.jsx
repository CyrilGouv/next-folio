"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"

import styles from "./TextParallax.module.scss"
import animationsTextParallax from "@/animations/text/parallax"


const TextParallax = ({ text, layout = "default" }) => {

    // Elements
    const sectionEl = useRef(null)
    const textEl = useRef(null)

    useGSAP(() => {
        animationsTextParallax(sectionEl.current, textEl.current)
    })

    if(layout === "default") {
        return (
            <div
                ref={ sectionEl }
                className={ styles.text }
            >
                <p 
                    ref={ textEl } 
                    className={ styles.text__content }
                >
                    { text }
                </p>
            </div>
        )
    }

    if(layout === "section") {
        return (
            <section
                ref={ sectionEl }
                className={ `${styles.text} ${styles.text__section}` }
            >
                <p 
                    ref={ textEl } 
                    className={ styles.text__content }
                >
                    { text }
                </p>
            </section>
        )
    }
    
}

export default TextParallax