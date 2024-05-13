import TitleSingleProject from "@/components/UI/Elements/Title/TitleSingleProject"
import styles from "./HeroProject.module.scss"


const HeroProject = ({ title, year, industry }) => {
    
    return (
        <section className={ styles.hero }>
            <div className="container">
                <div className={ styles.hero__wrapper }>
                    <div className={ styles.hero__title }>
                        <TitleSingleProject title={ title } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroProject