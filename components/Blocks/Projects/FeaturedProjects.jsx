import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import CardProject from "@/components/UI/Cards/CardProject"
import Cta from "@/components/UI/Cta/Cta"
import { getFeaturedProjects } from "@/utils/projects/getFeaturedProjects"

import styles from "./FeaturedProjects.module.scss"


const FeaturedProjects = () => {

    // Get all featured projects
    const featuredWorks = getFeaturedProjects()

    return (
        <section className={ `section ${styles.projects}` }>
            <div className="container">
                <TitleSection text="Projets" />

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
                
                <Cta 
                    ctaText="Chaque projet est réalisé avec soin et inventivité. Plus qu’une simple volonté, c’est une vision commune que nous partageons. Découvrez mon portfolio et laissez-vous inspirer par les solutions créatives et personnalisées que j'ai développées pour mes clients."
                    btnText="Tous les projets"
                    btnLink="/realisations"
                />
            </div>
        </section>
    )
}

export default FeaturedProjects