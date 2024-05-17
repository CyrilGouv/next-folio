import FieldsError from "./FieldsError"
import styles from "./Inputs.module.scss"


const Inputs = ({ type, title, name, placeholder, handleValue, required = true, className = null, errorMessage = "" }) => {

    if(type !== "textarea") {
        return (
            <div className={ `${styles.inputs} ${className ? styles[className] : ""}` }>
                <h3 className={ `${styles.inputs__title} text--regular text--opacity` }>
                    { title } { required ? "*" : "" }
                </h3>
                <div className={ styles.inputs__content }>
                    { name !== "age" && (
                        <input 
                            type={ type } 
                            name={ name } 
                            placeholder={ placeholder }
                            onChange={ e =>  handleValue(e.target.value) }
                            className={ `${styles.inputs__content__input} ${className ? styles[className] : ""}` }
                        />
                    ) }
                    { name === "age" && (
                        <input 
                            type={ type } 
                            name={ name } 
                            placeholder={ placeholder }
                            onChange={ e => handleValue(e.target.value) }
                            className={ `${styles.inputs__content__input} ${className ? styles[className] : ""}` }
                            tabIndex="-1"
                            autoComplete="new-password"
                        />
                    ) }
                    { errorMessage && (
                        <FieldsError message={ errorMessage } />
                    ) }
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
                        onChange={ e =>  handleValue(e.target.value) }
                    >
                    </textarea>
                    { errorMessage && (
                        <FieldsError message={ errorMessage } />
                    ) }
                </div>
            </div>
        )
    }
}

export default Inputs