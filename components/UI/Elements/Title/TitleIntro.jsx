import splitByWords from "@/utils/splitByWords"

import styles from "./TitleIntro.module.scss"


const TitleIntro = ({ text }) => {

    // Splitting text by words && letters
    const words = splitByWords(text)

    return (
        <div className={ styles.title }>
            <h2 className={ styles.title__text }>
                { words.map((word, idx) => {
                    return (
                        <span
                            key={ idx }
                            className={ styles.title__text__words }
                        >
                            { word.map((letter, idx) => (
                                <span
                                    key={ idx }
                                    className={ styles.title__text__letters }
                                >
                                    { letter }
                                </span>
                            )) }
                            &nbsp;
                        </span>
                    )
                }) }
            </h2>
        </div>
    )
}

export default TitleIntro