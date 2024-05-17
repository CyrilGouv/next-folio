import FieldsError from "./FieldsError"

import styles from "./Selects.module.scss"


const Selects = ({ title, name, placeholder = "", handleValue, options = [], required = true, errorMessage = "" }) => {
    return (
        <div className={ styles.selects }>
            <h3 className={ `${styles.selects__title} text--regular text--opacity` }>{ title } { required ? "*" : "" }</h3>
            <div className={ styles.selects__content__inputs }>
                <select 
                    name={ name } 
                    className={ styles.selects__content__input }
                    onChange={ e =>  handleValue(e.target.value) }
                >
                    { placeholder && (
                        <option defaultValue disabled selected>{ placeholder }</option>
                    ) }

                    { options && options.map(({ value, text }) => (
                        <option key={ value } value={ value }>{ text }</option>
                    )) }
                </select>
                { errorMessage && (
                    <FieldsError message={ errorMessage } />
                ) }
            </div>
        </div>
    )
}

export default Selects