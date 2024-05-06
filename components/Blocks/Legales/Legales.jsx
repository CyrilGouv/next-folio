import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import LegalesContent from "./LegalesContent"
import { mentionsContent } from "@/data/content"

import styles from "./Legales.module.scss"
import Line from "@/components/UI/Elements/Line/Line"


const Legales = () => {
    return (
        <section className={ styles.legales }>
            <div className="container">

                <div className={ styles.legales__line }>
                    <Line type="inner" />
                </div>

                { mentionsContent.map(({ id, title, content }) => (
                    <div 
                        key={ id } 
                        className={ `${styles.legales__wrapper} ${id === 0 ? "pt--xLarge" : ""}` }
                    >
                        <div className={ styles.legales__title }>
                            <TextInfo body={ title } />
                        </div>
                        
                        <LegalesContent body={ content } />
                    </div>
                )) }

            </div>
        </section>
    )
}

export default Legales