"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import splitByLetters from "@/utils/splitByLetters"

import styles from "./TitleSection.module.scss"
import revealLettersOpacity from "@/animations/title/revealLettersOpacity"


const TitleSection = ({ text }) => {

    // Split the text title by letter
    const letters = splitByLetters(text)

    // Elements
    const title = useRef(null)

    // Animations
    useGSAP(() => {
        revealLettersOpacity(title.current, title.current.children)
    })

    return (
        <h3 
            ref={ title }
            className={ styles.title }
        >

            { letters.map((letter, idx) => (
                <span 
                    key={ idx }
                    className={ styles.title__letters }
                >
                    { letter }
                </span>
            )) }

        </h3>
    )
}

export default TitleSection