"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { contactAvatar } from "@/data/content"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"
import animationsClipPath from "@/animations/image/clipPath"

import styles from "./TextHero.module.scss"


const TextHero = ({ text, avatar = false }) => {

    // Elements
    const sectionEl = useRef(null)
    const textEl = useRef(null)
    const avatarEl = useRef(null)

    // Animations
    useGSAP(() => {
        if(avatar) {
            animationsClipPath(sectionEl.current, avatarEl.current)
        }
        opacityAndTransformY(sectionEl.current, textEl.current, 25, 1, 0.25)
    })

    return (
        <div ref={ sectionEl } className={ `${styles.text} ${avatar ? styles.text__alt : ""}` }>
            { avatar && (
                <Image
                    ref={ avatarEl }
                    src={ contactAvatar.img }
                    alt={ contactAvatar.alt }
                    width={ 68 }
                    height={ 68 }
                    priority={ false }
                    className={ styles.text__avatar }
                />
            ) }
            <p 
                ref={ textEl } 
                className={ `${styles.text__inner} text--regular` }
            >
                { text }
            </p>
        </div>
    )
}

export default TextHero