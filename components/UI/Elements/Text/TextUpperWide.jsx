"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import splitByLetters from "@/utils/splitByLetters"
import animationsRevealFooterText from "@/animations/text/revealFooterText"

import styles from "./TextUpperWide.module.scss"


const TextUpperWide = ({ text, type }) => {

    // Split text by letters
    const letters = splitByLetters(text)

    // Elements
    const textEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsRevealFooterText(textEl.current, textEl.current.children)
    })

    if(type === "link") {
        return (
            <Link
                ref={ textEl }
                href="/contact"
                className={ styles.text }
            >
                { letters.map((letter, idx) => (
                    <span
                        key={ idx }
                        className={ styles.text__letter }
                    >
                        { letter }
                    </span>
                )) }
            </Link>
        )
    }
}

export default TextUpperWide