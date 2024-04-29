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
    opacityAndTransformY(technosEl.current, technosEl.current.children, 25, .125)
  })

  return (
    <ul ref={ technosEl } className={ styles.technos }>
      { skillItems.map(({ id, image, title }) => (
        <li key={ id } className={ styles.technos__item }>
          <Image
            className={ styles.technos__item__img }
            width={ 100 }
            height={ 40 }
            src={ image }
            alt={ `Services de création en utilisant ${title}` }
            title={ title }
          />
        </li>
      )) }
    </ul>
  )
}

export default Technos