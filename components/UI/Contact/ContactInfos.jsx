"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TextInfo from "../Elements/Text/TextInfo"
import { socialItems } from "@/data/socials"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"
import animationsImageReveal from "@/animations/image/reveal"

import styles from "./ContactInfos.module.scss"


const ContactInfos = () => {

    // Elements
    const emailEl = useRef(null)
    const socialsEl = useRef(null)
    const locationSectionEl = useRef(null)
    const overlayEl = useRef(null)
    const addressEl = useRef(null)
    const phoneEl = useRef(null)

    // Animations
    useGSAP(() => {
        opacityAndTransformY(emailEl.current, emailEl.current, 35, .85, .25)
        animationsImageReveal(locationSectionEl.current, overlayEl.current)
        opacityAndTransformY(phoneEl.current, phoneEl.current, 25, .85, .25)
        opacityAndTransformY(addressEl.current, addressEl.current, 25, .85, .25)
        opacityAndTransformY(socialsEl.current, socialsEl.current, 15, .85, .25)
    })

    // Render
    return (
        <div className={ styles.infos }>
            <TextInfo 
                body="<span class='text--infos__title text--opacity'>(Contact)</span>"
            />

            <div ref={ locationSectionEl } className={ styles.infos__location }>
                <figure className={ styles.infos__location__video }>
                    <div ref={ overlayEl } className={ styles.infos__location__video__overlay }></div>
                    <video 
                        className={ styles.infos__location__video__inner } 
                        src="/videos/video-biscarrosse.mp4"
                        autoPlay
                        loop
                        muted
                    >
                    </video>
                </figure>

                <address
                    ref={ addressEl }
                    className={ `${styles.infos__location__address} text--regular` } 
                >
                    62 rue diamant<br />
                    40600 Biscarrosse<br />
                    France
                </address>
            </div>

            <div 
                ref={ phoneEl }
                className={ `${styles.infos__phone} text--regular` } 
            >
                <span>+33 6 25 49 60 99</span>
            </div>

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