"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import splitByWords from "@/utils/splitByWords"
import animationsCardList from "@/animations/card/cardList"

import styles from "./CardList.module.scss"


const CardList = ({ item, type = "default" }) => {
    // Props
    const { id, title, body } = item
    
    // Split prop text by words
    const words = splitByWords(body)

    // Elements
    const titleEl = useRef(null)
    const bodyEl = useRef(null)
    const lineEl = useRef(null)

    // Animations
    useGSAP(() => {
        animationsCardList(titleEl.current, titleEl.current, bodyEl.current, lineEl.current)
    })

    // Render
    return (
        <li className={ styles.card }>
            { type === "services" && (
                <h4 ref={ titleEl } className={ `${styles.card__title} text--large` }>
                    <span className={ `${styles.card__title__id} text--regular text--opacity`}>(0{ id + 1 })</span>
                    <span className={ styles.card__title__content }>{ title }</span> 
                </h4>
            ) }
            { type === "approaches" && (
                <h3 ref={ titleEl } className={ `${styles.card__title} text--large` }>
                    <span className={ `${styles.card__title__id} text--regular text--opacity`}>(0{ id + 1 })</span>
                    <span className={ styles.card__title__content }>{ title }</span> 
                </h3>
            ) }
            <p ref={ bodyEl } className={ styles.card__body }>
                { body }
            </p>

            <span ref={ lineEl } className={ styles.card__line }></span>
        </li>
    )
}

export default CardList