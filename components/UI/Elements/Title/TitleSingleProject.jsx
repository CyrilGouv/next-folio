"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import splitByWords from "@/utils/splitByWords"
import revealByWords from "@/animations/text/revealByWords"
import animationsTitleArrow from "@/animations/title/arrow"

import styles from "./TitleSingleProject.module.scss"
import animationsTitleArrowReveal from "@/animations/title/arrowReveal"


const TitleSingleProject = ({ title }) => {

    // Split the title by words
    const words = splitByWords(title, false)

    // Reference elements
    const wordEls = useRef([])
    const titleEl = useRef(null)
    const arrowEl = useRef(null)

    // Animations
    useGSAP(() => {
        revealByWords(titleEl.current, wordEls.current)
        animationsTitleArrow(arrowEl.current)
        animationsTitleArrowReveal(arrowEl.current)
    })


    return (
        <h1 ref={ titleEl } className={ styles.title }>
            <span ref={ arrowEl } className={ styles.title__arrow }>
                <svg version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                    <g transform="translate(8 6) rotate(45) translate(-5 -5)" stroke="#797979" strokeWidth="1.5">
                    <polyline points="2.306 0 9.9927 0 9.9927 7.6867"/>
                    <path d="m9.9927 0-9.9927 9.9927"/>
                    </g>
                    </g>
                </svg>
            </span>
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

export default TitleSingleProject