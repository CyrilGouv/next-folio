"use client"

import { useRef } from "react"
import splitByWords from "@/utils/splitByWords"

import styles from "./CardList.module.scss"


const CardList = ({ item }) => {

    const { id, title, body } = item
    const words = splitByWords(body)

    const contentEl = useRef(null)
    const titleEl = useRef(null)
    const wordEls = useRef([])
    const lineEl = useRef(null)

    return (
        <li ref={ contentEl } className={ styles.card }>
            <h4 ref={ titleEl } className={ `${styles.card__title} text--large` }>
                <span className={ `${styles.card__title__id} text--opacity`}>0{ id + 1 }</span>
                <span className={ styles.card__title__separator }></span> 
                <span className={ styles.card__title__content }>{ title }</span> 
            </h4>
            <p className={ `${styles.card__body} text--large` }>
                { words.map((word, idx) => (
                    <span 
                        key={ idx }
                        className={ styles.card__body__word }
                    >
                        <span 
                            ref={ el => wordEls.current.push(el) } 
                            className={ styles.card__body__word__inner }
                        >
                            { word }
                            &nbsp;
                        </span>
                    </span>
                )) }
            </p>

            <span ref={ lineEl } className={ styles.card__line }></span>
        </li>
    )
}

export default CardList