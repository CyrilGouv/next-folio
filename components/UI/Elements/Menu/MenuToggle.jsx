"use client"

import { useState } from "react"
import MenuMobile from "./MenuMobile"

import styles from "./MenuToggle.module.scss"


const MenuToggle = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={ styles.menuToggle }>
            <button 
                onClick={ () => setOpen(!open) }
                className={ styles.menuToggle__btn }
            >
                <span className={ `${styles.menuToggle__btn__inner} ${open ? "text--black" : ""}` }>
                    { open ? "Fermer" : "Menu" }
                </span>
            </button>

            <MenuMobile show={ open } />
        </div>
    )
}

export default MenuToggle