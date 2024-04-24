import TitleSection from "@/components/UI/Elements/Title/TitleSection"

import styles from "./FeaturedProjects.module.scss"


const FeaturedProjects = () => {
    return (
        <section className={ `section ${styles.projects}` }>
            <div className="container">
                <TitleSection text="Projets" />
            </div>
        </section>
    )
}

export default FeaturedProjects