"use client"

import NavLink from "next/link"
import { usePathname } from "next/navigation"
import { menuTopItems } from "@/data/menus"

import styles from "./Navigation.module.scss"


const Navigation = () => {

    const pathname = usePathname()

    return (
        <ul className={ styles.navigation }>
            <div className={ styles.navigation__wrapper }>
                { menuTopItems.map(item => (
                    <li 
                        key={ item.id }
                        className={ `${styles.navigation__item} ${pathname === item.path ? styles.navigation__item__active : ''} text--regular` }
                    >
                        <NavLink
                            href={ item.path }
                            className={ `${styles.navigation__link} link--underline` }
                        >
                            <span>{ item.name }</span>
                        </NavLink>
                    </li>
                )) }
            </div>

            <li className={ `${styles.navigation__item} text--regular` }>
                <NavLink
                    href="/contact"
                    className={ `${styles.navigation__link} ${styles.navigation__link__contact}` }
                >
                    <span 
                        className={ styles.navigation__link__contact__inner } 
                        data-name="Contact"
                    >
                        Contact
                    </span>
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation