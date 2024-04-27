"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import { menuBottomItems } from "@/data/menus"
import animationsMobileMenu from "@/animations/menu/mobile"

import styles from "./MenuMobile.module.scss"


const MenuMobile = ({ show, handleMenu }) => {

    // Elements
    const menuItems = useRef(null)
    const menuLastLine = useRef(null)
    const bottomText = useRef(null)

    useGSAP(() => {
        if(show) {
            animationsMobileMenu(menuItems.current.children, menuLastLine.current, bottomText.current)
        }
    }, [show])

    return (
        <div className={ `${styles.menuMobile} ${show ? styles.menuMobile__isOpened : ""}` }>
            <div className={ `${styles.menuMobile__wrapper} container`}>
                <ul 
                    ref={ menuItems }
                    className={ styles.menuMobile__list }
                >
                    { menuBottomItems.map(item => (
                        <li
                            key={ item.id } 
                            className={ styles.menuMobile__item }
                        >
                            <span className={ styles.menuMobile__item__line }></span>

                            <Link
                                href={ item.path }
                                className={ styles.menuMobile__item__link }
                                onClick={ () => handleMenu() }
                            >
                                <span className={ styles.menuMobile__item__link__inner }>
                                    { item.name }
                                </span>
                            </Link>

                            { item.id === menuBottomItems.length - 1 && (
                                <span ref={ menuLastLine } className={ styles.menuMobile__item__line__last }></span>
                            ) }
                        </li>
                    )) }
                </ul>
            </div>

            <div className={ `${styles.menuMobile__bottom} text--regular` }>
                <span 
                    ref={ bottomText }
                    className={ styles.menuMobile__bottom__inner }
                >
                    Fait avec ❤️‍🔥 à Biscarrosse
                </span>
            </div>
        </div>
    )
}

export default MenuMobile