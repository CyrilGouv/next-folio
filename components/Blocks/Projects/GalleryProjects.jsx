import Cta from "@/components/UI/Cta/Cta"
import CoverProject from "../Cover/CoverProject"
import styles from "./GalleryProjects.module.scss"


const GalleryProjects = ({ images }) => {

    // Remove first image
    images.shift()

    return (
        <section className={ styles.gallery }>
            <div className="container">
                { images.map((image, idx) => (
                    <CoverProject 
                        key={ `project-${idx}` }
                        image={ image }
                        altText="Etude de cas du projet"
                        className="mb--medium"
                    />
                )) }

                <Cta
                    ctaText="Vous avez un projet web en tête ? Ne cherchez plus ! Contactez-moi dès aujourd'hui et laissez-moi transformer votre vision en réalité. Vous préférez d'abord explorer mes réalisations ? Continuez à visiter mon portfolio pour découvrir d'autres exemples de mon travail et voyez comment je peux faire briller votre projet."
                    btnText="Retour portfolio"
                    btnLink="/realisations"
                    className="mt--medium"
                />
            </div>
        </section>
    )
}

export default GalleryProjects