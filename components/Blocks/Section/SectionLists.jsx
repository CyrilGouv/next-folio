import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import Tags from "@/components/UI/Elements/Tags/Tags"
import CardList from "@/components/UI/Cards/CardList"
import { servicesTextInfos, servicesItems } from "@/data/services"
import { approachTextInfos, approachItems } from "@/data/approches"

import styles from "./SectionLists.module.scss"


const SectionLists = ({ type, itemLists = null }) => {
    const tagText = type === "services" ? "services" : type === "approaches" ? "approches" : ""
    const textInfo = type === "services" ? servicesTextInfos : type === "approaches" ? approachTextInfos : ""
    const items = type === "services" && !itemLists ? servicesItems : type === "services" && itemLists ? itemLists : type === "approaches" ? approachItems : ""

    const classNames = type === "approaches" ? styles.lists__approaches : ""

    
    return (
        <section className={ `${styles.lists} ${classNames}` }>
            <div className="container">
                <div className={ styles.lists__wrapper }>
                    <div className={ styles.lists__infos }>
                        <Tags text={ tagText } position="relative" animations={{ delay: .25 }} />
                        <TextInfo body={ textInfo } full={ true } className="pt--xSmall" />
                    </div>

                    <div className={ styles.lists__items }>
                        <ul className={ styles.lists__items__wrapper }>
                            { items.map(item => (
                                <CardList 
                                    key={ item.id }
                                    item={ item } 
                                    type={ type }
                                />
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default SectionLists