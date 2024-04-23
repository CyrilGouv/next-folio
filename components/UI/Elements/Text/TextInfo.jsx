import styles from "./TextInfo.module.scss"


const TextInfo = ({ body }) => {
    return (
        <div className={ styles.text__infos }>
            <p  
                className={ styles.text__infos__content }
                dangerouslySetInnerHTML={{ __html: body }}
            />
        </div>
    )
}

export default TextInfo