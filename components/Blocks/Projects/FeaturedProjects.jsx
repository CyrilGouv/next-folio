"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import CardProject from "@/components/UI/Cards/CardProject"
import Line from "@/components/UI/Elements/Line/Line"
import Button from "@/components/UI/Elements/Button/Button"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"
import { projects } from "@/data/projects"

import styles from "./FeaturedProjects.module.scss"


const FeaturedProjects = () => {

    // Get all featured projects
    const featuredWorks = projects.filter(project => project.featured)

    // Elements
    const ctaText = useRef(null)
    const ctaBtn = useRef(null)

    useGSAP(() => {
        opacityAndTransformY(ctaText.current, ctaText.current, 15, 0.85, 0.65)
        opacityAndTransformY(ctaBtn.current, ctaBtn.current, 25, 0.85, 0.65)
    })

    return (
        <section className={ `section ${styles.projects}` }>
            <div className="container">
                <TitleSection text="Projets" />

                <ul className={ styles.projects__wrapper }>
                    { featuredWorks.map(({ id, name, slug, src, year }) => (
                        <CardProject 
                            key={ id }
                            title={ name }
                            slug={ slug }
                            image={ src }
                            year={ year }
                            layout="featured"
                        />
                    )) }
                </ul>

                <div className={ styles.projects__cta }>
                    <p className={ `${styles.projects__cta__text} text--regular` }>
                        <Line />
                        <span ref={ ctaText } className={ styles.projects__cta__text__inner }>
                            We understand that each client, project, and context is different. We adopt a flexible approach, allowing us to adapt and tailor our services to meet our client's needs.
                        </span>
                    </p>

                    <div ref={ ctaBtn } className={ styles.projects__cta__btn }>
                        <Button text="Tous les projets" path="/realisations" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects