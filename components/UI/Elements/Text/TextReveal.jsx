import splitByWords from "@/utils/splitByWords"

import styles from "./TextReveal.module.scss"


const TextReveal = ({ text }) => {

    const words = splitByWords(text, false)

    return (
        <span className={ styles.text__reveal }>
            { words.map((word, idx) => (
                <span
                    key={ idx }
                    className={ styles.text__reveal__outer }
                >
                    <span className={ styles.text__reveal__inner }>
                        { word }
                    </span>
                    &nbsp;
                </span>
            )) }
        </span>
    )
}

export default TextReveal