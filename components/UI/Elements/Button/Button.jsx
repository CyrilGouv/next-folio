import Link from "next/link"

import styles from "./Button.module.scss"


const Button = ({ text, path, isActive = false, external = false }) => {

    if(!external) {
        return (
            <Link
                href={ path }
                className={ `${styles.button} ${isActive ? styles.button__active : ""} text--regular` }
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

                <span className={ styles.button__circle }>
                    <span className={ styles.button__circle__inner }></span>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="#F2F2F2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z" fill="inherit"></path>
                    </svg>
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