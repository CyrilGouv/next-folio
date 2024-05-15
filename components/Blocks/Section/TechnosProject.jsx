import Tags from "@/components/UI/Elements/Tags/Tags"
import TechnosProjectItem from "@/components/UI/Elements/Technos/TechnosProjectItem"

import styles from "./TechnosProject.module.scss"


const TechnosProject = ({ technos }) => {
    return (
        <section className={ styles.technos }>
            <div className="container">
                <div className={ styles.technos__wrapper }>
                    
                    <Tags text="Technologies" position="relative" animations={{ delay: .25 }} />

                    <ul className={ styles.technos__items }>
                        { technos.map(({ id, title, text }) => (
                            <TechnosProjectItem 
                                key={ id }
                                label={ title }
                                techno={ text }
                            />
                        )) }
                    </ul>
                    
                </div>
            </div>
        </section>
    )
}

export default TechnosProject