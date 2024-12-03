"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import splitByWords from "@/utils/splitByWords"
import revealLettersOpacity from "@/animations/title/revealLettersOpacity"

import styles from "./TitleIntro.module.scss"


const TitleIntro = ({ text, options = {} }) => {

    // Splitting text by words && letters
    const words = splitByWords(text)

    // Elements
    const section = useRef(null)
    const lettersEls = useRef([])

    useGSAP(() => {
        if(Object.keys(options).length === 0) {
            revealLettersOpacity(section.current, lettersEls.current, true)

        } else if(Object.keys(options).length > 0 && !options.pinned) {
            revealLettersOpacity(section.current, lettersEls.current, options.pinned)
        }
    })

    return (
        <div ref={ section } className={ `${styles.title} ${options?.className ? styles.title__alt : ""}` }>
            <h2 className={ `${styles.title__text} ${options?.className ? options.className : "text--XLarge"}` } aria-label={ text }>
                { words.map((word, idx) => {
                    return (
                        <span
                            key={ idx }
                            className={ styles.title__text__words }
                            aria-hidden="true"
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