import TitleSection from "@/components/UI/Elements/Title/TitleSection"
import CardProject from "@/components/UI/Cards/CardProject"
import Cta from "@/components/UI/Cta/Cta"
import { projects } from "@/data/projects"

import styles from "./FeaturedProjects.module.scss"


const FeaturedProjects = () => {

    // Get all featured projects
    const featuredWorks = projects.filter(project => project.featured)

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
                    ctaText="We understand that each client, project, and context is different. We adopt a flexible approach, allowing us to adapt and tailor our services to meet our client's needs."
                    btnText="Tous les projets"
                    btnLink="/realisations"
                />
            </div>
        </section>
    )
}

export default FeaturedProjects