"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import TitleIntro from "@/components/UI/Elements/Title/TitleIntro"
import CardProject from "@/components/UI/Cards/CardProject"
import Cta from "@/components/UI/Cta/Cta"
import Tags from "@/components/UI/Elements/Tags/Tags"
import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import animationsSectionParallax from "@/animations/section/parallax"
import animationsSectionOverlay from "@/animations/section/opacity"
import { getFeaturedProjects } from "@/utils/projects/getFeaturedProjects"

import styles from "./FeaturedProjects.module.scss"


const FeaturedProjects = ({ ctaTitle = null, ctaText = null, titleOpacity = "Découvrez toutes mes autres réalisations en création de sites internet pour TPE/PME à Biscarrosse et ailleurs." }) => {

    // Get all featured projects
    const featuredWorks = getFeaturedProjects()

    // References
    const projectsSection = useRef(null)
    const projectsSectionOverlay = useRef(null)

    // Animations
    useGSAP(() => {
        // Parallax section on scroll
        animationsSectionParallax(projectsSection.current)
        animationsSectionOverlay(projectsSection.current, projectsSectionOverlay.current)
    })

    // Render
    return (
        <section ref={ projectsSection } className={ styles.projects }>
            <div ref={ projectsSectionOverlay } className={ styles.overlay }></div>
            <div className="container">
                <div className={ styles.projects__title }>
                    <TitleSection text="Projets" />
                    <div className={ styles.projects__title__more }>
                        <div className={ styles.projects__title__more__wrapper }>
                            <Tags 
                                text="© 18/24" 
                                position="relative" 
                                layout="light"
                                animations={{ delay: .25 }} 
                            />
                            <TextInfo 
                                body="La créativité et l'innovation sont au cœur de ma démarche." 
                                full={ true } 
                                className="pt--xSmall"
                            />
                        </div>
                    </div>
                </div>

                <ul className={ styles.projects__wrapper }>
                    { featuredWorks.map(({ id, name, slug, src, year, bgColor }) => (
                        <CardProject 
                            key={ id }
                            title={ name }
                            slug={ slug }
                            image={ src }
                            year={ year }
                            bgColor={ bgColor }
                            layout="featured"
                        />
                    )) }
                </ul>

                <TitleIntro text={ titleOpacity } />
                
                <Cta 
                    ctaTitle={ ctaTitle ? ctaTitle : "Chaque projet reflète ma passion pour le design sur-mesure et l’innovation digitale." }
                    ctaText={ ctaText ? ctaText : "Que vous soyez basé à Biscarrosse ou que vous ayez besoin d’un site web conçu à distance, je m’engage à fournir des solutions personnalisées qui répondent parfaitement à vos attentes." }
                    btnText="Tous les projets"
                    btnLink="/realisations"
                    layout="light"
                />
            </div>
        </section>
    )
}

export default FeaturedProjects