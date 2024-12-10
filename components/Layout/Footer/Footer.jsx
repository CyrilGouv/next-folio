"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import MenuFooter from "@/components/UI/Elements/Menu/MenuFooter"
import CtaFooter from "@/components/UI/Cta/CtaFooter"
import TextUpperWide from "@/components/UI/Elements/Text/TextUpperWide"
import animationsFooterScroll from "@/animations/footer/parallax"

import styles from "./Footer.module.scss"


const Footer = () => {

    // Elements
    const footer = useRef(null)

    // Animations
    useGSAP(() => {
        animationsFooterScroll(footer.current)
    })

    // Render
    return (
        <footer ref={ footer } className={ styles.footer }>
            <div className={ styles.footer__top }>
                <div className="container">
                    <div className={ styles.footer__wrapper }>
                        <MenuFooter />
                        <MenuFooter type="services" />
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