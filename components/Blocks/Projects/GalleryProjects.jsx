import Cta from "@/components/UI/Cta/Cta"
import CoverProject from "../Cover/CoverProject"
import styles from "./GalleryProjects.module.scss"


const GalleryProjects = ({ images }) => {

    // Remove first image
    images.shift()

    return (
        <section className={ `${styles.gallery} section` }>
            <div className="container">
                { images.map((image, idx) => (
                    <CoverProject 
                        key={ `project-${idx}` }
                        image={ image }
                        altText="Etude de cas du projet"
                        className="pb--medium"
                    />
                )) }

                <Cta
                    ctaText="We understand that each client, project, and context is different. We adopt a flexible approach, allowing us to adapt and tailor our services to meet our client's needs."
                    btnText="Retour portfolio"
                    btnLink="/realisations"
                    className="mt--medium"
                />
            </div>
        </section>
    )
}

export default GalleryProjects