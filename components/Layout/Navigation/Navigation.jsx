"use client"

import NavLink from "next/link"
import { usePathname } from "next/navigation"
import { menuTopItems } from "@/data/menus"

import styles from "./Navigation.module.scss"
import Button from "@/components/UI/Elements/Button/Button"


const Navigation = () => {

    const pathname = usePathname()

    return (
        <ul className={ styles.navigation }>
            <div className={ styles.navigation__wrapper }>
                { menuTopItems.map(item => (
                    <li 
                        key={ item.id }
                        className={ `${styles.navigation__item} ${pathname === item.path ? styles.navigation__item__active : ""} text--regular` }
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
                <Button
                    text="Contact"
                    path="/contact"
                    isActive={ pathname === "/contact" }
                />
            </li>
        </ul>
    )
}

export default Navigation