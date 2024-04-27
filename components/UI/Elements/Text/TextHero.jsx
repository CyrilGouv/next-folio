import styles from "./TextHero.module.scss"


const TextHero = ({ text, avatar = false }) => {
    return (
        <div className={ styles.text }>
            <p className={ `${styles.text__inner} text--regular` }>
                { text }
            </p>
        </div>
    )
}

export default TextHero