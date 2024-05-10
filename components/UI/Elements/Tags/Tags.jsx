import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { animationsTagReveal } from "@/animations/tag/reveal"

import styles from "./Tags.module.scss"


const Tags = ({ text, isActive = false }) => {

    // Elements
    const tagWrapperEl = useRef(null)
    const tagTextEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsTagReveal(tagWrapperEl.current, tagWrapperEl.current, tagTextEl.current, 1.125)
    })

    return (
        <div ref={ tagWrapperEl } className={ `${styles.tags} ${isActive ? styles.tags__active : ""}` }>
            <span className={ `${styles.tags__text} text--regular` }>
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