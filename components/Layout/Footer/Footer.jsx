"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import MenuFooter from "@/components/UI/Elements/Menu/MenuFooter"
import Socials from "@/components/UI/Elements/Socials/Socials"
import CtaFooter from "@/components/UI/Cta/CtaFooter"
import TextUpperWide from "@/components/UI/Elements/Text/TextUpperWide"

import styles from "./Footer.module.scss"
import animationsFooterScroll from "@/animations/footer/parallax"


const Footer = () => {

    // Elements
    const footer = useRef(null)

    // Animations
    useGSAP(() => {
        animationsFooterScroll(footer.current)
    })

    return (
        <footer ref={ footer } className={ styles.footer }>
            <div className={ styles.footer__top }>
                <div className="container">
                    <div className={ styles.footer__wrapper }>
                        <MenuFooter />
                        <Socials />
                    </div>
                </div>
            </div>

            <div className={ styles.footer__bottom }>
                <div className="container">
                    <div className={ styles.footer__bottom__wrapper }>
                        <CtaFooter />
                        <TextUpperWide text="cyrilgouv" type="link" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer