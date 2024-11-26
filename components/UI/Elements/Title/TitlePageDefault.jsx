"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import revealByWords from "@/animations/title/revealByWords"
import splitByWords from "@/utils/splitByWords"

import styles from "./TitlePageDefault.module.scss"


const TitlePageDefault = ({ page, title }) => {

    // Split the title by words
    const words = splitByWords(title, false)

    // Elements
    const wordEls = useRef([])

    // Animations
    useGSAP(() => {
        revealByWords(wordEls.current)
    })
    

    switch(page) {
        case "services":
            return (
                <h1 className={ styles.title }>
                    { words.map((word, idx) => (
                        <span 
                            key={ `${word}-${idx}` }
                            className={ styles.title__word }
                        >
                            <span 
                                ref={ el => wordEls.current.push(el) }
                                className={ styles.title__word__inner }
                            >
                                { word }&nbsp;
                            </span>
                        </span>
                    )) }
                </h1>
            )
    }
  
}

export default TitlePageDefault