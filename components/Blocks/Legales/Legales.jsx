import LegalesContent from "./LegalesContent"
import Line from "@/components/UI/Elements/Line/Line"
import Tags from "@/components/UI/Elements/Tags/Tags"
import { mentionsContent } from "@/data/content"

import styles from "./Legales.module.scss"


const Legales = () => {
    return (
        <section className={ styles.legales }>
            <div className="container">

                <div className={ styles.legales__line }>
                    <Line type="inner" />
                </div>

                { mentionsContent.map(({ id, text }) => (
                    <div 
                        key={ id } 
                        className={ `${styles.legales__wrapper} ${id === 0 ? "pt--xLarge" : ""}` }
                    >
                        <div className={ styles.legales__title }>
                            <Tags text={ text } position="relative" animations={{ delay: .25 }} />
                        </div>
                        
                        <LegalesContent body={ text } />
                    </div>
                )) }

            </div>
        </section>
    )
}

export default Legales