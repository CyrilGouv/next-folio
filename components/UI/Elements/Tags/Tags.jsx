"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { animationsTagReveal } from "@/animations/tag/reveal"

import styles from "./Tags.module.scss"


const Tags = ({ text, position = "absolute", isActive = false, className = null , animations = {}, layout = null }) => {

    // Elements
    const tagWrapperEl = useRef(null)
    const tagTextEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsTagReveal(tagWrapperEl.current, tagWrapperEl.current, tagTextEl.current, animations && animations.delay ? animations.delay : 1.125)
    })

    return (
        <div ref={ tagWrapperEl } className={ `${styles.tags} ${position === "relative" ? styles.tags__relative : ""} ${isActive ? styles.tags__active : ""} ${layout === "light" ? styles.tagsLight : ""}` }>
            <span className={ `${styles.tags__text} ${className ? className : "text--regular"}` }>
                <span 
                    ref={ tagTextEl } 
                    className={ styles.tags__text__inner }
                >
                    { text }
                </span>
            </span>
        </div>
    )
}

export default Tags