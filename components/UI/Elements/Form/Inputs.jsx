import styles from "./Inputs.module.scss"


const Inputs = ({ type, title, name, placeholder, required = true }) => {

    if(type !== "textarea") {
        return (
            <div className={ styles.inputs }>
                <h3 className={ `${styles.inputs__title} text--regular text--opacity` }>
                    { title } { required ? "*" : "" }
                </h3>
                <div className={ styles.inputs__content }>
                    <input 
                        type={ type } 
                        name={ name } 
                        placeholder={ placeholder }
                        className={ styles.inputs__content__input }
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className={ styles.inputs }>
                <h3 className={ `${styles.inputs__title} text--regular text--opacity` }>
                    { title } { required ? "*" : "" }
                </h3>
                <div className={ styles.inputs__content }>
                    <textarea 
                        name={ name } 
                        className={ `${styles.inputs__content__input} ${styles.inputs__content__textarea}` } 
                        placeholder={ placeholder }
                    >
                    </textarea>
                </div>
            </div>
        )
    }
}

export default Inputs