import Link from "next/link"
import { menuBottomItems, menuGeoItems } from "@/data/menus"

import styles from "./MenuFooter.module.scss"


const MenuFooter = ({ type = "default" }) => {

    const menuItems = type === "default" ? menuBottomItems : menuGeoItems

    return (
        <ul className={ styles.menu }>
            { menuItems.map(({ id, name, path }) => (
                <li 
                    key={ id }
                    className={ styles.menu__item }
                >
                    <Link
                        href={ path }
                        className={ `${styles.menu__item__link} link--underline link--underline__dark` }
                    >
                        <span>{ name }</span>
                    </Link>
                </li>
            )) }

            { type === "default" && (
                <li className={ styles.menu__item }>
                    <Link
                        href="/legales/mentions-legales"
                        className={ `${styles.menu__item__link} link--underline link--underline__dark` }
                    >
                        <span>Mentions légales</span>
                    </Link>
                </li>
            ) }
        </ul>
    )
}

export default MenuFooter