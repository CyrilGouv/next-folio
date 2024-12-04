import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import CardProject from "@/components/UI/Cards/CardProject"
import Cta from "@/components/UI/Cta/Cta"
import { getFeaturedProjects } from "@/utils/projects/getFeaturedProjects"

import styles from "./FeaturedProjects.module.scss"


const FeaturedProjects = ({ ctaText = null }) => {

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
                    ctaText={ ctaText ? ctaText : "Découvrez mes réalisations en création de sites internet pour TPE/PME à Biscarrosse et ailleurs. Chaque projet reflète ma passion pour le design sur-mesure et l’innovation digitale. Que vous soyez basé à Biscarrosse ou que vous ayez besoin d’un site web conçu à distance, je m’engage à fournir des solutions personnalisées qui répondent parfaitement à vos attentes." }
                    btnText="Tous les projets"
                    btnLink="/realisations"
                />
            </div>
        </section>
    )
}

export default FeaturedProjects