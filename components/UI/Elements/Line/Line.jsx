"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import animationsLineReveal from "@/animations/line/reveal"

import styles from "./Line.module.scss"


const Line = ({ type = null }) => {

    // Elements
    const line = useRef(null)

    // Dynamic classes
    const clx = type === "inner" ? styles.line__inner : type === "outer" ? styles.line__outer : ""

    // Animations
    useGSAP(() => {
        animationsLineReveal(line.current)
    })

    return (
        <span 
            ref={ line } 
            className={ `${styles.line} ${clx}` }
        />
    )
}

export default Line