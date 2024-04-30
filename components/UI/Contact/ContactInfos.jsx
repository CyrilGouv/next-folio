"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TextInfo from "../Elements/Text/TextInfo"
import { socialItems } from "@/data/socials"

import styles from "./ContactInfos.module.scss"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"


const ContactInfos = () => {

    // Elements
    const emailEl = useRef(null)
    const socialsEl = useRef(null)

    // Animations
    useGSAP(() => {
        opacityAndTransformY(emailEl.current, emailEl.current)
        opacityAndTransformY(socialsEl.current, socialsEl.current, 25, .85, .25)
    })

    // Render
    return (
        <div className={ styles.infos }>
            <TextInfo 
                body="<span class='text--infos__title text--opacity'>(Contact)</span>"
            />

            <a 
                ref={ emailEl }
                className={ `${styles.infos__email} text--regular` } 
                href="mailto:hello@cyrilgouv.com"
            >
                Hello@cyrilgouv.com
            </a>

            <ul ref={ socialsEl } className={ `${styles.infos__socials} text--regular` }>
                { socialItems.map(({ id, name, link }) => (
                    <li
                        key={ id }
                        className={ styles.infos__socials__item }
                    >
                        <a 
                            href={ link }
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ styles.infos__socials__link }
                        >
                            { name }
                        </a>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default ContactInfos