"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { skillItems } from "@/data/skills"
import opacityAndTransformY from "@/animations/image/opacityAndTransformY"

import styles from "./Technos.module.scss"


const Technos = () => {

  // Elements
  const technosEl = useRef(null)

  // Animations
  useGSAP(() => {
    opacityAndTransformY(technosEl.current, technosEl.current.children, 50, .125)
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