import Link from "next/link"

import styles from "./Button.module.scss"


const Button = ({ text, path, external = false }) => {

    if(!external) {
        return (
            <Link
                href={ path }
                className={ `${styles.button} text--regular` }
            >
                <span
                    className={ styles.button__text } 
                >
                    <span
                        data-name={ text }
                        className={ styles.button__text__inner } 
                    >
                        { text }
                    </span>
                </span>
            </Link>
        )
    } else {
        return (
            <a
                href={ path }
                target="_blank"
                rel="noopener noreferrer"
                className={ `${styles.button} text--regular` }
            >
                <span 
                    data-name="text"
                    className={ styles.button__text } 
                >
                    { text }
                </span>
            </a>
        )
    }
}

export default Button