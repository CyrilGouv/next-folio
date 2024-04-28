"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import Line from "@/components/UI/Elements/Line/Line"
import Button from "@/components/UI/Elements/Button/Button"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./IntroContent.module.scss"


const IntroContent = ({ page }) => {

    // Elements
    const introBottom = useRef(null)
    const introCta = useRef(null)

    // Animations
    useGSAP(() => {
        opacityAndTransformY(introBottom.current, introBottom.current, 15, 0.85, 0.65)
        opacityAndTransformY(introCta.current, introCta.current, 25, 0.85, 0.65)
    })

    switch(page) {
        case "homepage":
            return (
                <div className={ styles.intro__content }>
                    <TextInfo body="(à propos)" />
                    <div className={ styles.intro__content__wrapper }>
                        <p className={ styles.intro__content__text }>
                            <TextReveal text="Whether you require help with strategy, web or product design, development, app creation, or innovative tech, we have the expertise and experience to deliver uniquely branded and interactive solutions for your audience." />
                        </p>
                        <p className={ styles.intro__content__text }>
                            <TextReveal text="Whether you require help with strategy, web or product design, development, app creation, or innovative tech, we have the expertise and experience to deliver uniquely branded and interactive solutions for your audience." delay={ 0.375 } />
                        </p>
                        <p className={ `${styles.intro__content__bottom} text--regular` }>
                            <Line />

                            <span 
                                ref={ introBottom } 
                                className={ styles.intro__content__bottom__text }
                            >
                                We understand that each client, project, and context is different. We adopt a flexible approach, allowing us to adapt and tailor our services to meet our client's needs.
                            </span>
                        </p>

                        <div 
                            ref={ introCta } 
                            className={ styles.intro__content__cta }
                        >
                            <Button text="En savoir plus" path="/a-propos" />
                        </div>
                    </div>
                </div>
            )
        
        case "about":
            return (
                <div className={ styles.intro__content }>
                    <TextInfo body="(approche)" />
                    <div className={ styles.intro__content__wrapper }>
                        <p className={ styles.intro__content__text }>
                            <TextReveal text="Whether you require help with strategy, web or product design, development, app creation, or innovative tech, we have the expertise and experience to deliver uniquely branded and interactive solutions for your audience." />
                        </p>
                    </div>
                </div>
            )
    }
}

export default IntroContent