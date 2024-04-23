"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import splitByWords from "@/utils/splitByWords"
import revealByWords from "@/animations/text/revealByWords"

import styles from "./TextReveal.module.scss"


const TextReveal = ({ text, delay = 0.25 }) => {

    const words = splitByWords(text, false)

    const section = useRef(null)
    const wordsEls = useRef([])

    useGSAP(() => {
        revealByWords(section.current, wordsEls.current, delay)
    })

    return (
        <span 
            ref={ section }
            className={ styles.text__reveal }
        >
            { words.map((word, idx) => (
                <span
                    key={ idx }
                    className={ styles.text__reveal__outer }
                >
                    <span 
                        ref={ el => { wordsEls.current.push(el) } }
                        className={ styles.text__reveal__inner }
                    >
                        { word }
                    </span>
                    &nbsp;
                </span>
            )) }
        </span>
    )
}

export default TextReveal