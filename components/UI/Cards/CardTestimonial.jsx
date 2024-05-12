"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import Line from "../Elements/Line/Line"
import TextReveal from "../Elements/Text/TextReveal"
import animationsClipPath from "@/animations/image/clipPath"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./CardTestimonial.module.scss"
import Tags from "../Elements/Tags/Tags"


const CardTestimonial = ({ count, name, avatar, company, body }) => {

    // Elements
    const avatarEl = useRef(null)
    const numEl = useRef(null)
    const titleTrigger = useRef(null)
    const nameEl = useRef(null)
    const companyEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsClipPath(avatarEl.current, avatarEl.current)
        opacityAndTransformY(numEl.current, numEl.current, 25, .85, .25)
        opacityAndTransformY(titleTrigger.current, nameEl.current, 25, .725, .75)
        opacityAndTransformY(titleTrigger.current, companyEl.current, 25, .725, .85)
    })

    return (
        <li className={ styles.card }>
            <div className={ styles.card__left }>
                <Image 
                    ref={ avatarEl }
                    src={ avatar }
                    alt={ `Témoignages de ${name} pour ${company} concernant les services de développement web de Cyril Gouv` }
                    width={ 72 }
                    height={ 72 }
                    priority={ false }
                    className={ styles.card__avatar }
                />
            </div>

            <div className={ styles.card__right }>
                <p className={ `${styles.card__num} text--regular text--opacity` }>
                    <span ref={ numEl } className={ styles.card__num__inner }>
                        (0{ count })
                    </span>
                </p>

                <h2 className={ `${styles.card__body} text--large` }>
                    <TextReveal text={ body } />
                </h2>

                <div ref={ titleTrigger } className={ styles.card__title }>
                    <div className={ styles.card__title__name }>
                        <Tags text={ name } position="relative" animations={{ delay: 1.125 }} />
                    </div>
                    <div className={ styles.card__title__company }>
                        <Tags text={ company } position="relative" animations={{ delay: 1.325 }} />
                    </div>
                </div>
            </div>

            <div className={ styles.card__line }>
                <Line type="inner" />
            </div>
        </li>
    )
}

export default CardTestimonial