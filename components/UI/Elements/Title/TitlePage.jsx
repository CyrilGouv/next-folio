"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import animationsTitlePage from "@/animations/title/page"

import styles from "./TitlePage.module.scss"


const TitlePage = ({ page }) => {

    const firstLine = useRef(null)
    const lastLine = useRef(null)

    useGSAP(() => {
        animationsTitlePage(firstLine.current, lastLine.current)
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
            
    }
  
}

export default TitlePage