import styles from "./FieldsError.module.scss"


const FieldsError = ({ message }) => {
    return (
        <small 
            className={ `${styles.error} text--regular` }
        >
            { message }
        </small>
    )
}

export default FieldsError