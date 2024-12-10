"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TextReveal from "../Elements/Text/TextReveal"
import Button from "../Elements/Button/Button"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./Cta.module.scss"


const Cta = ({ ctaTitle = null, ctaText, btnText, btnLink, fullWidth = false, className = null, layout = null }) => {

    // Elements
    const ctaTextEl = useRef(null)
    const ctaBtnEl = useRef(null)

    // Animations
    useGSAP(() => {
        if (layout === "light") {
            opacityAndTransformY(ctaTextEl.current, ctaTextEl.current, 5, 0.85, 0.5, 0.75)
        } else {
            opacityAndTransformY(ctaTextEl.current, ctaTextEl.current, 5, 0.85, 0.5, 0.5)
        }
        opacityAndTransformY(ctaBtnEl.current, ctaBtnEl.current, 5, 0.85, 0.5)
    })

    // Render
    return (
        <div className={ `${styles.cta} ${fullWidth ? styles.cta__full : ""} ${className ? className : ""}` }>

            { ctaTitle && (
                <h3 className={ styles.cta__title } aria-label={ ctaTitle }>
                    <TextReveal text={ ctaTitle } />
                </h3>
            ) }

            <p ref={ ctaTextEl } className={ styles.cta__text }>
                { ctaText }
            </p>

            <div ref={ ctaBtnEl } className={ styles.cta__btn }>
                <Button text={ btnText } path={ btnLink } layout={ layout } />
            </div>
        </div>
    )
}

export default Cta