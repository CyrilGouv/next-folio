import NavLink from "next/link"
import { menuBottomItems } from "@/data/menus"

import styles from "./MenuMobile.module.scss"


const MenuMobile = ({ show }) => {
  return (
    <div className={ `${styles.menuMobile} ${show ? styles.menuMobile__isOpened : ""}` }>
        <div className="container">
            <ul className={ styles.menuMobile__list }>
                { menuBottomItems.map(item => (
                    <li
                        key={ item.id } 
                        className={ styles.menuMobile__item }
                    >
                        <span className={ styles.menuMobile__item__line }></span>

                        <NavLink
                            href={ item.path }
                            className={ styles.menuMobile__item__link }
                        >
                            <span className={ styles.menuMobile__item__link__inner }>
                                { item.name }
                            </span>
                        </NavLink>

                        { item.id === menuBottomItems.length - 1 && (
                            <span className={ styles.menuMobile__item__line__last }></span>
                        ) }
                    </li>
                )) }
            </ul>
        </div>

        <div className={ `${styles.menuMobile__bottom} text--regular` }>
            <span className={ styles.menuMobile__bottom__inner }>
                Fait avec ❤️‍🔥 à Biscarrosse
            </span>
        </div>
    </div>
  )
}

export default MenuMobile