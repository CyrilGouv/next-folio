import splitByWords from "@/utils/splitByWords"
import styles from "./TitleSingleProject.module.scss"


const TitleSingleProject = ({ title }) => {

    const words = splitByWords(title)

    return (
        <h1 className={ styles.title }>
            { words.map((word, idx) => (
                <span 
                    key={ `${word}-${idx}` }
                    className={ styles.title__word }
                >
                    <span 
                        className={ styles.title__word__inner }
                    >
                        { word }&nbsp;
                    </span>
                </span>
            )) }
        </h1>
    )
}

export default TitleSingleProject