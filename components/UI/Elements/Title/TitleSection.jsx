"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import revealByWords from "@/animations/text/revealByWords"

import styles from "./TitleSection.module.scss"


const TitleSection = ({ text }) => {

    // Elements
    const sectionEl = useRef(null)
    const titleEl = useRef(null)

    // Animations
    useGSAP(() => {
        revealByWords(sectionEl.current, titleEl.current)
    })

    return (
        <h3 
            ref={ sectionEl }
            className={ styles.title }
        >

            <span 
                ref={ titleEl }
                className={ styles.title__inner }
            >
                { text }
            </span>
            
        </h3>
    )
}

export default TitleSection