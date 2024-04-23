"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./TextInfo.module.scss"


const TextInfo = ({ body }) => {

    // Elements
    const section = useRef(null)
    const text = useRef(null)

    useGSAP(() => {
        opacityAndTransformY(section.current, text.current)
    })

    return (
        <div 
            ref={ section }
            className={ styles.text__infos }
        >
            <p  
                ref={ text }
                className={ styles.text__infos__content }
                dangerouslySetInnerHTML={{ __html: body }}
            />
        </div>
    )
}

export default TextInfo