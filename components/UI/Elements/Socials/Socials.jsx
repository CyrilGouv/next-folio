import { socialItems } from "@/data/socials"

import styles from "./Socials.module.scss"


const Socials = () => {
    return (
        <ul className={ styles.socials }>
            { socialItems.map(({ id, name, link }) => (
                <li
                    key={ id }
                    className={ styles.socials__item }
                >
                    <a 
                        href={ link }
                        target="_blank"
                        rel="noopener noreferer"
                        className={ `${styles.socials__item__link} link--underline link--underline__dark` }
                    >
                        <span className="link--underline__wrapper">
                            <span className={ styles.socials__item__link__arrow }>↵</span>
                            <span className={ styles.socials__item__link__name }>{ name }</span>
                        </span>
                    </a>
                </li>
            )) }
        </ul>
    )
}

export default Socials