"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TitleIntro from "@/components/UI/Elements/Title/TitleIntro"
import IntroContent from "@/components/Blocks/Intro/IntroContent"
import animationsSectionParallax from "@/animations/section/parallax"
import animationsSectionOverlay from "@/animations/section/opacity"
import { homepageIntroTitle, aboutIntroTitle } from "@/data/content"

import styles from "./Intro.module.scss"


const Intro = ({ page, title = null, content = null }) => {

    const pageTitle = page === "homepage" ? homepageIntroTitle :  page === "about" ? aboutIntroTitle : page === "services" ? title : ""
    
    // References
    const introSection = useRef(null)
    const introSectionOverlay = useRef(null)

    // Animations
    useGSAP(() => {
        // Parallax section on scroll
        if (page === "homepage"  || page === "about"  || page === "services") {
            animationsSectionParallax(introSection.current)
            animationsSectionOverlay(introSection.current, introSectionOverlay.current)
        }
    })

    // Render
    return (
        <section ref={ introSection } className={ styles.intro }>
            <div ref={ introSectionOverlay } className={ styles.overlay }></div>
            <div className="container">
                { page !== "about" && (
                    <TitleIntro text={ pageTitle } />
                ) }
                <IntroContent page={ page } content={ content } />
            </div>
        </section>
    )
}

export default Intro