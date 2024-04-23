"use client"

import { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import splitByWords from "@/utils/splitByWords"
import revealLettersOpacity from "@/animations/title/revealLettersOpacity"

import styles from "./TitleIntro.module.scss"


const TitleIntro = ({ text }) => {

    // Splitting text by words && letters
    const words = splitByWords(text)

    // Elements
    const section = useRef(null)
    const lettersEls = useRef([])

    useGSAP(() => {
        revealLettersOpacity(section.current, lettersEls.current, true)
    })

    return (
        <div ref={ section } className={ styles.title }>
            <h2 className={ `${styles.title__text} text--XLarge` }>
                { words.map((word, idx) => {
                    return (
                        <span
                            key={ idx }
                            className={ styles.title__text__words }
                        >
                            { word.map((letter, idx) => (
                                <span
                                    key={ idx }
                                    ref={ el => { lettersEls.current.push(el) } }
                                    className={ styles.title__text__letters }
                                >
                                    { letter }
                                </span>
                            )) }
                            &nbsp;
                        </span>
                    )
                }) }
            </h2>
        </div>
    )
}

export default TitleIntro