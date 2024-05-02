import styles from "./Selects.module.scss"


const Selects = ({ title, name, placeholder = "", options = [], required = true }) => {
    return (
        <div className={ styles.selects }>
            <h3 className={ `${styles.selects__title} text--regular text--opacity` }>{ title } { required ? "*" : "" }</h3>
            <div className={ styles.selects__content__inputs }>
                <select name={ name } className={ styles.selects__content__input }>
                    { placeholder && (
                        <option defaultValue disabled selected>{ placeholder }</option>
                    ) }

                    { options && options.map(({ value, text }) => (
                        <option key={ value } value={ value }>{ text }</option>
                    )) }
                </select>
            </div>
        </div>
    )
}

export default Selects