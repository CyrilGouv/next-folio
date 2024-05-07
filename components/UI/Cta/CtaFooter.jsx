import styles from "./CtaFooter.module.scss"


const CtaFooter = () => {
    return (
        <div className={ styles.cta }>

            <div className={ styles.cta__infos }>
                <p className={ `${styles.cta__infos__body } text--large` }>
                    <span className={ `${styles.cta__infos__body__title} text--regular text--opacity` }>(Travaillons ensemble)</span>
                    Vous avez un projet ou <br />souhaitez collaborer avec moi ?
                </p>

                <div className={ styles.cta__content }>
                    <a 
                        className={ styles.cta__infos__phone } 
                        href="tel:+33625496099" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span className={ styles.cta__infos__phone__inner }>
                            <span data-text="+33 6 25 49 60 99">+33 6 25 49 60 99</span>
                        </span>
                    </a>

                    <a 
                        className={ styles.cta__infos__email } 
                        href="mailto:hello@cyrilgouv.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span className={ styles.cta__infos__email__inner }>
                            <span data-text="hello@cyrilgouv.com">hello@cyrilgouv.com</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CtaFooter