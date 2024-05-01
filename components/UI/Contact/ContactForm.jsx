import Inputs from "../Elements/Form/Inputs"
import styles from "./ContactForm.module.scss"


const ContactForm = () => {
    return (
        <div className={ styles.form }>

            <div className={ styles.form__header }>
                <h2 className={ styles.form__header__title }>
                    <span className={ styles.form__header__title__inner }>Fill the form</span>
                </h2>

                <p className={ styles.form__header__infos }>
                    <span className={ styles.form__header__infos__inner }>* Required Fields</span>
                </p>
            </div>

            <div className={ styles.form__content }>
                <Inputs 
                    type="text"
                    title="Nom"
                    name="name"
                    placeholder="Nom complet"
                />
                <Inputs 
                    type="email"
                    title="Email"
                    name="email"
                    placeholder="Adresse E-mail"
                />
                
            </div>

        </div>
    )
}

export default ContactForm