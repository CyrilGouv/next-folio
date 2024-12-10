"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { skillItems } from "@/data/skills"
import opacityAndTransformY from "@/animations/text/opacityAndTransformY"

import styles from "./Technos.module.scss"


const Technos = () => {

  // Elements
  const technosEl = useRef(null)

  // Animations
  useGSAP(() => {
    opacityAndTransformY(technosEl.current, technosEl.current.children, 5, 0.85, 0.5, 0.5)
  })

  return (
    <ul ref={ technosEl } className={ styles.technos }>
      { skillItems.map(({ id, name }) => (
        <li 
          key={ id } 
          className={ `${styles.technos__item} text--large` }
        >
          <span className={ styles.technos__item__name }>
            { name }
          </span>
        </li>
      )) }
    </ul>
  )
}

export default Technos