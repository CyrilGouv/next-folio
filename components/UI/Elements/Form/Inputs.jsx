import styles from "./Inputs.module.scss"


const Inputs = ({ type, title, name, placeholder, required = true }) => {
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
}

export default Inputs