"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import animationsLineReveal from "@/animations/line/reveal"

import styles from "./Line.module.scss"


const Line = () => {

    // Elements
    const line = useRef(null)

    useGSAP(() => {
        animationsLineReveal(line.current)
    })

    return (
        <span 
            ref={ line } 
            className={ styles.line }
        />
    )
}

export default Line