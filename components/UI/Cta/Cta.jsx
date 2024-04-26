"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Line from "../Elements/Line/Line"
import Button from "../Elements/Button/Button"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./Cta.module.scss"


const Cta = ({ ctaText, btnText, btnLink }) => {

    // Elements
    const ctaTextEl = useRef(null)
    const ctaBtnEl = useRef(null)

    // Animations
    useGSAP(() => {
        opacityAndTransformY(ctaTextEl.current, ctaTextEl.current, 15, 0.85, 0.65)
        opacityAndTransformY(ctaBtnEl.current, ctaBtnEl.current, 25, 0.85, 0.65)
    })

    return (
        <div className={ styles.cta }>
            <p className={ `${styles.cta__text} text--regular` }>
                <Line />
                <span ref={ ctaTextEl } className={ styles.cta__text__inner }>
                    { ctaText }
                </span>
            </p>

            <div ref={ ctaBtnEl } className={ styles.cta__btn }>
                <Button text={ btnText } path={ btnLink } />
            </div>
        </div>
    )
}

export default Cta