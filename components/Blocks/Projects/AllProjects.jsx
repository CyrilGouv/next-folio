import CardProject from "@/components/UI/Cards/CardProject"
import { projects } from "@/data/projects"

import styles from "./AllProjects.module.scss"


const AllProjects = () => {
    return (
        <section className={ styles.projects }>
            <div className="container">
                <ul className={ styles.projects__wrapper }>
                    { projects.map(({ id, name, slug, src, year, bgColor }) => (
                        <CardProject
                            key={ id }
                            title={ name }
                            slug={ slug }
                            image={ src }
                            year={ year }
                            bgColor={ bgColor }
                            layout="default"
                        />
                    )) }
                </ul>
            </div>
        </section>
    )
}

export default AllProjects