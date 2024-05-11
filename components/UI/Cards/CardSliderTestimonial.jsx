import { useState } from "react"
import Image from "next/image"
import Tags from "../Elements/Tags/Tags"

import styles from "./CardSliderTestimonial.module.scss"


const CardSliderTestimonial = ({ avatar, testimonial, name, company }) => {

    // States
    const [isActive, setIsActive] = useState(false)

    return (
        <div 
            className={ styles.card } 
            onMouseEnter={ () => { setIsActive(true) } }
            onMouseLeave={ () => { setIsActive(false) } }
        >
            <div className={ styles.card__overlay }></div>
            <Image 
                width={ 65 }
                height={ 65 }
                className={ styles.card__avatar } 
                src={ avatar } 
                alt={`Témoignage de ${name} pour ${company}`} 
            />
            <div className={ styles.card__content }>
                <p className={ styles.card__text }>{ testimonial }</p>
                <div className={ styles.card__name }>
                    <Tags text={ name } position="relative" isActive={ isActive } animations={{ delay: .25 }} />
                </div>
                <div className={ styles.card__company }>
                    <Tags text={ company } position="relative" isActive={ isActive } animations={{ delay: .325 }} />
                </div>
            </div>
        </div>
    )
}

export default CardSliderTestimonial