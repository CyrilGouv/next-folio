"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import animationsTitlePage from "@/animations/title/page"

import styles from "./TitlePage.module.scss"
import animationsTitleArrow from "@/animations/title/arrow"


const TitlePage = ({ page }) => {

    const firstLine = useRef(null)
    const lastLine = useRef(null)

    useGSAP(() => {
        animationsTitlePage(firstLine.current, lastLine.current)

        if(page === "works" || page === "about") {
            animationsTitleArrow(lastLine.current)
        }
    })

    switch(page) {
        case "homepage":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Créativité</span>
                    </span>
                    <span ref={ lastLine } className={ styles.title__line }>
                        <span className={ `${styles.title__line__word} text--opacity` }>&</span>
                        <span className={ styles.title__line__word }>Innovation</span>
                    </span>
                </h1>
            )
        
        case "works":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Quelques</span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt}` }>
                        <svg className={ styles.title__line__arrow } version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g transform="translate(8 6) rotate(45) translate(-5 -5)" stroke="#797979" strokeWidth="1.5">
                            <polyline points="2.306 0 9.9927 0 9.9927 7.6867"/>
                            <path d="m9.9927 0-9.9927 9.9927"/>
                            </g>
                            </g>
                        </svg>
                        <span className={ styles.title__line__word }>Réalisations</span>
                    </span>
                </h1>
            )

        case "about":
            return (
                <h1 className={ styles.title }>
                    <span className={ styles.title__line }>
                        <span ref={ firstLine } className={ styles.title__line__word }>Créateur</span>
                    </span>
                    <span ref={ lastLine } className={ `${styles.title__line} ${styles.title__line__alt}` }>
                        <svg className={ styles.title__line__arrow } version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g transform="translate(8 6) rotate(45) translate(-5 -5)" stroke="#797979" strokeWidth="1.5">
                            <polyline points="2.306 0 9.9927 0 9.9927 7.6867"/>
                            <path d="m9.9927 0-9.9927 9.9927"/>
                            </g>
                            </g>
                        </svg>
                        <span className={ styles.title__line__word }>D'expérience</span>
                    </span>
                </h1>
            )
            
    }
  
}

export default TitlePage