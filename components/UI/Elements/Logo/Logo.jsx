import NavLink from "next/link"

import styles from "./Logo.module.scss"


const Logo = () => {
    return (
        <NavLink href="/" className={ styles.logo }>
            <span className={ styles.logo__text }>
                <span className={ styles.logo__text__inner } data-title="Cyril">Cyril</span>
                <span className={ styles.logo__text__inner } data-title="Gouv">Gouv</span>
            </span>
        </NavLink>
    )
}

export default Logo