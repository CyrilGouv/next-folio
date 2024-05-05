import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import { mentionsContent } from "@/data/content"

import styles from "./Legales.module.scss"
import LegalesContent from "./LegalesContent"


const Legales = () => {
    return (
        <section className={ styles.legales }>
            <div className="container">

                { mentionsContent.map(({ id, title, content }) => (
                    <div key={ id } className={ styles.legales__wrapper }>
                        <div class={ styles.legales__title }>
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