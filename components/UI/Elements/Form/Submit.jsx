import styles from "./Submit.module.scss"


const Submit = ({ text }) => {
    return (
        <div className={ styles.submit }>
            <button 
                type="submit" 
                className={ `${styles.submit__button} text--regular` }
            >
                <span 
                    data-name={ text }
                    className={ styles.submit__button__inner } 
                >
                    { text }
                </span>
            </button>
        </div>
    )
}

export default Submit