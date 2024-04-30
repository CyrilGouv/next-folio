"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"

import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./TextHero.module.scss"


const TextHero = ({ text, avatar = false }) => {

    // Elements
    const sectionEl = useRef(null)
    const textEl = useRef(null)

    // Animations
    useGSAP(() => {
        opacityAndTransformY(sectionEl.current, textEl.current, 25, 1, 0.25)
    })

    return (
        <div ref={ sectionEl } className={ styles.text }>
            <p 
                ref={ textEl } 
                className={ `${styles.text__inner} text--regular` }
            >
                { text }
            </p>
        </div>
    )
}

export default TextHero