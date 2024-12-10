"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import TitlePageDefault from "@/components/UI/Elements/Title/TitlePageDefault"
import TextHero from "@/components/UI/Elements/Text/TextHero"
import animationsImageReveal from "@/animations/image/reveal"
import animationsImageParallax from "@/animations/image/parallax"
import { aboutCoverFirstImage } from "@/data/content"

import styles from "./HeroSentence.module.scss"


const HeroSentence = ({ page, title, localisation, text }) => {

    // References
    const imageWrapperEl = useRef(null)
    const revealEl = useRef(null)
    const imgEl = useRef(null)

    // Animations
    useGSAP(() => {
        if(page === "about" || page === "testimonials") {
            animationsImageReveal(imageWrapperEl.current, revealEl.current, false, "100% 100%")
            animationsImageParallax(imageWrapperEl.current, imgEl.current)
        }
    })

    // For all page exept about
    if(page !== "about" && page !== "testimonials") {
        return (
            <section className={ styles.hero }>
                <div className="container">
                    <div className={ styles.hero__wrapper }>
                        <div className={ styles.hero__title }>
                            <TextHero 
                                text={ text } 
                                layout="services" 
                                localisation={ localisation } 
                            />
                            <TitlePageDefault 
                                page={ page } 
                                title={ title }
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Render for about page
    return (
        <section className={ `${styles.hero} ${styles.hero__about} ${styles.hero__testimonials}` }>
            <div className="container">
                <div className={ styles.hero__wrapper }>
                    <div className={ styles.hero__title }>
                        <div className={ styles.hero__title__top }>
                            <div ref={ imageWrapperEl } className={ styles.hero__title__img }>
                                <div ref={ revealEl } className={ styles.hero__title__img__reveal }></div>
                                { page === "about" && (
                                    <Image 
                                        ref={ imgEl }
                                        className={ styles.hero__title__img__inner } 
                                        src={ aboutCoverFirstImage.img }
                                        alt={ aboutCoverFirstImage.alt }
                                        fill
                                        priority
                                        sizes="42vw, (min-width: 640px) 32.75vw"
                                    />
                                ) }
                                { page === "testimonials" && (
                                    <Image
                                        ref={ imgEl }
                                        src="/images/gifs/gif-testimonials.webp"
                                        alt="Merci à mes clients de la confiance qu'ils ont pu apporté à mes services de développement web."
                                        width={ 150 }
                                        height={ 100 }
                                        priority={ false }
                                        className={ styles.hero__title__img__inner }
                                    />
                                ) }
                            </div>
                            <TextHero 
                                text={ title } 
                                layout="default" 
                                localisation={ localisation } 
                            />
                        </div>
                        <TitlePageDefault 
                            page={ page } 
                            title={ text }
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HeroSentence