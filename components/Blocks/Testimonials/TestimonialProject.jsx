"use client"

import { useRef } from "react"
import Image from "next/image"
import Tags from "@/components/UI/Elements/Tags/Tags"
import TextReveal from "@/components/UI/Elements/Text/TextReveal"
import { useGSAP } from "@gsap/react"
import animationsClipPath from "@/animations/image/clipPath"

import styles from "./TestimonialProject.module.scss"


const TestimonialProject = ({ testimonial }) => {

    // Elements
    const avatarEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsClipPath(avatarEl.current, avatarEl.current)
    })

    return (
        <section className={ styles.testimonial }>
            <div className="container">
                <div className={ styles.testimonial__wrapper }>
                    
                    <Tags text="Témoignage" position="relative" animations={{ delay: .25 }} />

                    <div className={ styles.testimonial__content }>
                        <Image 
                            ref={ avatarEl }
                            src={ testimonial.avatar }
                            alt={ `Témoignages de ${testimonial.name} pour ${testimonial.company} concernant les services de développement web de Cyril Gouv` }
                            width={ 72 }
                            height={ 72 }
                            priority={ false }
                            className={ styles.testimonial__avatar }
                        />

                        <p className={ `${styles.testimonial__text} text--large` }>
                            <TextReveal text={ testimonial.text } />
                        </p>

                        <Tags text={ testimonial.name } position="relative" animations={{ delay: 1.125 }} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default TestimonialProject