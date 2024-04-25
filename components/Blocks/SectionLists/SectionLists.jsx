import TextInfo from "@/components/UI/Elements/Text/TextInfo"
import CardList from "@/components/UI/Cards/CardList"
import { servicesTextInfos, servicesItems } from "@/data/services"

import styles from "./SectionLists.module.scss"


const SectionLists = ({ type }) => {

    const textInfo = type === "services" ? servicesTextInfos : ""
    const items = type === "services" ? servicesItems : ""

    return (
        <section className={ styles.lists }>
            <div className="container">
                <div className={ styles.lists__wrapper }>
                    <div className={ styles.lists__infos }>
                        <TextInfo body={ textInfo } full={ true } />
                    </div>

                    <div className={ styles.lists__items }>
                        <ul className={ styles.lists__items__wrapper }>
                            { items.map(item => (
                                <CardList 
                                    key={ item.id }
                                    item={ item } 
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